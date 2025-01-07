---
title: "Shorten-a-railway"
layout: 'layouts/post.njk'
date: "2024-09-09"
author: Stefenmarg
assetsDir: '/assets/Shorten'
---

# What is ['Shorten-a-railway'](https://github.com/Stefenmarg/Shorten-A-Railway)

Shorten-a-railway is a url sorten-er service that runs it's backend server with NodeJS.
It makes use of ExpressJS, SQLite3 and the FS module to function.

It was build in a bit over a week since there were some minor accidents in the development process like: 

  * Deleting the codebase twice in the early development stages
  * Needing to re-write the codebase due to the above reasons
  * Corrupting the database of the server when running code unserialized

But that did cause me to learn how to do command serialization is SQLite, the importance of git and things like the CRUD (Create, Read, Update, Delete) functionalities that all endpoints can have and how to process them (even though the data for this project's servers are not updated or deleted with the use of an API), how to use branches for early update versions when coding a program and how to implement authorisation in an endpoint.

Implementing the multiple modules and choosing how to split different functions between files and making them relevant has been the most fun part of designing and coding this project. Thankfully, a class that I was taking this semester taught me how to develop piece by piece a software from the start with creating schemas with functionalities of what i want it to do. 

The documentation of the program can be found in the root of the repository of the project in a file called Documentation.md

The project is using servers, queries, databases and endpoints which have or will have a vulnerability somewhere in the future that is why I am using Snyk.io to detect vulnerabilities, suggest fixed and give us a score of how harmfull it is.

It should be mentioned that fixes to vulnerabilities have no certain timeline on which they may have a patch released.

Thanks a lot for reading!
 * Stefanos M.

<object data="{{ assetsDir }}/Shorten_a_railway_notes.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="{{ assetsDir }}/Shorten_a_railway_notes.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="{{ assetsDir }}/Shorten_a_railway_notes.pdf">Download PDF</a>.</p>
    </embed>
</object>