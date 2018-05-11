---
layout: post
title:  "Don't Mix the Filters"
date:   2018-05-11 00:00:00 -0400
author: "Kristian Snyder"
categories: post
description: Why you should keep pagination and filtering on the same side of the server, unless you want to have a bad time.
---

*This is mostly a future note to myself, in case I am so foolish as to think this would be a good idea again. Maybe you'll find it useful too.*

When building a webpage that allows searching, there's typically two ways to handle the results:

1. Get *all* the results and create pages dynamically in the client
2. Get one page of the results but have the server tell you how many pages there are

Clicking on another page then, either:

1. Swaps out the current page for another, using results already in the browser
2. Requests that page of the search from the server

Now imagine you'd like to have the user *filter those results.* If you've got everything in the client, you can just run those filters in the browser and re-paginate. Quick and easy.

If, however, you picked option 2 above and filter in the client, congratulations! *You're screwed.* You can only filter the current page, so if nothing matches the filter the page is empty.

But wait, you say: what about those other pages the server told me it had? You don't have those.[^1] You'd have to ask for them. No problem, you say. I'll just go and ask for another page of the original results and run the filters on those too. 🤦‍♀️ Wait, but now the page numbers are wrong. No problem, just remove one of them. Hmm...there's only 5 results after the filters though, and we can display up to 30. I'll go get another page. Good, this one has 20 after the filters. One more...and great! This one has...7. That's 32 in total. No problem, I don't need the extras.[^2] Now, those page numbers...okay, so I got another page and I need to get rid of it again, but I have to make sure I know what those pages *originally* were, so when they click on page 4 I know they actually need page 6 from the server...

**No. What are you doing? You've just spent an hour writing JS spaghetti that will break the moment you change anything.**

But, I just wanted to filter...

**Don't mix client-side filtering with server-side pagination. That doesn't even** sound **smart.**

---

### The lesson:

Let the server handle the filtering if it's already paginating the results. It's probably faster than your user's browser anyway and you don't end up drowning in spaghetti.

[^1]: If you're thinking ahead, you probably know where this is going.
[^2]: 🤦‍♀️🤦‍♀️🤦‍♀️🤦‍♀️