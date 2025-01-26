---
title: "FakeGPT Lab."
author: "Stefenmarg"
date: 2025-01-24
layout: "Layouts/Post"
---

### [{{title}}](https://cyberdefenders.org/blueteam-ctf-challenges/fakegpt/)


#### Lab caterogy: Malware Analysis
#### Lab tactics: Credential Access, Collection, Command and Control, Exfiltration

For this lab we were given the following scenario:

Your cybersecurity team has been alerted to suspicious activity on your organization's network. 
Several employees reported unusual behavior in their browsers after installing what they 
believed to be a helpful browser extension named "ChatGPT". However, strange things started
happening: accounts were being compromised, and sensitive information appeared to be leaking.

Your task is to perform a thorough analysis of this extension identify its malicious components.

So our main task was to analyse the extension, after downloading the archive file for the extension and unzipping it with the password provided we get greeted with the enviroment that we are going to investigate.

To investigate the extension I simply opened the folder with VSCode.

#### Q1: Which encoding method does the browser extension use to obscure target URLs, making them more difficult to detect during analysis?

In this part it appears that the function is not actually used in the code, whether this is intentional 
or not I do not know but we can still solve this questions.

For this question we can rule out the following files:
 * `manifest.json`
 * `ui.html`
 * `img.GIF`

Since we are looking into obscuring something we can also rule out the `crypto.js` file since all it does is AES Encrypt a string with a key. With the 2 remaining files `loader.js` and `app.js` all we have to do is search for a function that decodes something. After simply looking through the 2 files we can see the existance of a base64 string thus maarking Q1 complete with the answer bring `base64`.

```js
const targets = [_0xabc1('d3d3LmZhY2Vib29rLmNvbQ==')];
```

#### Q2: Which website does the extension monitor for data theft, targeting user accounts to steal sensitive information?

If we were to search for regular urls in these files we would find just an image source link which is not a site that someone wuld really want to monitor so it must be hidden. What if we were to take the string found above in the `targets` constant and decode it from `base64` what would it return?

```bash
echo "d3d3LmZhY2Vib29rLmNvbQ==" | base64 -d
www.facebook.com
```
Thus like that we were able to get what the target website actually was for Q2. Genuine question, is `www.facebook.com` really used in 2025?

#### Q3: Which type of HTML element is utilized by the extension to send stolen data?

This is pretty easy since the function that gets the element to load is in the same file with the above questions. Just following the call stuck after the variable of the above questions we go to the function that uses the html element: `if` > `exfiltrateCredentials(username, password)` > `sendToServer` thus seeing that the utilised element is and `img` element.

#### Q4: What is the first specific condition in the code that triggers the extension to deactivate itself?

If we stroll again through the files again we can propably see an alert in the `loader.js` file that disables the extension thus making the answer to the forth question that is `navigator.plugins.length === 0`. 

#### Q5: Which event does the extension capture to track user input submitted through forms?

This answer can be simply found with the search option and we get 2 results in the `.addEventListener()` attribute. Since the question below is about keystrokes and the events found are either `submit` or `keydown` this is propably the `submit` event.  

#### Q6: Which API or method does the extension use to capture and monitor user keystrokes?

As mentioned above the only remaining event is the `keydown` thus marking question 6 solved.

#### Q7: What is the domain where the extension transmits the exfiltrated data?

Do you remember in Q2 the other url `https://Mo.Elshaheedy.com/` found that is supposed to load an image? Well that was the domain that is the answer to this question.

#### Q8: Which function in the code is used to exfiltrate user credentials, including the username and password?

Keyword from the question `exfiltrate` if we simply search this we get 2 functions of which one is the answer to the above question. Since we are talking about creadentials though we are talking about the
`exfiltrateCredentials(username, password)` function.

#### Q9: Which encryption algorithm is applied to secure the data before sending?

Do you remember in Q1 that we ruled out `Crypto.js`, well it is time for us to see what it contains and find the algorithm that it uses. On the `6th line` we can see that we are dealing with the `AES` algorithm thus marking this question complete too.

#### Q10: What does the extension access to store or manipulate session-related data and authentication information?

Final question that cannot be found on the js files, simply browsing all the files from scratch and watching extension permissions we can finally see that we are dealing with `cookies`!


#### Closing statement

I have to say that this lab was supper fun, it was my first time diving into the code of an extension. Seeing what an extension is really capable to do is scary to be honest. As rated in the ite after the completion for me it is 100% a 5/5 stars lab.