---
title: "Notes about my simple portfolio site."
layout: 'layouts/post.njk'
date: "2025-01-08"
author: Stefenmarg
---

{% info "This part is still under developement and will change in the future due to the updates on this site." %}

The 5 most recent versions of this site:
{% for post in collections.Versions limit:5 %}
	<ul>
		<li> On: {{post.date | date: "%a, %b %d, %y"}}, <a href="{{ post.url | url}}">{{ post.data.title }}</a> by: {{ site.author.name }}</li>
	</ul>
{% endfor %}

Overall, this site has gotten some updates that have made better the overall builing process, features are not limited on making a better and more organised eleventy config file by reading things like files to be watched or to be copied from a file instead of manually copy pasting the same piece of code just to do the same things 4 times in a row.

The files in the `config` folder found in the root of the project controls all the basic configurations of files that could easily be implemented in a simple loop for convinience. This implementation has thus allowed us to make the building process easier making use of enviroment variables and making use of only the required functions based on the enviroment.

A must have in this enviroment is the automation of most of the important functions of the site like the post collection based on the folders inside the `post` folder in the root. This is achieved by using site modules that can be found in the `modules` folder in the root of the project. It allows the eleventy configuration file to be less cluttered and to have it run functions that correspond to the set eleventy config function. It may not be the best solution but it is a way to run functions without needing to have a file over 200 lines. Optimisation and understanding of the way that modules work is one of the main points of the system used.

The files in the `config` directory mostly has to do with functions that need lists thus json was chosen, a simple way to read the file and use it's context in a way that benefits all.

Other updates on this site on the font matter has to do with ✨ notification signs ✨ which are pretty neat. Below you can see a demo of the signs and how they are used in the backend.

{% info "This is an information notice!" %}

{% warning "This is a warning!" %}

{% alert "This is an alert!!" %}

Plus, the recenty added `pdf_view` shortcode that takes the following html statement to a simple '{ % pdf_view <path_pdf> % }' (the data showing in as undefined is there due to not having a proper call to the shortcode)

```html
{% pdf_view %}
```

Additionally, recently the scss file has been split to diffrent files that are sawn together on 'compilation' of the scss on building of the site.

There are still bugs to crush but everyday the site is getting better and better in the background. Changes that may not be visible in the regular user's visit, in the background it changes many many stuff that make the project better and better for me and other people that may want to use this site as a template.

More info will be shown in here since this will be updated regularly!
