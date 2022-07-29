---
title: "Consequent Challenge"
date: "2013-09-21"
categories: 
  - "code"
  - "python"
---

Today, as I was writing [a post](/playing-in-vim/) on sorting in vim, I issued myself a challenge.

The challenge: without using a bash script, write a one liner that reads through all the lines in a file, sorts them and printed these sorted lines to stdout. Do so in under a minute without using the internet.

_Before you continue, I encourage you to try it yourself. Get out a timer … Ready? Go!_

In about 35 seconds, I had this:

```
print 'n'.join(sorted([line.strip() for line in open("file.txt")]))
```

Although this one-liner works, the filename is hardcorded. Quick fix (finished at 52 seconds):

```
import sys; print 'n'.join(sorted([line.strip() for line in open(sys.argv[1])]))
```

I find that self-issuing pseudorandom timed challenges is a fun way to train yourself to work under pressure. ‘Tis one of the many ways to gamify everyday life!

Sidenote: Do not fall into the trap of using one-liners in actual code. The Pythonic way to do this is:

```
import sys
try:
    with open(sys.argv[1]) as f:
        for line in f:
            print 'n'.join(sorted(line.strip())) 
except IOError:
    print "File does not exist."
```
