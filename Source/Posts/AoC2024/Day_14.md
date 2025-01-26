---
title: 'Advent of Cyber 2024 - Day 14'
author: 'Stefenmarg'
layout: 'Layouts/Post'
date: "2024-12-14"
---
<img class="img-fluid" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/5f04259cf9bf5b57aed2c476/room-content/5f04259cf9bf5b57aed2c476-1731812568781.svg">

### Topic Covered Day 14: Certificate mismanagement

Another Day Another Burp Suite Project! 
(Sorry for this post being late, as mentioned before I've burned my ssd.)

Day 14's challenge was about finding login information, flags in portals with said information and then what complany signed the certificate of the Gift Scheduler site.

We would need do add the machine ip as gift-scheduler.thm by running: 
```bash
~ $ echo "MACHINE_IP gift-scheduler.thm" >> /etc/hosts
```

After that, it is optional to log into the Mayor's account, but we could also dive straight into the action by starting Burp Suit with a temporary default project and setting up a listener on the attackboxe's ip and on port 8080. Then like above we would need to set our computer as the wareville gateway by running:
```bash
~ $ echo "AttackBox_IP wareville-qw" >> /etc/hosts
```

In order to get the user traffic we would need to run an .sh script that is in: `~/Rooms/AoC2024/Day14` from the terminal that would look like the one below BUT FIRST you should start the interception to get the usernames and passwords required.
```bash
~ $ ~/Rooms/AoC2024/Day14/route-elf-traffic.sh
```

The last part for the flags would need for us to log into the accounts of some elves, our dear marta Mayware that still has her job strangely and canseling G-day. The flags would all be seen uppon login and thus we would get our flags.

Pretty fun today, I was searching for easter eggs on the logins and all i have to say is that i have not gottend so many 'Wrong password' errors when trying to login to an admin account.