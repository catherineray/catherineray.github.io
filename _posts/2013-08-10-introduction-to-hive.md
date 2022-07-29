---
title: "Introduction to Hive"
date: "2013-08-10"
categories: 
  - "code"
  - "explanation"
---

Let's say we have a plain text file, erdos.txt, with the following contents:

```
Paul Erdos 0
Chris Godsil 1
Leo Moser 1
Hanfried Lenz 2 
```

Let's make a table to query this information in HiveQL, using the appropriate types*:

```
hive> CREATE TABLE erdos (
    > firstname STRING, 
    > surname STRING, 
    > number INT)
    > row format delimited fields terminated by '40' lines terminated by 'n'; 
```

Currently, we must use '40' to represent a space. It is hive-friendly to use the octal number corresponding to the character (in our case, a single space) that is our field terminator.

Let's load our data into our shiny new table.

```
hive> LOAD DATA LOCAL INPATH 'erdos.txt'
    > INTO TABLE erdos; 
```

Sweet! We've populated the erdos table. Let's make another one with comments corresponding to a given Erdos number, and an equation that generates said number!

This file, cool.txt, looks like this:

```
0,HOLY CRAP YOU ARE ERDOS,e^(i*pi) + 1
1,What did Erdos smell like?,i^2
2,I will bet you put that in your resume,(1+i)(1-i)
```

Let's make the table...

```
hive> CREATE TABLE cool (
    > number INT, 
    > comment STRING 
    > fact STRING)
    > row format delimited fields terminated by ',' lines terminated by 'n';
```

Let's get the firstname and comment from these tables.

```
hive> SELECT erdos.firstname, cool.comment         
    > from cool join erdos   
    > on cool.number = erdos.number;
```

```
Paul HOLY CRAP YOU ARE ERDOS
Chris What did Erdos smell like?
Leo What did Erdos smell like?
Hanfried I will bet you put that in your resume
```

I want to add another entry to the erdos table for Ronald Graham. But I forgot what attributes I have in the erdos table.

```
DESCRIBE erdos;
OK
firstname    string    
surname    string    
number    int  
```

Okay, now I know to insert the information for Graham in this format: `Ronald Graham 1` Unlike Impala, the syntax

```
INSERT INTO erdos VALUES ("Ronald", "Graham", "1")
```

is not currently supported in Hive. If we don't want to switch to the imapala-shell, we have other options to get the job done**.

Let's rerun the join query.

```
Paul HOLY CRAP YOU ARE ERDOS
Chris What did Erdos smell like?
Leo What did Erdos smell like?
Hanfried I will bet you put that in your resume
Ronald What did Erdos smell like?
```

Okay, cool. Ronald is included. I want to partition our erdos table by whether the person is alive or dead. An easy way to do this is to separate the lines corresponding to the live and dead people into two different files. (If you love making things more autonomous than necessary as much as I do, you can write a Java program to scrape Wikipedia to see if a given person was dead or not, and a bash script to transfer lines from erdos.txt into dead.txt and alive.txt appropriately. I encourage you to write this class-script combo; I may reveal mine in a later post. [More info on partitioning tables with Hive](http://blog.zhengdong.me/2012/02/22/hive-external-table-with-partitions).)

We now have two files: dead.txt

```
Paul Erdos 0
Leo Moser 1
Hanfried Lenz 2
```

alive.txt

```
Chris Godsil 1
Ronald Graham 1
```

Let's drop the current erdos table and create a partitioned table.

```
hive> DROP TABLE erdos;
```

```
hive> CREATE TABLE erdos (
    > firstname STRING, 
    > surname STRING, 
    > number INT)
    > PARTITIONED BY (exists BOOLEAN)
    > row format delimited fields terminated by '40' lines terminated by 'n';
```

Then, load the each file into its corresponding partition.

```
hive> LOAD DATA LOCAL INPATH 'dead.txt'
    > OVERWRITE INTO TABLE erdos
    > PARTITION (exists=false);
```

```
hive> LOAD DATA LOCAL INPATH 'alive.txt'
    > INTO TABLE erdos
    > PARTITION (exists=true);
```

Did it work? Let's check...

```
hive> show partitions erdos;
OK
exists=false
exists=true
```

We can see that the partition is treated as an attribute of the erdos table.

```
hive> DESCRIBE erdos;                      
OK
firstname    string    
surname    string    
erdos    int    
exists    boolean
```

That's all for today folks. I'll end with [the types currently supported by Hive.](http://www.google.com/url?sa=t&rct=j&q=typs%20hive&source=web&cd=1&ved=0CC8QFjAA&url=https%3A%2F%2Fcwiki.apache.org%2FHive%2Flanguagemanual-types.html&ei=1wQHUv2RLdGgyAGdqYGYAg&usg=AFQjCNFbSxAqgTsa-zlQiIqNH-ClZ4Ll8g&sig2=RFS2rV_EjKMfe6-lVjkayg&bvm=bv.50500085,d.aWc)

*

Numeric Types

- TINYINT
- SMALLINT
- INT
- BIGINT
- FLOAT
- DOUBLE
- DECIMAL (Note: Only available starting with Hive 0.11.0)

Date/Time Types

- TIMESTAMP (Note: Only available starting with Hive 0.8.0)
- DATE (Note: Only available starting with Hive 0.12.0)
- Misc Types
- BOOLEAN
- STRING
- BINARY (Note: Only available starting with Hive 0.8.0)

Complex Types

- arrays: ARRAY<data_type>
- maps: MAP<primitive_type, data_type>
- structs: STRUCT<col_name : data_type [COMMENT col_comment], ...>
- union: UNIONTYPE<data_type, data_type, ...>

**

(1) Put 'Ronald Graham 1' into a file, temp.txt, and load that file.

```
hive> quit;
echo Ronald Graham 1 > temp.txt
hive> LOAD DATA LOCAL INPATH 'temp.txt'
    > INTO TABLE erdos;
```

(2) Replace the file 'erdos.txt' with 'Ronald Graham 1'

```
hive> quit;
echo Ronald Graham 1 > erdos.txt
hive> LOAD DATA LOCAL INPATH 'erdos.txt'
    > INTO TABLE erdos;
```

(3) Append 'Ronald Graham 1' to erdos.txt and reload the entire file.

```
hive> quit;
echo Ronald Graham 1 >> erdos.txt
hive> LOAD DATA LOCAL INPATH 'erdos.txt'
    > OVERWRITE INTO TABLE erdos;
```

I prefer method 3 for small files.
