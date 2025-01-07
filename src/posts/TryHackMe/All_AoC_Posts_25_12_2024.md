---
title: 'Advent of Cyber 2024 - Post Colletion.'
author: 'Stefenmarg'
layout: 'layouts/post.njk'
date: "2024-12-25"
---

{% for post in collections.AoC2024 %}
	<ul>
		<li> {{ post.content }} </li>
	</ul>
{% endfor %}