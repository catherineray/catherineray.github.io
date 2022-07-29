---
title: "Playing in Vim"
date: "2013-09-21"
categories: 
  - "code"
  - "explanation"
---

Today’s dose of code will be less of a program and more of an advanced vim tutorial.

By the power invested in me by my favored plain text editor, I created a todo system. All tasks are stored in a plain text file, their notes are folded, and they are sorted by priority.

Each entry looks like this, ordered by priority:: [0 = Immediate, inf = Soon]

```
Priority Task
        - Notes
        - Notes
        - Notes
        - ...
```

For example, if my text file looks like this:

```
3 Send Email to Dr. Suess
        - Hello Sir, you are cool.
        - Send from junk email account
2 Braille Contractions +B
        - The anecdotes for how I recall each contraction
        - See draft post for details
```

Only the following will be displayed.

```
3 Send Email to Dr. Suess
2 Braille Contractions +B
```

This is done via vim trickery. `:set fdm=indent` will create folds which you can open with `zo` and close with `zc`.

```
3 Send Email to Dr. Suess
+-- 2 lines: - Hello Sir, you are cool.--------------------------
2 Braille Contractions +B
+-- 2 lines: - The anecdotes for how I recall each contraction---
```

Next step is being able to prioritize lines. The naive way to this is `:sort`. However, this doesn’t preserve folds! What shall we do? We could manually yank and put, but that’s no fun.

Let’s see if we can come up with an atrocious command that sorts tasks by priority while preserving folds.

First, we replace the line delimiters with something not found in the text, in our case %%. Using `:set list`, we see:

```
3 Send Email to Dr. Suess$
^I- Hello Sir, you are cool.$
^I- Send from junk email account$
^I$
2 Braille Contractions +B$
^I- The anecdotes for how I recall each contraction$
^I- See draft post for details$
```

We can replace the delimiters `nt-` with %%, using `:%s/nt-/ %%`, invoke `:sort`, and return the delimiters to their rightful places `:%s/ %%/rt-/g`

_Sidenote: I use `r` instead of `n` in the previous command because `r` will show up in the editor immediately, while `n` will show up as `^@` until you exit with `:set nolist`._

This is combined into the following, which sorts our document and eliminates blank lines, leaving their corresponding folds unchanged!

```
:%s/nt-/ %%/ | :sort | :%s/%%/rt-/g
```

Do not fear! You can alias commands in vim with :command. Note that user defined commands must be capitalized. The following command will create the alias `:Todo`.

```
:command Todo :%s/nt-/ %%/|:sort|:%s/%%/rt-/g
```

In conclusion, although this is a fun exercise in vim - **[use a bash script for your todo list needs](/todo-system/)**!
