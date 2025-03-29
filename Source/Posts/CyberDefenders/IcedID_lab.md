---
title: "IcedID lab."
author: "Stefenmarg"
date: 2025-01-30
layout: "Layouts/Post"
---

### [{{title}}](https://cyberdefenders.org/blueteam-ctf-challenges/icedid/)

#### Lab caterogy: Thread Intel

For this lab we were given the following scenario:

A cyber threat group was identified for initiating widespread phishing campaigns to distribute further malicious payloads. The most frequently encountered payloads were IcedID. You have been given a hash of an IcedID sample to analyze and monitor the activities of this advanced persistent threat (APT) group.

So the task that we were given would be: to investigate a hash and from that to get requests, registrars, document names an function names. The tools that I used were:  

[VirusTotal](https://virustotal.com/gui/home/upload), 
[Who.is](https://who.is/) 
[Malpedia](https://malpedia.caad.fkie.fraunhofer.de/)
[Triage](https://tria.ge/).

<h5>
Q1: What is the name of the file associated with the given hash?
</h5>

First and easy step is to go to VirusTotal and submit the hash to the search tab, then in the details tab you canscroll down to the `Names` section and get the last name in the list as the answer.

<h5>
Q2: Can you identify the filename of the GIF file that was deployed?
</h5>

For this question you need to go to the `Behaviour` tab ans in there scroll down to the `HTTP Requests` and there you will be able to see one of many gets for the same gif file.

{% img "/public/img/Cyber/IcedID/screen_1.png" %}


<h5>
Q3: How many domains does the malware look to download the additional payload file in Q2?
</h5>

In the same section as the above question all you have to do is `after pressing the arrow to extend the links shown` count the unique domains that serve the .gif file.

{% img "/public/img/Cyber/IcedID/screen_2.png" %}


<h5>
Q4: From the domains mentioned in Q3, a DNS registrar was predominantly used by the threat actor to host their harmful content, enabling the malware's functionality. Can you specify the Registrar INC?
</h5>

Who.is is our friend here, in the same section you can take the domains that you do not recognise and submit a search with it on the site.

```bash
| Index | Domain                 |  Registrar's Name             |
|-------|----------------------- |-------------------------------|
| 1     | usaaforced.fun         | Not found                     |
| 2     | agenbolatermurah.com   | Namecheap                     |
| 3     | columbia.aula-web.net  | Not found                     |
| 4     | metaflip.io            | CommuniGal Communication Ltd  |
| 5     | partsapp.com.br        | Not found                     |
| 6     | tajushariya.com        | Not found                     |
| 7     | x1.i.lencr.org         | Cloudflare                    |
```

Based on how many times site number 2 is found in the `HTTP Requests` section in the page, we can submit `Namecheap` as the answer.

<h5>
Q5: Could you specify the threat actor linked to the sample provided?
</h5>

For this we will need to go to Malpedia and search the name of the lab `IcedID` and select the first result (not the downloader), after that the threat actor(s) can be found in the page below the title.

{% img "/public/img/Cyber/IcedID/screen_3.png" %}

<h5>
Q6: In the Execution phase, what function does the malware employ to fetch extra payloads onto the system?
</h5>

For this we will need to go to tria.ge and search the hash that we were given. In the Malware config section in the source block we can find the function that is the answer.

{% img "/public/img/Cyber/IcedID/screen_4.png" %}


