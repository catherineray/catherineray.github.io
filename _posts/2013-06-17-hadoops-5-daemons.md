---
title: "Hadoop’s 5 Daemons"
date: "2013-06-17"
categories: 
  - "art"
  - "explanation"
---

At work the other day, I was reading about Hadoop’s 5 daemons. The information wasn’t quite clicking, so I drew a picture to cement the concepts into my mind. (I’ve checked that all information regarding Hadoop in this blogpost is publicly available.)

[![](/wp-content/uploads/2013/06/hadoop.jpg)](/wp-content/uploads/2013/06/hadoop.jpg)

[In words:](http://www.fromdev.com/2010/12/interview-questions-hadoop-mapreduce.html) Hadoop is comprised of five separate daemons. Each of these daemon runs in its own JVM. The following 3 Daemons run on Master nodes:

- NameNode - This daemon stores and maintains the metadata for HDFS.
- Secondary NameNode - Performs housekeeping functions for the NameNode.
- JobTracker - Manages MapReduce jobs, distributes individual tasks to machines running the Task Tracker.

The following 2 Daemons run on Slave nodes:

- DataNode – Stores actual HDFS data blocks.
- TaskTracker - Responsible for instantiating and monitoring individual Map and Reduce tasks.
