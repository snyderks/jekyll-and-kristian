---
layout: post
title:  "Weighted Random Array Selection in Go"
date:   2017-08-10 00:00:00 -0400
author: "Kristian Snyder"
categories: post
---

Random array selection is easy: in Go, create a slice, figure out its length, generate a random integer from `0` up to `length - 1`, and retrieve the item. 

*Weighted* selection, while not being as easy or common, is still often necessary. In Go, I've found success accomplishing this with a CDF.

Let's say that we like [mechanical keyboards](https://www.reddit.com/r/MechanicalKeyboards/). So much, in fact, that we can't decide which one to [buy next](https://i.redd.it/2zq0ysl6o9xy.jpg). Let's put a few options together and create a [slice](https://gobyexample.com/slices):

```golang
keebs := []string{"Ducky Shine", "IBM Model M", "CM Storm Quickfire", "Pok3r", "WASD v2"}
```
(**Note:** I'm intentionally omitting basic parts of Go programs such as a package declaration and a main function. The bottom of this post contains the complete final state that you can compile and run.)

Next, we decide that there's some preference for some boards over others. Adding a 1-10 scale gives us this:

```golang
// keyboard is a mechanical keyboard's name
// and the relative desire (1-10) for it.
type keyboard struct {
    name string
    weight int
}

// Adding a named type to this array so we can
// implement sorting on it later
type keyboards []keyboard

weightedKeebs := []keyboard{
    keyboard{"Ducky Shine", 5},
    keyboard{"IBM Model M", 10},
    keyboard{"CM Storm Quickfire", 3},
    keyboard{"Pok3r", 7},
    keyboard{"WASD v2", 4}}
```

Now we build the CDF. This can be done with the array we have, if we don't need to preserve the individual ratings. (I'll give a way to preserve them with a second array in a bit.)

```golang

// Sort interface implementation
// sort.Sort will sort by weight ascending
func (s keyboards) Len() int {
    return len(s)
}

// Less is the way to tell sort.Sort what you
// want to sort by. Here it will be weight.
func (s keyboards) Less(i, j int) bool {
    return s[i].weight < s[j].weight
}

func (s keyboards) Swap(i, j int) {
    temp := s[i]
    s[i] = s[j]
    s[j] = temp
}

// Sort the array ascending.
// *Don't forget to import sort!*
sort.Sort(weightedKeebs)
```

Printed result:

```
Sorted by weight: [{CM Storm Quickfire 3} {WASD v2 4} {Ducky Shine 5} {Pok3r 7} {IBM Model M 10}]
```

And finally, what makes this a CDF is accumulating the weights, taking the previous item's weight and stacking it on top until the final item will have the sum of all the weights in the array. This can be done with a simple for loop.

```golang
// Using a manual for loop instead of range because
// we need to start at the second item.
for i := 1; i < len(weightedKeebs); i++ {
    weightedKeebs[i].weight += weightedKeebs[i-1].weight
}
```

Printed result:

```
With cumulative weights: [{CM Storm Quickfire 3} {WASD v2 7} {Ducky Shine 12} {Pok3r 19} {IBM Model M 29}]
```

There, now we have a CDF to use. Not much use without a way to randomly select items, though.

## Building the binary search

To select a value, randomly generate a number from `1` to, the greatest cumulative weight, which is `29`[^3].
Next, perform a [binary search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search) on the array. If you end up between two items, the *right* item is the result. Let's put the random selector in a function of its own, so it can be called more easily later.

```golang
func searchCDF(cdf keyboards, r *rand.Rand) keyboard {
}
```

First, get the random number from the generator `*rand.Rand` passed in to the function.

```golang
// Picking a random number in the range [1, max weight + 1)
num := r.Intn(cdf[len(cdf)-1].weight) + 1
```

The bounds of the binary search will start at the left and rightmost items of the array:

```golang
right := len(cdf) - 1
left := 0
```

And we'll want to continue our search until we find the item for the random number, at which point it will be returned and the function will exit:

```golang
for {
    // search and eventually return
}
```

Putting all this together, the basic structure becomes this:

```golang
func searchCDF(cdf keyboards, r *rand.Rand) keyboard {
    // Picking a random number in the range [1, max weight + 1)
    num := r.Intn(cdf[len(cdf)-1].weight) + 1

    right := len(cdf) - 1
    left := 0

    for {
    // search and eventually return
    }
}
```

Within the loop, we will check the item in the middle of the bounds:

```golang
m := (left + right) / 2 // m stands for middle
valm := cdf[m].weight
```

At this point, there are three basic possibilities:

1. The weight of the middle item is the same as the random number. Return the middle item in this case.
2. The weight is more than the number
3. The weight is less than the number

```golang
for {
    m := (left + right) / 2 // m stands for middle
    valm := cdf[m].weight

    if valm == num {
            // Middle item is same as number
            return cdf[m]
        } else if valm < num {
            // Middle item is less than number

            // ... //
        } else {
            // Middle item is more than number
             
            // ... //
        }
}
```

If the item doesn't have the same weight as the number we picked and...

...the item is less than the number:

* If at the end, we have to return the "middle" item.
* If the item just to the right is more, we pick that one.
* Otherwise, bring the *left* bound to the index of the middle item.

...the item is more than the number:

* If at the beginning *or* if the one to the left is less, we pick that one.
* Otherwise, bring the *right* bound to the index of the middle item.

Adding this in to the loop, we're done!

```golang
func searchCDF(cdf keyboards, r *rand.Rand) keyboard {
    // Picking a random number in the range [1, max weight + 1)
    num := r.Intn(cdf[len(cdf)-1].weight) + 1

    right := len(cdf) - 1
    left := 0	
    for {
        // check the middle of the bounds
        m := (left + right) / 2 // m stands for middle
        valm := cdf[m].weight

        if valm == num {
            // Middle item is same as number
            return cdf[m]
        } else if valm < num {
            // Middle item is less than number

            if m == len(cdf)-1 {
                // only option is rightmost item
                return cdf[m]
            } else if cdf[m+1].weight > num {
                // return the right item when
                // the search is finished
                // and left between two items.
                return cdf[m+1]
            }
            // bring left bound to the middle
            left = m + 1
        } else {
            // Middle item is more than number

            if m == 0 || cdf[m-1].weight <= num {
                // Can't move left, so return the middle.
                return cdf[m]
            }
            // bring right bound to the middle
            right = m - 1
            }
        }
    }

    // If something went wrong
    return keyboard{}
}
```

If you would like to see the final working program (just copy-paste into its own folder and call it `main.go`), it is below.

Hope this helped with implementing random array search in what you're working on!

---
```golang
package main

import (
    "fmt"
    "math/rand"
    "sort"
    "time"
)

// keyboard is a mechanical keyboard's name
// and the relative desire (1-10) for it.
type keyboard struct {
    name   string
    weight int
}

type keyboards []keyboard

// Sort interface implementation
// sort.Sort will sort by weight ascending
func (s keyboards) Len() int {
    return len(s)
}

func (s keyboards) Less(i, j int) bool {
    return s[i].weight < s[j].weight
}

func (s keyboards) Swap(i, j int) {
    temp := s[i]
    s[i] = s[j]
    s[j] = temp
}

func searchCDF(cdf keyboards, r *rand.Rand) keyboard {
    // Picking a random number in the range [1, max weight + 1)
    num := r.Intn(cdf[len(cdf)-1].weight) + 1

    // Binary search! Look for the number generated.
    // Right and left are the bounds for the binary search
    right := len(cdf) - 1
    left := 0

    for {
        // check the middle of the bounds
        m := (left + right) / 2 // m stands for middle
        valm := cdf[m].weight

        if valm == num { // exact match
            return cdf[m]
        } else if valm < num {
            // Middle item is less than number

            if m == len(cdf)-1 {
                // only option is rightmost item
                return cdf[m]
            } else if cdf[m+1].weight > num {
                // return the right item when
                // the search is finished
                // and left between two items.
                return cdf[m+1]
            }
            // bring left bound to the middle
            left = m + 1
        } else {
            // Middle item is more than number

            if m == 0 || cdf[m-1].weight <= num {
                // Can't move left, so return the middle.
                return cdf[m]
            }
            // bring right bound to the middle
            right = m - 1
        }
    }
}

func main() {
    // Initialize random number generator
    r := rand.New(rand.NewSource(time.Now().UnixNano()))

    // Basic list of keyboards
    keebs := []string{"Ducky Shine", "IBM Model M", "CM Storm Quickfire", "Pok3r", "WASD v2"}
    fmt.Print("Basic keyboard names: ", keebs, "\n\n")

    // Keyboards with weighted preferences
    weightedKeebs := keyboards{
        keyboard{"Ducky Shine", 5},
        keyboard{"IBM Model M", 10},
        keyboard{"CM Storm Quickfire", 3},
        keyboard{"Pok3r", 7},
        keyboard{"WASD v2", 4}}
    fmt.Print("Keyboards with weights: ", weightedKeebs, "\n\n")

    // Sort by weight ascending
    sort.Sort(weightedKeebs)
    fmt.Print("Sorted by weight: ", weightedKeebs, "\n\n")

    for i := 1; i < len(weightedKeebs); i++ {
        weightedKeebs[i].weight += weightedKeebs[i-1].weight
    }
    fmt.Print("With cumulative weights: ", weightedKeebs, "\n\n")

    fmt.Print("Selected ", searchCDF(weightedKeebs, r).name, "\n\n")
}
```




[^1]: [Video by Khan Academy summarizing what a random variable is](https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library/random-variables-discrete/v/random-variables)
[^2]: Generated by [Desmos Graphing Calculator](https://www.desmos.com/calculator) with the following function: `y\ =\ \left\{x\ <\ 0:\ 0,\ x\ <\ 1:\ 0.5,\ x\ \ge 1:\ 1\right\}` (displays as `y = { x < 0: 0, x < 1: 0.5>, x >= 1: 1}`)
[^3]: The range can also be notated as `[1, 29]`.