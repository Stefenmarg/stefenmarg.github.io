---
title: 'Advent of Cyber 2024 - Day 1'
author: 'Stefenmarg'
layout: 'Layouts/Post'
date: "2024-12-01"
---

<img class="img-fluid" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/5fc2847e1bbebc03aa89fbf2/room-content/5fc2847e1bbebc03aa89fbf2-1730193392309.svg">

### Topic Covered: Operational Security (OPSEC)

Okay, I didn't like the MP3 download site before the challenge but now i hate them more!

The challenge started with starting the machine and going to a site that was hosted on it that was a youtube to MP3 converter. Then uppon going to the site (and [getting rickrolled live](https://youtube.com/watch?v=dQw4w9WgXcQ)) in the instructions, we were instructed to submit the link and download a .zip file!

After the download finished and unzipping the archive was done we were instructed to use the `file` command to get the data off the files that we had just unzipped:

```bash
file ./song.mp3 #Returned usual song file data.
file ./somg.mp3 #Returned info for .lnk file.
```

Wouldn't you know it, `somg.mp3` was a malicious file after all, it launched a powershell, downloaded a crypto stealer script, executed it hidden to the user and simply then uploaded the stolen data to a C2 bucket.

Exciting HUH?

Then all we had to do was trace down the file to an issues thread in github based on the link in the script that downloaded the payload and boom we caught MayorMalware red handed!

Uppon submission of all the data gathered and the amount of commits that were in the initial repository, you were able to complete Day 1!

Very excited for Day 2!