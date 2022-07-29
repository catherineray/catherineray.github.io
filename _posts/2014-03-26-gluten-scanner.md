---
title: "Reframing the Gluten Scanner"
date: "2014-03-26"
categories: 
  - "explanation"
  - "research-projects"
---

A lesson that every scientist (or any person in a fast-paced creative field) learns: **be glad when we find out that our research idea has already been done**.

The situation can be re-framed as follows:

1. It’s awesome that there are others working just as hard as you to better the world.
2. Reassurance that you’re not idiotic.
3. You can now devote your precious time to developing your other projects.

I learned this lesson in 2011. After proving myself competent by assisting others in the lab (George Washington University Robotics Lab, Positronics Division), I was encouraged to pursue an independent research project using the PR2 as the research platform. I excitedly came up with a list of ideas, then grew progressively more disappointed as I proceeded to research each idea further. In the crowded lab, I said aloud, “It seems that almost every project I come up with has either already been proposed or wouldn’t be funded”. To which the senior engineer in the lab (whom had not spoken to me before) responded, “Welcome to science!”.

_Sidenote: I ended up programming the PR2 to autonomously navigate and complete a task using only force proprioception._

One of the main projects that I’ve been working on is a gluten scanner.

The scanner **allows those with food allergies to avoid accidentally poisoning themselves**. This is done in one of two ways:

## Raman Spectroscopy Method

- Identify the minima and maxima on the absorption spectrum of a given protein (currently gluten) with a 1D array of IR / Vis lasers and an Avalanche photodiode Si(c).
- Perform differential data analysis to determine if the food is contaminated.

This scanner would be able to analyse the food ~>1cm in depth without effecting the food, whereas (if desired) taking a small sample out of the food at an opportune sampling point allows for deeper results.

Originally planning on taking spectroscopic approach, I found that it was _incredibly noisy_ (see below) to detect gluten in a vinegar solution [gluten is insoluble in water], let alone amongst protein rich food!

[![](/wp-content/uploads/2014/03/20140315_090810.jpg)](/wp-content/uploads/2014/03/20140315_090810.jpg)

[![](/wp-content/uploads/2014/03/20140315_090845.jpg)](/wp-content/uploads/2014/03/20140315_090845.jpg)

[![](/wp-content/uploads/2014/03/20140315_091009.jpg)](/wp-content/uploads/2014/03/20140315_091009.jpg)

[![](/wp-content/uploads/2014/03/20140315_091035.jpg)](/wp-content/uploads/2014/03/20140315_091035.jpg)

Thank you, Sunnyvale Biocurious, for training Paul on the spectrophotometer!

Realizing the specificity of the antigen-binding sites on antibodies, I came up with the following biomarker approach to significantly increase the accuracy of my device.

## Biomarker Method

Gluten is a protein composite of gliadin and glutenin (stuck together with a starch). G12 and A1 are [antibodies that bind to gliadin](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0002294) (a highly immunotoxic [33-mer peptide](http://en.wikipedia.org/wiki/Gluten_immunochemistry)).

Although A1 has a higher sensitivity to gluten (0.33ppm) than G12 (0.5ppm), most Celiac patients have a 20ppm poisoning threshold (far below both thresholds). G12 is far less expensive, and thus the better option for regular consumer use if you aren’t willing to synthesize your own antibodies in bulk.

Anti-gliadin antibodies can be paired with a colorimetric assay to form a biomarker-based detector in the form of: a toothpick-sized detector to poke into food || the gluten-detecting equivalent of litmus strips.

<table style="float: left;" cellspacing="0" cellpadding="0"><tbody><tr><td style="text-align: center;"><a style="clear: left; margin-bottom: 1em; margin-left: auto; margin-right: auto;" href="/wp-content/uploads/2014/03/g12_270.png"><img src="/wp-content/uploads/2014/03/g12_270.png" alt="" border="0"></a></td></tr><tr><td style="font-size: 13px; text-align: center;"><b>G12</b> (Image credit: PDB)</td></tr></tbody></table>

In the past few days, I found that there are a set of devices, [GlutenTox](http://glutentox.com/), which use my planned approach. Since this realization, I’ve also come across [6sensorlabs](http://www.6sensorlabs.com/), and the [TellSpec](http://tellspec.com/).

It seems to me that these solutions are not cost-effective enough to be sustainable for daily use. This is likely because antibodies are expensive unless you bulk synthesize them.
