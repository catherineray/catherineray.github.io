---
layout: page
title: About Rin
permalink: /about/
comments_key: about-me
hide_title: true   # the ABOUT ME artwork is the heading
rail_highlights: true   # show the genre highlights in the sidebar here
rail_sections:   # listed in the sidebar under "About Rin"
  - { id: about-path, label: "THE PATH", color: "#6cc8f0" }
  - { id: about-published, label: "THE PROOFS", color: "#9b7fd4" }   # the research part: Publications & Preprints, In progress, Expository
  - { id: about-teaching, label: "TEACHING", color: "#f4a58a" }
  - { id: about-lab, label: "THE LAB", color: "#ec3f9e" }   # color matches its section title
  - { id: about-studio, label: "THE STUDIO", color: "#fffdf7" }
  - { id: about-contact, label: "CONTACT", color: "#f9a13c" }
---

<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>About — Rin Ray</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap">

<style>
  :root {
    --lilac: #d5c2ef;
    --lilac-deep: #bda4e0;
    --cream: #faf3c8;
    --pink: #ec3f9e;
    --pink-btn: #ee5fd4;   /* was #f07fe0 (Rin: in-between pink, 25 Sep) */
    --pink-btn-hot: #ec3f9e;
    --cyan: #6cc8f0;
    --orange: #f9a13c;
    --yellow: #fbe919;
    --violet: #9b7fd4;
    --peach: #f4a58a;
    --ink: #1b1b1b;
    --ink-soft: #4a3a63;
    --paper: #ffffff;

    --mono: 'Space Mono', 'Courier New', Courier, monospace;
    --text: 'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif;   /* reading text (site-wide rule) */
    --display: 'Archivo Black', 'Helvetica Neue', Impact, sans-serif;
  }

  html, body { background: var(--lilac); }

  body {
    margin: 0;
    font-family: var(--text);
    color: var(--ink);
    -webkit-font-smoothing: antialiased;
  }

  a { color: var(--ink); text-decoration-color: var(--pink); text-decoration-thickness: 2px; text-underline-offset: 3px; }
  a:hover { background: var(--yellow); }
  a:focus-visible { outline: 3px dashed var(--ink); outline-offset: 3px; }
  /* links should look like links: the original site green (#006358), thick underline; titles get an arrow; outside links a ↗ */
  #main a:not(.chip):not(.cv) { color: #006358; text-decoration: underline; text-decoration-color: currentColor; text-decoration-thickness: 2px; text-underline-offset: 3px; font-weight: 700; }
  #main a:not(.chip):not(.cv):hover { color: var(--ink); background: var(--yellow); text-decoration-color: var(--ink); }
  #main h3 > a:not(.chip)::after, #main h4 > a:not(.chip)::after { content: " →"; text-decoration: none; display: inline-block; margin-left: .15em; }
  #main .chip { cursor: pointer; }
  #main a.chip[href^="http"]::after { content: " ↗"; }
  #main .chip.code { background: var(--ink); color: #faf3c8; }
  #main .chip.code::before { content: "‹/› "; color: var(--cyan); }
  #main .chip.code:hover { background: var(--yellow); color: var(--ink); }
  #main .chip.code:hover::before { color: var(--ink); }
  .code-row { margin-top: 1.4rem; }

  /* hero */

  .stage {
    position: relative;
    width: min(92vw, 700px);
    aspect-ratio: 671 / 819;
    margin: 0 auto calc(min(92vw, 700px) * -0.12);   /* the drawing area runs taller than its contents; pull THE PATH up a little */
    padding-block: 0;
  }
  .stage > * { position: absolute; }
  /* the stage overhangs the "Here for…" row below it; let clicks through its empty corners */
  .stage { pointer-events: none; }
  .stage > * { pointer-events: auto; }

  .title {
    left: 7%;
    top: 3.5%;
    margin: 0;
    font-family: var(--display);
    font-size: clamp(2.1rem, 8.2vw, 3.7rem);
    line-height: .95;
    letter-spacing: -.02em;
    color: var(--paper);
    -webkit-text-stroke: 4px var(--ink);
    paint-order: stroke fill;
    white-space: nowrap;
    isolation: isolate;
    z-index: 10;
  }

  .title::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transform: translate(7px, 7px);
    z-index: -1;
    color: var(--pink);
    -webkit-text-stroke: 4px var(--pink);
    paint-order: stroke fill;
    white-space: nowrap;
  }

  .bubble {
    left: 40%;
    top: 9.5%;
    width: 54%;
    box-sizing: border-box;
    margin: 0;
    padding: 4.5% 5.5%;
    background: var(--cream);
    border: 4px solid var(--pink);
    border-radius: 48% / 36%;
    box-shadow: 8px -8px 0 4px var(--cyan);
    font-size: clamp(.52rem, 1.73vw, .89rem);   /* same size as before the site-wide text bump; the bubble is a fixed shape */
    line-height: 1.55;
    text-align: center;
    z-index: 5;
  }
  .bubble b { font-weight: 700; }
  .bubble::after {
    content: '';
    position: absolute;
    left: 6%;
    bottom: -13%;
    width: 15%;
    aspect-ratio: 1;
    max-width: 100%;
    background: var(--cream);
    border: 4px solid var(--pink);
    border-radius: 50%;
    transform: rotate(12deg);
  }

  .spark { background: var(--orange); border-radius: 999px; z-index: 3; }
  /* slashes off the end of the title */
  .spark-a { left: 31.5%; top: 10.5%; width: 2.6%; height: 8.5%; transform: rotate(22deg);  }
  .spark-b { left: 36%;   top: 12.5%; width: 2.2%; height: 6.5%; transform: rotate(28deg);  }
  /* rays off the right of the bubble */
  .spark-c { left: 86%;   top: 25.5%; width: 9%;   height: 2.6%; transform: rotate(-25deg); }
  .spark-d { left: 88%;   top: 31%;   width: 7%;   height: 2.4%; transform: rotate(18deg);  }

  .photo-wrap { --slot-tilt: -2deg; left: 4%;  top: 24%; width: 26%; z-index: 4; }
  .char-wrap  { --slot-tilt: 3deg;  left: 64%; top: 51%; width: 28%; z-index: 9; }

  .burst {
    position: absolute;
    inset: -15%;
    background: var(--yellow);
    clip-path: polygon(
      50% 0%,   59% 11%,  73% 4%,   76% 20%,  91% 19%,  85% 33%,
      100% 39%, 88% 50%,  100% 63%, 84% 68%,  89% 82%,  73% 80%,
      69% 95%,  56% 87%,  46% 100%, 38% 86%,  24% 93%,  22% 78%,
      7% 79%,   12% 65%,  0% 57%,   11% 47%,  0% 36%,   13% 31%,
      8% 17%,   24% 19%,  25% 4%,   38% 12%
    );
  }
  .burst-b { inset: -15%; transform: rotate(24deg); }

  .photo-slot {
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: 170 / 205;
    max-width: 100%;
    background: var(--lilac-deep);
    border: 3px solid var(--ink);
    object-fit: cover;
    transform: rotate(var(--slot-tilt, 0deg));
  }
  .char-slot { background: var(--cyan); aspect-ratio: 160 / 190; }

  .slot-note {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8%;
    box-sizing: border-box;
    text-align: center;
    font-size: clamp(.5rem, 1.4vw, .72rem);
    line-height: 1.4;
    color: var(--ink);
    transform: rotate(var(--slot-tilt, 0deg));
    pointer-events: none;
  }

  .cv {
    --tilt: 0deg;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 2.3% 0;
    background: var(--pink-btn);
    color: var(--paper);
    font-family: var(--display);
    font-size: clamp(.72rem, 2.7vw, 1.4rem);
    letter-spacing: .01em;
    text-decoration: none;
    border: 3px solid var(--ink);
    border-radius: 999px;
    box-shadow: 6px 6px 0 var(--violet);
    transform: rotate(var(--tilt));
    transition: transform .08s ease, box-shadow .08s ease, background .12s ease;
    z-index: 7;
  }
  .cv:hover { background: var(--pink-btn-hot); }
  .cv:active {
    transform: translate(6px, 6px) rotate(var(--tilt));
    box-shadow: 0 0 0 var(--violet);
  }
  .cv:focus-visible { outline: 3px dashed var(--ink); outline-offset: 5px; }

  .cv-math  { left: 50.5%; top: 33%;   width: 28%; --tilt: -4deg; }
  .cv-other { left: 52%;   top: 41.5%; width: 28%; --tilt: -3deg; }

  .cv-art {
    width: 100%;
    margin-top: 1.6rem;
    padding: .9rem 1.2rem;
    font-size: clamp(.9rem, 3.4vw, 1.3rem);
    text-align: center;
    --tilt: -1deg;
  }

  .card {
    left: 5.5%;
    top: 53.5%;
    width: 57%;
    box-sizing: border-box;
    padding: 5% 5.5%;
    background: var(--paper);
    border: 3px solid var(--ink);
    border-radius: 16px;
    box-shadow: 8px 8px 0 var(--orange);
    font-size: clamp(.55rem, 1.85vw, .95rem);
    line-height: 1.65;
    text-align: center;
    z-index: 6;
  }
  .card p { margin: 0 0 .85em; }
  .card p:last-child { margin-bottom: 0; }
  .card .chip { font-size: .9rem; padding: .05em .75em; margin-left: .2em; vertical-align: .1em; line-height: 1.3; }

  /* the scroll */

  .scroll {
    width: min(92vw, 700px);
    margin: 0 auto;
    padding: 2.5rem 0 1.5rem;
    box-sizing: border-box;
  }

  section { margin-bottom: 3.5rem; }
  section:last-of-type { margin-bottom: 0; }
  /* Contact is the last About section; the old-blog comments (also a <section>) follow it, so trim the gap */
  section:has(#about-contact) { margin-bottom: 0; }
  .archived-comments { margin-top: 2.5rem; }

  .sec-head {
    --shadow: var(--pink);
    --tilt: -2deg;
    position: relative;
    display: inline-block;
    margin: 0 0 1.6rem;
    font-family: var(--display);
    font-size: clamp(1.25rem, 5vw, 2rem);
    line-height: 1;
    letter-spacing: -.01em;
    color: var(--paper);
    -webkit-text-stroke: 3px var(--ink);
    paint-order: stroke fill;
    transform: rotate(var(--tilt));
    isolation: isolate;
  }
  .sec-head::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transform: translate(5px, 5px);
    z-index: -1;
    color: var(--shadow);
    -webkit-text-stroke: 3px var(--shadow);
    paint-order: stroke fill;
    white-space: nowrap;
  }

  /* prose blocks */

  .note {
    box-sizing: border-box;
    padding: 1.3rem 1.4rem;
    background: var(--paper);
    border: 3px solid var(--ink);
    border-radius: 16px;
    box-shadow: 8px 8px 0 var(--accent, var(--cyan));
    font-size: .88rem;
    line-height: 1.7;
  }
  .note p { margin: 0 0 .9em; }
  .note p:last-child { margin: 0; }
  .note-cream { background: var(--cream); }
  /* a summary that should sit back a little */
  .note-quiet { background: rgba(255, 255, 255, .55); border: 1px solid rgba(74, 58, 99, .22); border-left: 6px solid var(--accent, var(--cyan)); box-shadow: none; font-size: .84rem; color: var(--ink-soft, #4a3a63); }
  .note ul { margin: 0; padding-left: 1.2em; }
  .note li { margin: 0 0 .5em; }
  .note li:last-child { margin-bottom: 0; }

  /* fold-out section */

  /* tl;dr is the summary, the lists fold out under it. no js needed */
  .fold > summary {
    list-style: none;
    cursor: pointer;
    position: relative;
    background: var(--paper);   /* white, like the other boxes (yellow was hard to read) */
    box-shadow: 8px 8px 0 var(--pink);
    transition: transform .08s ease, box-shadow .08s ease;
  }
  .fold > summary::-webkit-details-marker { display: none; }
  .fold > summary::marker { content: ''; }
  .fold > summary:hover { transform: translate(-2px, -2px); box-shadow: 10px 10px 0 var(--pink); }
  .fold > summary:active { transform: translate(8px, 8px); box-shadow: 0 0 0 var(--pink); }
  .fold > summary:focus-visible { outline: 3px dashed var(--ink); outline-offset: 5px; }

  /* same size as .cv-art */
  .fold-cue {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;
    width: 100%;
    box-sizing: border-box;
    margin-top: 1.6rem;
    padding: .9rem 1.2rem;
    background: var(--pink-btn);
    color: var(--paper);
    font-family: var(--display);
    font-size: clamp(.9rem, 3.4vw, 1.3rem);
    letter-spacing: .01em;
    text-align: center;
    border: 3px solid var(--ink);
    border-radius: 999px;
    box-shadow: 6px 6px 0 var(--violet);
    transform: rotate(1deg);
  }
  .fold > summary:hover .fold-cue { background: var(--pink-btn-hot); }
  .fold-cue .arrow { display: inline-block; transition: transform .2s ease; }
  .fold[open] .fold-cue .arrow { transform: rotate(180deg); }
  .fold .when-open { display: none; }
  .fold[open] .when-open { display: inline; }
  .fold[open] .when-closed { display: none; }

  .fold[open] > summary { margin-bottom: calc(2.2rem + 8px); }

  /* paper lists */

  .papers { display: flex; flex-direction: column; }
  .paper {
    padding: 1rem 0 1rem 1rem;
    border-left: 5px solid var(--accent, var(--pink));
    border-bottom: 2px dashed rgba(27,27,27,.28);
  }
  .paper:last-child { border-bottom: 0; }
  .paper h3 {
    margin: 0 0 .4em;
    font-family: var(--text);
    font-weight: 700;
    font-size: .92rem;
    line-height: 1.5;
    text-wrap: balance;
  }
  /* second line = the searchable name, kept quiet */
  .paper h3 .tech {
    display: block;
    margin-top: .35em;
    font-family: var(--mono);
    font-weight: 400;
    font-size: .71rem;
    line-height: 1.5;
    letter-spacing: .015em;
    color: var(--ink-soft);
  }

  .meta {
    margin: 0;
    font-size: .76rem;
    line-height: 1.6;
    color: var(--ink-soft);
  }

  /* tinted band, hung off the accent bar. mix with transparent so the
     lilac shows through */
  .why {
    margin: 0 0 1.15em -1rem;
    padding: .75em 1.1em .85em 1rem;
    background: color-mix(in srgb, var(--accent, var(--pink)) 30%, transparent);
    border-radius: 0 10px 10px 0;
    font-size: .86rem;
    line-height: 1.72;
    color: var(--ink);
  }
  .meta + .why { margin-top: 1.15em; }
  .why::before {
    content: 'why';
    display: block;
    margin-bottom: .35em;
    font-weight: 700;
    font-size: .62rem;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  /* same block, neutral instead of accent-tinted */
  .rethink {
    background: color-mix(in srgb, var(--ink-soft) 26%, transparent);
    box-shadow: 5px 5px 0 color-mix(in srgb, var(--ink-soft) 48%, transparent);
  }
  .rethink::before { content: 'ethical regrets'; }

  /* pedantry dial */

  .dial {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .5rem .6rem;
    margin: 0 0 1.2rem;
    font-size: .72rem;
    color: var(--ink-soft);
  }
  .dial .lab {
    font-weight: 700;
    font-size: .6rem;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
  .dial button {
    font-family: var(--mono);
    font-size: .66rem;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
    padding: .3em .85em;
    cursor: pointer;
    background: var(--paper);
    color: var(--ink);
    border: 2px solid var(--ink);
    border-radius: 999px;
    box-shadow: 3px 3px 0 var(--ink);
    transition: transform .07s ease, box-shadow .07s ease;
  }
  .dial button:hover { background: var(--yellow); }
  .dial button:active { transform: translate(3px, 3px); box-shadow: 0 0 0 var(--ink); }
  .dial button[aria-pressed="true"] { background: var(--pink-btn); color: var(--paper); }
  .dial button:focus-visible { outline: 3px dashed var(--ink); outline-offset: 4px; }
  .tldr-lead { font-weight: 700; color: var(--ink); }
  .dial .hint { flex-basis: 100%; font-size: .7rem; line-height: 1.6; font-style: italic; }

  /* only the chosen level renders */
  .lvl { display: none; }
  [data-level="plain"]    .lvl-plain,
  [data-level="curious"]  .lvl-curious,
  [data-level="pedantic"] .lvl-pedantic,
  [data-level="curious"] span.lvl-curious,
  [data-level="pedantic"] span.lvl-pedantic { display: block; }

  /* two groupings: by story, or by method at pedantic */
  .narrative { display: block; }
  .professional { display: none; }
  [data-level="pedantic"] .narrative { display: none; }
  [data-level="pedantic"] .professional { display: block; }

  /* points back at the story */
  .lure { margin: 0 0 1.9rem; }
  .lure-btn {
    display: inline-block;
    padding: .5em 1.1em;
    cursor: pointer;
    background: var(--yellow);
    color: var(--ink);
    font-family: var(--mono);
    font-size: .74rem;
    font-weight: 700;
    line-height: 1.45;
    text-align: left;
    border: 3px solid var(--ink);
    border-radius: 999px;
    box-shadow: 5px 5px 0 var(--pink);
    transform: rotate(-1.5deg);
    transition: transform .08s ease, box-shadow .08s ease, background .12s ease;
  }
  .lure-btn:hover { background: var(--cream); transform: rotate(-1.5deg) translate(-2px, -2px); box-shadow: 7px 7px 0 var(--pink); }
  .lure-btn:active { transform: rotate(-1.5deg) translate(5px, 5px); box-shadow: 0 0 0 var(--pink); }
  .lure-btn:focus-visible { outline: 3px dashed var(--ink); outline-offset: 4px; }

  .ptags { margin: 0 0 .45em; display: flex; flex-wrap: wrap; gap: .3rem; }
  .ptag {
    display: inline-block;
    padding: .1em .55em;
    background: color-mix(in srgb, var(--accent, var(--cyan)) 32%, var(--paper));
    border: 1px solid var(--ink);
    border-radius: 3px;
    font-size: .58rem;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .pro-group { margin: 0 0 2.2rem; }
  .pro-group h3 {
    margin: 0 0 .15em;
    font-family: var(--text);
    font-weight: 700;
    font-size: .82rem;
    letter-spacing: .05em;
    text-transform: uppercase;
  }
  .pro-group h3::before {
    content: '';
    display: inline-block;
    width: .6em; height: .6em;
    margin-right: .55em;
    background: var(--accent, var(--cyan));
    border: 2px solid var(--ink);
    border-radius: 50%;
  }
  .pro {
    padding: .7rem 0 .7rem 1rem;
    border-left: 4px solid var(--accent, var(--cyan));
    border-bottom: 1px dashed rgba(27,27,27,.25);
  }
  .pro:last-child { border-bottom: 0; }
  .pro h4 {
    margin: 0 0 .25em;
    font-family: var(--text);
    font-weight: 700;
    font-size: .8rem;
    line-height: 1.45;
    text-wrap: pretty;
  }
  .pro .yr {
    display: inline-block;
    margin-left: .45em;
    padding: .08em .5em;
    background: var(--lilac-deep);
    border-radius: 4px;
    font-size: .62rem;
    font-weight: 700;
    white-space: nowrap;
  }
  .pro p { margin: 0; font-size: .75rem; line-height: 1.6; color: var(--ink-soft); }
  .pro p + p { margin-top: .3em; }
  .pro .lim { color: var(--ink); }

  .ask {
    display: block;
    margin: .85em auto .9em;
    text-align: center;
    text-wrap: balance;
  }

  /* callout bands */
  .unexpected,
  .question,
  .echo,
  .rethink,
  .connection {
    background: color-mix(in srgb, var(--peach) 46%, transparent);
    padding: .75em 1.1em .85em 1rem;
    box-shadow: 5px 5px 0 color-mix(in srgb, var(--peach) 75%, transparent);
    font-size: .86rem;
    line-height: 1.72;
    color: var(--ink);
  }
  .unexpected::before,
  .question::before,
  .echo::before,
  .rethink::before,
  .connection::before {
    font-size: .62rem;
    letter-spacing: .16em;
    margin-bottom: .35em;
    color: var(--ink-soft);
  }
  .unexpected::before { content: 'the answer I did not expect, and what I did with it'; }
  .question { background: color-mix(in srgb, var(--cyan) 42%, transparent); box-shadow: 5px 5px 0 color-mix(in srgb, var(--cyan) 70%, transparent); }
  .question::before { content: 'the question that came out of this'; }

  #before-math .meta ul {
    margin: .75em 0 .85em;
    padding-left: 1.1em;
    font-size: .74rem;
    line-height: 1.6;
  }
  #before-math .meta li { margin: 0 0 .3em; }
  #before-math .meta li:last-child { margin-bottom: 0; }

  .echo {
    background: color-mix(in srgb, var(--violet) 34%, transparent);
    box-shadow: 5px 5px 0 color-mix(in srgb, var(--violet) 62%, transparent);
  }
  .echo::before { content: 'it is in the water now'; }
  .connection {
    background: color-mix(in srgb, var(--orange) 34%, transparent);
    box-shadow: 5px 5px 0 color-mix(in srgb, var(--orange) 60%, transparent);
  }
  .connection::before { content: 'a connection'; }

  /* here .meta is the body text, not a byline */
  #before-math .meta {
    font-size: .87rem;
    line-height: 1.72;
    color: var(--ink);
  }
  .meta em { color: var(--ink); }
  .chips { margin: .55em 0 0; display: flex; flex-wrap: wrap; gap: .45rem; }
  .chip {
    display: inline-block;
    padding: .18em .7em;
    background: var(--cyan);
    border: 2px solid var(--ink);
    border-radius: 999px;
    font-size: .68rem;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 3px 3px 0 var(--ink);
  }
  .chip:hover { background: var(--yellow); }
  .chip:active { transform: translate(3px, 3px); box-shadow: 0 0 0 var(--ink); }

  .status {
    display: inline-block;
    margin-left: .5em;
    padding: .1em .55em;
    background: var(--lilac-deep);
    border-radius: 4px;
    font-size: .68rem;
    font-weight: 700;
    white-space: nowrap;
  }

  /* subheadings inside a section */

  .sub {
    margin: 2.2rem 0 1rem;
    font-family: var(--mono);
    font-weight: 700;
    font-size: .95rem;
    letter-spacing: .04em;
    text-transform: uppercase;
  }
  .sub:first-child { margin-top: 0; }
  .sub::before {
    content: '';
    display: inline-block;
    width: .7em;
    height: .7em;
    margin-right: .55em;
    background: var(--accent, var(--orange));
    border: 2px solid var(--ink);
    border-radius: 50%;
    vertical-align: baseline;
  }

  /* contact */

  .mails { margin: 0; display: flex; flex-direction: column; gap: .9rem; }
  .mail { display: flex; flex-direction: column; gap: .15rem; }
  .mail dt {
    font-size: .72rem;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  .mail dd { margin: 0; font-size: .95rem; font-weight: 700; word-break: break-all; }

  /* wide image slots */

  .band {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    aspect-ratio: 3 / 2;
    max-width: 100%;
    margin: 0 0 3rem;
    padding: 1rem;
    text-align: center;
    font-size: .8rem;
    line-height: 1.5;
    background: var(--lilac-deep);
    border: 3px dashed var(--ink);
    border-radius: 14px;
  }
  .band-end { margin: 3rem 0 0; }

  .band-img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 100%;
    margin: 0;
    border: 3px solid var(--ink);
    border-radius: 14px;
    box-shadow: 8px 8px 0 var(--accent, var(--cyan));
  }

  /* 1.6rem gap + the 8px shadow, so every gap measures the same */
  .note + .note,
  .note + .band-img,
  .band-img + .note,
  .note + .papers,
  .papers + .note,
  .band-img + .papers,
  .papers + .band-img { margin-top: calc(1.6rem + 8px); }
  .note.math-intro { margin-bottom: calc(2.4rem + 8px); }
  /* publications: cards like the lab's science rows, always open */
  .pubs { display: flex; flex-direction: column; gap: .9rem; }
  .pub {
    padding: .95rem 1.2rem 1rem;
    background: var(--paper);
    border: 3px solid var(--ink);
    border-radius: 12px;
    box-shadow: 5px 5px 0 var(--accent, var(--violet));
    scroll-margin-top: 1.5rem;
  }
  .pub h4 { margin: 0 0 .35em; font-family: var(--text); font-weight: 700; font-size: 1rem; line-height: 1.35; text-wrap: pretty; }
  #main #research .pub h4 a { color: var(--ink); text-decoration-color: var(--accent, var(--violet)); text-decoration-thickness: 3px; }
  .pub .pub-line { margin: 0 0 .5em; }
  .pub .yr { display: inline-block; padding: .08em .5em; background: var(--lilac-deep); border-radius: 4px; font-family: var(--mono); font-size: .62rem; font-weight: 700; white-space: nowrap; }
  .pub .status { font-size: .62rem; }
  .pub .ptags { margin: 0 0 .6em; }
  .pub .ptag { font-size: .62rem; }
  .pub .pitch { margin: 0; font-size: .9rem; line-height: 1.6; color: var(--ink); }
  .pub .who { margin: .45em 0 0; font-size: .78rem; line-height: 1.55; color: var(--ink-soft); }
  .pub .spot { margin: .7em 0 0; padding: .55em .8em; background: var(--yellow); border: 2px solid var(--ink); border-radius: 8px; font-size: .84rem; line-height: 1.55; color: var(--ink); }
  #main .pub .spot a { color: var(--ink); font-weight: 400; }
  .pub .chips { margin-top: .7em; }

  .band-img.band-end {
    margin-top: 3rem;
    box-shadow: 8px 8px 0 var(--peach);
  }

  footer {
    width: min(92vw, 700px);
    margin: 0 auto;
    padding: 0 0 3rem;
    box-sizing: border-box;
    font-size: .72rem;
    line-height: 1.7;
    text-align: center;
    color: var(--ink-soft);
  }
  footer code {
    background: rgba(255,255,255,.55);
    border-radius: 4px;
    padding: .1em .35em;
  }

  /* jump row */

  .jump {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: .5rem .7rem;
    margin: 0 0 2.4rem;
    font-size: .76rem;
    color: var(--ink-soft);
  }
  .jump .chip { background: var(--yellow); }
  .jump .chip:hover { background: var(--cyan); }

  html { scroll-behavior: smooth; }
  section[id] { scroll-margin-top: 1.2rem; }

  @media (prefers-reduced-motion: reduce) {
    .cv, .chip, .fold > summary, .fold-cue .arrow { transition: none; }
    html { scroll-behavior: auto; }
  }

  /* phone */

  @media (max-width: 560px) {
    .stage {
      aspect-ratio: auto;
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: center;
      gap: 1.6rem 1.1rem;
      padding: 2.2rem 16px 1rem;
      margin-bottom: 0;   /* the phone layout has no empty drawing area */
      width: 100%;
      box-sizing: border-box;
    }
    /* one row each, except the slots: shared order, so they line up */
    .stage > * { position: static; flex: 0 0 100%; width: auto; transform: none; }
    .title      { order: 1; }
    .bubble     { order: 2; }
    .photo-wrap { order: 3; flex: 0 0 40%; }
    .char-wrap  { order: 3; flex: 0 0 40%; }
    .cv-math    { order: 4; }
    .cv-other   { order: 5; }
    .card       { order: 6; }
    .title {
      position: relative;   /* so its pink copy sits right behind it */
      font-size: 2.4rem;
      text-align: center;
      -webkit-text-stroke: 3px var(--ink);
    }
    .title::before { transform: translate(5px, 5px); -webkit-text-stroke: 3px var(--pink); }
    .sec-head { -webkit-text-stroke: 2.5px var(--ink); }
    .sec-head::before { transform: translate(4px, 4px); -webkit-text-stroke: 2.5px var(--shadow); }
    .char-slot { aspect-ratio: 170 / 205; }
    .spark { display: none; }
    .bubble {
      border-radius: 28px;
      box-shadow: 6px -6px 0 4px var(--cyan);
      font-size: .82rem;
      padding: 1.3rem 1.2rem;
    }
    .bubble::after { display: none; }
    /* relative for the star, but that revives left/top - clear them */
    .photo-wrap, .char-wrap {
      position: relative;
      left: auto;
      top: auto;
      --slot-tilt: 0deg;
    }
    .cv { --tilt: 0deg; flex-basis: 82%; padding: .85rem 0; font-size: 1.05rem; }
    .cv-art { flex-basis: auto; width: 100%; }
    .card { font-size: .82rem; padding: 1.4rem 1.3rem; }

    .scroll { padding: 2rem 16px 1.5rem; width: 100%; }
    footer { padding: 0 16px 3rem; width: 100%; }
    .sec-head { font-size: 1.5rem; -webkit-text-stroke: 2.5px var(--ink); }
    .paper h3 { font-size: .88rem; }
    .fold-cue { font-size: 1.05rem; padding: .85rem 1rem; transform: none; }
  }
  .sec-head[id] { scroll-margin-top: 20px; }
  /* a long section title may wrap on a phone; its shadow copy wraps with it */
  .sec-head.sec-wrap::before { white-space: normal; }
  /* where a paper stands: published, submitted, or preprint */
  .status.st-published { background: var(--yellow); border: 2px solid var(--ink); }
  .status.st-submitted { background: var(--cyan); border: 2px solid var(--ink); }
  .status.st-preprint { background: var(--paper); border: 2px solid var(--ink); }
  .stub-line { margin: -.6rem 0 1rem; font-size: .8rem; color: var(--ink-soft); }
  .stub-line .status { margin: 0 .4em 0 0; background: var(--yellow); border: 2px solid var(--ink); }
  /* site-wide font rule: reading text Space Grotesk; small labels stay Space Mono */
  .chip, .status, .ptag, .yr, .lvl-label, .dial, .dial button, .lure-btn, .sub, .paper h3 .tech, time, .stub-line .status { font-family: var(--mono); }
  /* the big pink buttons (CV MATH, CV SCIENCE, PORTFOLIO, SEE THE GALLERY) keep the heading font, as before */
  .bubble, .card { font-family: var(--mono); }   /* the hero bubble and card stay in Space Mono */
  /* superscripts / subscripts sit where they should (H₃S, TiO₂); math itself is typeset by MathJax */
  sub, sup { font-size: .72em; line-height: 0; position: relative; vertical-align: baseline; }
  sup { top: -.5em; }
  sub { bottom: -.25em; }
  .cv, .fold-cue { text-align: center; }
  /* later sections: even spacing between the research blocks */
  .scroll > section { margin-bottom: 4rem; }
  .scroll > section + section, .scroll > .band-img + section { margin-top: 0; }
  .scroll > .band-img { display: block; margin: 0 0 4rem; }
  .scroll > section > .sub { margin-top: 2.2rem; }
  .scroll > section .papers + .sub { margin-top: 2.6rem; }
  /* same gap under every section title, and before every section (incl. after the skip chip) */
  .scroll .sec-head + * { margin-top: 0 !important; }
  .scroll .sec-head + .stub-line { margin-top: 0 !important; }
  .scroll > .jump { margin: 0 0 4rem; }
  /* THE OTHER STUDIO: a picture per gallery group, then doors to comics, writing, music */
  .studio-more { margin: 1.4rem 0 0; }
  .studio-btns { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 1.4rem; }
  .studio-btns .cv-art { flex: 1 1 220px; margin-top: 0; }
  .studio-strip { list-style: none; margin: 1rem 0 0; padding: 0; display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
  .studio-strip a { display: block; text-decoration: none !important; color: var(--ink) !important; font-weight: 400 !important; }
  .studio-strip img { display: block; width: 100%; aspect-ratio: 1; object-fit: cover; margin: 0; border: 3px solid var(--ink); border-radius: 10px; }
  @media (max-width: 560px) { .studio-strip { grid-template-columns: repeat(3, 1fr); } }
  .studio-doors { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: .8rem; }
  .studio-doors a { display: flex; flex-direction: column; gap: 3px; padding: 12px 14px; background: var(--paper); border: 3px solid var(--ink); border-radius: 12px; box-shadow: 5px 5px 0 var(--d); text-decoration: none !important; color: var(--ink) !important; }
  .studio-doors a:hover { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 var(--d); }
  .studio-doors b { font: 1.1rem var(--display); }
  .studio-doors span { font: .78rem var(--mono); font-weight: 400; color: var(--ink-soft); }
  @media (max-width: 620px) { .studio-doors { grid-template-columns: 1fr; } }

  /* three hero buttons: the two CVs, and PORTFOLIO as a tag pinned to the drawing */
  .cv-sci { left: 52%; top: 41.5%; width: 28%; --tilt: -3deg; }
  .stage .cv-other { background: var(--orange); color: var(--ink); box-shadow: 6px 6px 0 var(--violet); }
  .stage .cv-other:hover { background: var(--yellow); }
  .stage .cv-other:active { box-shadow: 0 0 0 var(--violet); }
  @media (min-width: 561px) {
    .stage .cv-other {
      left: 67%; top: 75.5%; width: 23%; --tilt: 3deg;
      padding: 1.3% 0;
      font-size: clamp(.58rem, 1.9vw, .98rem);
      box-shadow: 5px 5px 0 var(--violet);
      z-index: 10;
    }
  }
  @media (max-width: 560px) { .cv-sci { order: 5; } }

  /* a section title that sits over a run of titled sections */
  .sec-over { display: table; margin-bottom: 1.5rem; font-size: clamp(1.45rem, 5.8vw, 2.35rem); }

  /* jump row over THE PATH; its targets stop a little short of the top */
  .jump-top { margin: 0 0 2rem; }
  .jump-top { font-size: .95rem; align-items: center; }
  .jump-top .chip { font-size: .9rem; padding: .3em 1em; box-shadow: 4px 4px 0 var(--ink); }
  .pro-group, .pro, .paper, #about-published { scroll-margin-top: 1.5rem; }

  /* the lab: the project lists sit open under the summary */
  #before-math .narrative, #before-math .professional { margin-top: calc(1.9rem + 8px); }

  /* the lab's project lists: the same groups and the same rows at every reading level */
  #before-math .pro-group { margin-bottom: 2.8rem; }
  #before-math .pro-group h3 {
    font-family: var(--display);
    font-size: 1.3rem;
    letter-spacing: 0;
    line-height: 1.1;
  }
  #before-math .pro-group h3::before { width: .5em; height: .5em; border-width: 3px; vertical-align: .08em; }
  /* one line under each group heading: what the group has in common */
  #before-math .pro-group .gloss { margin: .2rem 0 1rem 0; font-size: .92rem; line-height: 1.5; font-style: italic; color: var(--ink); }

  /* each project is a compact row that opens; title, year and tags always visible */
  #before-math :is(details.pro, details.row) {
    margin: 0 0 .7rem;
    padding: 0;
    background: var(--paper);
    border: 3px solid var(--ink);
    border-radius: 12px;
    box-shadow: 5px 5px 0 var(--accent, var(--cyan));
    scroll-margin-top: 1.5rem;
  }
  #before-math :is(details.pro, details.row) > summary { display: block; padding: .8rem 2.6rem .75rem 1.1rem; position: relative; cursor: pointer; list-style: none; }
  #before-math :is(details.pro, details.row) > summary::-webkit-details-marker { display: none; }
  #before-math :is(details.pro, details.row) > summary::after { content: "+"; position: absolute; right: 1rem; top: .55rem; font-family: var(--display); font-size: 1.3rem; }
  #before-math :is(details.pro, details.row)[open] > summary::after { content: "\2212"; }
  #before-math :is(details.pro, details.row) > summary:hover { background: color-mix(in srgb, var(--accent, var(--cyan)) 22%, var(--paper)); border-radius: 9px; }
  #before-math :is(details.pro, details.row) > summary:focus-visible { outline: 3px dashed var(--ink); outline-offset: 3px; }
  #before-math :is(.pro, .row) h4 { margin: 0 0 .4em; font-family: var(--text); font-weight: 700; font-size: 1rem; line-height: 1.35; color: var(--ink); text-wrap: pretty; }
  #main #before-math :is(.pro, .row) h4 a { color: var(--ink); text-decoration-color: var(--accent, var(--cyan)); text-decoration-thickness: 3px; }
  .row .yr {
    display: inline-block;
    margin-left: .45em;
    padding: .08em .5em;
    background: var(--lilac-deep);
    border-radius: 4px;
    font-family: var(--mono);
    font-size: .62rem;
    font-weight: 700;
    white-space: nowrap;
  }
  /* marks the projects still running */
  .row .yr.now, .pro .yr.now { background: var(--yellow); border: 2px solid var(--ink); padding: 0 .5em; text-transform: uppercase; letter-spacing: .06em; }
  .professional .ptags { margin: 0; }
  .professional .ptag { font-size: .62rem; }
  .professional .pro-body { padding: .2rem 1.1rem 1rem; }
  .professional .pro p { font-size: .87rem; line-height: 1.65; color: var(--ink); }
  .professional .pro .lim { margin-top: .6em; font-size: .82rem; color: var(--ink-soft); }

  /* story and one-line rows: the searchable name, the one-liner, then the story inside */
  .row .tech { margin: 0; font-family: var(--mono); font-size: .68rem; line-height: 1.5; letter-spacing: .015em; color: var(--ink-soft); }
  #before-math .row summary .lvl-plain { margin-top: .55em; }
  .row summary .chips { margin-top: .6em; }
  .row-body { padding: .4rem 1.1rem 1rem; }
  .row-body .why { margin-left: 0; border-radius: 10px; }
  /* the one-line view has nothing to open */
  #before-math[data-level="plain"] details.row > summary { padding-right: 1.1rem; cursor: default; pointer-events: none; }
  #before-math[data-level="plain"] details.row > summary a { pointer-events: auto; }
  #before-math[data-level="plain"] details.row > summary::after { content: none; }
  #before-math[data-level="plain"] .row-body { display: none; }

  /* math-section preview options */
  .mgroup { margin: 0 0 2.8rem; }
  .mgroup > h3 { margin: 0 0 .15em; font-family: var(--display); font-size: 1.3rem; line-height: 1.1; text-transform: uppercase; letter-spacing: 0; }
  .mgroup > h3::before { content: ''; display: inline-block; width: .5em; height: .5em; margin-right: .5em; background: var(--accent); border: 3px solid var(--ink); border-radius: 50%; vertical-align: .08em; }
  .mgroup > h3 .yr { font-family: var(--mono); font-size: .62rem; vertical-align: .3em; }
  .mgroup .gloss { margin: .2rem 0 1rem; font-size: .92rem; line-height: 1.5; font-style: italic; color: var(--ink); }
  .status.st-in-progress { background: var(--paper); border: 2px dashed var(--ink); }
  .thread { display: inline-block; margin-left: .5em; padding: .08em .55em; background: color-mix(in srgb, var(--accent) 45%, var(--paper)); border: 2px solid var(--ink); border-radius: 999px; font-family: var(--mono); font-size: .6rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; white-space: nowrap; }
  .math-intro .thread, .pub-line > .thread:first-child { margin: 0 .3em 0 0; }
  #research[data-m="story"] .v-sci, #research[data-m="sci"] .v-story { display: none; }
  .mdial { margin: 0 0 2rem; }
  .pub h4 { color: var(--ink); }
  .pub-body { border-top: 2px dashed rgba(27,27,27,.2); margin: 0 1.2rem; padding: .8rem 0 1rem !important; }
  .pub-body > .pitch { font-size: .95rem; font-weight: 500; }
  .pub .abs-body { margin: .9em 0 0 !important; padding: 0 0 0 .9em !important; background: none !important; border-left: 3px solid var(--accent); border-radius: 0 !important; }
  .pub .abs-body p { font-size: .84rem !important; line-height: 1.65 !important; color: var(--ink-soft) !important; }
  .pub .abs-body p.abs-label { margin: 0 0 .35em !important; font-family: var(--mono); font-size: .62rem !important; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--ink) !important; }
  .msort { margin: 0 0 2rem; }
  .mgroup > .pubs + .pubs, .thesis-block + .pubs { margin-top: .9rem; }
  .pub .status.st-in-progress { margin-left: 0; }
  .mflat .mlabel:first-child { margin-top: 0; }
  .mflat .mbig { display: table; margin: 2.8rem 0 1.6rem; }
  .mflat .mbig:first-child { margin-top: .4rem; }
  details.pub { padding: 0; }
  details.pub > summary { display: block; position: relative; padding: .85rem 2.8rem .85rem 1.2rem; cursor: pointer; list-style: none; }
  details.pub > summary::-webkit-details-marker { display: none; }
  details.pub > summary::after { content: "+"; position: absolute; right: 1rem; top: .6rem; font-family: var(--display); font-size: 1.3rem; }
  details.pub[open] > summary::after { content: "\2212"; }
  details.pub > summary:hover { background: color-mix(in srgb, var(--accent) 22%, var(--paper)); border-radius: 9px; }
  details.pub > summary:focus-visible { outline: 3px dashed var(--ink); outline-offset: 3px; }
  details.pub > summary .ptags { margin-bottom: 0; }
  details.pub > summary .who { margin: .45em 0 0; }
  .pub-body { padding: .1rem 1.2rem 1rem; }
  .pub-body > .who { margin: .45em 0 0; }
  .pub .seq { margin: 1.1em 0 0; padding: .5em .8em; background: color-mix(in srgb, var(--accent) 14%, var(--paper)); border-radius: 8px; font-size: .82rem; line-height: 1.55; font-style: italic; color: var(--ink); }
  #main .pub .seq a { color: var(--ink); text-decoration-color: var(--accent); text-decoration-thickness: 2px; }
  .part { display: inline-block; margin-right: .5em; padding: .08em .55em; background: var(--ink); color: var(--paper); border-radius: 4px; font-family: var(--mono); font-size: .62rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; white-space: nowrap; }
  .status.st-forthcoming { margin-left: 0; background: var(--pink); border: 2px solid var(--ink); }
  .status.st-manuscript { margin-left: 0; background: var(--orange); border: 2px solid var(--ink); }
  .status.st-in-prep { margin-left: 0; background: var(--peach); border: 2px solid var(--ink); }
  .status.st-conjecture { margin-left: 0; background: var(--cream); border: 2px solid var(--ink); }
  .status.st-early { margin-left: 0; background: var(--paper); border: 2px dashed var(--ink); }
  .status.st-note { margin-left: 0; background: var(--paper); border: 2px dotted var(--ink); }
  details.stagekey { margin: .2rem 0 1.4rem; font-size: .8rem; }
  ul.thesis-parts { margin: .6rem 0 .4rem; padding-left: 1.1rem; }
  ul.thesis-parts li { margin: .55em 0; }
  details.stagekey summary { cursor: pointer; font-family: var(--mono); font-weight: 700; font-size: .72rem; letter-spacing: .04em; text-transform: uppercase; color: var(--ink-soft); }
  details.stagekey ul { list-style: none; margin: .6rem 0 0; padding: 0; line-height: 1.5; }
  details.stagekey li { margin: .4em 0; }
  details.stagekey .status { display: inline-block; min-width: 11.5em; margin: 0 .6em 0 0; text-align: center; }
  .gloss.link-line { font-style: italic; margin-top: -.4rem; }
  .thesis-block { margin: 0 0 .4rem; padding: 0 0 1.4rem; border-bottom: 2px dashed rgba(27,27,27,.28); }
  .thesis-block .mlabel { margin-top: .4rem; }
  .thesis-block .pubs { margin-top: 1rem; }
  .mlabel { margin: 1.4rem 0 .6rem; font-family: var(--mono); font-size: .68rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--ink-soft); }
  .mgroup .note-quiet { margin: 0 0 .4rem; }
  .pub .status { margin-left: 0; }
  .pub .yr + .status { margin-left: .5em; }
  .pub details.abs { margin: .7em 0 0; }
  .pub details.abs > summary { display: inline-block; cursor: pointer; list-style: none; padding: .3em .9em; border: 2px solid var(--ink); border-radius: 999px; background: var(--yellow); box-shadow: 3px 3px 0 var(--ink); font-family: var(--mono); font-size: .7rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
  .pub details.abs > summary::-webkit-details-marker { display: none; }
  .pub details.abs > summary::before { content: "+ "; }
  .pub details.abs[open] > summary::before { content: "\2212  "; }
  .pub details.abs > summary:hover { background: color-mix(in srgb, var(--accent) 30%, var(--paper)); }
  .pub .abs-body { margin: .6em 0 0; padding: .7em .9em; border-left: 4px solid var(--accent); background: color-mix(in srgb, var(--accent) 10%, var(--paper)); border-radius: 0 8px 8px 0; }
  .pub .abs-body p { margin: 0 0 .6em; font-size: .82rem; line-height: 1.6; color: var(--ink); }
  .pub .abs-body p:last-child { margin: 0; }
  .mgroup > h3 .yr.now { display: inline-block; margin-left: .5em; padding: 0 .5em; background: var(--yellow); border: 2px solid var(--ink); border-radius: 4px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; }
</style>

</head>
<body>

<main>

  <!-- hero -->

  <div class="stage">

    <h1 class="title" data-text="ABOUT ME">ABOUT ME</h1>

    <span class="spark spark-a"></span>
    <span class="spark spark-b"></span>
    <span class="spark spark-c"></span>
    <span class="spark spark-d"></span>

    <p class="bubble">
      My name is <b>Rin Ray</b>
      (they/them). I’m a researcher-artist and a math postdoc at Münster,
      working where homotopy theory meets arithmetic.
    </p>

    <div class="photo-wrap">
      <span class="burst"></span>
      <img class="photo-slot" src="{{ site.baseurl }}/images/aabout.png" alt="Rin Ray">
    </div>

    <a class="cv cv-math" href="/pdfs/RinRay-CV-Math.pdf">CV MATH</a>
    <a class="cv cv-sci" href="/pdfs/RinRay-CV-Science.pdf">CV SCIENCE</a>
    <a class="cv cv-other" href="/portfolio/">PORTFOLIO</a>

    <div class="char-wrap">
      <span class="burst burst-b"></span>
      <img class="photo-slot" src="{{ site.baseurl }}/images/aaabout.png" alt="Pastel">

    </div>

    <div class="card">
      <p>
        Before the math and alongside: measurement and inference where
        the observable is missing, degraded, or not addressed to the observer — in
        biology, neural signals, robotics and physics.
      </p>
      <p>
        <a class="chip" href="#about-lab">Read more ↓</a>
      </p>
    </div>

  </div>

  <!-- the path -->

  <div class="scroll">

    <p class="jump jump-top">
      <span>Here for…</span>
      <a class="chip" href="#about-published">the math ↓</a>
      <a class="chip" href="#about-lab" data-read="pedantic">the science ↓</a>
      <a class="chip" href="#about-studio">the art ↓</a>
    </p>

    

    <section>
      <h2 class="sec-head" style="--shadow: var(--cyan); --tilt: -2deg;" data-text="THE PATH" id="about-path">THE PATH</h2>
      <div class="note" style="--accent: var(--cyan);">
        <p>
          I am currently a
          <a href="https://www.uni-muenster.de/FB10srvi/persdb/MM-member.php?id=1772">postdoc at Uni-Münster</a>
          in the Arithmetic and Homotopy Theory Working Group led by
          <a href="https://www.uni-muenster.de/IVV5WS/WebHop/user/nikolaus/index.html">Thomas Nikolaus</a>
          and
          <a href="https://en.wikipedia.org/wiki/Christopher_Deninger">Christopher Deninger</a>.
        </p>
        <p class="chips" style="margin-top:.2em">
          <a class="chip" href="https://open.spotify.com/episode/6yw6nazYdvFW4lp24rolZd?si=kOzCIF7lQYeGPBlgWI-gjg">
            Interview — How an Inventor becomes a Mathematician
          </a>
        </p>
      </div>

      <img class="band-img" src="{{ site.baseurl }}/images/zeta_blackboard.jpeg" alt="A blackboard of zeta function computations">

      <div class="note" style="--accent: var(--violet);">
        <p>
          Before that, I graduated from
          <a href="http://newsdesk.gmu.edu/2013/12/mason-celebrates-winter-graduates/">George Mason University at 16</a>
          with a B.S. in Computational Physics, and accepted the
          <a href="https://thielfellowship.org/">Thiel Fellowship</a>
          in 2014 to develop medical technology and study mathematics under my mentor,
          <a href="http://www.edwardfrenkel.com/">Edward Frenkel</a>.
        </p>
        <p>
          I came to mathematics from the laboratory, and never really left: computational
          physics, robotics, machine learning on biological signals, and medical devices
          since 2011. That work is in <a href="#about-lab">The Lab</a>, below.
        </p>
        <p class="chips" style="margin-top:.2em">
          <a class="chip" href="https://www.youtube.com/watch?v=LUA_efzGQlg">
            Interview — WIRED, on Medical Tech
          </a>
        </p>
        <p>
          I graduated with my Master’s degree from UChicago working with
          <a href="http://www.math.uchicago.edu/~may/">Peter May</a>
          and
          <a href="https://en.wikipedia.org/wiki/Kazuya_Kato">Kazuya Kato (加藤 和也)</a>,
          and with my PhD from Northwestern working with
          <a href="https://sites.math.northwestern.edu/~pgoerss/">Paul Goerss</a>.
          Yifeng Liu advised me too, without the title.
          </p>
      </div>
    </section>

    <!-- publications -->

    <section id="research">
      <h2 class="sec-head sec-over" style="--shadow: var(--pink); --tilt: 2deg;" data-text="THE PROOFS" id="about-published">THE PROOFS</h2>
      <div class="note math-intro" style="--accent: var(--violet);">
          <p>
            <strong class="tldr-lead">In the beautiful mountains of mathematics, the same shadow often falls into two valleys that do not talk to each other. My work is to find the peak, name the light, and see what else it casts.</strong> The arithmetic of number fields and function fields, with its zeta functions, automorphic spectra and special values, lives at chromatic height one. My program is to find what it is a shadow of at every height.
          </p>
          <ul>
            <li><strong><a href="#m-scatter">Scattering</a></strong> (function fields): an inner product of Eisenstein series and an index on the Langlands dual side are two shadows of one object; Kazhdan and Okounkov proved they agree. I look for the object behind both, a trace of Frobenius on a Morita context, and ask what it casts at every height.</li>
            <li><strong><a href="#m-echo">Echoes</a></strong> (number fields): special values of zeta functions and homotopy groups count the same things, and the prime 691 appears both in exotic spheres and in the <i>K</i>-theory of the integers. I look for the objects behind these coincidences at every chromatic height, starting with a zeta function whose functional equation is a duality.</li>
            <li><strong><a href="#m-sym">Symmetry you can touch</a></strong> (where the two meet): a symmetry coming from a division algebra over \(\mathbb Q_p\) and the symmetry of a curve in characteristic \(p\) are two shadows of one action. I prove the curve is forced by the group alone, and find the action inside it.</li>
          </ul>
      </div>

<div class="note" id="m-map" style="--accent: var(--violet); margin-top: 1.2rem; margin-bottom: 1.6rem;">
      <svg viewBox="0 0 720 166" role="img" aria-label="Echoes and Symmetry each feed Scattering" style="width:100%;height:auto;display:block;font-family:'Space Grotesk',sans-serif;">
        <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1b1b1b"/></marker></defs>
        <g fill="#1b1b1b">
        <a href="#m-echo" style="text-decoration:none"><rect x="8" y="60" width="172" height="74" rx="10" fill="#f9a13c" stroke="#1b1b1b" stroke-width="3"/>
        <text x="94" y="92" text-anchor="middle" font-size="19" font-weight="700">Echoes</text>
        <text x="94" y="116" text-anchor="middle" font-size="13">number fields</text></a>
        <a href="#m-scatter" style="text-decoration:none"><rect x="268" y="60" width="184" height="74" rx="10" fill="#ec3f9e" stroke="#1b1b1b" stroke-width="3"/>
        <text x="360" y="92" text-anchor="middle" font-size="19" font-weight="700">Scattering</text>
        <text x="360" y="116" text-anchor="middle" font-size="13">function fields</text></a>
        <a href="#m-sym" style="text-decoration:none"><rect x="540" y="60" width="172" height="74" rx="10" fill="#6cc8f0" stroke="#1b1b1b" stroke-width="3"/>
        <text x="626" y="92" text-anchor="middle" font-size="19" font-weight="700">Symmetry</text>
        <text x="626" y="116" text-anchor="middle" font-size="13">local, where both meet</text></a>
        <line x1="184" y1="97" x2="262" y2="97" stroke="#1b1b1b" stroke-width="2.5" marker-end="url(#ah)"/>
        <line x1="536" y1="97" x2="458" y2="97" stroke="#1b1b1b" stroke-width="2.5" marker-end="url(#ah)"/>
        <text x="224" y="32" text-anchor="middle" font-size="14">an <tspan font-style="italic">L</tspan>-function</text><text x="224" y="48" text-anchor="middle" font-size="14">at height h</text>
        <text x="497" y="32" text-anchor="middle" font-size="14">the height-h</text><text x="497" y="48" text-anchor="middle" font-size="14">theories</text>
        <text x="360" y="156" text-anchor="middle" font-size="13" font-style="italic">the Eisenstein spectrum at every height</text>
        </g>
      </svg>
      <p style="font-size:.85rem;margin:.4rem 0 0;">Arrows point from what supplies to what needs it. Click a box to jump to it.</p>
      </div>
      <div class="dial msort">
        <button type="button" data-sort="thread" aria-pressed="true">sorted by theme</button>
        <button type="button" data-sort="status">papers, then work in progress</button>
        <button type="button" data-sort="date">sorted chronologically</button>
      </div>
      <details class="stagekey">
        <summary>What the labels on papers mean</summary>
        <ul>
          <li><span class="status st-published">published</span> in a journal</li>
          <li><span class="status st-submitted">submitted</span> under review at a journal</li>
          <li><span class="status st-preprint">preprint</span> public, not yet submitted</li>
          <li><span class="status st-manuscript">manuscript</span> full draft written, not yet public</li>
          <li><span class="status st-in-prep">in preparation</span> main theorems proved, being written up</li>
          <li><span class="status st-conjecture">conjecture, checked</span> computations done, no proof yet</li>
          <li><span class="status st-early">early stage</span> started, nothing to share yet</li>
          <li><span class="status st-note">note</span> a short write-up, not a paper</li>
        </ul>
      </details>
      <div class="mflat" hidden></div>

      <div class="mgroup" id="m-scatter" style="--accent: var(--pink);">
        <h3>Scattering <span class="yr now">current</span></h3>
        <p class="gloss">The spectral measure of Eisenstein series is an index on the other side of the Langlands mirror.</p>
        <p class="chips" style="margin:.2rem 0 .8rem;"><a class="chip" href="#m-echo" style="background:var(--orange);">needs ← an L-function at height h, from Echoes</a> <a class="chip" href="#m-sym" style="background:var(--cyan);">needs ← the height-h theories, from Symmetry</a> </p>
        <p class="mlabel">One project, three papers</p>
      <div class="pubs">
        <details class="pub" data-key="99999999" data-st="manuscript" style="--accent: var(--pink);">
          <summary>
          <h4>The Unramified Eisenstein Spectrum as a Categorical Trace</h4>
          <p class="pub-line"><span class="status st-manuscript">manuscript</span></p>
          <p class="ptags"><span class="ptag">Eisenstein series</span><span class="ptag">Plancherel measure</span><span class="ptag">categorical traces</span></p>
          <p class="who">solo</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">On a curve over a finite field, the inner product of two Eisenstein series is an index on the Langlands dual side, by a theorem of Kazhdan and Okounkov. In that formula a whole moduli of bundles is replaced by \(2g\) numbers and a sign: the curve enters only through a square root of its zeta function, and the answer forgets which square root. I argue that the formula is one reading of a single object, a trace of Frobenius on a Morita context, and that the square root is the orientation the category leaves out.</p>
          </div>
        </details>

        <details class="pub" data-key="999999" data-st="early stage" style="--accent: var(--pink);">
          <summary>
          <h4><i>L</i>-genera and Localizations in <i>K</i>-theory</h4>
          <p class="pub-line"><span class="status st-early">early stage</span></p>
          <p class="ptags"><span class="ptag">genera</span><span class="ptag">string structures</span><span class="ptag">anomalies</span></p>
          <p class="who">joint with Daniel Berwick-Evans and Natalia Pacheco-Tallaj</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">The Eisenstein formula is canonical, but writing it down takes a choice of square root that the answer forgets. The Witten genus has the same problem one height up: its class is canonical, but a cocycle for it takes a choice of rational string structure. We ask whether these are one phenomenon, and whether the forgetting is an anomaly that cancels.</p>
          </div>
        </details>

        <details class="pub" data-key="999999" data-st="early stage" style="--accent: var(--pink);">
          <summary>
          <h4>Habiro Characteristic Classes of <i>L</i>-function Genera</h4>
          <p class="pub-line"><span class="status st-early">early stage</span></p>
          <p class="ptags"><span class="ptag">Habiro cohomology</span><span class="ptag">characteristic classes</span><span class="ptag"><i>L</i>-function genera</span></p>
          <p class="who">joint with Ferdinand Wagner</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">In the Eisenstein formula \(q\) does two jobs: on one side it is the size of a finite field, on the other a formal variable. We let \(q\) vary and ask whether the formula’s two faces, function fields in <i>K</i>-theory and number fields in cohomology, are specializations of one Habiro characteristic class. The Habiro ring sees \(q=1\) directly; the function field value \(q=p^n\) is not a root of unity, and that is the whole difficulty.</p>
          </div>
        </details>

      </div>
      </div>

      <div class="mgroup" id="m-echo" style="--accent: var(--orange);">
        <h3>Echoes <span class="yr now">current</span></h3>
        <p class="gloss">The same numbers, computed twice: once by homotopy theory, once by arithmetic.</p>
        <p class="chips" style="margin:.2rem 0 .8rem;"><a class="chip" href="#m-scatter" style="background:var(--pink);">gives → Scattering its height-h L-function</a> </p>
      <div class="pubs">
        <details class="pub" data-key="9999999" data-st="in preparation" style="--accent: var(--orange);">
          <summary>
          <h4>The \(\lambda\)-twisted \(T(h+1)\)-local Zeta Function</h4>
          <p class="pub-line"><span class="status st-in-prep">in preparation</span></p>
          <p class="ptags"><span class="ptag">zeta functions</span><span class="ptag">syntomic cohomology</span><span class="ptag">higher local fields</span></p>
          <p class="who">joint with Gabe Angelini-Knoll</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">A zeta function for chromatic ring spectra, built from \(T(h+1)\)-local syntomic cohomology. A chromatic Tate twist lets it see the height: for \(BP\langle h\rangle\) it has \(2^{h+1}\) zeros and poles, one for each exterior class, and its pole at \(T=1\) is redshift. Its functional equation holds with no correction factor, and it <em>is</em> the higher arithmetic duality of Devalapurkar, Hahn and Rognes.</p>
          </div>
        </details>

        <details class="pub" data-key="9999999" data-st="conjecture" style="--accent: var(--orange);">
          <summary>
          <h4><i>L</i>-functions and the Relative Image of <i>J</i> in Moore Spectra</h4>
          <p class="pub-line"><span class="status st-conjecture">conjecture, checked</span></p>
          <p class="ptags"><span class="ptag">Moore spectra</span><span class="ptag">relative image of <i>J</i></span><span class="ptag">Dedekind zeta functions</span></p>
          </summary>
          <div class="pub-body">
          <p class="pitch">Adams showed that the denominators of \(\zeta(1-n)\) count the image of <i>J</i>. For the mod \(p^k\) Moore spectrum the naive analogue is false once \(k\ge2\). I conjecture that its homotopy is glued from the two relative pieces of the extension \(F_k/\mathbb Q\), the cofibers of the unit and of the transfer, so that \(|\pi_{2n}(L_{K(1)}\mathbb S/p^k)|\) is the gcd of the denominators of \(\zeta_{\mathbb Q}(1-n)\) and of \((\zeta_{F_k}/\zeta_{\mathbb Q})(1-n)\). This recovers Salch’s theorem at \(k=1\).</p>
          <p class="who">checked numerically for \(p = 3, 5, 7\) and \(k \le 3\) from generalized Bernoulli numbers</p>
          </div>
        </details>

      </div>
      <div class="pubs">
        <details class="pub" data-key="9999999" data-st="in preparation" style="--accent: var(--orange);">
          <summary>
          <h4>Toward Categorifying Symplectic <i>L</i>-functions and Reidemeister Torsion</h4>
          <p class="pub-line"><span class="status st-in-prep">in preparation</span></p>
          <p class="ptags"><span class="ptag">symplectic <i>L</i>-functions</span><span class="ptag">hermitian <i>K</i>-theory</span><span class="ptag">Reidemeister torsion</span></p>
          <p class="who">joint with A. Petrov and M. Volpe</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">A curve over a finite field behaves like a 3-manifold. Abdurrahman and Venkatesh went past the analogy: they proved that the central value of a symplectic <i>L</i>-function, mod squares, is a Reidemeister torsion, the invariant topologists use to tell 3-manifolds apart. The natural route to categorifying it, through <i>L</i>-theory, provably fails: their invariant is exactly the part of the symplectic Chern class that <i>L</i>-theory cannot see. So we work in hermitian <i>K</i>-theory instead, where it appears as a secondary invariant, left over when the <i>L</i>-theory class vanishes for a canonical reason.</p>
          </div>
        </details>

        <details class="pub" data-key="999999" data-st="early stage" style="--accent: var(--orange);">
          <summary>
          <h4>All Bernoulli Numbers in Homotopy Theory Are Shifts</h4>
          <p class="pub-line"><span class="status st-early">early stage</span></p>
          <p class="ptags"><span class="ptag">Bernoulli numbers</span><span class="ptag">image of <i>J</i></span><span class="ptag">algebraic <i>K</i>-theory</span></p>
          <p class="who">joint with Andres Mejia and Noah Riggenbach</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">The prime 691, the numerator of \(B_{12}\), appears twice: in the exotic 23-spheres, through Kervaire–Milnor, and in \(K_{22}(\mathbb Z)=\mathbb Z/691\), through Quillen–Lichtenbaum. Both are \(\zeta(-11)\). The classical route between them is rational; we propose an integral one, through Blumberg–Mandell’s <i>K</i>-theoretic Tate–Poitou duality, so that an exotic sphere is detected by the <i>K</i>-theory of the integers.</p>
          </div>
        </details>


      </div>
      </div>

      <div class="mgroup" id="m-sym" style="--accent: var(--cyan);">
        <h3>Symmetry you can touch</h3>
        <p class="gloss">Curves, Jacobians and periods built toward the group action Lubin–Tate space hides.</p>
        <p class="chips" style="margin:.2rem 0 .8rem;"><a class="chip" href="#m-scatter" style="background:var(--pink);">gives → Scattering the height-h theories</a> </p>
        <div class="thesis-block">
        <p class="mlabel">The Lubin–Tate action, in four papers</p>
      <div class="note note-quiet" style="--accent: var(--cyan);">
        <p>
          The Morava stabilizer group acts on Lubin–Tate space. That action
          drives the \(K(h)\)-local sphere, yet it is explicit almost nowhere.
          <strong>For its maximal finite subgroup \(G'\), the group alone
          determines a unique curve, and the action is the symmetry of that
          curve.</strong>
        </p>
        <ul class="thesis-parts">
          <li><strong>Part II</strong> (my thesis, 2023): at height \(p-1\), the deformations of the curve <em>are</em> Lubin–Tate space. This solved a 40-year-old problem, and from the curve I compute \(\pi_*E_{p-1}\) and its cohomology.</li>
          <li><strong>Part III</strong> (2026): at every height \(p^{k-1}(p-1)\), the moduli are <em>surgeries</em>. Take the curve’s quotient by the centre of \(G'\), cut out the formal disk around each of its \(p^k\) branch points, and glue each one back in along an automorphism of the punctured disk. I prove the stack of these surgeries has exactly the Lubin–Tate tangent.</li>
          <li><strong>Chromatic splitting</strong> (2026, joint): with the two-tower method of Part I we prove the coheight-one weak chromatic splitting conjecture <strong>at every height at once</strong>, for generic primes. Before, it was known only at heights 1 and 2.</li>
          <li><strong>Kervaire:</strong> at \(p=3\), height 6, this is the action behind the detection theorem in the last open odd-primary case, with Eva Belmont.</li>
          <li><strong>Part I</strong> is the toolkit: two ways to pin down a group acting on a formal moduli stack. Geometric modeling is what Parts II and III carry out; the two-tower method is what the splitting paper runs on. The tools are standard, but here they are set down in the stronger form the Lubin–Tate action needs: equivariantly, in families, and with the grading kept.</li>
        </ul>
        <p class="chips"><a class="chip" href="/pdfs/application_general_audience.pdf">My thesis, explained for everyone (PDF)</a> <a class="chip code" href="https://github.com/catherineray/h-splitting">code: h-splitting</a></p>
      </div>
      <div class="pubs">
        <details class="pub" id="pub-model" data-key="202507" data-st="submitted" style="--accent: var(--cyan);">
          <summary>
          <h4><a href="https://arxiv.org/abs/2507.00309">Modeling Group Actions on Stacks (Especially the Lubin–Tate Action)</a></h4>
          <p class="pub-line"><span class="part">Part I</span><span class="yr">July 2025</span><span class="status st-submitted">submitted: <i>Expositiones Mathematicae</i></span></p>
          <p class="ptags"><span class="ptag">group actions on stacks</span><span class="ptag">two-tower method</span><span class="ptag">Lubin–Tate action</span></p>
          </summary>
          <div class="pub-body">
          <p class="pitch">The groundwork for the thesis: before you can compute with a symmetry you cannot see directly, you need a way to make it visible.</p>
          <div class="abs-body"><p class="abs-label">Abstract</p><p>Suppose we are given a profinite group \(G\) acting on a formal moduli stack \(\mathcal{M}\), and we want to understand the group action, and compute cohomology related to this group action. How can we do it? This prolegomenon conveys two methods of pinning down such an action: geometric modeling and the two-tower method. We highlight their use on a specific action – the automorphisms of a formal group acting on its deformation space, called the Lubin–Tate action.</p><p>We provide the toolkit that these two methods run on. The pieces of the kit are standard in their own subjects, but the Lubin–Tate action requires us to sew them together and ask more of them than their usual statements give, and several are set down here in that stronger form: equivariantly, in families, and with the grading kept. The tools are put to work in the two sequels, which build geometric models at height \(p-1\) and at the heights \(p^{k-1}(p-1)\) above it; the two-tower material is a companion to the proof of the coheight one weak chromatic splitting conjecture.</p></div>
          <p class="seq">Background for two projects. It surveys two ways of pinning down the Lubin–Tate action: geometric modeling, which Parts II and III carry out, and the known two-tower method, which the <a href="#pub-chrom">chromatic splitting paper</a> uses.</p>
          <p class="who">v2, Oct 2026: expanded into three parts, with the shared background from Part II moved here</p>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/2507.00309">arXiv</a></p>
          </div>
        </details>

        <details class="pub" data-key="202509" data-st="submitted" style="--accent: var(--cyan);">
          <summary>
          <h4><a href="https://arxiv.org/abs/2509.23428">Tiny and Unique: The Lubin–Tate Action at Height \(p-1\) from the Minimal Curve with Its Symmetries</a></h4>
          <p class="pub-line"><span class="part">Part II</span><span class="yr">Sept 2025</span><span class="status st-submitted">submitted: <i>AG&amp;T</i></span></p>
          <p class="ptags"><span class="ptag">moduli of curves</span><span class="ptag">inverse Galois theory</span><span class="ptag">Lubin–Tate action</span></p>
          </summary>
          <div class="pub-body">
          <p class="pitch">A symmetry hidden inside homotopy theory turns out to be the symmetry of an actual curve, one you can write down and draw.</p>
          <div class="abs-body"><p class="abs-label">Abstract</p><p>Let \(p\) be odd and \(G' = \mathbb{Z}/p \rtimes \mathbb{Z}/(p-1)^2\) the maximal finite subgroup of the Morava stabilizer group at height \(p-1\). Inverse Galois theory produces from \(G'\) alone a curve \(X\), the unique curve of minimal genus with \(\operatorname{Aut}(X) \simeq G'\); its ramification, its field of definition and its equation are consequences of the group, not choices. We prove a \(G'\)-equivariant equivalence between the deformations of \(X\) and Lubin–Tate space, so that the Lubin–Tate action of \(G'\) is the action of \(\operatorname{Aut}(X)\) on deformations of the curve. The proof is a coordinate-free Kodaira–Spencer argument reducing to a single character count. The action becomes explicit: \(G'\) acts through \(\mathbb{F}_p \rtimes \mathbb{F}_p^\times\) shifting and scaling \(p+1\) points on \(\mathbb{P}^1\). From this we compute \(H^*(G', π_* E_{p-1})\) and its Tate cohomology. One identity, \(π^{p-1} = -p\), runs through every section.</p></div>
          <p class="who">v3, Oct 2026: retitled and revised together with Part I</p>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/2509.23428">arXiv</a></p>
          </div>
        </details>

        <details class="pub" data-key="99999999" data-st="manuscript" style="--accent: var(--cyan);">
          <summary>
          <h4>Only the Gauge Grows: Moduli Stacks of <i>G</i>-Curves in Homotopy Theory at \(h = p^{k-1}(p-1)\)</h4>
          <p class="pub-line"><span class="part">Part III</span><span class="status st-manuscript">manuscript</span></p>
          <p class="ptags"><span class="ptag">stacks of surgeries</span><span class="ptag">Cartier operator</span></p>
          </summary>
          <div class="pub-body">
          <p class="pitch">At every height \(h = p^{k-1}(p-1)\), the moduli are <em>surgeries</em> on \(Y_k\), the quotient of the curve by the centre of \(G'\), at the free orbit \(B_0\) of its \(p^k\) branch points over \(0\in\mathbb P^1\). A surgery is a deformation of \(Y_k\) obtained by regluing it from \(Y_k\smallsetminus B_0\) and the formal disks at the points of \(B_0\), along automorphisms of the punctured disks. The pole order of that automorphism filters the surgeries; at \(k=1\) a surgery of pole order zero just moves a branch point. I build the smooth stack of these surgeries and prove that its tangent space and the Lubin–Tate tangent are the same representation: functions on the branch points, modulo a gauge. The moduli stay on the branch points; only the gauge grows.</p>
          <p class="who"><strong>How far along:</strong> proved: the curve, the stack, the matching representation, the derivative of the period map, and the Cartier chain at \(k=2\) for every \(p\). Conjectured: that Lubin–Tate space is the horizontal surgeries modulo the kernel of the period map, checked by machine at \((p,k)=(3,2),(5,2)\).</p>
          <div class="abs-body"><p class="abs-label">Abstract</p><p>Fix an odd prime \(p\) and an integer \(k\ge1\). The Morava stabilizer group \(\mathbb{G}_h\) has finite subgroups of order divisible by \(p\) only at heights \(h=p^{k-1}(p-1)m\), and at \(m=1\) a maximal one, maximal in the sense of not being properly contained in a larger finite subgroup, is \(G'=\mathbb{Z}/p^k\rtimes\mathbb{Z}/(p-1)^2\). Set \(h=p^{k-1}(p-1)\); then \(G'\) acts on the Lubin–Tate deformation space \(\mathrm{Def}(H_h)\) of a formal group of height \(h\). Our first theorem identifies the tangent space of \(\mathrm{Def}(H_h)\) at its closed point as a representation of \(G'\): it is \((\mathfrak{p}_L/p\mathcal{O}_L)^\vee\) for \(L=\mathbb{Q}_p(\zeta_{p^k})\) and \(\mathfrak{p}_L=(\zeta_{p^k}-1)\); equivalently, it is the space of functions \(W_k(\mathbb{F}_p)\to\overline{\mathbb{F}}_p\) on the Witt vectors of length \(k\), modulo those of difference degree at most \(p^{k-1}\), with \(\mathbb{Z}/p^k\) acting by translating \(W_k(\mathbb{F}_p)\) and \(\mathbb{Z}/(p-1)^2\) by Teichmüller scaling.</p><p>We then realize this representation geometrically. There is a unique curve \(X_k\) of smallest genus carrying a faithful \(G'\)-action. Writing \(Y_k\) for its quotient by the centre of \(G'\), the subgroup \(\mathbb{Z}/p^k\) acts on \(Y_k\) with \(Y_k/(\mathbb{Z}/p^k)\cong\mathbb{P}^1\), and the fibre \(B_0\) over \(0\) is a free orbit of \(p^k\) points, canonically identified with \(W_k(\mathbb{F}_p)\). A <em>surgery</em> is a deformation of \(Y_k\) obtained by regluing it from \(Y_k\smallsetminus B_0\) and the formal disks at the points of \(B_0\) along automorphisms of the punctured disks; the pole orders of those automorphisms filter the surgeries. We prove that the surgeries of pole order exactly \(p^{k-1}-1\) form a smooth formal stack \(\mathfrak{S}_k\) over \(W(\overline{\mathbb{F}}_p)\) of dimension \(h-1\), and that its tangent space is the representation above. At \(k=1\) a surgery of pole order \(0\) moves a branch point, and \(\mathfrak{S}_1\) is the configuration space of Part II.</p><p>Along a family of surgeries the crystalline cohomology of \(Y_k\) is constant as an isocrystal, and only its lattice moves. Projecting that lattice to the slope-\(1/h\) summand and reading its Hodge line defines a period map \(\Phi\) to \(\mathrm{Def}(H_h)\), on those surgeries for which the Hodge line stays in the summand. We compute the derivative of \(\Phi\) as an explicit residue, and conjecture that \(\Phi\) identifies \(\mathrm{Def}(H_h)\) with the stack of such surgeries modulo the kernel of \(d\Phi\). For \(k=2\) we locate the representation inside the curve: on the isotypic part of \(H^0(X_2,\Omega^1)\) for the centre, the Cartier operator has exactly one Jordan block of length at least \(p\), of length \(p^2-2\); dually, the image of \(\bar F^{\,p-1}\) on \(H^1(X_2,\mathcal{O})\) is, after one explicit character twist, the representation above, for every odd \(p\).</p></div>
          </div>
        </details>

        <details class="pub" id="pub-chrom" data-key="202609" data-st="preprint" style="--accent: var(--cyan);">
          <summary>
          <h4><a href="https://math.bu.edu/people/jsweinst/ChromaticSplitting.pdf">On the Chromatic Splitting Conjecture in Coheight 1</a></h4>
          <p class="pub-line"><span class="yr">Sept 2026</span><span class="status st-preprint">preprint</span></p>
          <p class="ptags"><span class="ptag">chromatic splitting</span><span class="ptag">two-tower isomorphism</span><span class="ptag">Fargues–Fontaine curve</span></p>
          <p class="who">joint with Tobias Barthel, Lucas Mann, Andy Senger, Tomer Schlank, Jared Weinstein, and Xinyu Zhou</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">Homotopy theory breaks the sphere into layers, one for each height, and Hopkins predicted how neighbouring layers fit back together. We confirm that prediction for neighbouring layers at every height, using geometry rather than brute-force computation.</p>
          <p class="spot"><strong>Every height at once.</strong> We prove the coheight-one form of chromatic splitting at every height \(h\), for all primes with \(p-1\nmid h-1\). Before this it was known only at heights 1 and 2.</p>
          <div class="abs-body"><p class="abs-label">Abstract</p><p>This article confirms predictions made by Hopkins’ chromatic splitting conjecture in stable homotopy theory. A consequence of our main theorem is that a certain map of \(K(h-1)\)-local \(E_\infty\)-rings \(\mathbb{S}^{B\mathbb{Z}_p}_{K(h-1)} \to L_{K(h-1)}\mathbb{S}_{K(h)}\) admits a retract, so long as \(p-1\) does not divide \(h-1\). If \(h=2\) and \(p\) is odd, we show this map is an isomorphism.</p><p>We use methods from the theory of \(p\)-divisible groups and \(p\)-adic geometry. Along the way we prove an entirely new kind of “two-tower isomorphism”, in analogy with Faltings’ isomorphism between the Lubin–Tate and Drinfeld towers, which parametrizes \(p\)-divisible groups over characteristic \(p\) perfectoid spaces with fixed generic fiber in terms of negative Banach–Colmez spaces. Using the two-tower isomorphism, we gain control over the continuous cohomology of the Morava stabilizer group \(\mathbb{G}_h\) with coefficients in \(\pi_* L_{K(h-1)} E_h\).</p><p>To study the continuous action of \(\mathbb{G}_h\) on \(L_{K(h-1)} E_h\), it was necessary to develop the theory of solid Lubin–Tate spectra. Adapting Lurie’s constructions, we attach a solid Lubin–Tate spectrum to \(p\)-divisible groups over a broad class of solid rings in characteristic \(p\).</p></div>
          <p class="seq">The background for this paper is in <a href="#pub-model">Modeling Group Actions on Stacks</a>, which surveys the two-tower method.</p>
          <p class="chips"><a class="chip" href="https://math.bu.edu/people/jsweinst/ChromaticSplitting.pdf">PDF</a></p>
          </div>
        </details>

      </div>
        </div>
      <div class="pubs">
        

        <details class="pub" data-key="202507" data-st="submitted" style="--accent: var(--cyan);">
          <summary>
          <h4><a href="https://arxiv.org/abs/2507.10157">Towards the <i>p</i>&nbsp;=&nbsp;3 Kervaire Invariant Problem: The \(E_2\)-page for the Homotopy Fixed Points Spectral Sequence Computing \(\pi_*(E_6^{hC_9})\)</a></h4>
          <p class="pub-line"><span class="yr">July 2025</span><span class="status st-submitted">submitted</span></p>
          <p class="ptags"><span class="ptag">Kervaire invariant</span><span class="ptag">homotopy fixed points</span><span class="ptag">Morava <i>E</i>-theory</span></p>
          <p class="who">joint with Eva Belmont</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">The Kervaire invariant problem, one of the classical questions about high-dimensional manifolds, has one case left: the prime 3. This paper sets up the computation that decides it.</p>
          <p class="spot"><strong>Used in a claimed resolution.</strong> In September 2026 OpenAI posted <a href="https://github.com/openai/math/blob/main/preprints/The-Kervaire-Invariant-Problem-at-the-Prime-Three-September-24-2026/paper.pdf">a preprint claiming to resolve the Kervaire invariant problem at the prime 3</a>, <strong>using our results and the method Eva and I proposed in this paper</strong>.</p>
          <div class="abs-body"><p class="abs-label">Abstract</p><p>Hill, Hopkins, and Ravenel suggest that the last remaining Kervaire invariant problem, the case of \(p=3\), can be solved by computing the homotopy fixed points spectral sequence for \(π_* E_6^{hC_9}\). We prove a detection theorem for this case and use a conjectural form of the \(C_9\)-action on \(E_6\) to compute the \(E_2\) page of this spectral sequence away from homological degree zero.</p></div>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/2507.10157">arXiv</a><a class="chip" href="https://github.com/openai/math/blob/main/preprints/The-Kervaire-Invariant-Problem-at-the-Prime-Three-September-24-2026/paper.pdf">OpenAI preprint</a></p>
          </div>
        </details>

      </div>
      <div class="pubs">
        <details class="pub" data-key="9999999" data-st="note" style="--accent: var(--cyan);">
          <summary>
          <h4>The Eigenvalues of Frobenius of Artin–Schreier–Witt Curves are Gauss Sums</h4>
          <p class="pub-line"><span class="status st-note">note</span></p>
          <p class="ptags"><span class="ptag">Artin–Schreier–Witt curves</span><span class="ptag">Gauss sums</span><span class="ptag">Newton polygons</span></p>
          </summary>
          <div class="pub-body">
          <p class="pitch">The Frobenius eigenvalues of Artin–Schreier–Witt curves are Gauss sums, and reading off their slopes gives new families of Newton strata in the Torelli locus.</p>
          <p class="seq">This is what certifies the curves above as models: the Newton polygon of a curve, the slopes of its Frobenius eigenvalues, is what splits a height-\(h\) formal summand off its Jacobian.</p>
          <p class="chips"><a class="chip" href="/pdfs/Gauss_sums.pdf">note toward this (PDF)</a> <a class="chip code" href="https://github.com/catherineray/newton">code: newton</a></p>
          </div>
        </details>

      </div>
      </div>

      <div class="mgroup" id="m-early" style="--accent: var(--violet);">
        <h3>Earlier</h3>
        <p class="gloss">Before the three threads: parallel processes, polarizations, period maps.</p>
      <div class="pubs">
        <details class="pub" data-key="202000" data-st="published" style="--accent: var(--violet);">
          <summary>
          <h4><a href="https://link.springer.com/chapter/10.1007/978-3-030-42687-3_17">Toward Directed Collapsibility</a></h4>
          <p class="pub-line"><span class="yr">2020</span><span class="status st-published">published</span></p>
          <p class="ptags"><span class="ptag">directed topology</span><span class="ptag">concurrency</span><span class="ptag">parallel processes</span></p>
          <p class="who">joint with R. Belton, R. Brooks, S. Ebli, L. Fajstrup, B. T. Fasy, N. Sanderson, E. Vidaurre</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">A space can look trivial and still hide many essentially different ways for parallel programs to run. We give a way to simplify such spaces without losing any of them.</p>
          <div class="abs-body"><p class="abs-label">Abstract</p><p>In the directed setting, the spaces of directed paths between fixed initial and terminal points are the defining feature for distinguishing different directed spaces. The simplest case is when the space of directed paths is homotopy equivalent to that of a single path; we call this the trivial space of directed paths. Directed spaces that are topologically trivial may have non-trivial spaces of directed paths, which means that information is lost when the direction of these topological spaces is ignored. We define a notion of directed collapsibility in the setting of a directed Euclidean cubical complex using the spaces of directed paths of the underlying directed topological space relative to an initial or a final vertex. In addition, we give sufficient conditions for a directed Euclidean cubical complex to have a contractible or a connected space of directed paths from a fixed initial vertex. We also give sufficient conditions for the path space between two vertices in a Euclidean cubical complex to be disconnected. Our results have applications to speeding up the verification process of concurrent programming and to understanding partial executions in concurrent programs.</p></div>
          <p class="who"><em>Advances in Mathematical Sciences</em>, vol. 21, pp. 255–271</p>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/1902.01039">arXiv</a></p>
          </div>
        </details>

        <details class="pub" data-key="202200" data-st="published" style="--accent: var(--violet);">
          <summary>
          <h4><a href="https://link.springer.com/article/10.1007/s12215-020-00590-7">Automorphisms of Abelian Varieties and Principal Polarizations</a></h4>
          <p class="pub-line"><span class="yr">2022</span><span class="status st-published">published</span></p>
          <p class="ptags"><span class="ptag">principal polarizations</span><span class="ptag">Narasimhan–Nori conjecture</span><span class="ptag">high-performance computing</span></p>
          <p class="who">joint with D. Lee</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">One geometric object can often be polarized in several genuinely different ways. We wrote a computer search that counts them on some famous curves.</p>
          <div class="abs-body"><p class="abs-label">Abstract</p><p>The Narasimhan-Nori conjecture asks for a closed formula for the number of non-isomorphic principal polarizations of any given abelian variety. In this paper, we introduce a new algorithm that gives a lower bound on the number of non-isomorphic principal polarizations on any given abelian variety. We show, for example, that the Jacobian of the genus four underlying curve of Schoen's I-WP minimal surface has at least 9 non-isomorphic principal polarizations. We also explore the Jacobians of Klein's quartic, Fermat's quartic, Bring's curve, and more.</p></div>
          <p class="who"><em>Rendiconti del Circolo Matematico di Palermo</em>, Series 2, vol. 71, pp. 483–494 · circulated in preprint as <em>Automorphisms of the Jacobian</em></p>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/1811.07007">arXiv</a> <a class="chip code" href="https://github.com/catherineray/aut-jac">code: aut-jac</a></p>
          </div>
        </details>

        <details class="pub" data-key="201800" data-st="preprint" style="--accent: var(--violet);">
          <summary>
          <h4><a href="https://arxiv.org/abs/1911.08615">A Global Crystalline Period Map</a></h4>
          <p class="pub-line"><span class="yr">2018</span><span class="status st-preprint">preprint</span></p>
          <p class="ptags"><span class="ptag">crystalline period map</span><span class="ptag"><i>p</i>-divisible groups</span><span class="ptag">moduli stacks</span></p>
          <p class="who">joint with M. Neaton and A. Pieper</p>
          </summary>
          <div class="pub-body">
          <p class="pitch">A tool that turns a curved moduli problem into linear algebra only worked one point at a time. This version works on the whole space at once.</p>
          <div class="abs-body"><p class="abs-label">Abstract</p><p>The crystalline period map is a tool for linearizing \(p\)-divisible groups. It has been applied to study the Langlands correspondences, and has possible applications to the homotopy groups of spheres. The original construction of the period map is inherently local. We present an alternative construction, giving a map on the entire moduli stack of \(p\)-divisbile groups, up to isogeny, which specializes to the original local construction.</p></div>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/1911.08615">arXiv</a></p>
          </div>
        </details>

      </div>
      </div>

    <script>
    (function () {
      var sec = document.getElementById('research');
      var flat = sec.querySelector('.mflat');
      var cards = Array.prototype.slice.call(sec.querySelectorAll('details.pub'));
      var homes = cards.map(function (c) { var m = document.createComment('pub'); c.parentNode.insertBefore(m, c); return m; });
      var groups = sec.querySelectorAll('.mgroup');
      var RANK = { 'published': 0, 'submitted': 0, 'preprint': 0, 'manuscript': 1, 'in preparation': 2, 'conjecture': 2, 'in progress': 2, 'note': 2, 'early stage': 3 };
      var NAME = ['PUBLICATIONS & PREPRINTS', 'MANUSCRIPTS', 'IN PREPARATION', 'EARLY STAGE'];
      var SHADOW = ['var(--violet)', 'var(--cyan)', 'var(--pink)', 'var(--orange)'];
      function label(t) { var p = document.createElement('p'); p.className = 'mlabel'; p.textContent = t; return p; }
      function big(i) {
        var h = document.createElement('h2'); h.className = 'sec-head sec-wrap mbig'; h.textContent = NAME[i];
        h.setAttribute('data-text', NAME[i]); h.style.setProperty('--shadow', SHADOW[i]); h.style.setProperty('--tilt', i % 2 ? '2deg' : '-2deg');
        return h;
      }
      function list() { var d = document.createElement('div'); d.className = 'pubs'; return d; }
      function show(mode) {
        sec.querySelectorAll('.msort button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.sort === mode ? 'true' : 'false'); });
        if (mode === 'thread') {
          cards.forEach(function (c, i) { homes[i].parentNode.insertBefore(c, homes[i].nextSibling); });
          flat.innerHTML = ''; flat.hidden = true;
          groups.forEach(function (g) { g.hidden = false; });
          return;
        }
        var by = cards.slice().sort(function (a, b) {
          if (mode === 'status') { var r = RANK[a.dataset.st] - RANK[b.dataset.st]; if (r) return r; }
          return b.dataset.key - a.dataset.key;
        });
        flat.innerHTML = '';
        var cur = null, box = null;
        by.forEach(function (c) {
          var k = mode === 'status' ? RANK[c.dataset.st] : (c.dataset.key == 99999999 ? 'Manuscripts' : c.dataset.key == 9999999 ? 'In preparation' : c.dataset.key == 999999 ? 'Early stage' : String(Math.floor(c.dataset.key / 100)));
          if (k !== cur) { cur = k; flat.appendChild(mode === 'status' ? big(k) : label(k)); box = list(); flat.appendChild(box); }
          box.appendChild(c);
        });
        groups.forEach(function (g) { g.hidden = true; });
        flat.hidden = false;
      }
      sec.querySelectorAll('.msort button').forEach(function (b) { b.addEventListener('click', function () { show(b.dataset.sort); }); });
    })();
    </script>
    </section>

    <!-- expository -->

    <img class="band-img" src="{{ site.baseurl }}/images/lubin-tate.jpg" alt="Lubin-Tate illustration">

    <section>
      <h2 class="sec-head" style="--shadow: var(--orange); --tilt: -2deg;" data-text="EXPOSITORY" id="about-expository">EXPOSITORY</h2>

      <div class="papers" style="--accent: var(--orange);">

        <article class="paper">
          <h3><a href="/pdfs/Zeta_Functions_and_THH_Talk3.pdf">Zeta Functions and THH</a></h3>
          <p class="meta">16 July 2025</p>
        </article>

        <article class="paper">
          <h3><a href="/gausssums/">Using Automorphism Groups of Curves to Control the Slopes of their Jacobians</a></h3>
          <p class="chips"><a class="chip" href="/pdfs/Gauss_sums.pdf">PDF</a> <a class="chip code" href="https://github.com/catherineray/newton">code: newton</a></p>
        </article>

        <article class="paper">
          <h3>K-theoretic Tate–Poitou Duality Seminar<span class="status">coming soon</span></h3>
          <p class="meta">March 2025</p>
        </article>

        <article class="paper">
          <h3><a href="/pdfs/application_general_audience.pdf">A 4-page summary of my graduate work for a general audience</a></h3>
          <p class="meta">including original illustrations</p>
        </article>

        <article class="paper">
          <h3><a href="https://rin.io/images/wp-content/uploads/2018/04/padicgeometry-1.pdf">Geometry for Prime Addicts</a></h3>
          <p class="meta">background on <i>p</i>-adic geometry toward proving the monodromy weight conjecture</p>
        </article>

        <article class="paper">
          <h3><a href="https://github.com/catherineray/catherineray.github.io/blob/master/pdfs/heckeorbitshomotopy_.pdf">The Hecke Orbit Conjecture and Homotopy Theory</a></h3>
          <p class="meta">explaining that the stabilizer of the Hecke action is the Morava stabilizer group</p>
        </article>

        <article class="paper">
          <h3><a href="/pdfs/officialober.pdf">An Overview of the Classic Theory of <i>p</i>-Divisible Groups</a></h3>
          <p class="meta">published in Oberwolfach Proceedings</p>
        </article>

        <article class="paper">
          <h3><a href="/pdfs/formalgroup-1.pdf">Fiber Bundles of Formal Disks</a></h3>
          <p class="meta">with A. Holeman</p>
        </article>

        <article class="paper">
          <h3><a href="/pdfs/gromovprooffill.pdf">A Complete Proof of the Polynomial Ham Sandwich Theorem</a></h3>
          <p class="meta">based on Gromov’s proof</p>
        </article>

      </div>

      <h3 class="sub" style="--accent: var(--yellow);">My two Master’s theses</h3>

      <div class="papers" style="--accent: var(--yellow);">
        <article class="paper">
          <h3><a href="https://rin.io/images/wp-content/uploads/2017/05/a1-2.pdf">Calculating \(\pi_*(\mathrm{tmf})\) at the prime 2</a></h3>
          <p class="meta">an illustrated guide to the May spectral sequence</p>
        </article>
        <article class="paper">
          <h3><a href="https://rin.io/images/wp-content/uploads/2017/08/lubintatemodels-2.pdf">Models of Formal Group Laws of Every Height</a></h3>
        </article>
      </div>
    </section>

    <section>
      <h2 class="sec-head" style="--shadow: var(--peach); --tilt: 2deg;" data-text="TEACHING" id="about-teaching">TEACHING</h2>
      <p class="stub-line"><span class="status">stub</span> An updated teaching statement is on its way; this is the current one.</p>
      <div class="note" style="--accent: var(--peach);">
        <p>I came into academia from outside, so I go out of my way to present mathematics in ways that are accessible to everyone. For me it is a visual, interactive, intuitive and artistic experience, and above all a narrative one. I keep learning materials for students of all levels on my <a href="/resources/">resources page</a>. My teaching statement:</p>
      </div>
      <a class="cv cv-art" href="/pdfs/teaching-statement.pdf">READ MY TEACHING STATEMENT →</a>
    </section>

    <!-- the lab -->

    <section id="before-math" data-level="pedantic">
      <h2 class="sec-head" style="--shadow: var(--pink); --tilt: -2deg;" data-text="THE LAB" id="about-lab">THE LAB</h2>

      <div class="dial">
        <span class="lab">are you…</span>
        <button type="button" data-set="plain">passing through</button>
        <button type="button" data-set="curious">here for the story</button>
        <button type="button" data-set="pedantic" aria-pressed="true">here for the science</button>
        <span class="hint lvl lvl-plain">No background assumed, one line per project.</span>
        <span class="hint lvl lvl-curious">What I built, why I cared, and where the field has gone since.</span>
        <span class="hint lvl lvl-pedantic">No story: what was done, how, and what limited it — grouped by method.</span>
      </div>

      <div class="note" style="--accent: var(--pink);">
          <p class="lvl lvl-curious">
            <strong class="tldr-lead">I build things, and I believe almost anything will answer you if you are willing to learn how it speaks.</strong> What I have spent my time building, mostly, is instruments for overhearing. A blinded robot, feeling for its own hand. Rats, telling each other how they are feeling. A cat, feeling for his colon. A brain, through the scar it grows around anything that listens. Half a page of Braille, about the missing half. Arithmetic, about superconductors nobody had made yet. A drone and a wheelchair, microwaved argon and a plate of food, a face, septic blood — and others. There are always others.
          </p>
          <p class="lvl lvl-curious">
            Most of this came before the mathematics found me — or before I found it. Two threads have remained in my hands: <a href="https://rin.io/biome/">a cluster of diseases that keep showing up together and keep being treated apart</a>, and <a href="https://rin.io/megacolon/">a treatment that works and was never written down</a>.
          </p>
          <p class="lvl lvl-plain">
            <strong class="tldr-lead">I build things, and I believe almost anything will answer you if you are willing to learn how it speaks.</strong> For over a decade I have studied the three kinds of silence: what is absent, what is fading, and what is spoken in another room. Three threads remain in my hands: <a href="https://rin.io/biome/">a cluster of diseases that keep being treated apart</a>, <a href="https://rin.io/megacolon/">a treatment that was never written down</a>, and <a href="https://rin.io/memantine/">a cheap drug for pain that nobody will test</a>.
          </p>
          <p class="lvl lvl-pedantic">
            <strong class="tldr-lead">A decade of work on measurement and inference where the observable is missing, degraded, or not addressed to the observer:</strong> motor intention from a thinning population of cortical units, affective state from ultrasonic vocalization, proprioception without vision, lexical structure from partial parallelism, superconducting transition temperature from electronic structure.
          </p>
      </div>

        <div class="narrative">
        <div class="pro-group" style="--accent: var(--pink);">
          <h3>Living things</h3>
          <p class="gloss">Hidden states, read from the traces a system emits.</p>
          <details class="row" id="s-biome">
            <summary>
              <h4>Biome of Overstimulation: Sensory Sensitivity as a Unifying Mechanism<span class="yr">2024 – ongoing</span><span class="yr now">current</span></h4>
              <p class="tech">Sensory processing as an organizing principle · gut microbiome · autoimmunity · chronic pain · glutamate excitability · joint with Luca Estinto</p>
              <p class="meta lvl lvl-plain">An essay arguing that a cluster of conditions usually treated separately come from one mechanism.</p>
              <p class="chips"><a class="chip" href="https://rin.io/biome/">read the post</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              The people I interviewed about wheelchairs kept telling me about pain, and pain was
              the thing nobody had an answer for. Years later the same shape kept appearing:
              autoimmune conditions, gut trouble, chronic pain, sensory sensitivity, and certain
              neuropsychiatric diagnoses turning up together in the same people and being treated
              by five different specialists who never speak to each other.
            </p>
            <p class="meta">
              A long essay written with Luca Estinto, treating these as a
              <em>diseasome</em> — a set of conditions linked not by the organ they present
              in but by the pathway underneath them — and arguing that sensory processing is
              a good deal of what that pathway is. A nervous system which never habituates, and
              keeps reporting a signal at full strength, produces consequences that cascade through
              the immune and digestive systems by way of stress. The piece pulls together imaging
              work on altered connectivity, the habituation literature, glutamate as a shared route
              to overexcitability, microbiome composition differences, and the enteric nervous
              system’s direct hand in immunoglobulin secretion.
            </p>
            </div>
            </div>
          </details>
          <details class="row" id="s-megacolon">
            <summary>
              <h4>Restarting the nerves that move a colon<span class="yr">2026</span><span class="yr now">current</span></h4>
              <p class="tech">Feline idiopathic megacolon · enteric motility and cholinergic transmission · neostigmine · owner documentation of an unpublished treatment</p>
              <p class="meta lvl lvl-plain">A cat with a paralysed colon, and the treatment we found that is not in the literature.</p>
              <p class="chips"><a class="chip" href="https://rin.io/megacolon/">read the post</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              A cat of mine was dying because his colon was paralysed, and the two options put in
              front of me were surgery and euthanasia. He was too heavy and too unwell to survive
              the anesthetic, so in practice that was one option. There is a third, and it is not
              in the literature: it circulates as folklore between practitioners, never reaches a
              journal, and so whether it is offered to your animal depends almost entirely on who
              you happen to be standing in front of that day.
            </p>
            <p class="meta">
              An owner-reported case study, written up in enough detail to take to a vet and ask.
              Recurrent idiopathic megacolon: the colon dilates and the nerves that should drive it
              stop producing any useful push. Enemas, manual deobstipation, laxatives and dietary
              modification all failed to prevent recurrence. The regime that held was neostigmine,
              an acetylcholinesterase inhibitor borrowed from equine practice, injected when
              palpation finds accumulation — it leaves acetylcholine in the junction longer,
              so the cholinergic signal telling the muscle to contract actually lands. Alongside
              it: daily lactulose to keep the stool soft, and an anti-NGF injection every six weeks
              for spinal spondylosis.
            </p>
            <p class="meta">
              Sequencing matters more than the drug. Neostigmine is given only after the colon has
              been emptied under anesthetic and mechanical obstruction has been definitively
              excluded, because a drug that makes a bowel contract harder is dangerous if that
              bowel is genuinely blocked. Duration to treatment is the other variable: medical
              management succeeds in about two thirds of cats presenting under six months of
              symptoms, and in under six percent of those presenting later. Maintenance is
              injections every few weeks, indefinitely.
            </p>
            </div>
            </div>
          </details>
          <details class="row" id="s-memantine">
            <summary>
              <h4>The six-cent drug nobody will test<span class="yr">2026</span><span class="yr now">current</span></h4>
              <p class="tech">Memantine · NMDA receptor antagonism · central sensitization · opioid tolerance and hyperalgesia · drug repurposing · trial design</p>
              <p class="meta lvl lvl-plain">A cheap dementia drug that might treat chronic pain, and why nobody has paid to find out.</p>
              <p class="chips"><a class="chip" href="https://rin.io/memantine/">read the post</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              People who use mobility aids told me they were choosing every day between being
              stoned past the point of finishing a sentence and being lucid and in agony. I wanted
              to know whether anything avoids that choice.
            </p>
            <p class="meta">
              An argument with references, written to be taken to a doctor or a funder. Memantine
              blocks the same channel as ketamine, gently enough to take daily for years, at six
              cents a tablet. The trial evidence is thin and mixed: it fails in old nerve injury
              and shows promise where pain is central and ongoing. The post lays out the mechanism,
              every trial including the negative ones, the commercial history that ended the
              research, and the trial that would settle it.
            </p>
            </div>
            </div>
          </details>
          <details class="row" id="s-usv">
            <summary>
              <h4>Learning the ultrasonic language of rats<span class="yr">late 2013 – mid 2014</span></h4>
              <p class="tech">Computational bioacoustics · unsupervised clustering of rodent ultrasonic vocalizations · quasi-real-time monitoring in the animal’s own cage · preclinical safety pharmacology · affective-state readout · 3Rs refinement</p>
              <p class="meta lvl lvl-plain">I taught a computer to sort what rats and mice say to each other, which became a way to test drugs before they reach people, and to bother the animals a good deal less while doing it.</p>
              <p class="chips"><a class="chip" href="https://rin.io/mouse-vocalizations/">read the post</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              A mouse cannot report a symptom, but it is talking constantly in a register we cannot
              hear. Two things follow from listening properly. You get some understanding of what
              these animals are actually saying to each other. And you get far more out of each
              experiment while doing far less to the animals in it: a microphone over a cage takes
              readings continuously, at night, in the dark, from an animal nobody has touched,
              picked up, restrained or moved to a testing room — which is both a kinder life
              and a cleaner measurement, since a frightened mouse is not the animal you meant to
              study. More information out of every cohort, less disturbance per animal, and a
              clearer picture of what a compound does before it goes anywhere near a person.
            </p>
            <p class="meta">
              Computational
              bioacoustics at Vium — unsupervised classification of ultrasonic vocalizations
              in quasi-real time, which is also how I dipped my toes into audio processing. This was early: several years before MUPET and DeepSqueak made
              unsupervised clustering the standard way to do this, and as far as I know the first
              to run it in quasi-real time on cages being monitored continuously rather than on a
              corpus after the fact. Letting the categories fall out of the recordings instead of
              deciding in advance what to listen for is the only way to hear a call nobody has
              named yet. The calls turned out to carry the animals’ libido
              and their stress, so I could discover and then implement a way of reading those off
              the audio directly. It was deployed in Vium’s preclinical studies, where it could tell you whether a
              compound shifts libido or stress <em>before</em> the drug ever reaches a human trial. Two write-ups came out of it,
              <em>A New Female–Female Mouse Vocalization Discovered via Unlabeled Machine
              Learning</em> and <em>On the Detection and Prevention of Aggression in Lab Mice via
              Quasi-Real Time Analysis</em>.
            </p>
          
            <p class="why echo">
              A multi-company validation in 2025 put three compounds that had
              <a href="https://www.frontiersin.org/journals/toxicology/articles/10.3389/ftox.2025.1655330/full">passed conventional safety pharmacology</a>
              under continuous non-invasive monitoring in their own cages and found signals anyway, some
              persisting for days after dosing. Quietly watching animals who are left alone turns
              out to see things that handling them on a schedule does not.
            </p>
          </div>
            </div>
          </details>
          <details class="row" id="s-neuro">
            <summary>
              <h4>The signal under the scar<span class="yr">Summer 2014</span></h4>
              <p class="tech">Intracortical brain–computer interfaces · decoder convergence analysis · foreign body response and chronic signal loss · optical recording</p>
              <p class="meta lvl lvl-plain">Work on reading the intention to move out of a brain, from the software side and then the hardware side.</p>
              <p class="chips"><a class="chip" href="https://rin.io/neuroprosthetic/">read the post</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              Neuroprosthetics have two major issues. At the tissue end, putting an electrode into
              a brain is an injury: microglia arrive, astrocytes proliferate, and a glial scar
              closes around it, pushing the neurons you wanted away from the thing that is
              listening — so the signal thins and gets noisier across the months in which a
              person is coming to depend on it. At the other end, any single neuron tells you
              almost nothing; the intention to move is legible only across a whole population of
              them. I came at this from the software side and assumed both were software problems.
              My first thought was that a decoder which recalibrated fast enough could just track
              the signal as it drifted — that convergence was the thing to fix. I worked on
              that for a while before accepting you cannot infer your way out of an electrode with
              fewer and fewer neurons left to hear.
            </p>
            <p class="meta">
              The software half was convergence analysis of the decoders then in common use: how
              fast a Kalman-style filter settles onto a usable mapping from neural activity to
              intended movement, how far that mapping degrades as the underlying signal drifts, and
              how much of the loss you can claw back by letting the decoder keep adapting while
              somebody is using it. The number that matters to a user is not peak accuracy on a
              good day. It is how long recalibration takes every morning, and whether the thing is
              still working by the afternoon.
            </p>
            <p class="meta">
              The hardware half was optical recording: instead of pushing metal into cortex and
              waiting for the scar, you get the neurons to express a fluorescent indicator that
              brightens when they fire, and read them with light. It buys cell-type specificity and
              thousands of cells at once. It costs you depth — a millimeter or so even with
              two-photon, in an organ several centimeters thick — and temporal resolution,
              because calcium rises and falls far more slowly than a spike does, and it requires
              getting a gene into somebody, which is a much larger request than a connector.
            </p>
          
            <p class="why echo">
              Most of the answer has been materials. The stiffness mismatch is absurd —
              silicon around 180&nbsp;GPa against a brain of a few kPa — so the field went
              soft: ultraflexible polymer threads, mesh electronics injected through a syringe,
              carbon fibers seven microns across, substrates stiff enough to go in and then soften
              once wet. In mice it works beautifully. One open-mesh design
              <a href="https://www.nature.com/articles/s41593-023-01267-x">tracked the same neurons for thirteen months</a>,
              most of the animals’ adult lives. Coatings do the rest: PEDOT to drop
              impedance, neural adhesion proteins, dexamethasone eluted to quiet the response.
              Then the uncomfortable part. Across
              <a href="https://www.medrxiv.org/content/10.1101/2025.07.02.25330310v1">fourteen BrainGate participants</a>
              and up to seven and a half years, the arrays held spiking on about a third of their
              electrodes and declined only about seven percent — and when arrays are taken
              out and examined, the leading failure is
              <a href="https://www.sciencedirect.com/science/article/pii/S1742706125001151">the silicon eroding and the metal coming away</a>,
              not the tissue closing in. Softer probes may be the right fix for the wrong failure.
              “Scar-free” was a mouse result in 2017 and has been quoted a long way
              past its evidence. Meanwhile the thing these arrays turned out to decode best was not
              a limb but <a href="https://www.nature.com/articles/s41586-023-06377-x">speech</a>,
              which in 2014 I would not have guessed at all.
            </p>
          </div>
            </div>
          </details>
          <details class="row" id="s-allergen">
            <summary>
              <h4>A laboratory on a keyring<span class="yr">2011 – 2014</span></h4>
              <p class="tech">Point-of-consumption allergen detection · laser absorption spectroscopy · G12 antibody colorimetric assay · immunoassay cost and sampling limits</p>
              <p class="meta lvl lvl-plain">A keyring-sized scanner meant to tell you whether the food in front of you would hurt you.</p>
              <p class="chips"><a class="chip" href="https://rin.io/gluten-scanner/">read the post</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              For someone with celiac disease or a severe food allergy, every meal they did not
              cook themselves is an act of trust in a stranger, and the cost of that trust being
              misplaced runs from a ruined week to a funeral. The idea was to hand the judgment
              back to the person eating, in something small enough to live on a keyring.
            </p>
            <p class="meta">
              I tried it twice. The first attempt was optical: a one-dimensional array of infrared
              and visible lasers with an avalanche photodiode, looking for gluten’s
              absorption signature, which would have read food about a centimeter deep without
              touching it. It drowned in noise. Gluten’s signal is faint against everything
              else going on in a protein-rich food, and protein-rich food is exactly where you need
              to look.
            </p>
            <p class="meta">
              So I switched from physics to chemistry: G12 antibodies, which bind gliadin, read out
              by a colorimetric assay — a toothpick you poke into the food, or a strip that
              works like litmus paper. G12 is less sensitive than A1 and much cheaper, and cheap is
              what matters when the thing has to work at every meal. That is where it stopped, and
              the wall was the antibodies: short of bulk synthesis, a per-meal consumable costs
              more than the people who need it can spend.
            </p>
            <p class="why echo">
              In March 2014 I found GlutenTox, TellSpec and 6SensorLabs already at it — the
              good kind of disappointment. 6SensorLabs became Nima, which shipped in 2017,
              <a href="https://www.glutenfreewatchdog.org/news/gluten-free-watchdogs-updated-position-statement-on-the-nima-sensor-for-gluten/">missed gluten at the legal threshold more than a fifth of the time</a>,
              died in 2020, and
              <a href="https://www.allergicliving.com/2026/05/05/the-nima-gluten-sensor-is-back-heres-what-changed/">came back in 2026</a>
              claiming 10&nbsp;ppm, by its own measurement. My wall got routed around rather than
              climbed: the expensive part was the antibody, and the field swapped it for
              <a href="https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1338408/full">aptamers</a>,
              synthetic DNA that folds around a target for a fraction of the cost. One 2024 design
              reads gliadin off gold nanoparticles with a phone camera. The part underneath is
              still unsolved: a negative on one bite does not clear the plate, and sampling error
              swamps measurement error.
            </p>
            </div>
            </div>
          </details>
          <details class="row" id="s-polyglass">
            <summary>
              <h4>Polyglass — reading a pulse off a face, and why I would not build it now<span class="yr">HackMIT 2013</span></h4>
              <p class="tech">Remote photoplethysmography from video · contactless physiological sensing on a head-mounted display · consent and surveillance ethics</p>
              <p class="meta lvl lvl-plain">A Google Glass app that read your pulse off your face without touching you. I would not build it now.</p>
              <p class="chips"><a class="chip" href="https://rin.io/hackmit-polyglass/">read the post</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              The idea was to help autistic people read social communication: if the signals
              everyone else is supposedly picking up on are real, a machine ought to be able to
              surface them.
            </p>
            <p class="meta">
              A Google Glass app that recovers a person’s pulse from the
              video feed alone, no contact and no cuff, and reads the changes in it while they
              talk. Joint with Kartik Talwar and Spencer Hewett.
            </p>
            <p class="why rethink">
              I would not build this now. It takes a reading off someone’s body without their
              knowledge and gives them no way to refuse — the person being measured is the
              one person in the room with no say in it. The need was real; meeting it this way
              moves the cost onto somebody who never agreed to carry it.
            </p>
          </div>
            </div>
          </details>
        </div>
        <div class="pro-group" style="--accent: var(--orange);">
          <h3>Bodies in motion</h3>
          <p class="gloss">A body reading the traces of its own movement.</p>
          <details class="row" id="s-wheelchair">
            <summary>
              <h4>Fixing what is wrong with wheelchairs<span class="yr">2013 – 2015</span></h4>
              <p class="tech">Modular retrofit robotics for powered wheelchairs · automated pressure redistribution · powered seat elevation · assisted transfer · rough-terrain drive · user-led requirements · gaze-controlled assistive mobility · mentorship</p>
              <p class="meta lvl lvl-plain">I asked wheelchair users what they actually wanted, and built four attachments that bolt onto the chair they already own.</p>
              <p class="chips"><a class="chip" href="https://rin.io/pressure-ulcer-prevent/">The wheelchair post</a><a class="chip" href="https://www.youtube.com/watch?v=LUA_efzGQlg">Interview — WIRED</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              My grandfather lost his mobility, so I volunteered at a spinal cord injury
              rehabilitation unit and asked the people there:
              <span class="ask">What would improve your quality of life?</span>
              Three answers kept coming back: getting between bed and chair, being at eye level in
              a conversation, and ground rougher than the floor the chair was built for. Separately
              I went looking at
              <a href="https://www.nature.com/articles/sc201764">what actually kills people with spinal cord injuries</a>.
              Mostly infection, and an open pressure sore is one of the ways infection gets in.
              They are not the biggest killer — that is pneumonia; they are the biggest
              killer mechanical engineering can do anything about.
            </p>
            <p class="meta">
              Everything was modular, and that was the point: not a new wheelchair, but parts that
              bolt onto the one somebody already owns. A chair gets fitted to a body over years,
              and asking someone to give that up in order to gain a feature is not a trade most
              people will take.
            <ul>
              <li>five robotic
                  <a href="https://www.ahrq.gov/topics/pressure-ulcers.html">pressure-injury</a>
                  relief mechanisms, shifting the occupant’s load without them having to do
                  anything — depending on someone to remember it, which many cannot, fails on
                  exactly the days they are unwell</li>
              <li>a transfer mechanism, for getting between bed and chair</li>
              <li>a seat that rises, for talking at eye level</li>
              <li>a drive and tires for ragged ground</li>
            </ul>
            </p>
            <p class="meta">
              The year after, I mentored Ada Rosa on the same problem from the other end: mobility
              assistance for people with ALS and spinal cord injuries, driven by gaze, for users
              whose remaining reliable movement is their eyes —
              <a href="https://www.youtube.com/watch?v=YJxgEDr699w">here she is showing off the eye control</a>.
            </p>
            <p class="why unexpected">
              I expected to hear about getting around. What I kept hearing about was pain —
              constant, and largely unaddressed by anyone they had seen.<br><br>
              It was not a thing I could answer with mechanical engineering. What I could do was
              make sure the mechanisms were not locked up: I wrote up all the mechanical engineering
              and soft robotics I’d invented as a nonprovisional patent application,
              <em>Robotic Mobility Assistive Wheelchairs</em>, and then decided not to file it, and
              they went out under a Creative Commons license instead. A patent would have meant the
              people I built them for waiting on somebody else to license it first.<br><br>
              Then I went to work on <a href="https://rin.io/biome/">understanding</a> and <a href="https://rin.io/memantine/">treating</a> chronic pain, which I am still doing.
            </p>
            <p class="why echo">
              Both halves have since arrived, about a decade on. Medicare began covering
              <a href="https://www.cms.gov/medicare-coverage-database/view/ncd.aspx?ncdid=376">powered seat elevation</a>
              in 2023 — on the grounds of transfers and reach, not of meeting people at eye
              level, which is what the users I spoke to actually said. And automated pressure
              redistribution that asks nothing of the occupant is now
              <a href="https://pubmed.ncbi.nlm.nih.gov/38712763/">a pilot study</a>. I should say
              plainly that all of this, mine included, measures interface pressure, which is a
              proxy; nobody has shown it prevents an injury.
            </p>
            </div>
            </div>
          </details>
          <details class="row" id="s-pr2">
            <summary>
              <h4>When the cameras die, the hands take over<span class="yr">Summer 2012</span></h4>
              <p class="tech">Reinforcement learning · proprioception-only contact-rich manipulation · blind peg-in-hole insertion · two-arm load equalization · Willow Garage PR2 · human–robot interaction</p>
              <p class="meta lvl lvl-plain">I taught a robot arm, via reinforcement learning, to find a hole and fit a shape into it with every sense but its own body switched off.</p>
              <p class="chips"><a class="chip code" href="https://github.com/catherineray/PR2-positronics">code: PR2-positronics</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              Blindness in robots. A machine that stops dead the moment its camera fails is a
              machine you cannot trust around people, and sensors fail constantly.
            </p>
            <p class="meta">
              So I
              <a href="https://rin.io/autonomous-robotic-force-proprioception/">programmed the PR2</a>
              to keep working with its other sensors switched fully off — no vision, no
              external feedback of any kind — and to <em>learn</em>, via reinforcement learning under those conditions,
              to place objects into the holes of the corresponding shape. All it had was its own
              past motor position commands and the finger gripper sensors, so the robot had to
              adapt to the task from its own sense of where its body had been.
            </p>
            <p class="meta">
              Our team also
              smoothed joint movement of the Willow Garage Personal Robot 2 and improved load
              equalization —
              <a href="https://link.springer.com/chapter/10.1007/978-3-319-00065-7_34">sharing the torque between its two arms</a>
              so it could hold something bulky whose mass sat off to one side without one arm
              taking the whole of it. That is most of what carrying things for somebody actually is: a bag of shopping
              is heavier at one end, a box is packed unevenly, and a person handing it over expects
              the thing taking it to adjust.
            </p>
          
            <p class="why question">
              What is recoverable once a sense is gone?
            </p>
            
            <p class="why connection">
              The Braille work, the following spring. Here, a robot reaching for a hole it cannot
              see and finding it by touch; there, a language meant to be read by touch, worked out
              from fragments by a machine that cannot see either. Both are asking what is
              recoverable when the channel everyone assumes you have is missing.
            </p>
            </div>
            </div>
          </details>
          <details class="row" id="s-slam">
            <summary>
              <h4>Drawing the map while flying through it<span class="yr">Fall 2012</span></h4>
              <p class="tech">Simultaneous localization and mapping · monocular visual SLAM with parallax bootstrapping · loop closure · scale from sonar and inertial fusion · motion planning on a partial map</p>
              <p class="meta lvl lvl-plain">I taught a toy drone to find its way outdoors while drawing its own map as it went.</p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              To know where you are, you need a map. To build a map, you need to know where you
              are. So how does anything ever get off the ground?
            </p>
            <p class="meta">
              You do not solve either one first. You estimate both at once and let them correct
              each other. Take two frames from slightly different positions, triangulate the
              handful of features visible in both, and you have a crude map — which means
              you have to move before you can know anything at all, because depth comes from
              parallax. After that it alternates: given the map, work out where the camera must be
              to be seeing what it sees; given the poses, add new points and refine the old ones.
              The tracker running underneath this was PTAM, whose trick was to split those two
              jobs across threads — follow the features every frame, rebuild the map in the
              background whenever there is time to spare.
            </p>
            <p class="meta">
              Error accumulates the whole way, because every new position is measured against a map
              built out of the previous ones. You get it back by recognizing somewhere you have
              already been and closing the loop. And there is one thing a single camera can never
              tell you: scale. A large room far away and a small room close up produce the same
              picture. That number had to come from the sonar altimeter and the inertial unit.
            </p>
            <p class="meta">
              All of it ran off-board, on a laptop, over WiFi. It held together where there was
              texture and steady light, and fell apart where there was not: repetitive ground,
              changing sun, and wind, which moves the aircraft between one frame and the next.
            </p>
            <p class="why rethink">
              I would not take this on now. Navigating terrain nobody has surveyed is not a neutral
              capability — there is very little daylight between solving it for a toy
              quadcopter and solving it for something armed. I was treating it as a puzzle about
              maps and motion, not thinking of the consequences.
            </p>
          </div>
            </div>
          </details>
          <details class="row" id="s-gait">
            <summary>
              <h4>The homesickness robot<span class="yr">2011</span></h4>
              <p class="tech">Mimicking animal motion and companionship · robot person following · gait-based re-identification · statically stable hexapedal locomotion</p>
              <p class="meta lvl lvl-plain">I missed my dog at university, so I built a six-legged robot that followed me around.</p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              My first robotics project, and the motive was homesickness — I missed my dog at
              university, so I built something that would trail after me.
            </p>
            <p class="meta">
              One told it to follow you by standing in front of it. Two problems follow from there:
              knowing who to keep following, and keeping up with them.
            </p>
            <p class="meta">
              The first answer was color — lock onto the histogram of whatever the person
              was wearing and chase that — which works right up until they turn away, walk
              under a different lamp, or take their coat off. So it identified them by gait
              instead, from the way they walked rather than from their face or their clothes.
            </p>
            <p class="meta">
              For keeping up I took what looked like the cheap way out. Six legs are statically
              stable: an alternating tripod keeps three feet on the ground with the body over its
              own support at every instant, so in principle the thing never has to balance at all.
              In practice it fell over constantly. Static stability is a promise about geometry,
              not about the world — it assumes the feet land where you expect, that the
              ground holds when they do, and that you are moving slowly enough for momentum not to
              count. A slope, a patch of gravel, a foot dropping into a dip a centimeter deeper
              than the controller believed, and the support polygon is not where it is supposed to
              be. Extra legs buy margin, not immunity.
            </p>

          
            <p class="why echo">
              The way out was not more legs, even though I personally find that cuter. Boston Dynamics
              went the other way with BigDog
              — four legs, which cannot fall back on geometry at all and so have to catch
              themselves, force-controlled limbs choosing where to put a foot in the next fraction
              of a second. That is the machine everybody remembers getting kicked sideways on ice
              and skittering back upright, and it is the approach that generalized. Quadrupeds now
              <a href="https://www.science.org/doi/10.1126/scirobotics.adi7566">learn the recovery in simulation</a>
              and cross ground I could never have got a hexapod over. Following a person around has
              a name now too —
              <a href="https://arxiv.org/abs/2509.10796">robot person following</a> — with
              benchmarks, and re-identification that keeps learning your target as they change.
            </p>
            <p class="why question">
              What if, rather than planning motion across a floor, you add flight to the problem?
              Three dimensions, no ground to stand on, and no option to stop and think.
            </p>
            
            </div>
            </div>
          </details>
        </div>
        <div class="pro-group" style="--accent: var(--peach);">
          <h3>Matter</h3>
          <p class="gloss">Behaviour inferred from the traces that structure leaves.</p>
          <details class="row" id="s-superconductor">
            <summary>
              <h4>Calculating a material into existence<span class="yr">2012 – 2013</span></h4>
              <p class="tech">Electronic-structure calculation · augmented plane wave method · superconducting transition temperature of intermetallic compounds · computational materials screening</p>
              <p class="meta lvl lvl-plain">Working out on a computer which materials would superconduct, instead of making them one at a time to find out.</p>
              <p class="chips"><a class="chip" href="https://rin.io/computational-materials-science/">read the post</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              A superconductor carries current with no resistance: nothing lost, nothing turned to
              heat, and magnets far stronger than their power draw. Every one we have needs liquid
              helium, so the chase is for one that works warmer — and you cannot run that
              chase by building candidates one at a time.
            </p>
            <p class="meta">
              Extending GMU’s simulation after
              transferring there, advised by Dimitrios Papaconstantopoulos, using
              electronic-structure calculation by the augmented plane wave
              method to predict the superconducting transition temperature of intermetallic compounds.
              This became one of my two undergraduate theses,
              <em>Predicting Superconductivity Transition Temperature via the Augmented Plane Wave Model</em>.
              Alongside it, <a href="https://rin.io/stockfish/">algorithms of AI chess players</a>.
            </p>
          
            <p class="why echo">
              The approach paid off, in other people’s hands. H<sub>3</sub>S was calculated to superconduct near 200&nbsp;K and then
              <a href="https://arxiv.org/abs/1506.08190">measured at 203&nbsp;K</a>; LaH<sub>10</sub>
              was predicted in 2017 and
              <a href="https://www.nature.com/articles/s41586-019-1201-8">found at 250&nbsp;K</a>
              two years later. Materials predicted on a computer before anyone made them, which is
              the outcome the whole approach was betting on. They need megabar pressures, so nobody
              is wiring a city with them yet.
            </p>
            </div>
            </div>
          </details>
          <details class="row" id="s-types">
            <summary>
              <h4>Nothing interesting happens at only one scale<span class="yr">Jan 2015</span></h4>
              <p class="tech">Multiscale modeling · directed type systems · compositional model building · topology applied to complex biological systems</p>
              <p class="meta lvl lvl-plain">A proposal that multiphysics models, which are already fibrations, be written in a dependent type language and run faster for it.</p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              A multiphysics simulation is several different physics solved over one domain at
              once, and it is expensive twice over: the run itself, and the human work of stitching
              solvers together without introducing errors. Both of those are structural costs, and
              the structure is already sitting there in the mathematics.
            </p>
            <p class="meta">
              The proposal was to write these models in a dependent type language, because the
              mathematics is already the right shape for it. A classical field
              <a href="https://ncatlab.org/nlab/show/fiber+bundles+in+physics">is a section of a bundle</a>
              over the domain, and a gauge field is a connection on one; a bundle is a fibration. A
              dependent type is also a fibration — a family indexed over a base, which
              categorically is a map whose fibers are the types. The two are the same construction
              wearing different clothes, so a physics model can be carried in a type rather than
              in a comment, and the compiler can then see what the physicist knows.
            </p>
            <p class="meta">
              The payoff I was after was run time, not just correctness. Once the structure is in
              the type, whole categories of runtime work become statically unnecessary —
              dimension and index checks, guards on couplings that cannot occur, dispatch that can
              be specialized away. That is not speculative: eliminating array bound checks through dependent types
              <a href="https://www.cs.cmu.edu/~fp/papers/pldi98dml.pdf">measurably speeds up</a>
              ordinary numerical programs. A multiphysics solver has far more structure to
              exploit than a bubble sort does. Making direction of dependence part of the type
              — which physics feeds which — is what pushes it from ordinary dependent
              types toward the directed, cocartesian kind.
            </p>
          
            <p class="why echo">
              Other people were heading the same way, and one of my own co-authors
              on <em>Toward Directed Collapsibility</em> is among them: Nicole Sanderson now writes on
              <a href="https://www.annualreviews.org/content/journals/10.1146/annurev-neuro-112723-034315">topology and neural circuits</a>.
              Persistent homology has reached the tumour microenvironment too, picking out
              <a href="https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2025.1615278/abstract">rare T-cell states under checkpoint blockade</a>.
              The immunotherapy daydream had other people in it all along.
            </p>
            <p class="why echo">
              Both halves have since been developed, independently of me. Directed type theory was rebuilt on
              <a href="https://arxiv.org/abs/1705.07442">synthetic simplicial foundations</a>, where
              the objects under study are exactly
              <a href="https://arxiv.org/abs/2604.18668">cocartesian fibrations</a>, and the
              proofs are going into a proof assistant. On the applied side,
              <a href="https://arxiv.org/abs/2401.17432">Decapodes</a> composes systems of PDEs
              diagrammatically: you assemble a multiphysics simulation out of component models
              instead of editing a monolith, and the composite is a first-class object rather than
              a hand-merged file. They report a drastic drop in time-to-first-simulation, though
              they say plainly that the claim is qualitative and unmeasured, which is the honest
              state of it.
            </p>
            </div>
            </div>
          </details>
          <details class="row" id="s-plasma">
            <summary>
              <h4>What shapes will a plasma hold?<span class="yr">2012</span></h4>
              <p class="tech">Standing-wave mode structure of a 2.45&nbsp;GHz argon discharge · conductive polyhedral cavity · deployable structures in ionospheric plasma</p>
              <p class="meta lvl lvl-plain">I filled a metal polyhedron with argon, put a microwave source inside, and looked at the shapes the plasma made.</p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              Space is cool, and a satellite that folds is cooler: you launch something small and
              it opens into something large. But a deployed satellite is a geometric mesh sitting
              in the ionosphere, which is a plasma, and that plasma is part of the electrical
              environment the structure has to work in. So the question is what a given geometry
              does to the fields around it.
            </p>
            <p class="meta">
              I was given access to a hollow aluminum polyhedron, a vacuum pump and a
              2.45&nbsp;GHz RF source: evacuate it, backfill with argon, and strike a
              discharge inside. The cavity’s geometry picks out which modes can live
              there, and the discharge organizes itself along the resulting standing wave. The point
              was the mode structure: which field patterns a given polyhedron will and will not
              permit. A benchtop analogue for mode selection rather than a faithful orbit
              — argon is the conventional stand-in for low-earth-orbit plasma, but it
              matches neither the ion mass nor the temperature, and a microwave discharge sits
              orders of magnitude above ionospheric density.
            </p>
          
            <p class="why echo">
              People do this deliberately now and call them plasma metasurfaces: discharges arranged
              so their geometry decides which electromagnetic modes get through, and
              <a href="https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.7.013287">reconfigured by changing the discharge</a>
              rather than the hardware. I was making a very crude one and calling it a side
              project.
            </p>
            </div>
            </div>
          </details>
          <details class="row" id="s-memristor">
            <summary>
              <h4>A thinking film you could bend<span class="yr">Spring 2012</span></h4>
              <p class="tech">Flexible TiO<sub>2</sub> resistive switching · memristive device fabrication and bend-cycle characterization · in-memory computing</p>
              <p class="meta lvl lvl-plain">A memristor is a resistor that remembers. I made bendable ones by hand and measured them until they failed.</p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              A memristor is a resistor that remembers where you last left it. That sounds like a
              small thing and it is not: a component that stores a value and computes with it in
              the same place means a device built from them does not have to send its data
              somewhere else to be processed. Put a memristor on a flexible surface and that
              device can be worn: potentially as a non-invasive medical device.
            </p>
            <p class="meta">
              Chua predicted the device in 1971; HP <a href="https://www.nature.com/articles/nature06932">said they had built one</a> in 2008; I was
              depositing titanium dioxide films in 2012, when the field was still mostly promise.
              What I did was make them and measure them — bench work, not simulation, a
              research assistantship in the materials science lab of the Chemistry and Physics
              Department at Mary Baldwin College — pushing each one until it switched, then
              bending it and doing it again to find where the behavior fell apart. It is also
              where I <a href="https://rin.io/coupled-oscillator-love/">became interested</a> in
              physical examples of
              <a href="https://rin.io/matlab-lorenz-attractor/">nonlinear systems</a>.
            </p>
            <p class="why echo">
              Years afterward, a group
              <a href="https://www.nature.com/articles/s41598-020-58831-9">wired live rat neurons in Padova to silicon neurons in Zurich</a>
              through memristors in Southampton, with the memristors holding the synaptic weights
              between them. The devices were Pt/TiO<sub>x</sub>/Pt — the same stack I had
              been making by hand. I had nothing to do with it, and it is still my favorite thing
              to have happened to a material I once held.
            </p>
            </div>
            </div>
          </details>
        </div>
        <div class="pro-group" style="--accent: var(--violet);">
          <h3>Fragments</h3>
          <p class="gloss">Structure recovered from the traces a language leaves behind.</p>
          <details class="row" id="s-braille">
            <summary>
              <h4>Reading a language from the fragments somebody already translated<span class="yr">Spring 2013</span></h4>
              <p class="tech">Unsupervised grammar and lexicon induction from partially parallel text · decipherment of incompletely understood scripts · contracted Braille as the test language · accessible signage</p>
              <p class="meta lvl lvl-plain">A method for working out a language you only partly have, tested on the Braille that gets signs wrong.</p>
              <p class="chips"><a class="chip" href="https://rin.io/camel-paper/">read the post</a> <a class="chip code" href="https://github.com/catherineray/MachLearn-G2Braille">code: MachLearn-G2Braille</a></p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              This started because I read Braille and kept noticing that the signs around me were
              wrong. The one that decided it: a door labeled <em>electrical room</em> in print and
              <em>safety exit</em> in Braille. Whoever installed it could not read what they were
              mounting, and nobody downstream of them could catch it. So I wanted translation to be
              something a builder could get right at the point of installing a sign, rather than
              something they had to take on faith.
            </p>
            <p class="meta">
              The mistakes are easy to make, because Grade 2 Braille is not a cipher you can look
              up letter by letter — it is contracted, with about a hundred and eighty
              contractions, and the same six dots can be a letter, a whole word, or a fragment
              glued to its neighbors depending on where in the word it falls and what sits beside
              it.
            </p>
            <p class="meta">
              Which makes it a very good test case for a problem much older than Braille: you have
              a text in a script you only partly understand, and a translation of some of it, and
              you want the rest. The method does not care that the script is Braille. It builds
              probabilistic dictionaries from whatever parallel fragments exist and lets the
              grammar fall out of the alignment — the same shape of problem as an
              incompletely deciphered ancient script, where a handful of confident readings and a
              great deal of unread text is exactly the situation you are in. Braille simply has the
              advantage of a known answer to check against. It grew out of my automated
              computational semantics research at GMU and became my other undergraduate thesis,
              <em>Contextual Machine Learning through the Analysis and Chunking of Partially
              Translated Grade 2 Braille</em>.
            </p>
            
          
            <p class="why echo">
              The grammar was the problem, and the standards body agreed. When Unified English
              Braille replaced the older code, nine contractions were
              <a href="https://www.brailleauthority.org/ueb/overview_changes_ebae_ueb.html">deliberately deleted</a>
              — in BANA's own words, to enable accurate automatic translation and reduce the
              exceptions to the rules. They simplified the language rather than the model. It is
              still not solved: frontier language models today
              <a href="https://arxiv.org/html/2607.11893">refuse, hallucinate, or emit malformed Braille</a>,
              and a small fine-tuned model beats all of them.
            </p>
            </div>
            </div>
          </details>
          <details class="row" id="s-summarization">
            <summary>
              <h4>Trying to keep clinical doctors up to date<span class="yr">2013</span></h4>
              <p class="tech">Automated computational semantics · abstractive summarization of biomedical literature · evidence fidelity</p>
              <p class="meta lvl lvl-plain">A machine that reads a scientific paper and tells a busy doctor whether it is worth their evening.</p>
            </summary>
            <div class="row-body">
            <div class="lvl lvl-curious">
            <p class="why">
              I kept meeting working doctors who were further from the current literature than they
              wanted to be. Not for any want of caring: seeing patients all day and reading a stack
              of new papers every week are not two things one person can do. The volume is what
              defeats them, so the volume is what to go after.
            </p>
            <p class="meta">
              Automated computational semantics research at George Mason, aimed at getting a machine
              to read a paper and return something faithful and short enough that a clinician
              between appointments could decide whether the whole thing was worth an evening.
            </p>
          
            <p class="why connection">
              This is the research CAMEL grew out of, pointed the other way round. There, meaning
              recovered from too little text; here, meaning kept intact while most of the text goes
              away.
            </p>
            </div>
            </div>
          </details>
        </div>
        </div>

        <div class="professional">
        <div class="pro-group" style="--accent: var(--pink);" id="lab-bio">
          <h3>Living things</h3>
          <p class="gloss">Hidden states, read from the traces a system emits.</p>
          <details class="pro" id="p-biome">
            <summary>
            <h4><a href="https://rin.io/biome/">Biome of Overstimulation: Sensory Sensitivity as a Unifying Mechanism</a><span class="yr">2024–</span><span class="yr now">current</span></h4>
            <p class="ptags"><span class="ptag">systems biology</span><span class="ptag">neuroimmunology</span><span class="ptag">evidence synthesis</span></p>
            </summary>
            <div class="pro-body">
            <p>Synthesis arguing that failure of habituation constitutes a shared upstream mechanism, drawing on connectivity imaging, glutamatergic excitability, microbiome composition and enteric regulation of immunoglobulin secretion. With L. Estinto.</p>
            <p class="lim">Hypothesis-generating; not experimentally validated.</p>
            </div>
          </details>
          <details class="pro" id="p-megacolon">
            <summary>
            <h4><a href="https://rin.io/megacolon/">Neostigmine in feline idiopathic megacolon</a><span class="yr">2026</span><span class="yr now">current</span></h4>
            <p class="ptags"><span class="ptag">veterinary pharmacology</span><span class="ptag">case documentation</span><span class="ptag">enteric motility</span></p>
            </summary>
            <div class="pro-body">
            <p>Owner-reported case study of an acetylcholinesterase inhibitor used off-label to restore colonic motility, with lactulose and anti-NGF analgesia, documented to a standard usable in consultation.</p>
            <p class="lim">Contraindicated without prior deobstipation and exclusion of mechanical obstruction. Medical management succeeds in roughly two thirds of cases presenting under six months and under six percent thereafter.</p>
            </div>
          </details>
          <details class="pro" id="p-memantine">
            <summary>
            <h4><a href="https://rin.io/memantine/">Memantine as a candidate non-opioid analgesic in central sensitization</a><span class="yr">2026</span><span class="yr now">current</span></h4>
            <p class="ptags"><span class="ptag">pharmacology</span><span class="ptag">evidence synthesis</span><span class="ptag">health policy</span></p>
            </summary>
            <div class="pro-body">
            <p>Review of the mechanistic rationale, comparative pharmacology against ketamine and dextromethorphan, and the clinical trial record for memantine in chronic pain, with a proposed design for a publicly funded trial.</p>
            <p class="lim">Evidence synthesis only. The pooled analysis of eleven trials is not significant; the positive signal rests on one 63-patient fibromyalgia trial.</p>
            </div>
          </details>
          <details class="pro" id="p-usv">
            <summary>
            <h4><a href="/mouse-vocalizations/">Unsupervised classification of rodent ultrasonic vocalization for continuous preclinical monitoring</a><span class="yr">2013–2014</span></h4>
            <p class="ptags"><span class="ptag">computational bioacoustics</span><span class="ptag">unsupervised learning</span><span class="ptag">safety pharmacology</span></p>
            </summary>
            <div class="pro-body">
            <p>Unsupervised classification of rodent ultrasonic vocalizations in quasi-real time, deployed as a preclinical readout for compound effects on stress and libido — the first continuous non-invasive behavioral phenotyping system at Vium, several years before MUPET and DeepSqueak made the approach standard. Two write-ups: <em>A New Female–Female Mouse Vocalization Discovered via Unlabeled Machine Learning</em> and <em>On the Detection and Prevention of Aggression in Lab Mice via Quasi-Real Time Analysis</em>.</p>
            <p class="lim">Non-contact acquisition removes handling stress as a confound and increases information yield per cohort; <a href="https://www.frontiersin.org/journals/toxicology/articles/10.3389/ftox.2025.1655330/full">later multi-company validation</a> supports the approach. Prior unsupervised USV clustering exists (Grimsley et al., 2013).</p>
            </div>
          </details>
          <details class="pro" id="p-neuro">
            <summary>
            <h4><a href="https://rin.io/neuroprosthetic/">Decoder convergence and optical recording for intracortical motor prostheses</a><span class="yr">2014</span></h4>
            <p class="ptags"><span class="ptag">brain–computer interfaces</span><span class="ptag">decoder design</span><span class="ptag">neural interfaces</span></p>
            </summary>
            <div class="pro-body">
            <p>Convergence analysis of intracortical decoders under signal drift — how fast a Kalman-style filter settles onto a usable mapping from neural activity to intended movement, how far it degrades as glial scarring thins the neural population, and how much adaptive recalibration recovers. Then optical recording via fluorescent calcium indicators as an alternative to penetrating electrodes.</p>
            <p class="lim">Foreign body response degrades yield; <a href="https://www.medrxiv.org/content/10.1101/2025.07.02.25330310v1">subsequent human longitudinal data</a> indicates abiotic electrode failure may dominate. Optical methods remain depth- and delivery-limited.</p>
            </div>
          </details>
          <details class="pro" id="p-allergen">
            <summary>
            <h4><a href="https://rin.io/gluten-scanner/">Portable detection of gluten and common allergenic proteins</a><span class="yr">2011–2014</span></h4>
            <p class="ptags"><span class="ptag">immunoassay</span><span class="ptag">optical spectroscopy</span><span class="ptag">point-of-care</span></p>
            </summary>
            <div class="pro-body">
            <p>Two approaches: a laser and avalanche-photodiode optical assay, abandoned for insufficient SNR against protein-rich matrices; then a G12 antibody colorimetric assay in a toothpick or strip format.</p>
            <p class="lim">Limiting factor was antibody cost per assay, not sensitivity. Sampling variance in heterogeneous food exceeds measurement variance, which bounds the device class; <a href="https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1338408/full">aptamer assays</a> have since addressed the cost term.</p>
            </div>
          </details>
          <details class="pro" id="p-polyglass">
            <summary>
            <h4><a href="https://rin.io/hackmit-polyglass/">Remote photoplethysmography on a head-mounted display</a><span class="yr">2013</span></h4>
            <p class="ptags"><span class="ptag">computer vision</span><span class="ptag">physiological sensing</span><span class="ptag">research ethics</span></p>
            </summary>
            <div class="pro-body">
            <p>Recovery of cardiac pulse and its variation from video alone, without contact, intended as a social-signal aid. HackMIT, with K. Talwar and S. Hewett.</p>
            <p class="lim">Withdrawn on ethical grounds: the measured party cannot detect or refuse the measurement.</p>
            </div>
          </details>
        </div>
        <div class="pro-group" style="--accent: var(--orange);" id="lab-embodied">
          <h3>Bodies in motion</h3>
          <p class="gloss">A body reading the traces of its own movement.</p>
          <details class="pro" id="p-wheelchair">
            <summary>
            <h4><a href="https://rin.io/pressure-ulcer-prevent/">Modular robotic retrofits for powered wheelchairs</a><span class="yr">2013–2015</span></h4>
            <p class="ptags"><span class="ptag">mechanism design</span><span class="ptag">rehabilitation engineering</span><span class="ptag">user-led requirements</span></p>
            </summary>
            <div class="pro-body">
            <p>Four assemblies designed to fit chairs already configured to their users: automated pressure redistribution, powered seat elevation, assisted bed-to-chair transfer, rough-terrain drive. Requirements elicited from wheelchair users with spinal cord injury; subsequent mentorship of <a href="https://www.youtube.com/watch?v=YJxgEDr699w">gaze-controlled mobility assistance</a> for ALS and SCI.</p>
            <p class="lim">Written as a nonprovisional patent application and deliberately not filed; released under Creative Commons. Interface pressure is a surrogate endpoint.</p>
            </div>
          </details>
          <details class="pro" id="p-pr2">
            <summary>
            <h4><a href="https://rin.io/autonomous-robotic-force-proprioception/">Graceful degradation under sensor failure: contact-rich manipulation on proprioception alone</a><span class="yr">2012</span></h4>
            <p class="ptags"><span class="ptag">graceful degradation</span><span class="ptag">reinforcement learning</span><span class="ptag">contact-rich manipulation</span><span class="ptag">proprioceptive control</span><span class="ptag">human–robot interaction</span></p>
            </summary>
            <div class="pro-body">
            <p>A robot that stops dead the moment its camera fails cannot be trusted around people, and sensors fail constantly. With vision and all external feedback disabled, a Willow Garage PR2 acquired a shape-matched insertion task via reinforcement learning from commanded joint positions and gripper sensing alone. Also <a href="https://link.springer.com/chapter/10.1007/978-3-319-00065-7_34">two-arm load equalization</a> for objects with off-center mass. HCI internship, George Washington University.</p>
            <p class="lim">Demonstrates graceful degradation at the extreme: total loss of exteroception, not a partial fault. The reinforcement learning was small-scale policy search.</p>
            </div>
          </details>
          <details class="pro" id="p-slam">
            <summary>
            <h4>Monocular visual SLAM with motion planning on a micro aerial vehicle<span class="yr">2012</span></h4>
            <p class="ptags"><span class="ptag">SLAM</span><span class="ptag">sensor fusion</span><span class="ptag">motion planning</span></p>
            </summary>
            <div class="pro-body">
            <p>PTAM-class monocular SLAM, processed off-board, with metric scale recovered by fusing sonar altimetry and inertial measurement, coupled to frontier-based planning on a partially built map. Parrot ARDrone.</p>
            <p class="lim">Bounded by repetitive texture, illumination change and airframe disturbance. Dual-use: unsurveyed autonomous navigation transfers directly to armed platforms.</p>
            </div>
          </details>
          <details class="pro" id="p-gait">
            <summary>
            <h4>Gait-based re-identification for robot person following<span class="yr">2011</span></h4>
            <p class="ptags"><span class="ptag">computer vision</span><span class="ptag">re-identification</span><span class="ptag">legged locomotion</span></p>
            </summary>
            <div class="pro-body">
            <p>Hexapedal platform; target enrollment by proximity, association by gait rather than appearance, steering on bearing. Alternating tripod gait for statically stable traversal.</p>
            <p class="lim">Static stability is a guarantee over an idealized contact model and does not survive real terrain.</p>
            </div>
          </details>
        </div>
        <div class="pro-group" style="--accent: var(--peach);" id="lab-physical">
          <h3>Matter</h3>
          <p class="gloss">Behaviour inferred from the traces that structure leaves.</p>
          <details class="pro" id="p-superconductor">
            <summary>
            <h4><a href="https://rin.io/computational-materials-science/">Electronic-structure prediction of superconducting transition temperature</a><span class="yr">2012–2013</span></h4>
            <p class="ptags"><span class="ptag">density functional methods</span><span class="ptag">electronic structure</span><span class="ptag">materials screening</span></p>
            </summary>
            <div class="pro-body">
            <p>Augmented plane wave band structure feeding an electron-phonon coupling estimate and a McMillan/Allen–Dynes transition temperature for intermetallic compounds. Advised by D. Papaconstantopoulos, George Mason University. Undergraduate thesis.</p>
            <p class="lim">Subsequently validated at scale by the <a href="https://www.nature.com/articles/s41586-019-1201-8">predicted-then-synthesized hydride superconductors</a>, at megabar pressures.</p>
            </div>
          </details>
          <details class="pro" id="p-types">
            <summary>
            <h4>Dependent and directed type systems for multiphysics models<span class="yr">2015</span></h4>
            <p class="ptags"><span class="ptag">type theory</span><span class="ptag">category theory</span><span class="ptag">scientific computing</span></p>
            </summary>
            <div class="pro-body">
            <p>Proposal that multiphysics models be expressed in a dependent type language. Classical fields are <a href="https://ncatlab.org/nlab/show/fiber+bundles+in+physics">sections of fiber bundles</a>; dependent types are semantically fibrations; the correspondence permits model structure, including direction of coupling, to be carried in the type and exploited by the compiler. Visiting researcher, Santa Fe Institute.</p>
            <p class="lim">Motivated by run time rather than correctness alone: dependently typed elimination of runtime checks <a href="https://www.cs.cmu.edu/~fp/papers/pldi98dml.pdf">measurably reduces execution time</a> on ordinary numerical code. Directed variants correspond to <a href="https://arxiv.org/abs/1705.07442">cocartesian fibrations</a>; a related applied line of work is <a href="https://arxiv.org/abs/2401.17432">diagrammatic composition of PDE systems</a>, whose reported gains remain qualitative.</p>
            </div>
          </details>
          <details class="pro" id="p-plasma">
            <summary>
            <h4>Standing-wave mode structure of an RF discharge in a polyhedral cavity<span class="yr">2012</span></h4>
            <p class="ptags"><span class="ptag">RF plasma</span><span class="ptag">electromagnetics</span><span class="ptag">cavity resonance</span></p>
            </summary>
            <div class="pro-body">
            <p>2.45&nbsp;GHz discharge in an evacuated aluminum polyhedron backfilled with argon; cavity geometry selects the supported resonant modes and the discharge organizes along the resulting standing wave. Motivated by deployable conductive structures in ionospheric plasma.</p>
            <p class="lim">Benchtop analogue only: argon matches neither ion mass nor electron temperature, and discharge density sits orders of magnitude above ionospheric values.</p>
            </div>
          </details>
          <details class="pro" id="p-memristor">
            <summary>
            <h4>Flexible TiO<sub>2</sub> resistive-switching devices<span class="yr">2012</span></h4>
            <p class="ptags"><span class="ptag">thin-film devices</span><span class="ptag">resistive switching</span><span class="ptag">device physics</span></p>
            </summary>
            <div class="pro-body">
            <p>Fabrication and characterization of <a href="https://www.nature.com/articles/nature06932">memristive devices</a> on compliant substrates, including switching behavior under bend cycling. Research assistantship, Mary Baldwin College.</p>
            <p class="lim">Motivation was colocated storage and computation for body-worn sensing; now termed in-sensor and near-sensor computing.</p>
            </div>
          </details>
        </div>
        <div class="pro-group" style="--accent: var(--violet);" id="lab-partial">
          <h3>Fragments</h3>
          <p class="gloss">Structure recovered from the traces a language leaves behind.</p>
          <details class="pro" id="p-braille">
            <summary>
            <h4><a href="https://rin.io/camel-paper/">Unsupervised grammar and lexicon induction from partially parallel text</a><span class="yr">2013</span></h4>
            <p class="ptags"><span class="ptag">natural language processing</span><span class="ptag">lexicon induction</span><span class="ptag">decipherment</span></p>
            </summary>
            <div class="pro-body">
            <p>Probabilistic lexicon induction over weakly parallel corpora, evaluated on contracted Grade 2 Braille, chosen as a test language with a known ground truth. Undergraduate thesis, George Mason University. <a href="https://github.com/catherineray/CAMEL">Code</a>.</p>
            <p>This grew out of automated computational semantics research at GMU, which also included work on abstractive summarization of biomedical literature — getting a machine to read a scientific paper and return something faithful and short enough that a clinician could decide whether the full paper was worth their evening.</p>
            <p class="lim">Generalizes to incompletely deciphered scripts. Applied motivation: transcription error in installed accessible signage.</p>
            </div>
          </details>
          <details class="pro" id="p-summarization">
            <summary>
            <h4>Automated abstractive summarization of biomedical literature for clinical readers<span class="yr">2013</span></h4>
            <p class="ptags"><span class="ptag">natural language processing</span><span class="ptag">summarization</span><span class="ptag">biomedical text</span></p>
            </summary>
            <div class="pro-body">
            <p>Automated computational semantics directed at reducing a paper to a triage-sufficient summary. George Mason University.</p>
            <p class="lim">Evaluation of evidence fidelity, rather than generation, remains the open problem.</p>
            </div>
          </details>
        </div>
        </div>

      <div class="code-row">
        <p class="chips">
          <a class="chip" href="https://github.com/catherineray">all my repos on GitHub</a>
        </p>
      </div>
    </section>


    <!-- art portfolio -->

    <section>
      <h2 class="sec-head" style="--shadow: var(--violet); --tilt: 2deg;" data-text="THE STUDIO" id="about-studio">THE STUDIO</h2>

      <div class="note studio" style="--accent: var(--violet);">
        <p>Pastels, acrylic, spray-painted creature murals, tattoos, polaroids. A taste:</p>
        <ul class="studio-strip">
          <li><a href="/portfolio/#gallery"><img src="{{ site.baseurl }}/gallery/00-lain-mexicocity.png" alt="Open the gallery" loading="lazy"></a></li>
          <li><a href="/portfolio/#gallery"><img src="{{ site.baseurl }}/gallery/a-vibing.jpg" alt="Open the gallery" loading="lazy"></a></li>
          <li><a href="/portfolio/#gallery"><img src="{{ site.baseurl }}/gallery/neon-mantis.png" alt="Open the gallery" loading="lazy"></a></li>
          <li><a href="/portfolio/#gallery"><img src="{{ site.baseurl }}/gallery/chaos-penrose.png" alt="Open the gallery" loading="lazy"></a></li>
          <li><a href="/portfolio/#gallery"><img src="{{ site.baseurl }}/gallery/sleep-duck.png" alt="Open the gallery" loading="lazy"></a></li>
        </ul>
        <p class="studio-more">And beyond the gallery:</p>
        <div class="studio-doors">
          <a href="/portfolio/#comics" style="--d: #6cc8f0;"><b>Comics</b><span>Endomortis, with Petra Flurin</span></a>
          <a href="/portfolio/#writing" style="--d: #f9a13c;"><b>Writing</b><span>a play and poems</span></a>
          <a href="/portfolio/#music" style="--d: #9b7fd4;"><b>Music</b><span>songs and songwriting</span></a>
        </div>
        <div class="studio-btns"><a class="cv cv-art" href="/portfolio/">SEE THE PORTFOLIO →</a></div>
      </div>
    </section>

    <!-- contact -->

    <section>
      <h2 class="sec-head" style="--shadow: var(--orange); --tilt: -2deg;" data-text="CONTACT ME" id="about-contact">CONTACT ME</h2>

      <div class="note note-cream" style="--accent: var(--orange);">
        <dl class="mails">
          <div class="mail">
            <dt>Curiosity is welcome</dt>
            <dd><a href="mailto:fractalcows@gmail.com">fractalcows@gmail.com</a></dd>
          </div>
          <div class="mail">
            <dt>My work email</dt>
            <dd><a href="mailto:cray@uni-muenster.de">cray@uni-muenster.de</a></dd>
          </div>
        </dl>
      </div>

      <div class="note" style="--accent: var(--pink);">
        <p>
          You will find the name <b>Cathe(rin)e Ray</b> on old stuff and
          <b>Rin Ray</b> on my newer works — these both refer to the same person.
          I prefer Rin nowadays.
        </p>
      </div>
    </section>



  </div>

</main>

<script>
  (function () {
    var sec = document.getElementById('before-math');
    if (!sec) return;
    var KEY = 'rin-about-level';
    var btns = sec.querySelectorAll('.dial button');
    var ALIAS = {
      science: 'pedantic', pedantic: 'pedantic', evaluate: 'pedantic',
      story: 'curious', curious: 'curious',
      quick: 'plain', plain: 'plain', short: 'plain'
    };

    function set(level, remember) {
      if (!ALIAS[level]) return;
      level = ALIAS[level];
      sec.dataset.level = level;
      btns.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.set === level));
      });
      if (remember) { try { localStorage.setItem(KEY, level); } catch (e) {} }
    }

    sec.addEventListener('click', function (e) {
      var t = e.target.closest('[data-set]');
      if (t) set(t.dataset.set, true);
    });

    /* link, then last choice, then guess from the referrer */
    var chosen = null;
    try {
      var params = new URL(window.location.href).searchParams;
      chosen = params.get('read') || params.get('level');
    } catch (e) {}
    if (!chosen && window.location.hash) chosen = window.location.hash.slice(1);
    if (!chosen) { try { chosen = localStorage.getItem(KEY); } catch (e) {} }
    if (!chosen) {
      var ref = document.referrer || '';
      if (/arxiv\.org|\.edu|\.ac\.|doi\.org|nature\.com|sciencedirect|springer|mathscinet|scholar\.google|orcid/i.test(ref)) {
        chosen = 'science';
      }
    }
    if (chosen && ALIAS[chosen.toLowerCase()]) {
      set(chosen.toLowerCase(), false);
      if (sec.dataset.level !== 'curious') {
        var det = sec.querySelector('details.fold');
        if (det) det.open = true;
      }
    }
  })();
</script>
<script>
  /* links that point into the method-first list: show it, unfold it, then let the jump happen */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-read]');
    var sec = document.getElementById('before-math');
    if (!a || !sec) return;
    var btn = sec.querySelector('.dial [data-set="' + a.dataset.read + '"]');
    if (btn) btn.click();
    var det = sec.querySelector('details.fold');
    if (det) det.open = true;
  });
</script>


</body>
</html>

