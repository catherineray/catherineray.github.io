---
title: "Braille Cell with VPython"
date: "2013-11-20"
categories: 
  - "braille"
  - "code"
  - "python"
---

The internet went down at my house, and I decided to play with vpython again!

```
#type individual brl cell using numkeys
from visual import sphere
R = 0.2 #filled dot radius
r = 0.1 #empty dot radius
#corresponds to numkeys
dotdict = {
'7': [1,3], #dot 1 
'4': [1,2], #dot 2
'1': [1,1], #dot 3
'8': [2,3], #dot 4
'5': [2,2], #dot 5
'2': [2,1] #dot 6
}
fulldot = dotdict.keys()
def draw(dots):
 [sphere(pos=dotdict[dot], radius=r) for dot in fulldot] #create empty dot matrix to represent empty cell
 [sphere(pos=dotdict[dot], radius=R) for dot in dots] #fill appropriate dots
print "Please enter stringn7t8n4t5n1t2n: "
string = raw_input()
if string.isdigit(): draw(str(string))
```

Let’s see it in action! The letter “j” (or “just” in G2):

[![](/wp-content/uploads/2013/11/Screenshot-from-2013-11-20-14-54-44.png)](/wp-content/uploads/2013/11/Screenshot-from-2013-11-20-14-54-44.png)
