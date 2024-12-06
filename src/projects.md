---
title: 'Projects'
layout: 'layouts/base.njk'
pagination:
  data: collections.Projects
  size: 5
  alias: posts
---

## {{title}}

This section of the site will showcase all the projects I have worked on. Each post will feature the project's name as the title and will cover a variety of project types, including software development, circuit designs, and more.

<div class="page" id="Page">
	<h2> My most recent projects: </h2>
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
