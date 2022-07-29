---
title: "Todo system"
date: "2013-07-11"
categories: 
  - "code"
  - "explanation"
---

I used to drown in a sea of post-it notes and repetitive todo lists, my thoughts spread across unorganized Dropbox files, repetitive Evernote entries and various iPhone apps (Checklist, Notes, GoogleTasks).

Now that I am more comfortable with vim and bash scripting than I am with bulky GUI apps, I decided to code myself a thought management system. While researching I came across [this beauty, Todo.txt,](http://todotxt.com/) and have converted my ad-hoc method of todo lists and thought recording into an organized system.

So far, I’ve broken it up into three plain text files:

- todo.txt - mandatory actions, one liners (with abundant project names for sorting)
- Ideas.txt - ideas and notes on said ideas
- myday.txt - journal entries & freewriting, partitioned by day
This system is amazing. Very efficient, and perfect for cross-platform work on Dropbox.

```
add - add simple task to todo.txt
        t add “task”
+ - associate a task with a project by including the project name with a + sign
        t add “task +Project”
@ - note context
        t add “task @Work”
list - see all tasks in todo.txt
        t ls
show only the tasks related to Project
        t ls +Project
show tasks with keyword
        t ls keyword
pri - prioritize a task (depri)
        t pri number priority
do - mark task complete
        t do <line of task completed>
```
