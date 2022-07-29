---
title: "HackMIT: Polyglass"
date: "2013-11-23"
categories: 
  - "code"
  - "explanation"
  - "python"
  - "research-projects"
---

I attended HackMIT 2013 and had an absolute blast! [Kartik Talwar](http://kartikt.com/), [Spencer Hewett](http://www.skip.it/) and I make a fantastic team.

<table style="float: left; margin-right: 1em; text-align: left;" cellspacing="0" cellpadding="0"><tbody><tr><td style="text-align: center;"><a style="clear: left; margin-bottom: 1em; margin-left: auto; margin-right: auto;" href="/wp-content/uploads/2013/11/1276792_171475009724450_1263927176_o.jpg"><img src="/wp-content/uploads/2013/11/1276792_171475009724450_1263927176_o.jpg" alt="" width="640" height="426" border="0"></a></td></tr><tr><td style="text-align: center;">Photo by Kevin Yiming Chen © Copyright 2013 Kevin Yiming Chen</td></tr></tbody></table>

In the turmoil that followed the hackathon (taking a weekend off of schoolwork and research has consequences), it slipped my mind to post our project!

We created [Polyglass](http://hackmit.challengepost.com/submissions/18034-polyglass). **A Google Glass application that analyzes the video in slow motion using the Eulerian magnification algorithm to calculate the human pulse from a video frame in quasi-real-time.** Using video alone, we achieve the same functionality as a polygraph.

The picture below is a demo of our project; it compares the original video frame to the frame processed by Eulerian Magnification. This processing is an implementation of the Eulerian Magnification framework [published by MIT](http://people.csail.mit.edu/mrub/vidmag/).

[![](/wp-content/uploads/2013/11/Screen-shot-2013-11-23-at-3.56.25-PM.png)](/wp-content/uploads/2013/11/Screen-shot-2013-11-23-at-3.56.25-PM.png)

Portions of our source are on [Kartik’s github](https://github.com/KartikTalwar/PolyGlass).
