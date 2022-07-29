---
title: "Grep Is a Magical Beast (ft. HiveQL and Impala)"
date: "2013-08-06"
categories: 
  - "code"
  - "explanation"
---

Grep is a magical beast which can be used to make your bash scripts excellent. This post will give you a taste of its utility. Let's say I have a file, temp.txt which contains two lines:

```
don‘t forget to be awesome
so long and thanks for all the fish!
```

I'd like to execute one command if a word exists in the file, and a different command if the word doesn't exist in the file. This is well-suited for grep: for example,

```
grep -q -Rw 'awesome' temp.txt && echo found || echo not found
```

echo prints to standard out, surrounding quotes are not required -R will recursively search through files if no match is found in the current directory -i will look for matching lines -w will look for matching words

If we run the command in terminal, we get the result `found` as expected. If we run the same command, but change w to i,

```
grep -q -Ri 'awesome' temp.txt && echo found || echo not found
```

we get the result `not found` because there is no line that contains only "awesome." If we had a file with the following contents, we'd get the result `found`:

```
don‘t forget to be awesome
so long and thanks for all the fish!
awesome
```

Now that you are beginning to appreciate grep, let's say I have a file, tensors.txt, containing this information:

```
electric field,1.0
polarization,1.0
tau,0.0
stress,2.0
strain,2.0
```

But where does grep come in? Let's say you want to load information from tensors.txt into the Hive table "EXAMPLETABLE", but you are unsure about whether the table already exists or not. This calls for... *superman noises* ... a bash script!

This script will query Hive, and ask politely for a list of its current tables. When Hive replies via stdout, the script will take notes into some temporary file which we can search later.

```
#!/bin/bash
function createtable {
    #creates new table if table does not already exist.
    NEWTABLE=$1
    TMP=$DIR"tempfile.txt"
    #check to see that table is non-existant
    hive -S -e "SHOW TABLES" > $TMP #see explanation of flags below
    echo `grep -q -i $NEWTABLE $TMP && echo table already exists || echo we must create a new table` 
}
#Then, we call the function...
TABLENAME=EXAMPLETABLE
createtable $TABLENAME
```

-S runs hive in silent mode -e runs the following string as an external query

Okay, awesome, we can print the status of the table's existence to stdout. But friend, this is just the beginning, we can replace the echo line with:

```
grep -q -i $TABLENAME $TMP && echo Table already exists. Please check your tablename. ||
    hive -S -e "CREATE TABLE $NEWTABLE(
    name STRING,
    rank FLOAT
    )
    row format delimited fields terminated by ',' lines terminated by 'n'"
```

So the entire script now looks like

```
#!/bin/bash
function createtable {
    #creates new table if table does not already exist.
    NEWTABLE=$1
    TMP=$DIR"tempfile.txt"
    #check to see that table is non-existant 
    hive -S -e "SHOW TABLES" > $TMP 
    grep -q -i $TABLENAME $TMP && echo Table already exists. Please check your tablename. ||
        hive -S -e "CREATE TABLE $NEWTABLE(
        name STRING,
        rank FLOAT
    )
    row format delimited fields terminated by ',' lines terminated by 'n'"
}
TABLENAME=EXAMPLETABLE
createtable $TABLENAME
hive -S -e "LOAD DATA LOCAL INPATH 'tensors.txt' INTO TABLE $TABLENAME"
```

This function will only create a new table if the table does not already exist.

Want to go faster? Let's run pieces of this script via Impala. We don't have to make major alterations to our bash script; most HiveQL SELECT and INSERT statements run unmodified in Impala. Impala does not currently support CREATE statements, so we must CREATE in Hive. To be safe, we will run REFRESH in the impala-shell so that it reflects all recent changes.

The equivalent of

```
hive -S -e "SHOW TABLES" > $TMP
```

in Impala is

```
impala-shell -B --quiet -q "SHOW TABLES" -o $TMP
```

-B returns results in plain text --quiet runs impala-shell in quiet mode -q runs the following string as an external query

The entire script looks like this:

```
#!/bin/bash
function createtable {
    #creates new table if table does not already exist.
    NEWTABLE=$1
    TMP=$DIR"tempfile.txt"
    #check to see that table is non-existant 
    impala-shell -B --quiet -q "SHOW TABLES" -o $TMP
    grep -q -i $TABLENAME $TMP && echo Table already exists. Please check your tablename. ||
        hive -S -e "CREATE TABLE $NEWTABLE(
        name STRING,
        rank FLOAT
    )
    row format delimited fields terminated by ',' lines terminated by 'n'"
    impala-shell --quiet -q "refresh" 
}
TABLENAME=EXAMPLETABLE
createtable $TABLENAME
impala-shell --quiet -q "LOAD DATA INPATH 'tensors.txt' INTO TABLE $TABLENAME"
```

Note that there is no LOCAL in the Impala LOAD statement. Impala does not currently support loading information from files outside of an HDFS location.

tl;dr, grep is efficient and slightly magical when implemented properly.
