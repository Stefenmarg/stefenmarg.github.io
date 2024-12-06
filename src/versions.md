---
title: 'Versions'
layout: 'layouts/base.njk'
pagination:
  data: collections.Versions
  size: 5
  alias: posts
---

## {{title}}

In this section you are able to access the changelogs for the updates that the site has gone through.
Below, you are able to see the vesrion as the title, when it was released and the authors name.
Soon the changelog will be moved to the official template's website.

<div class="page" id="Page">
	<h2> Most recent posts: </h2>
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
