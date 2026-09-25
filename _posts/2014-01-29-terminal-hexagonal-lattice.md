---
title: "Terminal Hexagonal Lattice"
date: "2014-01-29"
categories: 
  - "code"
  - "python"
genre: science
tags:
  - code
  - python
  - ascii-art
  - hexagonal-lattice
format: tutorial
topics:
  - "Programming & tools"
  - "Drawing, painting & comics"
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

<p class="repo-link"><span class="repo-label">Code</span> <a href="https://github.com/catherineray/cow-code/blob/master/hexagons.py">cow-code / hexagons.py</a></p>
