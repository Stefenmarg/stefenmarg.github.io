---
title: 'Advent of Cyber 2024 - Day 13'
author: 'Stefenmarg'
layout: 'Layouts/Post'
date: "2024-12-13"
---

<img class="img-fluid" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/5fc2847e1bbebc03aa89fbf2/room-content/5fc2847e1bbebc03aa89fbf2-1731326932593.png">

### Topic Covered Day 13: Web Sockets

Another Day Another Burp Suite Project! 
(Sorry for this post being late, I've burned my ssd accidentally.)

Day 13's challenge was about WebSockets and their vulnerabilities!
After a brief introduction on WebSockets and their potential uses on things like chat apps, live data feeds and real time games; we were also given examples of their potential vulnerabilities that have to do with Authentication, Tampering the conents and their use on DoS attacks. The two first options are what we are going to use for the tasks.

After starting the machine and after logging into the attackBox we had to go to the ip of the machine to see todays' playground. The tools that we would need for today were Burp Suit and the FoxyProxy extension on the browser. 

We will need to intercept the proxy WebSocket traffic with the proxy tools of Burp Suite and then we would send it having modified the userID of the track post packet with the one of the mayor's car that would look like this (ID is of the glitch not the mayor):
```json
42["track", {"userId": "8"}]
```
On successfull tracking the mayor would post on the chat on the right about his car being tacked and then the flag.

For the second flag we would need to manipulate a message sent by a user with a diffrent id.

It was a bit confusing to try and forward the "packets" but in the end i did end up finding the flags so no harm done. See you for Day 14.