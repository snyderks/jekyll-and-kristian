---
layout: post
title:  "No Such Database and Windows Access Permissions"
date:   2017-11-15 00:00:00 -0400
author: "Kristian Snyder"
categories: post
description: Fixing "no such database" in VS SQL Obj Explorer
---

For my current (as of this post) position as a C#/.NET developer intern, I frequently replicate development databases to my local system through the Data Comparison tool in Visual Studio. One day, however, I got an interesting error when attempting to migrate data:

```
Internal error: Ese could not be initialized; No such database;
```

What do you mean, no such database? I can see the database *right there! (Points at database on screen)*

I scrounged the Google, as you do, with that error and came up with increasingly voodoo-like solutions from people that were in entirely different situations. Eventually, I did find [one other post](http://dev.emptywolf.com/2014/10/dbmdl-could-not-be-created-internal.html) that had the same issue, with the solution as the single comment.

## The Solution

If you came here from a Google search, panicked and looking for a fix:

Change your `TEMP` and `TMP` environment variables to point to another folder, such as `%USERPROFILE%\AppData\Local\Temp` or any folder you drop somewhere on your system that has full access permissions.

The clever among you might say, "Wait, but that points to the same place I had it set to already!" And *you'd be right.* Most people have `TEMP/TMP` set to `%USERPROFILE%\Local Settings\Temp`, which contains the exact same data, but is a protected path in Windows. This is done through a symlink, resulting in both paths pointing to identical data on disk but with different permissions. The first provides full access to the [ESE (Extensible Storage Engine)](https://msdn.microsoft.com/en-us/library/gg269259.aspx) that handles SQL Server database files.

It's quite the error, since one path to the *same folder* results in an error and the other doesn't. Hopefully this helped; I wanted to get this solution out in more places since I've only found this specific solution in [one other place.](http://dev.emptywolf.com/2014/10/dbmdl-could-not-be-created-internal.html)
