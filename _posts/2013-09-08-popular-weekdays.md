---
title: "Popular Weekdays"
date: "2013-09-08"
categories: 
  - "code"
  - "python"
---

The code on my blog will range in quality from “I’m waiting in line and have 10 minutes to code” to “I’ve been working on this all day.”

Let’s with begin some quick, semi-hardcoded scripts, shall we?

```
# dayofweek.py
import datetime
from sys import argv
from calendar import day_abbr #import day_name for full name
"""
Counts the amount of hits per weekday, given a file of data corresponding to "year month day amount-of hits"
"""
#starts with a zero counter array (each index corresponds to a weekday, 0:Sunday, 1:Monday, ...)
weekcount = [0]*7 #hits per day
argv = argv[1:] #get rid of script declaration in args
#make sure string has year, month, day, amount-of-hits-that-day
if len(argv) % 4 == 0:
  for c in range(0, len(argv),4):
    #increment slice so we are only looking at one set of (year, month, day, amount-of-hits-that-day) at one time
     if (a.isdigit() for a in argv[0+c:4+c]):
         year, month, day, count = int(argv[0+c]), int(argv[1+c]), int(argv[2+c]), int(argv[3+c]);
         #get index of day that the given date corresponds to
         daynum = int(datetime.date(year, month, day).strftime("%w"))
         #add the amount-of-hits-that-day to the counter
         weekcount[daynum] = weekcount[daynum] + count;
  #display days from most to least popular
  print 'n'.join([day_abbr[(sorted(range(7), key=lambda k: weekcount[k]))[d]] for d in range(7)])
```

Okay, we need some random data to test this bad boy on. Naively, we could create a random data set of valid days as follows:

```
# randomday.py
import random as r
f=[]for x in xrange(12):
 year = r.choice(range(1997, 2013))
 month = r.choice(range(1, 12))
 day = r.choice(range(1, 28))
 hits = r.choice(range(6666,9999))
 f.extend((year, month, day, hits))
print ' '.join(map(str,f))
```

An example of this output is:

```
2008 9 15 7311 2007 7 1 9812 2011 6 9 7721 2003 7 21 6736 2010 9 13 7776 1997 9 14 8776 1999 7 14 8617 2012 9 4 8208 2006 11 26 9689 2004 11 10 8952 1997 7 19 7799 2007 9 15 7858
```

We can feed these test values into our original script with a quick bash one-liner:

```
python dayofweek.py `python randomday.py`
```

We will receive the most and least popular weekdays in this random set of data:

```
Wed
Fri
Sat
Mon
Tue
Sun
Thu
```
