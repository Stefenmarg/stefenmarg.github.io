---
title: 'Advent of Cyber 2024 - Day 2'
author: 'Stefenmarg'
layout: 'Layouts/Post'
date: "2024-12-02"
---

<img class="img-fluid" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/5dbea226085ab6182a2ee0f7/room-content/5dbea226085ab6182a2ee0f7-1730369227263.png">

### Topic Covered: Log Analysis

This Challenge we were given access to a platform with A LOT of logs, our jobs were filter and harvest information from those logs.

First thing that struck the eye was the strange powershell code that was run on some machines and one of the things that alerted me was this: 
```bash
"SQBuAHMAdABhAGwAbAAtAFcAaQBuAGQAbwB3AHMAVQBwAGQAYQB0AGUAIAAtAEEAYwBjAGUAcAB0AEEAbABsACAALQBBAHUAdABvAFIAZQBiAG8AbwB0AA=="
```
What this is can be found very easily. One of the things that you learn when watching videos online about infostealers is to recognise (and always assume) Base64, and wouldn't you know it decoding it gives us:

```bash
echo "SQBuAHMAdABhAGwAbAAtAFcAaQBuAGQAbwB3AHMAVQBwAGQAYQB0AGUAIAAtAEEAYwBjAGUAcAB0AEEAbABsACAALQBBAHUAdABvAFIAZQBiAG8AbwB0AA==" | base64 -d 
Install-WindowsUpdate -AcceptAll -AutoReboot
```

Not what I expected but Task 5 is one (prematurely but done)!

Now resuming to the platform and setting up the recomended filters you are able to see who is causing the authentication failures.

Updating the filter you are also available to see when the ADM-01 account logged in first time and the ip address of the log in thus Tasks 3 & 4 are done!

Now, broadening the check period for the request and adding the autherntication plus the failed filters you are able to see the total failed login attemps and if you sort the list in such a way you will be able to find what user.name was causing the most failed login attempts; thus Tasks 1 & 2 are done!

These were the steps followed to complete Day 2 of AoC (~~Even though it took me about a 1:15 hrs to complete it myself but on my defense i am using a notebook~~). 

Can't wait for the challenge of Day 3!!