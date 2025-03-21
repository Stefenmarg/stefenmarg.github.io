---
title: 'Advent of Cyber 2024 - Day 12'
author: 'Stefenmarg'
layout: 'Layouts/Post'
date: "2024-12-12"
---

<img class="img-fluid" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/62a7685ca6e7ce005d3f3afe/room-content/62a7685ca6e7ce005d3f3afe-1730353204089.png">

### Topic Covered Day 12: Web Timing Attacks

What was covered today was pretty similar to Day 5's challenge since we were using again Burp Suite to capture a POST request and repeat a bunch of them (10 of them to be exact) in order to move monry from a bank account in Glitch's name in order to get the flag.

Our main learning topic was about HTTPS/2, how it was an update for the HTTP/1 protocol, it's slow but steardy adoption and that if it were to be implemented incorrectly some of it's features could be exploited by a mlicious party.

After a brief intoduction to the web timing attack for HTTP/2 that we were gonna use (due to the `SINGLE-PACKET MULTI-REQUEST` feature that has made it difficult to patch web timining ussues that can be introduced), we were shown how to start another default project in the Burp Suite.

Given our credentials, our first task was to try to explore the attack on our bank account with the interception feature that the Burp Suite has. After logging in to our account and turning on the interception, we would try to send some amount of money to the Glitch's bank account `with code 101` and then send the POST request to the repeater, making another 9 copies of the requests, adding them to a group and finally sending them all while using the `Send in parallel (last-byte sybc)` option. 

To get the flag all we now have to do is: 
* Log out of our account,
* Log in to the Glitch's account,
* Capture the transaction packet,
* Send it as many times as we need to transfer over 2000$,
* Refresh the site,
* AND finally get the flag!