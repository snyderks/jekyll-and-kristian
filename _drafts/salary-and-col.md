---
layout: post
title: "Thoughts About Salary"
author: "Kristian Snyder"
categories: post
description: Thinking about real salary
draft: true
---

As I near the end of my degree (May 2020, here we come!), I've been thinking a lot
about salary. **A lot.** There's lots of salary websites like
[levels.fyi](https://www.levels.fyi/), which provides typical packages for FAANGs
and friends, the [Stack Overflow Salary Calculator](https://stackoverflow.com/jobs/salary)
that gives you an estimate for, theoretically, anywhere in the country (although your
results may vary depending on how small your city/town is), and, of course,
[Glassdoor](https://www.glassdoor.com/index.htm). I dislike all of these services
for different reasons, but that's for another time.

However, they all definitely do their job: provide you a number for what salary range
you can expect, given a job title and location. (Levels even gives you stock and bonus
ranges!) This is great, because it doesn't hide anything from you.

## The Issue

The problem, as you might expect, is that it is just a number. As I'm sure you're aware,
money doesn't go as far in NYC or San Francisco as it does in Missoula or Cincinnati.
Therefore, that salary needs to be *adjusted* based on the local situation and **cost of
living.**

But cost of living isn't enough. Those adjustments help track the price of things you pay
for, like gasoline, housing, food, clothing, and other items. But it doesn't cover:

* Property tax
* State income tax
* Local sales tax (Chicago's is [10.25%!](https://www.avalara.com/taxrates/en/state-rates/illinois/cities/chicago/))
* Local income tax (this is mostly an Ohio thing. Lots of cities have a 1-2% income tax.)

Here's some comparisons between Cincinnati and San Francisco (because I live in
Cincinnati and San Francisco just because):

All numbers assume the median home price in each city[^1] [^2] (except I chose Oakland to give
SF a fighting chance) and a salary of $80K in Cincinnati, on the high end for a software
engineer, reasons for which should be obvious soon.

Cost of living adjustment estimates that an equivalent salary to $80,000 in Cincinnati
is $159,755.38 in San Francisco.[^3]

Expense percentages based on income are based on the 
[Credit Counseling Society's Guidelines](https://www.nomoredebts.org/budgeting-guidelines),
which places estimated taxable expense categories at ~50% of take-home income. However, since
most of your income is going to housing in SF, I've adjusted the numbers based on the
other categories:

* Groceries: +37% in SF
* Transportation: +33%
* Other Goods and Services: +25%

| Category                        | Cincinnati                                                                      | San Francisco                                                                            | % Change            |
|---------------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|---------------------|
| Home Price                      | $142,400                                                                        | $739,800                                                                                 | 519%                |
| Income                          | $80,000                                                                         | $159,755.38                                                                              | 200%                |
| Property Tax Rate [^6]          | 1.774%                                                                          | 0.683%                                                                                   | -1.091 basis points |
| **Property Tax** [^5]           | **$2,526**                                                                      | **$5,053**                                                                               | **200%**            |
| Federal Income Tax [^7]         | 13.62%, $10,900                                                                 | 18.62%, $29,751                                                                          |                     |
| FICA                            | 7.65%, $6,120                                                                   | 6.43%, $10,277                                                                           |                     |
| State Income Tax                | 2.61%, $2,091                                                                   | 7.32%, $11,701                                                                           |                     |
| Local Income Tax                | 2.19%, $1,753                                                                   | 0%[^8]                                                                                   | -100%               |
| **Take-Home Pay**               | **$59,137**                                                                     | **$108,026**                                                                             | **182%**            |
| Groceries                       | $8,870                                                                          | $12,152                                                                                  | 137%                |
| Transportation                  | $10,348                                                                         | $13,764                                                                                  | 133%                |
| Other                           | $8,870                                                                          | $11,087                                                                                  | 125%                |
| **Sales Taxable Expenses[^4]**  | **$28,088**                                                                     | **$37,003**                                                                              | **132%**            |
| Sales Tax Rate                  | [6.5%](https://www.avalara.com/taxrates/en/state-rates/ohio/cities/cincinnati/) | [8.5%](https://www.avalara.com/taxrates/en/state-rates/california/cities/san-francisco/) | 2 basis points      |
| **Sales Tax**                   | **$1,826**                                                                      | **$3,145**                                                                               | **172%**            |

## The Extra

So, you pay an extra $2,500 in property tax, $1,300 in sales tax, and $8,200 in state income tax.

To make up for this, you'll need to make **at least $12,000** more on top of the cost
of living adjustment. This underestimates the actual amount, since you'll be paying
your marginal rate on any additional income that comes in and so the number is probably
more like **$14,000.**

Therefore, to make the equivalent of $80K in Cincinnati, you will need to bring in over
**$172,000 a year**. Let's think about how you'll get this.

## Raking It In

Not many places offer [restricted stock units](https://www.investopedia.com/terms/r/restricted-stock-unit.asp)
in Cincinnati, so that $80K is probably coming in entirely as salary. We're done there.

San Francisco is a different story. One look at [levels.fyi](https://www.levels.fyi)
and you'll see that a significant portion of compensation is stock (I'm ignoring
signing bonuses here because you should **never** consider them income).

However, RSUs (which is what your stock will come in as) have two problems:

1. They take some time to vest (usually 4 years).
2. They are taxed as ordinary income when they vest.
3. They are taxed **again** when you sell the shares.

If you sell them after 1 year, you pay capital gains taxes (usually 15%) but,
since we're trying to hit $172K a year, we're selling them immediately
so they will be taxed at *ordinary income rates.* Therefore, we have to
treat them as income we get after that first taxation.

In California, since we're in the $52K-$268K bracket, we lose 9.3%. The 
federal rate is 24% in the $82K-$157K bracket and 32% in the $157-$200K 
bracket, so we'll lose about 26-27% of it, which is about 35.3%.

Therefore, even before you can get your stock value, you get a haircut
of **35%** in California.

## Where You Go

So, we've got our parameters. We need to make **$172K** in San Francisco with
**65%** of the listed stock value. There are entry level SWE positions in
Cincinnati that will pay $80K, especially for well-qualified people that can
get into the FAANGs. What do they pay?

As of January 28, Levels estimates that (with the 35% haircut) you'll get:

* Amazon SDE I: $117K salary + $9.1K stock = $126.1K
* Facebook E3: $113K salary + $25.5K stock = $138.5K [^9]
* Apple ICT2: $121K salary + $19.8K stock = $140.8K
* Yelp IC1: $125K salary + $19.5K stock = $144.5K [^10]
* Google L3: $124K salary + $28.3K stock = $152.3K
* LinkedIn SWE: $137K salary + $33.6K stock = $170.6K [^11]

It's notable that all of them are about the same value. Obviously, the 
transparency has helped quite a bit here to get all of these companies
to be competitive.

However, we don't even come close with adjustment to the stock price.
Almost all of these companies actually come quite close to our $172K
goal when you eliminate the haircut but only LinkedIn comes within $5K
and still doesn't hit our desired number.

## The Long-Term

While none hit our goal with their new grad position, most hit it no problem
with their second tier; Google offers a $150K salary and $56.2K stock
package, coming to $206.2K total with their L4 (second tier) position. 
However, most of these second-tier positions come after 3-5+ years of
experience, which means you're down $60K if you went to Google before
you get promoted.

Obviously, your ceiling is higher in SF. A Google L6 brings home $339.7K
with 10-15 years experience while someone in Cincinnati is probably only
getting $150K[^12] after 15 years and that might be optimistic. But even
though your ceiling is higher, so much of that still goes away to housing,
groceries, taxes, and everything else that it's not the massive life
upgrade most seem to think it is. Case in point: CNN Money estimates $150K
in Cincinnati is $313K in SF.

## Counterpoints

There's many counterpoints that I want to tackle now.

*But I'll just live in a small apartment or get roommates.*  
Sure, you can do that. But remember, you're lowering your quality of life
and so it's not an honest comparison. The other salary needs a proportional
decrease.

*I won't need a car, so that'll save me a ton of money.*  
Unless you have the Google shuttle take you to work, you'll be spending
a fair bit on public transport/ride sharing each day. If you want
to travel, you'll either be flying or you'll need a car anyway, so
the savings are probably far lower than expected.

*I'll make it up in the long run.*  
Eventually, yes. But remember, you're down the equivalent of $20K per year
until your first promotion at year 3 or 5 and those years matter quite
a bit when considering long-term investment growth.

*The connections are worth it.*  
Sure, almost certainly. Having a FAANG on your resume is a huge help
and will boost your throughout your career. However, we aren't valuing
connections here.

*I could save far more overall in SF than anywhere else, though.*  
**This is the only argument I think is valid.** With good management,
your savings and investments will probably be far larger by retirement age.
And yet, to make use of this money you must **move away from San Francisco.**
Absolute value of investments means nothing if you never leave, so keep
that in mind.

## Conclusion

If you're thinking you'd like to live in San Francisco and persue a career
there, great! There's nowhere else with as much opportunity for software
engineers in the world.

However, be honest with yourself. If you move there, you will *almost certainly
incur a lower quality of life when you start out.* Additionally, owning
a home can be almost impossible and absolute value of investments matters
not if expenses are always high.

Finding a comparable salary to $80K in Cincinnati (hardly a software mecca) is
almost impossible for a new grad and you're competing against 100x the
people there. If you want to be at the center of the tech world, however,
what option do you have?

[^1]: [https://www.zillow.com/oakland-ca/home-values/](https://www.zillow.com/oakland-ca/home-values/)

[^2]: [https://www.zillow.com/cincinnati-oh/home-values/](https://www.zillow.com/cincinnati-oh/home-values/)

[^3]: 
	COLA sourced from [Bankrate](https://www.bankrate.com/calculators/savings/moving-cost-of-living-calculator.aspx), which gave 
	`$155,247.52`, [CNN Money](https://money.cnn.com/calculator/pf/cost-of-living/), which said `$166,934`, 
	[NerdWallet](https://www.nerdwallet.com/cost-of-living-calculator/compare/cincinnati-oh-vs-san-francisco-ca), which said `$160,840`,
	and [PayScale](https://www.payscale.com/cost-of-living-calculator/California-San-Francisco/Ohio-Cincinnati), calculating it as `$156,000`. 
	Resulting average is `$159,755.38`.

[^4]: Groceries typically do not have sales tax applied.

[^5]: Calculated using [SmartAsset's Property Tax Calculator](https://smartasset.com/taxes/property-taxes)

[^6]: Before any cries of Prop 13, property tax on home purchases results in a reassessment when sold.

[^7]: 
	Calculated using SmartAsset's [Ohio](https://smartasset.com/taxes/ohio-tax-calculator) 
	and [California](https://smartasset.com/taxes/ohio-tax-calculator) tax calculators. 

[^8]: 
	SF currently has a combination of a ~0.3% payroll tax and a gross
	receipts tax. While I could add this in as money you could have, it's
	in enough flux that I've declined to add it in.

[^9]: 
	Facebook is notorious for paying far higher in total comp, but Levels has them
	coming in about even for new grad. Could be due to any number of things,
	but we'll accept it for now.

[^10]: Looks like Yelp is competitive with FAANG for new grad.

[^11]: 
	This is their baseline but *many* new hires have existing experience.
	It's not Netflix's senior SWE tier, but definitely one notch above.

[^12]: 
	When examining StackOverflow's salary calculator, all of the above salaries
	came in above the 75th percentile for SF new grads. It's not too much a stretch to
	place us just above that for 15 years experience, I think.
