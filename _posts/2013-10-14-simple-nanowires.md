---
title: "A Simple Look at Nanowire Assemblies in Optics"
date: "2013-10-14"
categories: 
  - "explanation"
  - "physics"
  - "writing"
---

Below is a quick attempt to summarize and extrapolate from an article on Optical Routing And Sensing With Nanowire Assemblies in a simple manner, without assuming the reader is deeply familiar with the esoteric lexicon of photonics and optoelectronics. I can’t freely distribute the article which inspired this post; check with your local university to find a copy. More information on the relevant article is post script.

_Disclaimer: I am a relative n00b in the material science-y side of photonics; I’ve previously played in physics at a higher level of abstraction. I attempted to keep the oversimplification to a minimum in my “simple” discussion below._

_Sidenote: I decided to include the definitions in-line rather than using footnotes. I found the use of footnotes to organize definitions very similar to spaghetti code - which I prefer to avoid._

**Enough dabbling, onto the physics!**

#### What are nanowires and nanoribbons?

A **nanowire is any wire with a diameter on the nanoscale** [order of 10^-9 meters], and **nanoribbons are structures which filter for different wavelengths of light** [colors] depending on their chemical composition and structure. These ribbons act as short-pass filters; that is, they will only allow the smaller wavelengths of any beam that is not monochromatic.

I recently came across an article exploring of the combined use of nanowires and nanoribbons. Nanowire assemblies could potentially replace/supplement lithographically [created by transferring a pattern by selective exposure to light] defined structures currently used in most integrated photonic circuits: circuits which transmit laser beams compared to electronic integrated circuits which transmit electrons.

The main advantage of using nanowire assemblies is that they stand without assistance from their substrate’s structure and they are flexible. This allows them to be manipulated on surfaces and to be used as mobile probes in fluids. This versatility contrasts with the permanent location of lithographically defined structures with respect to their substrates.

The team of physicists who published this paper experimented with the assemblies in both dry and liquid mediums. In the dry medium, they synthesized Tin-dioxide nanoribbons and manipulated the ribbons and wires with a probe under a dark-field microscope. They used both a HeCd laser [a laser which emits blue light] for continuous unfiltered light [constant stream of most colors of light] and a YAG laser [a laser which emits ultraviolet light] for pumped pulsing; laser pumping is a technique used here to create or amplify laser beams. They ran the laser beams through various nanowire assemblies [photonic circuit configurations] and measured the transmission efficiency by comparing the output intensity of the lasers to the input intensity.

* * *

_Nanowire assemblies have unpredictable geometries; this introduces uncertainty into the functionality of their assemblies. Additionally, the precise geometry definable in lithography allows for less interwire coupling losses._

* * *

#### Photonic & Electronic Integrated Circuits

Let’s look at an alternative to lithographically (i.e., created by transferring a pattern by selective exposure to light) defined structures: optical integrated circuits.

Specifically, we’ll examine the **usage of single-crystalline nanoribbons**, useful because of their lack of edge effects. These edge effects, usually due to grain boundaries (defects in the crystal structures) cause significant loss of efficiency in the transmission of optical signals. Using far field microscopy and spectroscopy, the waveguiding behavior of individual nanoribbons can be observed in detail. The size of any given nanoribbon can be inferred from the color of it’s guided photoluminescence; large ribbons are white (less filtering), while smaller ribbons are blue (short-pass filtering). Waveguides are used in optics to transmit light and signals for long distances and with a high signal rate. The team [0] experimented with light injection into a ribbon cavity. **Optical cavities are arrangements of mirrors that provide a type of filter for injected light**. Light confined in an optical cavity will reflect multiple times and interfere with itself to filter for desired frequencies by eliminating undesirable frequencies by means of destructive interference. Various **coupling geometries** are usually tested using near-field optical microscopy (NSOM). For example, the quantification of the transmission loss of long straight ribbons using NSOM results in the finding that these single-crystalline ribbons had substrate-induced radiation loss and in some cases, imperfect single-crystalline leading to minor scattering crystal steps. However, this percentage of loss in the light’s amplitude is acceptable for use in sub-micrometer light-transmission (used in integrated planar photonic applications).

Nanowire light sources can be successfully coupled to ribbon waveguides to create input and output for future photonic devices. Most research into developing nanowire photonic circuitry explores _various nanoribbon bondings, various ribbon geometries_ and especially focuses on the _efficacy and efficiency_ of this alternative to electrical integrated circuits in the hope of proving that photonic integrated circuits have the potential to supplement and possibly overtake today’s electronically based circuitry.

Practical devices will require a combination of electrically driven nanowire light sources and nanoribbons: **the next generation of integrated circuits will likely be a combination of parallel electrical and optical circuit elements.** The main problem to overcome is developing better ways to integrate optical and electrical circuit elements for the **parallel processing of electron and photon based signal transmission**.

#### Sources Cited

0] Sirbuly, D. J. (2005). Optical Routing And Sensing With Nanowire Assemblies. Proceedings of the National Academy of Sciences, 102(22), 7800-7805. 1] Law, M. (2004). Nanoribbon Waveguides For Subwavelength Photonics Integration. Science, 305(5688), 1269-1273.
