---
title: "Simple Cubic Lattice"
date: "2013-11-08"
categories: 
  - "code"
  - "explanation"
  - "physics"
  - "python"
---

Today, let’s have some fun playing with perspective rendering in Python! My graphics package of choice is VPython:

```
sudo apt-get install python-visual
```

Suppose we want to represent a simple cubic lattice: Using the `visual` package, we can create a collection of spheres at positions \((i,j,k)\) with \(i,j,k = -L…L\).

```
from visual import sphere
L = 5
R = 0.3
for i in range(-L,L+1):
 for j in range(-L,L+1):
  for k in range(-L,L+1):
   sphere(pos=[i,j,k],radius=R)
```

Resulting in this beautiful rendering:

[![](/wp-content/uploads/2013/11/Screenshot-from-2013-11-07-14-41-33.png)](/wp-content/uploads/2013/11/Screenshot-from-2013-11-07-14-41-33.png)

But what if we want to change the color? Simply alter the last line:

```
sphere(pos=[i,j,k],radius=R).color = color.blue
```

[![](/wp-content/uploads/2013/11/Screenshot-from-2013-11-07-19-48-34.png)](/wp-content/uploads/2013/11/Screenshot-from-2013-11-07-19-48-34.png)

Less atoms? Alter the value of L.

<table cellpadding="0" cellspacing="0" style="float: left; margin-right: 1em; text-align: left;"><tbody><tr><td style="text-align: center;"><a href="/wp-content/uploads/2013/11/Screenshot-from-2013-11-07-19-51-30.png" style="clear: left; margin-bottom: 1em; margin-left: auto; margin-right: auto;"><img border="0" src="/wp-content/uploads/2013/11/Screenshot-from-2013-11-07-19-51-30.png" height="320" width="317"></a></td></tr><tr><td style="text-align: center;"><code>L = 1</code></td></tr></tbody></table>

Same number of atoms with smaller radii? Alter the value of R.

<table cellpadding="0" cellspacing="0" style="float: left; margin-right: 1em; text-align: left;"><tbody><tr><td style="text-align: center;"><a href="/wp-content/uploads/2013/11/Screenshot-from-2013-11-07-19-53-35.png" style="clear: left; margin-bottom: 1em; margin-left: auto; margin-right: auto;"><img border="0" src="/wp-content/uploads/2013/11/Screenshot-from-2013-11-07-19-53-35.png" height="317" width="320"></a></td></tr><tr><td style="text-align: center;"><code>R = 0.2</code></td></tr></tbody></table>

[Want more advanced computational physics with Python?](http://www-personal.umich.edu/~mejn/computational-physics/)
