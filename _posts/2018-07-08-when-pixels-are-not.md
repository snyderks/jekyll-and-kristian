---
layout: post
title:  "When 16px Isn't 16px"
date:   2018-05-11 00:00:00 -0400
author: "Kristian Snyder"
categories: post
description: Yet another gotcha when developing for the web
---

I'll make this one short. Sometimes, I'll view a website I'm working on locally, and all appears well. Next, I commit and the fonts are wrong—they're too big. Instead of going through checking CSS styles, cascading, inheritance, and the universal selector (`*`), next time I'll follow the genius of [this commenter on Stack Overflow](https://stackoverflow.com/a/29859232) and *make sure my zoom level is correct.* I feel pretty foolish right now.
