---
title: 'Advent of Cyber 2024 - Post Colletion.'
author: 'Stefenmarg'
layout: 'Layouts/Post'
date: "2024-12-25"
---

{% for post in collections.AoC2024 %}
	<ul>
		<li> {{ post.content }} </li>
	</ul>
{% endfor %}