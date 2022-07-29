---
title: "Perl is a Beautiful Thing (Replace All Instances of a String in a Directory)"
date: "2013-04-10"
categories: 
  - "code"
  - "explanation"
---

Perl’s string handling is a beautiful thing. I’ll talk about grep in a later post.

Let’s say you have a directory on your computer which is filled with over 1000 text/source-code documents. You want to replace all instances of a variable name, “find_var” with “replace_var”, in all files within this directory. There are a couple ways you can do this.

0. You could open each document and Ctrl+F to find each instance of the “find_var” (within the document) and manually replace it with “replace_var” _Gross, several hours of tedious work._

1. You could open each document and Ctrl+H to replace all instances of “find_var” (within the document) with “replace_var” _Better, but still gross & hours of work._

2. Use Perl, which replaces all instances of “find_var” (within the entire directory -subdirectories included) with “replace var” in one line. _Pythonic! Or, I suppose, Perltastic/Perly…. seconds of work._

In this example, assuming the desired directory’s path is “Dropbox/desireddirectory”, you open the terminal and have two options.

**Case1:** If you wish to simply replace all instances of “find_var” with “replace_var”, use the following command:

```
perl -e “s/find_var/replace_var/g;” -pi $(find ~/Dropbox/desireddirectory -type f)
```

**Case2:** If you wish to keep a copy of the original files, use the following command:

```
perl -e “s/find_var/replace_var/g;” -pi.save $(find ~/Dropbox/desireddirectory -type f)
```

This will save back-ups of the originals of each file, attaching “.save” to their titles. Thus, doc.txt will have “replace_var”, and doc.txt.save will be a back-up of of the original “find_var”.
