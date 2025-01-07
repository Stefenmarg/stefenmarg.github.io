---
title: 'About me'
layout: 'layouts/base.njk'
permalink: '/about/'
assetsDir: '/assets/CV'
---

## {{title}}

I'm Stefanos Margaritis and I am a second year University Student.

I’m currently studying in the Digital Systems Department at the University of Thessaly, with a special interest in networking, programming, and photography.

Most of my projects revolve around programming like my link shortener [Shorten-a-railway](https://github.com/Stefenmarg/Shorten-a-railway/) or some Web Developemnt like the site template for Jekyll I created called [Satunium](https://stefenmarg.github.io/Saturnium/), but I also dive into electronics.

You can find me on social media, mostly the ones listed in the footer of the site. If you would like to get in touch, feel free to reach out via [email](mailto:{{site.author.email}}).

I have recently completed Advent of Code from TryHackMe and got a certificate proving my understanding of Cyber Security fundementals.

<object data="{{ assetsDir }}/Resume.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="{{ assetsDir }}/Resume.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="{{ assetsDir }}/Resume.pdf">Download PDF</a>.</p>
    </embed>
</object>

<object data="{{ assetsDir }}/THM-7JXTTPP7BT.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="{{ url }}{{ baseurl }}/assets/CV/THM-7JXTTPP7BT.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="{{ url }}{{ baseurl }}/assets/CV/THM-7JXTTPP7BT.pdf">Download PDF</a>.</p>
    </embed>
</object>

<object data="{{ assetsDir }}/Matlab_fundementals.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="{{ assetsDir }}/Matlab_fundementals.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="{{ assetsDir }}/Matlab_fundementals.pdf">Download PDF</a>.</p>
    </embed>
</object>
