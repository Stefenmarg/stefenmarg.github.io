---
title: "Saturnium Ruby, a simple jekyll site template"
layout: 'layouts/post.njk'
date: "2024-08-12"
author: Stefenmarg
---

# What is ['Saturnium Ruby aka Saturnium'](https://stefenmarg.github.io/SaturniumRuby/)

Saturnium Ruby is a simple jekyll site template that can be easily modified to fit your needs. It is very flexible and consists of HTML, Markdown, JavaScript, and CSS. 

This template falls under the MIT License, which can also be found in the root of the site's [repository](https://github.com/stefenmarg/SaturniumRuby).

Comprehensive documentation of the project can be found in the [About section](https://stefenmarg.github.io/SaturniumRuby/about/) of the site.

# Story time

I needed a simple Jekyll site template to base my site on, but the ones I found were not so simple and sometimes not that customizable. So, I decided to create my own.

I started by creating the config file as per the Jekyll documentation,S setting up the directory tree, the 404 page, some of the layouts that can be seen today, the 
include files, and finally, the assets like styles and scripts. And that’s where it all began.

In the next few days, I created all the content files, which went well until it was time for ✨ the links ✨. With little understanding of how the {{ site.baseurl }} 
and {{ site.url }} worked (I hadn't even set them up correctly in the _config.yml), I managed to totally break the site and make it ✨bricked✨.

I should mention that on the locally run Jekyll and Webrick instance on my dev machine, everything worked correctly. The CSS and JS files in the head were found, and 
the navigation links in the header were working correctly; But during the push to a GitHub repo, everything ✨broke✨.

Once I understood what the {{ site.baseurl }} and {{ site.url }} statements were for and how I am meant to use them, I spent a nice 2-hour session fixing links, and 
everything worked again.

Now, with the basics complete, I am waiting for inspiration on what more to add as a feature. As of 2024-08-15, the upcoming version 1.0.1 will support Font Awesome 
social media icons.

Thanks a lot for reading!
 * Stefanos M.