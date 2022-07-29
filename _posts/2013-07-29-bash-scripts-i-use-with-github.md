---
title: "Bash Scripts I Use With Github"
date: "2013-07-29"
categories: 
  - "code"
  - "linux"
---

I’ve recently decided that I should put some of my projects on GitHub.

I use two bash scripts to ease my communication with my repo.

`. gitpush.sh`

```
cd [path to local repo]git add .
git status
git commit
git push origin HEAD:master
git diff HEAD~1 HEAD > ~/Desktop/diff.txt
```

`. gitrm.sh filename`

```
file=$1
git rm $file
git commit -m "remove $file"
```
