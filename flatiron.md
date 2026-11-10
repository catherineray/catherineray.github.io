---
layout: page
title: "Flatiron, for my letter writers"
permalink: /flatiron/
sitemap: false
noindex: true
comments: false
---

<style>
  .fl-btns { display: flex; flex-direction: column; gap: 22px; margin: 28px 0 40px; }
  .fl-btn { display: block; text-decoration: none !important; color: #1b1b1b !important; border: 3px solid #1b1b1b; border-radius: 22px; padding: 16px 24px; box-shadow: 5px 5px 0 #1b1b1b; transition: transform .12s, box-shadow .12s; }
  .fl-btn:hover { transform: translate(-2px, -2px) rotate(-.6deg); box-shadow: 8px 8px 0 #1b1b1b; }
  .fl-btn b { display: block; font: 400 clamp(18px, 2.6vw, 26px) 'Archivo Black', sans-serif; letter-spacing: .03em; text-transform: uppercase; }
  .fl-btn span { display: block; font: 400 14px 'Space Mono', monospace; margin-top: 4px; }
  .fl-btn.static { cursor: default; }
  .fl-btn.static:hover { transform: none; box-shadow: 5px 5px 0 #1b1b1b; }
  .fl-pair { display: flex; flex-wrap: wrap; gap: 18px; }
  .fl-pair .fl-btn { flex: 1 1 240px; }
  .fl-ccm li { margin-bottom: .35em; }
  .fl-ccm summary { cursor: pointer; font-size: 1.15em; margin-bottom: .6em; }
  .fl-mine { background: rgba(238, 95, 212, .22); padding: 0 4px; border-radius: 4px; }
  @media (prefers-reduced-motion: reduce) { .fl-btn { transition: none; } }
  .fl-help { border: 3px solid #1b1b1b; border-radius: 16px; box-shadow: 4px 4px 0 #1b1b1b; background: #fff6b0; padding: 12px 18px 4px; margin: 18px 0 26px; }
  .fl-help table { width: 100%; border-collapse: collapse; margin: 8px 0 12px; font-size: .95em; }
  .fl-help th, .fl-help td { text-align: left; vertical-align: top; padding: 7px 8px; border-top: 1px solid rgba(27,27,27,.25); }
  .fl-help th { font-family: 'Space Mono', monospace; font-size: .8em; text-transform: uppercase; letter-spacing: .05em; }
  .fl-help td:first-child { white-space: nowrap; font-weight: 600; }
  @media (max-width: 640px) { .fl-help td:first-child { white-space: normal; } }
</style>

Thank you for writing for me. Everything for my Flatiron application is here, with Lawrence Saul as proposed mentor.

<div class="fl-btns">
  <a class="fl-btn" style="background:#ee5fd4" href="/pdfs/RinRay-CV-Science.pdf"><b>1 · Science CV</b><span>PDF, four pages</span></a>
  <a class="fl-btn" style="background:#b9a3ef" href="/flatiron/project/"><b>2 · The project</b><span>the two questions, the model, the math with Lawrence Saul's group, and the potential broader impact</span></a>
  <div class="fl-btn static" style="background:#fbe919"><b>3 · Research statement</b><span>to follow this week; the project page covers the same ground</span></div>
  <a class="fl-btn" style="background:#7fd8e8" href="/about/#about-lab"><b>4 · What I've done</b><span>the Lab, on my About page</span></a>
  <a class="fl-btn" style="background:#9be38a" href="/pdfs/teaching-statement.pdf"><b>5 · Teaching and community</b><span>my teaching statement, PDF</span></a>
</div>

## The application

Flatiron has separate centers. My project sits in the **Center for Computational Mathematics (CCM)** for the inference, and its biology could sit in one of two others: the **Center for Computational Biology (CCB)** or the **Center for Computational Neuroscience (CCN)**. I have asked Lawrence which would be the natural partner.

Lawrence suggested a joint application. A joint application is two separate applications, one to each center, and each center has its own deadline and requirements:

- **CCM**: due **15 November**. Research statement up to 4 pages, three letters, and the name of a CCM mentor.
- **CCB**: due **30 November** (recommended). Research statement up to 3 pages, including synergies with CCB; a cover letter summarizing my most significant contributions in graduate school; two letters.
- **CCN**: rolling. Research statement up to 3 pages, including relevance to CCN; a cover letter naming the research group(s); at least two letters.

The biology has two sides. The genetic side asks whether the shared latent state carries the association with autism genetic risk in SPARK and SSC, more than the domain-specific factors do; it builds on work from CCB's Genomics group, led by Olga Troyanskaya. The mechanistic side asks what makes the hypersensitive state persist, a question about adaptation dynamics, closer to CCB's Statistical Biophysics group or to CCN.

<details class="fl-ccm" markdown="1">
<summary><b>What CCM is looking for</b></summary>

- **Research areas.** Numerical analysis; machine learning, especially optimization, learning theory, <span class="fl-mine">probabilistic modeling</span>, deep learning, high-dimensional data analysis and scientific applications; <span class="fl-mine">statistical methodology, modeling and inference</span>; computational biophysics and imaging; high-performance computing and open-source software.
- **Qualifications.** "Ability to do original and outstanding research in one of our areas of interest, both independently and collaboratively in a multidisciplinary environment," and effective oral and written communication.
- **What fellows are expected to do.** Run an independent research program, with mentoring from one or more CCM scientists; collaborate across Flatiron's centers; take part in seminars and workshops; mentor summer students; publish, and possibly release open-source software.

</details>

<details class="fl-ccm" markdown="1">
<summary><b>What CCB Genomics is looking for</b></summary>

- **Research areas.** Led by Olga Troyanskaya, the group works on genome interpretation and the molecular and regulatory networks underlying human biology and disease: deep learning for regulatory genomics and variant interpretation; foundation models and representation learning; <span class="fl-mine">multi-omic, single-cell, spatial, phenotypic and clinical data integration</span>; ML for network modeling and regulatory module detection.
- **Qualifications.** Original and outstanding research in computational biology; AI/ML methods for biology, such as <span class="fl-mine">disease biology or genotype–phenotype studies</span>; analysis and integration of large genomic, clinical or phenotypic datasets; scientific software; working with experimentalists; strong communication and mentorship.
- **How they choose.** Past research, the proposed program, synergy with CCB, and potential to cross boundaries between CCB groups and other Flatiron centers.

</details>

<details class="fl-ccm" markdown="1">
<summary><b>What CCB Statistical Biophysics works on</b></summary>

- **Research areas.** Biological phenomena through statistical physics and stochastic dynamical systems: the dynamics of biochemical networks in <span class="fl-mine">signal transduction, adaptation</span> and synchronization, and of neural circuits for encoding, computation and learning; <span class="fl-mine">inference of biological networks from experimental data</span>; the energetic costs of information processing.

</details>

<details class="fl-ccm" markdown="1">
<summary><b>What CCN is looking for</b></summary>

- **Research groups.** Neural circuits and algorithms (Chklovskii); high-dimensional dynamics and computation (Clark); building biological intelligence (Pearson); computational vision (Simoncelli); information processing in biological networks and AI (Tu); <span class="fl-mine">statistical analysis of neural data</span> (Williams).
- **Qualifications.** Strong quantitative skills with a flexible multidisciplinary mindset; strong interest and experience in the scientific study of the brain; analytical calculations, software and algorithm development, modeling or simulation; working independently and collaboratively.

</details>
