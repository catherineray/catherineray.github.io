---
title: "Do You Even Search, Bro?"
date: "2013-10-17"
categories: 
  - "code"
  - "explanation"
---

I recently came across a software engineer I respect greatly who is unfamiliar with the basics of grep (I know, right? Blew my mind). This is for him, hopefully it will help others. If you’re already familiar with this black magic || want to see a cool implementation, check out [Grep is a Magical Beast](/grep-is-magical-beast-ft-hiveql-and/).

Grep’s syntax is fairly simple:

```
grep [options] search_string file|dir
```

Grep **supports regex as the search string** -- whip it out if you’re versed in its beauty. If you’re using a multiword search string, you must wrap the string in single quotes. Search all directories by listing `*.` as `dir`. Search subdirectories by restricting the path and adding an `-r` flag:

```
grep -r 'Carl' ~/Dropbox/LlamasHats/*
```

The [extremely] basic flags are:

| Searching for ___? | The flag for you |  |
| --- | --- | --- |
| Text in subfolders | `-r` |
| Whole words only | `-w` |
| Case-insensitive text | `-i` |
| File names only | `-l` |
| Number of occurrences only | `-c` |

Is your mind blown yet? No? Check out ack. The abundance of CL switches will blow your mind. The syntax of ack is the same as that of grep. [Their documentation](http://beyondgrep.com/documentation/) is great.

The main difference I’ve found between grep and ack is speed. Here is a [great post by Perl Monks](http://www.perlmonks.org/?node_id=586862) on reasons to switch.

Using `find` is great for filename searches. `find`‘s syntax is a bit different than grep’s

```
find file|dir [options] search_string
```

`A generic search:  `

```
find . -iname '*.sty'
```
