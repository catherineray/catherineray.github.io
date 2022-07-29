---
title: "Neuroprosthetic Sensing Hardware"
date: "2014-06-11"
categories: 
  - "explanation"
  - "research-projects"
---

#### Diving Into Neuroprosthetics

For the past 7 months, I explored the improvement of current assistive mobility devices. I’ve recently [open-sourced my designs](/priiime/).

Last month, with the freedom provided by the $100K [Thiel fellowship](http://en.wikipedia.org/wiki/Thiel_Fellowship), I realized that I had the opportunity to work on **projects with higher technical risk**.

This understanding led me to dive into neuroprosthetic research, driven by the goal of understanding the human brain and processing coupled with the goal to create neuroprosthetics with the **control and dexterity comparable to natural movements and lifetime usability.**

I began by improving the speed of learning and diversity of movement in prosthetics by **automatically optimizing algorithm convergence** during closed-loop training.

As I examined decoder optimizations to deal with the noisy data sets collected from most sensor arrays, I realized that the **blow resolution sensing methods** currently employed **are a barrier** to implementing optimally functional and elegant algorithmic solutions.

With respect to **accurate sensing** for accurate neuroprosthetics, **optical recording** seems to be the superior alternative to an [electrode array](https://www.llnl.gov/news/newsreleases/2014/Jun/NR-14-06-03.html?utm_content=buffer332f0). Reading through the [publications](http://syntheticneurobiology.org/publications/publicationdetail/219/25) of the [Synthetic Neurobiology Group at MIT](http://syntheticneurobiology.org/) sparked a crazy **idea for high resolution imaging of individual synapse activity**.

#### Neuroprosthetic Application of Sensing Hardware

Using accurate 3D images which capture the state of a sparse set of synapses to train control signal classifiers to automatically learn the structural connections that create natural movement is a huge leap to achieving the goal of optimally functional prosthetics.

Accurate sensing extends far beyond prosthetics by advancing medical imaging for diagnosis, monitoring and research!

#### Proposal

_tl;dr Place sensors in synapses to identify the 3D coordinates of firing synapses._

Semi-permanent **localized deposition** of **florescent voltage sensor** to **neuromuscular junction**

[![](/wp-content/uploads/2014/06/Screenshot-from-2014-06-12-16-42-32.png)](/wp-content/uploads/2014/06/Screenshot-from-2014-06-12-16-42-32.png)

[![](/wp-content/uploads/2014/06/Screenshot-from-2014-06-12-15-06-02.png)](/wp-content/uploads/2014/06/Screenshot-from-2014-06-12-15-06-02.png)

\(Rightarrow\) **monitoring** myocyte **activity** with a compact **infared light field microscope** with CMOS to record.

[![](/wp-content/uploads/2014/06/Screenshot-from-2014-06-12-15-06-10.png)](/wp-content/uploads/2014/06/Screenshot-from-2014-06-12-15-06-10.png)

Technical Q&A

#### What are the florescent options? || How do we attach the voltage sensor?

Any internal device must be “biocompatible” (causes no foreign body response from the host) and “bioresistant” (remains unaffected by the host environment).

**0. Capped quantum dots**

**Basic Explanation** A quantum dot is basically a really small (nanoscale) semiconductor, which means that it exhibits awesome properties. The property that we care about is easily detectable fluorescence. The cool thing is that the color the quantum dot emits is just a function of how big the dot is. For example: if I shine a red laser at a certain kind of dot, it emits a blue light!

**Main Concerns**

A biocompatible polymer is a “plastic” tolerated by living organisms; our implantable solid must have material or coatings that are tolerated by the body to suppress connective tissue reactions. [Polyethylene glycol](https://en.wikipedia.org/wiki/Polyethylene_glycol) H-(O-CH2-CH2)n-OH enhances biocompatibility. The main concerns with long term usage of QDs intravenously are poisoning and the efficacy of the junction. [Recent advances in lessening the cytoxicity (toxicity to cells) of QDs were achieved by encapsulating the QDs in polymer.](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0022079) The polyethelene glycol coating lessens contact with and uptake from cells, and reduces cadmium leakage. However, this particular method uses microencapsulation, which creates a bundle too large to fit in the 30nm synapse junction. Conjugating [CdSe-ZnS QDs to bridging proteins](http://www.nrl.navy.mil/nanoscience/quantumdots.php), we can exhibit target specificity for localized binding.

**1. Less toxic biosensors such as potentiometric dye** **2. Stable non-reactive genetically encoded molecules** I’ve not ruled out incorporating an electrosensitive fluorescing dye (such as ASAP1) via liposome (outfitted with the appropriate SNARE protein) into the lipid membrane of the neuromuscular junction. [These authors transfect the neuron](http://www.nature.com/neuro/journal/v17/n6/full/nn.3709.html); reasonably, we can enclose the plasmid for ASAP1 in a liposome to avoid denaturing.

For continuous monitoring, I’m interested in exploring [FRET based fluorescing](http://www.nrl.navy.mil/nanoscience/files/nanooptics_poster2.pdf) between a donor and an array of dye-labeled protein acceptors.

Area of concern: isolating a neuronal population for imaging.

#### How do we see through skin?

Infared light field microscopy paired with [near infared flourescent proteins for deeper tissue imaging](http://www.biotechniques.com/news/Near-infrared-Fluorescent-Proteins-for-Deeper-Tissue-Imaging/biotechniques-345319.html).

#### What is [light field microscopy](http://graphics.stanford.edu/software/LFDisplay/lfmintro/)?

**A technique which allows for an instantaneous 3D image at micron resolution.** I suggest you fully appreciate the beauty of this technology by watching this [2-minute fantastic explanation of the concept](https://www.youtube.com/watch?v=3c--nNVx85s).

<table style="margin-left: auto; margin-right: auto; text-align: center;" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="text-align: center;"><a style="margin-left: auto; margin-right: auto;" href="/wp-content/uploads/2014/06/Screenshot-from-2014-06-11-16-30-25.png"><img src="/wp-content/uploads/2014/06/Screenshot-from-2014-06-11-16-30-25.png" alt="" width="320" height="302" border="0"></a></td></tr><tr><td style="text-align: center;"><a href="http://syntheticneurobiology.org/publications/publicationdetail/219/25">Image Source</a></td></tr></tbody></table>

The most compact Light Field Microscope is currently:

<table style="margin-left: auto; margin-right: auto; text-align: center;" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="text-align: center;"><a style="margin-left: auto; margin-right: auto;" href="/wp-content/uploads/2014/06/MobileLFM2.jpg"><img src="/wp-content/uploads/2014/06/MobileLFM2.jpg" alt="" width="402" height="640" border="0"></a></td></tr><tr><td style="text-align: center;"><a href="http://graphics.stanford.edu/projects/lfmicroscope/">Image Source</a></td></tr></tbody></table>

#### Why use light field microscopy?

Light field microscopy allows us to capture a whole volume with one snapshot (without scanning in space). allows for volumetric imaging of larger areas [(~700um x 700um x 200um)](http://vaziria.com/?page_id=1047) at single neuron resolution. This is done by placing a microlens array in the native image plane such that sensor pixels capture the rays of the [light field simultaneously](http://vaziria.com/?page_id=1047).)

#### How do we make this compact? 

Fresnel zone plates! Instead of using refraction and reflection like lenses and curved mirrors, zone plates use diffraction.

[![Sec4421](/wp-content/uploads/2014/06/Sec4421-300x255-1.jpg)](/wp-content/uploads/2014/06/Sec4421-300x255-1.jpg)

A zone plate consists of a set of radially symmetric rings, known as Fresnel zones, which alternate between opaque and transparent. Light hitting the zone plate will diffract around the opaque zones. The zones can be spaced so that the diffracted light constructively interferes at the desired focus, creating an image there. [[Source]](https://en.wikipedia.org/wiki/Zone_plate)

On an unrelated note: we can make a compact lensless microscope utilizing [optofluidic microscopy](http://www.esm.psu.edu/wiki/_media/research:juh17:publication:xmao_lc_2007_1.pdf) and [Fresnel Zone Plates!](http://en.wikipedia.org/wiki/Zone_plate)

“An **optofluidic microscopy system** consists of three parts:

- an array of apertures patterned on a metal-coated linear array sensor
- a microfluidic channel emplaced on the aperture array such that the aperture array spans the channel floor in a skewed pattern
- a uniform light field projected through the microfluidic channel to the aperture array

As a sample flows through the channel and across each aperture, it interrupts light transmission through the aperture. Each transmission time trace in effect represents a **line scan across the object**. By ensuring that the microfluidic channel is arranged such that the separation of adjacent apertures perpendicular to the channel flow axis is smaller than the aperture diameter, each point on the sample is scanned. By compiling all of the line scans appropriately, we can create a microscopy image of the sample in which the resolution is fundamentally limited by the aperture size.

This lensless design allows us to build highly compact and high-resolution microscope systems with commercially available CMOS and CCD sensor chips. [[Source](http://www.biophot.caltech.edu/publications/pdf/Wu-OE-2008-Fresnel.pdf)]
