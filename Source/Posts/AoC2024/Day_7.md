---
title: 'Advent of Cyber 2024 - Day 7'
author: 'Stefenmarg'
layout: 'Layouts/Post'
date: "2024-12-07"
---

<img class="img-fluid" src="https://tryhackme-images.s3.amazonaws.com/user-uploads/5dbea226085ab6182a2ee0f7/room-content/5dbea226085ab6182a2ee0f7-1730384938554.png">

### Topic Covered Day 7: AWS Log Analysis

Day 7 involved parsinng logs created by CloudTrail that are in a JSON format with the command line tool called `jq` and later with the command line tool `grep` to get string information from the .log file. For example if we have the following json file:

```json
{
  "people": [
    {
      "name": "Alice",
      "favoriteColor": "Blue"
    },
    {
      "name": "Bob",
      "favoriteColor": "Red"
    },
    {
      "name": "Charlie",
      "favoriteColor": "Green"
    },
    {
      "name": "Diana",
      "favoriteColor": "Purple"
    }
  ]
}
```

and run the `jq [options] <filter> [file]` command we would be getting the following output.

```bash 
~ $ jq --tab .people[].name ./people_prefs.json 
"Alice"
"Bob"
"Charlie"
"Diana"
```

That command is going to give us all the answers if we use the filers correctly when using them in on the json files. Later with the grep tool we are going to analyse the rds logs that look like this:

```myqsl
2024-11-28T15:22:17.728Z 2024-11-28T15:22:17.728648Z	  263 Query	INSERT INTO wareville_bank_transactions (account_number, account_owner, amount) VALUES ('8839 2219 1329 6917', 'Care4wares Fund', 342.80)
2024-11-28T15:22:18.569Z 2024-11-28T15:22:18.569279Z	  263 Query	INSERT INTO wareville_bank_transactions (account_number, account_owner, amount) VALUES ('8839 2219 1329 6917', 'Care4wares Fund', 929.57)
2024-11-28T15:23:02.605Z 2024-11-28T15:23:02.605700Z	  263 Query	INSERT INTO wareville_bank_transactions (account_number, account_owner, amount) VALUES ('----- REDACTED ----', 'Mayor Malware', 193.45)
2024-11-28T15:23:02.792Z 2024-11-28T15:23:02.792161Z	  263 Query	INSERT INTO wareville_bank_transactions (account_number, account_owner, amount) VALUES ('----- REDACTED ----', 'Mayor Malware', 998.13)
```

By running $ grep 'Mayor Malware' ./jjs we are able to filter our logs and get our results:

```bash
~ $ grep 'Mayor Malware' ./jjs
2024-11-28T15:23:02.605Z 2024-11-28T15:23:02.605700Z	  263 Query	INSERT INTO wareville_bank_transactions (account_number, account_owner, amount) VALUES ('----- REDACTED ----', 'Mayor Malware', 193.45)
2024-11-28T15:23:02.792Z 2024-11-28T15:23:02.792161Z	  263 Query	INSERT INTO wareville_bank_transactions (account_number, account_owner, amount) VALUES ('----- REDACTED ----', 'Mayor Malware', 998.13)
```

With all of the above and the filters you are able to get all the required info to solve Day 7's challenge

It was a good challenge overall, only issue was that I wasn't able to paste to the AttackBox so there was a lot of time copying word for word the commands.