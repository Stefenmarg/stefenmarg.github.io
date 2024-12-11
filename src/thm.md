---
title: 'TryHackMe'
layout: 'layouts/base.njk'

pagination:
  data: collections.TryHackMe
  size: 7
  alias: posts
---

## {{title}}

In this section posts about my activity on TryHackMe will be posted. Im new to this so please be patient while I explore the wonderfull world of [TryHackMe](https://tryhackme.com)!

<div class="center">
    <a href="https://tryhackme.com/r/p/Stefenmarg">
    <img src="https://tryhackme-badges.s3.amazonaws.com/Stefenmarg.png" alt="My image badge on tryhackme.com">
    </a>
</div>

<div class="page" id="Page">
	<h2> Posts regarding TryHackMe: </h2>
	{% for post in posts %}
		<ul>
			<li> On: {{post.date | date: "%a, %b %d, %y"}}, <a href="{{ post.url | url}}">{{ post.data.title }}</a> by: {{ site.author.name }}</li>
		</ul>
	{% endfor %}
</div>

<div class="pagination center">
  {% if pagination.href.previous %}
    <a class="previous" href="{{ pagination.href.previous }}">Newer posts</a>
  {% endif %}
  {% if pagination.href.next %}
    <a class="next" href="{{ pagination.href.next }}">Older posts</a>
  {% endif %}
</div>
