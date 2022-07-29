---
title: "Terminal Hexagonal Lattice"
date: "2014-01-29"
categories: 
  - "code"
  - "python"
---

Here: have a script to generate plaintext hexagonal lattices for you when you’re feeling blue.

```
import itertools
pattern1 = ". ."
pattern0 = "   "
def main(repeat,length):
  for _ in itertools.repeat(None, length):
  print (pattern1+pattern0)*repeat
  print (pattern0+pattern1)*repeat
if __name__ == "__main__":
    main(10,10)
```

```
. .   . .   . .   . .   . .   . .   . .   . .   . .   . .   
   . .   . .   . .   . .   . .   . .   . .   . .   . .   . .
. .   . .   . .   . .   . .   . .   . .   . .   . .   . .   
   . .   . .   . .   . .   . .   . .   . .   . .   . .   . .
. .   . .   . .   . .   . .   . .   . .   . .   . .   . .   
   . .   . .   . .   . .   . .   . .   . .   . .   . .   . .
. .   . .   . .   . .   . .   . .   . .   . .   . .   . .   
   . .   . .   . .   . .   . .   . .   . .   . .   . .   . .
. .   . .   . .   . .   . .   . .   . .   . .   . .   . .   
   . .   . .   . .   . .   . .   . .   . .   . .   . .   . .
. .   . .   . .   . .   . .   . .   . .   . .   . .   . .   
   . .   . .   . .   . .   . .   . .   . .   . .   . .   . .
. .   . .   . .   . .   . .   . .   . .   . .   . .   . .   
   . .   . .   . .   . .   . .   . .   . .   . .   . .   . .
. .   . .   . .   . .   . .   . .   . .   . .   . .   . .   
   . .   . .   . .   . .   . .   . .   . .   . .   . .   . .
. .   . .   . .   . .   . .   . .   . .   . .   . .   . .   
   . .   . .   . .   . .   . .   . .   . .   . .   . .   . .
. .   . .   . .   . .   . .   . .   . .   . .   . .   . .   
   . .   . .   . .   . .   . .   . .   . .   . .   . .   . .
```
