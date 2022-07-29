---
title: "Coupled Oscillator Love"
date: "2013-11-06"
categories: 
  - "explanation"
  - "math"
  - "physics"
---

Disclaimer: This informal post assumes you are familiar with basic photonics and applied chaos theory.

Unfortunately, “chaos” has become a buzz word. Instead of using chaos as an umbrella term, I will use chaos to mean chaotic parameter driving (because that’s the cool stuff)! There is synchronized chaos.

Lasers are nonlinear oscillators - their behavior can be periodic or chaotic. You can sync two lasers operating in a chaotic state!

[![Coupled_oscillators](/wp-content/uploads/2013/11/Coupled_oscillators.gif)](/wp-content/uploads/2013/11/Coupled_oscillators.gif)

[Source](http://en.wikipedia.org/wiki/Oscillation)

If we place two lasers such that their beams are parallel and separated by a small distance \(dx\), the beams themselves will not overlap. For a small enough \(dx\), their electric fields do! This direct physical coupling of the two lasers is enough to induce sync!

You can also sync a bunch of different electronic circuits with linear error feedback coupling. Chua’s circuit is a freaking sweet combination of a chaotic electronic circuit and an optoelectronic chaotic oscillator. You can couple Chua’s circuit with a plasma discharge tube (Chua’s circuit produces the HV DC current require to power/sync with the discharge tube). Even though the systems are **physically different** they **couple anyway**! And that, my friends, is a wonderful demonstration of the beauty of math.
