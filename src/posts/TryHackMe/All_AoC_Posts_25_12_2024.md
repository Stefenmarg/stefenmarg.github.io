---
title: 'Advent of Cyber 2024 - Post Colletion.'
author: 'Stefenmarg'
layout: 'layouts/base.njk'
date: "2024-12-25"
---

## {{ title }}

{% for post in collections.AoC2024 %}
	<ul>
		<li> {{ post.content }} </li>
	</ul>
{% endfor %}