---
title: 'Advent of Cyber 2024 - Day 10'
author: 'Stefenmarg'
layout: 'Layouts/Post'
date: "2024-12-10"
---

<img class="img-fluid" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/5f04259cf9bf5b57aed2c476/room-content/5f04259cf9bf5b57aed2c476-1731376026704.svg">

### Topic Covered Day 10: Phishing

<div class="center">
<img alt="A snippet of an email sent as a phishing attempt on Day 10's challenge" src="{{baseurl}}/assets/Screenshots/Screenshot_email_phishing.png">
</div>

Marta is going to lose her job if she keeps opening malicious documents. Leaving Marta's need to find a new job aside, today was one of the best days of Advent of Cyber 2024. Not only we generated a malicious macro in a word file, embedded it into the file's comments, read the comment, decrypted it and run it but we also got to do some  socal engeneering.

All of the above were done with the command line tool `msfconsole` by [Metasploit](https://www.metasploit.com/); Kudos to them for supporting i386 linux systems!

For finding the flag.txt for Task 1 on the attack machine, we opened the terminal and typed the commands provided by the THM behind this day's challenge as to create the malicious file. Then on the same terminal (optionally) we would start with `msfconsole` a listenning service at port 8888 for the reverse shell created by the malicious word file.

When navigating at the ip of the VM (Not the attack box) we would be greeted with a portal for an email service for which we were given credentials to log into by the one and only M.M. After the successfull login we were to email our poor Marta with with the malicious file renamed to either reciept or invoice. 

After about a minute max, we would be getting back a reply from Marta with the flag!

I really really hope they dont read the emails sent by the users cause youch. Can wait for Day 11!