---
title: 'Advent of Cyber 2024 - Day 6'
author: 'Stefenmarg'
layout: 'Layouts/Post'
date: "2024-12-06"
---

<img class="img-fluid" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/63588b5ef586912c7d03c4f0/room-content/63588b5ef586912c7d03c4f0-1730728443161.png">

### Topic Covered: Sandboxes

There are malware out there that are able to run only on real machines and I've never relly wondered on how that was done; until today where the challenge showcased some code snippetes in C that was able to recognise wether a machine was a VM or not simply based on some registry keys.

Additionally, new tools were used today! First was Yara an EDR system that can identify and classify malware based on custom rules that helps detect malicious code; and  then there is FLOSS that is a tool that extracts obfiscated strings from malware binaries with similar functionality to the strings command that can be found on unix systems.

For the first task all you need to do is while running Yara, run at the same time that malware 'MerryChristmas.exe' and after that you'll be getting a popup with the 1st flag's content.

For the second task you will need to simply provide to floss.exe the above mentioned malware file and then find the hidden flag while searching in the output of the program.

Today's challenge as a bit easy but that means tomorrow's is gonna be very fun!