---
title: 'Advent of Code 2024 By TryHackMe'
author: 'Stefenmarg'
layout: 'layouts/base.njk'
date: "2024-12-01"
---

## Advent of Cyber '24

[Advent of Cyber](https://tryhackme.com/r/room/adventofcyber2024) is a christmas event organised by the TryHackMe team that releases every day at `6PM GMT(UTC+0)` a new and exciting challenge until `December 31st`!  

Since I had an account there I thought it would be a great change to dive into the Cybersecurity part of the internet for a taste since so far I have only done programming and electronics. Plus uppon 100% completion I'll be getting a badge AND a certificate!

So far I am loving this set of challenges! 
(Solutions to the challenges <i>may</i> be released after January 1st; if they are released they will be inside the respective post.)

<h2> Posts about Advent of Cyber 2024: </h2>
{% for post in collections.AoC24 %}
	<ul>
		<li> On: {{post.date | date: "%a, %b %d, %y"}}, <a href="{{ post.url | url}}">{{ post.data.title }}</a> by: {{ site.author.name }}</li>
		</ul>
{% endfor %}
