---
layout: post
title: "Format the Drive Or: But It Went Bleep Bloop!"
author: "Kristian Snyder"
date: 2019-02-05 10:15:00 AM -0400
categories: post
description: What to do when you put in a drive and it goes bloop but you can't see it
---

This is here because I think it's happened at least 5 times and I forget what to do **every single time** because it's been just long enough for me to forget. 

## For Windows (10)

Let's say you bought a flash drive or, in my case, a SATA SSD. You plug it in to your Windows machine and it goes *bleep bloop.* You know the sound. However, it doesn't show up in Explorer. Now, *if it shows up in Device Manager* (please check that first), it's almost certainly completely unformatted. This is more common with SATA drives. Go to Disk Management (shows up as `Create and format hard disk partitions` in Windows 10 when you search for it), find the drive, right click, and select Add a Volume. Congratulations, it works now!

## For macOS

For some reason, this always happens to me on Windows, but for macOS: just go to Disk Utility, select the disk, and format it, probably with HFS+ or APFS if Apple allows it now on external disks.

In conclusion, no it's not broken. Yes, it went *bleep bloop.* Just format it!
