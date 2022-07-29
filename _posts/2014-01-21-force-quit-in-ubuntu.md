---
title: "Force Quit in Ubuntu"
date: "2014-01-21"
categories: 
  - "explanation"
  - "linux"
---

A surprising amount of Linux users are unfamiliar with how to force quit programs via the command-line. It is often that your only option to escape a process gone awry is using the term window.

I was coding with some friends yesterday and to my surprise, they didn’t know how to quit an unresponsive process. I fear that this ignorance is widespread. The procedure is fairly simple. Use the following command to list ongoing processes:

```
ps x
```

After you’ve located the UID of the problem process (usually a 4 or 5-digit natural number), kill it.

Let’s say our UID is 27182.

```
kill -9 27182
```

Done!
