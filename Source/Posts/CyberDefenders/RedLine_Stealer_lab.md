---
title: "RedLine Stealer lab."
author: "Stefenmarg"
date: 2025-01-28
layout: "Layouts/Post"
---

### [{{title}}](https://cyberdefenders.org/blueteam-ctf-challenges/red-stealer/)

#### Lab caterogy: Thread Intel

For this lab we were given the following scenario:

You are part of the Threat Intelligence team in the SOC (Security Operations Center). An executable file has been discovered on a colleague's computer, and it's suspected to be linked to a Command and Control (C2) server, indicating a potential malware infection.

Our task is to investigate the executable file by using it's hash that was given to us in a text file within the downloadable lab file archive.

With this has we can simply go to [VirusTotal](https://www.virustotal.com/gui/home/upload) and in the search tab paste they hash given.

{% img "/public/img/Cyber/Redline/screen_1.png" %}

<h5>
Q1: Categorizing malware enables a quicker and easier understanding of its distinct behaviors and attack vectors. What is the category of the identified malware?
</h5>

This question is simple since all we have to do for this question is take the hash provided by the course that is extracted from the archive and submit it in the search tab as seen above in the VirusTotal platform. After that we will be seeing below 
a small box that will have the threat cateort in it.

<h5>
Q2: Clearly identifying the name of the malware file improves communication among the SOC team. What is 
the file name associated with this malware?
</h5>

This is also a simple step since below the hash on the VirusTotal platform we can see the name of the executable.
{% img "/public/img/Cyber/Redline/screen_2.png" %}


<h5>
Q3: Knowing the exact timestamp of when the malware was first observed can help prioritize response actions. Newly detected malware may require urgent containment and eradication compared to older, well-documented threats. What is the UTC timestamp of the malware's first submission to VirusTotal?
</h5>

For this question all we have to do is go to the `Details` tab above the box mentioned in Q2. After scrolling a little bit we can see in the history part the time of the first submission.

<h5>
Q4: Understanding the techniques used by malware helps in strategic security planning. What is the MITRE ATT&CK technique ID for the malware's data collection from the system before exfiltration?
</h5>

For this question all we have to do is go to the `Behaviour` tab of the threat and scroll until we reach the `Collection` technique that can be found under the `MITRE ATT&CK Tacticsand Techniques tab` and thefirst entry is our answer.
{% img "/public/img/Cyber/Redline/screen_3.png" %}


<h5>
Q5: Following execution, what domain name resolution is performed by the malware?
</h5>

The answer to this question can also be found in this page in the `IP Traffic tab` and the second IP's url is our answer.
{% img "/public/img/Cyber/Redline/screen_4.png" %}


<h5>
Q6: Once the malicious IP addresses are identified, network security devices such as firewalls can be configured to block traffic to and from these addresses. Can you provide the IP address and destination port the malware communicates with?
</h5>

This answer too is in the same section just above the last question's answer and the only ip that does not seem to have a domain associated with it.

<h5>
Q7: YARA rules are designed to identify specific malware patterns and behaviors. What's the name of the YARA rule created by "Varp0s" that detects the identified malware?
</h5>

With a vasic google search of `Redline stealer yara rule by Varp0s` we can simply naviate to the first result in [YARAify](https://yaraify.abuse.ch/sample/1d2c6f725cb3a197cc249ea9e848d8f6d2b8b7b3af64980479f7b2225deae931/) and get our anwser without the `_V2` part of the rule name.
{% img "/public/img/Cyber/Redline/screen_5.png" %}


<h5>
Q8: Understanding which malware families are targeting the organization helps in strategic security planning for the future and prioritizing resources based on the threat. Can you provide the different malware alias associated with the malicious IP address?
</h5>

Go to [THREATfox](https://threatfox.abuse.ch/) and search just the ip that we found in Q6. With the only result returned, open the result's page and there you can see the malware alias of RedLine Stealer.
{% img "/public/img/Cyber/Redline/screen_6.png" %}


<h5>
Q9: By identifying the malware's imported DLLs, we can configure security tools to monitor for the loading or unusual usage of these specific DLLs. Can you provide the DLL utilized by the malware for privilege escalation?
</h5>

For the final step all we need to do is go back to the VirusTotal page and search for `.dll` in the `Modules loaded` section the last result given is the answer.
{% img "/public/img/Cyber/Redline/screen_7.png" %}

That is all for this lab, very lovely, we used some new tools with this. Overall amazing experience solving the lab.