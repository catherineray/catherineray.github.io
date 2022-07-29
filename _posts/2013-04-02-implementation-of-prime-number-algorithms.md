---
title: "Implementation of Prime Number Algorithms"
date: "2013-04-02"
categories: 
  - "code"
  - "explanation"
  - "math"
  - "python"
---

I’m currently reading _Algorithms Unplugged_, lent to me by my friend and professor, Dr. Marr.

The text provided 4 versions of an algorithm and **claimed that each new version had a noticeable increase in runtime efficiency**.

These algorithms **take some number n and return a list of all prime numbers up to and including n**. For example, if n = 13, this algorithm returns [2,3,5,7,11,13].

I was skeptical of their claims \(\Rightarrow\) I took the pseudocode and converted it into functional Python, then wrote a timing function: this tests each algorithm by letting n = 2^6 to 2^20 and repeating each calculation 1000 times (in order to find the average runtime).

I had to wrestle with Python in order to stop it from rounding off the calculated runtimes (treating runtime as a float), which lead to an interesting adventure into the time module man page.

tl;dr

- take pseudocode from a book (p.121-127 of _Algorithms Unplugged_ by various German computer scientists*)
- translate said pseudocode into functional code, and
- test the run-times of each algorithm

* * *

```
'''
Catherine Ray
prime_runtime0.py
'Algorithms Unplugged' Demonstration
Program uses algorithms listed in pseudocode from pg.119-127. Each algorithm returns a list of all primes up to some number n.
There are 4 versions of this algorithm; this program computes the average runtimes of each version and prints to stdout.
'''
import math
import time as t
class Runtime():
 def execute(self):
  repeat = 1000 #number of times to repeat runtime calculation
  n = [2**x for x in xrange(6, 21, 7)] #produce list of large numbers to test algorithms
  #n = [2**6, 2**20]
  for v in xrange(1,5):
   method = 'self.prime_number'+str(v) #test each version of the algorithm, version = 1, 2, 3, 4
   print 'ntVersion ' + str(v), 'nHighest Prime Number Computed : Average Runtimen'  #find runtime
   [self.runtime(method, number, repeat) for number in n] 
 def runtime(self, method, n, repeat):
 #function = function to test
 #n = highest prime to compute
 #repeat = number of trials to run
  method = eval(method)
  total = 0 #reset total
  for r in xrange(0, repeat+1): 
   start = t.time() #get start time
   methodrun=method(n) 
   end = t.time() #get end time
  total = total + end-start #add to previously calculated time
  average_time = total/repeat #find average runtime
  print  '2^%d :' %(int(math.log(n)/math.log(2))), average_time
 def prime_number1(self, n): #version 1, pg. 121
  list = [i for i in xrange(2,n+1)] #write down all numbers between 2 and n in a list
  for i in xrange(2, n+1):
   for k in xrange(2, n+1):
    if i*k in list: list.remove(i*k) #if i*k is in list, remove
    else: pass #if i*k isn't in list, do nothing
  return list
 def prime_number2(self, n): #version 2, pg. 123
  list = [i for i in xrange(2,n+1)] #write down all numbers between 2 and n in a list
  for i in xrange(2, int(math.floor(math.sqrt(n)))+1):
   for k in xrange(2, int(math.floor(n/i))+1):
    if i*k in list: list.remove(i*k) #if i*k is in list, remove
    else: pass #if i*k isn't in list, do nothing
  return list
 def prime_number3(self, n): #version 3, pg. 125
  list = [i for i in xrange(2,n+1)] #write down all numbers  between 2 and n in a list
  for i in xrange(2, int(math.floor(math.sqrt(n)))+1):
   if i in list:
    for k in xrange(2, int(math.floor(n/i))+1):
     if i*k in list: list.remove(i*k) #if i*k is in list, remove
     else: pass #if i*k isn't in list, do nothing
  return list
 def prime_number4(self, n): #final version, pg.127
  list = [i for i in xrange(2,n+1)] #write down all numbers between 2 and n in a list
  for i in xrange(2, int(math.floor(math.sqrt(n)))+1):
   if i in list:
    for k in xrange(int(math.floor(n/i)), i-1, -1):
     if k in list:
      if i*k in list: list.remove(i*k)  #if i*k is in list, remove
      else: pass #if i*k isn't in list, do nothing
  return list
if __name__ == '__main__':
 runtime = Runtime()
 runtime.execute()
```

I left the code to run overnight.

Taking a brief glance at the output, I found confirmation of the authors’ claims. The runtime each version is less than the previous version (version4 should take less time to run than version1).

* * *

*Berthold Vöcking, Helmut Alt, Martin Dietzfelbinger, Rüdiger Reischuk, Christian Scheideler, Heribert Vollmer, Dorothea Wagner
