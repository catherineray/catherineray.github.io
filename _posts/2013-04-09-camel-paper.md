---
title: "CAMEL paper"
date: "2013-04-09"
categories: 
  - "camel"
  - "papers"
---

I used Braille as a test language, but this is a framework to automate the decoding of any partially understood (ancient) language by creating probabilistic dictionaries.

I began working on CAMEL (Contextual Machine Learning Through the Analysis and Chunking of Partially Translated Grade 2 Braille) when I saw this atrocity: **the Braille below translates to “STAIRWELL”** [![stairwellmis](/wp-content/uploads/2013/04/stairwellmis.jpg)](/wp-content/uploads/2013/04/stairwellmis.jpg) Most sighted people don’t know Braille (to my dismay- the grammar is beautiful), this gave me the idea to write an **optical Braille reader app for the sighted**: the user holds their Android **camera up to a sign** and it **automatically translates the Braille into English**.

As I sat down to code this, I realized that I’d have to hard code a dictionary of Grade 2 Braille (a grammatically complex language). I have a [deep disgust for hard coding](http://xkcd.com/974/) \(\Rightarrow\) CAMEL is the **program I wrote to automate the creation of a Grade 2 Braille dictionary**. [All code used in this project is on github](https://github.com/catherineray/CAMEL).

This program is based on contextual machine learning, so I named my project CAMEL (ContextuAl MachinE Learning). The title of my paper is a mouthful, because I’m unsure of how to shorten it while maintaining clarity: [CAMEL](/wp-content/uploads/2013/04/camel.pdf)
