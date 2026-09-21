---
layout: page
title: Welcome
permalink: /about/
---

<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>About &mdash; Rin Ray</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap">

<style>
  :root {
    --lilac:        #d5c2ef;
    --lilac-deep:   #bda4e0;
    --cream:        #faf3c8;
    --pink:         #ec3f9e;
    --pink-btn:     #f07fe0;
    --pink-btn-hot: #ee5fd4;
    --cyan:         #6cc8f0;
    --orange:       #f9a13c;
    --yellow:       #fbe919;
    --violet:       #9b7fd4;
    --peach:        #f4a58a;
    --ink:          #1b1b1b;
    --ink-soft:     #4a3a63;
    --paper:        #ffffff;

    --mono: 'Space Mono', 'Courier New', Courier, monospace;
    --display: 'Archivo Black', 'Helvetica Neue', Impact, sans-serif;
  }

  html, body { background: var(--lilac); }

  body {
    margin: 0;
    font-family: var(--mono);
    color: var(--ink);
    -webkit-font-smoothing: antialiased;
  }

  a { color: var(--ink); text-decoration-color: var(--pink); text-decoration-thickness: 2px; text-underline-offset: 3px; }
  a:hover { background: var(--yellow); }
  a:focus-visible { outline: 3px dashed var(--ink); outline-offset: 3px; }

  /* ======================================================== hero ======= */

  .stage {
    position: relative;
    width: min(92vw, 700px);
    aspect-ratio: 671 / 819;
    margin: 0 auto;
    padding-block: 0;
  }
  .stage > * { position: absolute; }

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
    /* offset by transform, not by left/top, so the copy keeps the
       heading's own text-align */
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
    font-size: clamp(.58rem, 1.95vw, 1rem);
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
  /* two parallel slashes leaning right, off the end of the title */
  .spark-a { left: 31.5%; top: 10.5%; width: 2.6%; height: 8.5%; transform: rotate(22deg);  }
  .spark-b { left: 36%;   top: 12.5%; width: 2.2%; height: 6.5%; transform: rotate(28deg);  }
  /* two rays splaying apart off the right edge of the bubble */
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
    box-shadow: 8px 8px 0 var(--peach);
    font-size: clamp(.55rem, 1.85vw, .95rem);
    line-height: 1.65;
    text-align: center;
    z-index: 6;
  }
  .card p { margin: 0 0 .85em; }
  .card p:last-child { margin-bottom: 0; }

  /* ======================================================= scroll ====== */

  .scroll {
    width: min(92vw, 700px);
    margin: 0 auto;
    padding: 3rem 0 4.5rem;
    box-sizing: border-box;
  }

  section { margin-bottom: 3.5rem; }
  section:last-of-type { margin-bottom: 0; }

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
  .note + .note { margin-top: 1.6rem; }
  .note p { margin: 0 0 .9em; }
  .note p:last-child { margin: 0; }
  .note-cream { background: var(--cream); }

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
    font-family: var(--mono);
    font-weight: 700;
    font-size: .92rem;
    line-height: 1.5;
    text-wrap: balance;
  }
  .meta {
    margin: 0;
    font-size: .76rem;
    line-height: 1.6;
    color: var(--ink-soft);
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
    margin: 0 0 3rem;
    border: 3px solid var(--ink);
    border-radius: 14px;
  }
  .band-img.band-end { margin: 3rem 0 0; }

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

  @media (prefers-reduced-motion: reduce) {
    .cv, .chip { transition: none; }
  }

  /* ======================================================== phone ====== */

  @media (max-width: 560px) {
    .stage {
      aspect-ratio: auto;
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: center;
      gap: 1.6rem 1.1rem;
      padding: 2.2rem 16px 1rem;
      width: 100%;
      box-sizing: border-box;
    }
    /* every block is its own row, except the two image slots,
       which share order 3 and so sit in line with each other */
    .stage > * { position: static; flex: 0 0 100%; width: auto; transform: none; }
    .title      { order: 1; }
    .bubble     { order: 2; }
    .photo-wrap { order: 3; flex: 0 0 40%; }
    .char-wrap  { order: 3; flex: 0 0 40%; }
    .cv-math    { order: 4; }
    .cv-other   { order: 5; }
    .card       { order: 6; }
    .title {
      font-size: 2.4rem;
      text-align: center;
      -webkit-text-stroke: 3px var(--ink);
    }
    .title::before { transform: translate(5px, 5px); -webkit-text-stroke: 3px var(--pink); }
    .sec-head { -webkit-text-stroke: 2.5px var(--ink); }
    .sec-head::before { transform: translate(4px, 4px); -webkit-text-stroke: 2.5px var(--shadow); }
    /* matched slot shapes so the pair reads as a set */
    .char-slot { aspect-ratio: 170 / 205; }
    .spark { display: none; }
    .bubble {
      border-radius: 28px;
      box-shadow: 6px -6px 0 4px var(--cyan);
      font-size: .82rem;
      padding: 1.3rem 1.2rem;
    }
    .bubble::after { display: none; }
    /* position: relative is needed so the star anchors to the wrapper,
       but it also re-activates the desktop left/top offsets — clear them */
    .photo-wrap, .char-wrap {
      position: relative;
      left: auto;
      top: auto;
      --slot-tilt: 0deg;
    }
    .cv { --tilt: 0deg; flex-basis: 82%; padding: .85rem 0; font-size: 1.05rem; }
    .cv-art { flex-basis: auto; width: 100%; }
    .card { font-size: .82rem; padding: 1.4rem 1.3rem; }

    .scroll { padding: 2rem 16px 3.5rem; width: 100%; }
    footer { padding: 0 16px 3rem; width: 100%; }
    .sec-head { font-size: 1.5rem; -webkit-text-stroke: 2.5px var(--ink); }
    .paper h3 { font-size: .88rem; }
  }
</style>

</head>
<body>

<main>

  <!-- ============================================ hero ============== -->

  <div class="stage">

    <h1 class="title" data-text="ABOUT ME">ABOUT ME</h1>

    <span class="spark spark-a"></span>
    <span class="spark spark-b"></span>
    <span class="spark spark-c"></span>
    <span class="spark spark-d"></span>

    <p class="bubble">
      My name is Cathe<b>rin</b>e Ray (they/them), and I&rsquo;m a mathematician
      and artist. My current math research is on arithmetic patterns in
      homotopy theory and physics.
    </p>

    <div class="photo-wrap">
      <span class="burst"></span>
      <img class="photo-slot" src="{{ site.baseurl }}/images/aabout.png" alt="Rin Ray">
    </div>

    <a class="cv cv-math" href="/cv-math.pdf">CV MATH</a>
    <a class="cv cv-other" href="/cv-other.pdf">CV OTHER</a>

    <div class="char-wrap">
      <span class="burst burst-b"></span>
      <img class="photo-slot" src="{{ site.baseurl }}/images/aaabout.png" alt="Pastel">
      
    </div>

    <div class="card">
      <p>
        Before I was in math, I worked mostly in scientific simulation,
        autonomous robotics, and medical technology. I continue to work in
        chronic pain research, which you can read about
        <a href="https://rin.io/biome/">here</a>.
      </p>
    </div>

  </div>

  <!-- ========================================== the path ============= -->

  <div class="scroll">
    
    <section>
      <h2 class="sec-head" style="--shadow: var(--cyan); --tilt: -2deg;" data-text="THE PATH">THE PATH</h2>

      <div class="note" style="--accent: var(--cyan);">
        <p>
          I am currently a
          <a href="https://www.uni-muenster.de/FB10srvi/persdb/MM-member.php?id=1772">postdoc at Uni-M&uuml;nster</a>
          in the Arithmetic and Homotopy Theory Working Group led by
          <a href="https://www.uni-muenster.de/IVV5WS/WebHop/user/nikolaus/index.html">Thomas Nikolaus</a>
          and
          <a href="https://en.wikipedia.org/wiki/Christopher_Deninger">Christopher Deninger</a>.
        </p>
        <p class="chips" style="margin-top:.2em">
          <a class="chip" href="https://open.spotify.com/episode/6yw6nazYdvFW4lp24rolZd?si=kOzCIF7lQYeGPBlgWI-gjg">
            Interview &mdash; How an Inventor becomes a Mathematician
          </a>
        </p>
      </div>
    
    <img class="band-img" src="{{ site.baseurl }}/images/zeta_blackboard.jpeg" alt="A blackboard of zeta function computations">

      <div class="note" style="--accent: var(--violet);">
        <p>
          Before that, I graduated from
          <a href="http://newsdesk.gmu.edu/2013/12/mason-celebrates-winter-graduates/">George Mason University at 16</a>
          with a B.S. in Computational Physics, and accepted the
          <a href="http://www.thielfellowship.org/about/about-the-fellowship/">Thiel Fellowship</a>
          in 2014 to develop medical technology and study mathematics under my mentor,
          <a href="http://www.edwardfrenkel.com/">Edward Frenkel</a>.
          I graduated with my Master&rsquo;s degree from UChicago working with
          <a href="http://www.math.uchicago.edu/~may/">Peter May</a>
          and
          <a href="https://en.wikipedia.org/wiki/Kazuya_Kato">Kazuya Kato (加藤 和也)</a>,
          and with my PhD from Northwestern working with
          <a href="https://sites.math.northwestern.edu/~pgoerss/">Paul Goerss</a>.
        </p>
      </div>
    </section>

    <!-- ==================================== art portfolio =========== -->

    <section>
      <h2 class="sec-head" style="--shadow: var(--yellow); --tilt: 2deg;" data-text="THE OTHER STUDIO">THE OTHER STUDIO</h2>

      <div class="note" style="--accent: var(--yellow);">
        <p>
          I primarily work with pastels, acrylic, spray paint and polaroids. When I
          spray paint I make colorful street murals of creatures. Please enjoy this small collection of my art.
        </p>
        <p class="chips" style="margin-top:.2em">
          <span class="chip" style="background: var(--pink-btn);">pastels</span>
          <span class="chip" style="background: var(--cyan);">acrylic</span>
          <span class="chip" style="background: var(--orange);">spray paint</span>
          <span class="chip" style="background: var(--peach);">polaroids</span>
          <span class="chip" style="background: var(--lilac-deep);">tattoo design</span>
        </p>
        <a class="cv cv-art" href="/art/">SEE THE GALLERY &rarr;</a>
      </div>
    </section>

    <!-- ======================================== contact ============= -->

    <section>
      <h2 class="sec-head" style="--shadow: var(--orange); --tilt: 1.5deg;" data-text="CONTACT ME">CONTACT ME</h2>

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
          You will find the name <b>Catherine Ray</b> on my old research papers and
          <b>Rin Ray</b> on my newer works &mdash; these both refer to the same person.
          I prefer Rin nowadays.
        </p>
      </div>
    </section>

    <!-- ==================================== publications ============ -->

    <section>
      <h2 class="sec-head" style="--shadow: var(--pink); --tilt: -1.5deg;" data-text="PUBLISHED">PUBLISHED</h2>

      <div class="papers" style="--accent: var(--pink);">

        <article class="paper">
          <h3><a href="https://link.springer.com/article/10.1007/s12215-020-00590-7">Automorphisms of Abelian Varieties and Principal Polarizations</a></h3>
          <p class="meta">
            joint with D. Lee &middot;
            <em>Rendiconti del Circolo Matematico di Palermo</em>, Series 2,
            vol. 71, pp. 483&ndash;494, 2022
          </p>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/1811.07007">arXiv</a></p>
        </article>

        <article class="paper">
          <h3><a href="https://link.springer.com/chapter/10.1007/978-3-030-42687-3_17">Towards Directed Collapsibility</a></h3>
          <p class="meta">
            joint with R. Belton, R. Brooks, S. Ebli, L. Fajstrup, B. T. Fasy,
            N. Sanderson, E. Vidaurre &middot;
            <em>Advances in Mathematical Sciences</em>, vol. 21, pp. 255&ndash;271, 2020
          </p>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/1902.01039">arXiv</a></p>
        </article>

      </div>
    </section>

    <!-- ======================================== preprints =========== -->

    <section>
      <h2 class="sec-head" style="--shadow: var(--violet); --tilt: 2deg;" data-text="PREPRINTS">PREPRINTS</h2>

      <div class="papers" style="--accent: var(--violet);">

        <article class="paper">
          <h3><a href="https://math.bu.edu/people/jsweinst/ChromaticSplitting.pdf">On the Chromatic Splitting Conjecture at Coheight 1</a><span class="status">Sept 2026</span></h3>
          <p class="meta">
            joint with Tobias Barthel, Lucas Mann, Andy Senger, Tomer Schlank,
            Jared Weinstein, and Xinyu Zhou &middot;
            on Jacquet&ndash;Langlands and homotopy theory
          </p>
        </article>

        <article class="paper">
          <h3><a href="https://arxiv.org/abs/2509.23428">Moduli Stacks of <i>G</i>-Curves in Homotopy Theory at <i>h</i> = <i>p</i>&minus;1</a><span class="status">updated Sept 2026</span></h3>
          <p class="meta">Sept 2025, significant update Sept 2026</p>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/2509.23428">arXiv</a></p>
        </article>

        <article class="paper">
          <h3><a href="https://arxiv.org/abs/2507.10157">Towards the <i>p</i>&nbsp;=&nbsp;3 Kervaire Invariant Problem</a></h3>
          <p class="meta">
            joint with Eva Belmont &middot; July 2025 &middot;
            the <i>E</i><sub>2</sub>-page for the homotopy fixed points spectral
            sequence computing &pi;<sub>&lowast;</sub>(<i>E</i><sub>6</sub><sup><i>hC</i><sub>9</sub></sup>)
          </p>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/2507.10157">arXiv</a></p>
        </article>

        <article class="paper">
          <h3><a href="https://arxiv.org/abs/2507.00309">Modeling Group Actions on Stacks (Especially the Lubin&ndash;Tate Action)</a><span class="status">under construction</span></h3>
          <p class="meta">July 2025 &middot; expository errors, under construction</p>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/2507.00309">arXiv</a></p>
        </article>

        <article class="paper">
          <h3><a href="https://arxiv.org/abs/1911.08615">A Global Crystalline Period Map</a></h3>
          <p class="meta">joint with M. Neaton and A. Pieper &middot; 2018</p>
          <p class="chips"><a class="chip" href="https://arxiv.org/abs/1911.08615">arXiv</a></p>
        </article>

      </div>
    </section>

    <!-- ====================================== in progress =========== -->

    <section>
      <h2 class="sec-head" style="--shadow: var(--yellow); --tilt: -2.5deg;" data-text="IN PROGRESS">IN PROGRESS</h2>

      <h3 class="sub" style="--accent: var(--orange);">Zeta Functions in Homotopy Theory</h3>

      <div class="papers" style="--accent: var(--orange);">
        <article class="paper">
          <h3>Syntomic cohomology of ring spectra and a <i>T</i>(<i>h</i>)-local zeta function</h3>
          <p class="meta">joint with Gabe Angelini-Knoll</p>
        </article>
        <article class="paper">
          <h3>Toward Categorifying the relationship of Symplectic <i>L</i>-functions and Reidemeister Torsion</h3>
          <p class="meta">Riemann&ndash;Roch for Reidemeister torsion in <i>K</i>-theory and <i>L</i>-theory</p>
        </article>
        <article class="paper">
          <h3><i>L</i>-genera and Localizations in <i>K</i>-theory</h3>
          <p class="meta">joint with Daniel Berwick-Evans, Natalia Pacheco-Tallaj</p>
        </article>
        <article class="paper">
          <h3>All Bernoulli Numbers in Homotopy Theory Are Shifts<span class="status">on hiatus</span></h3>
          <p class="meta">
            joint with Andres Mejia and Noah Riggenbach &middot;
            connecting Kervaire&ndash;Milnor to Quillen&ndash;Lichtenbaum using the
            compatibility of <i>K</i>(&#120138;) and <i>L</i><sub><i>K</i>(1)</sub><i>K</i>(&#8484;)
          </p>
        </article>
      </div>

      <h3 class="sub" style="--accent: var(--cyan);">Moduli Stacks of Curves in Homotopy Theory</h3>

      <div class="note" style="--accent: var(--cyan);">
        <p>
          The group cohomology of the maximal finite subgroups of the Lubin&ndash;Tate
          action is the <i>E</i><sub>2</sub> page needed to capture all
          <i>p</i>-torsion information in the stable homotopy groups of spheres.
          My thesis (2023) attempts to resolve the 40-year-old open problem of
          describing the Lubin&ndash;Tate action for all maximal finite subgroups.
        </p>
        <p>
          It does so by outlining a universal way to build a geometric model using a
          moduli stack of <i>G</i>-curves given a subgroup <i>G</i>. A key insight is
          to replace the role of level structures with higher ramification
          information. To make the thesis more digestible, I have broken it up into
          three parts, the last of which is forthcoming. The only nontrivial
          <i>p</i>-torsion for odd primes is found at heights
          <i>p</i><sup><i>k</i>&minus;1</sup>(<i>p</i>&minus;1).
        </p>
      </div>

      <div class="papers" style="--accent: var(--cyan); margin-top: 1.6rem;">
        <article class="paper">
          <h3>Writhing Jewels: A Conjectural Description of the Lubin&ndash;Tate Action via Moduli Stacks of <i>G</i>-Curves for <i>h</i> = <i>p</i><sup><i>k</i>&minus;1</sup>(<i>p</i>&minus;1)</h3>
        </article>
        <article class="paper">
          <h3>The Eigenvalues of Frobenius of Artin&ndash;Schreier&ndash;Witt Curves are Gauss Sums</h3>
          <p class="meta">new families of Newton strata in the Torelli locus</p>
          <p class="chips">
            <a class="chip" href="http://rin.io/pdfs/Gauss_sums.pdf">Note toward this &mdash; PDF</a>
          </p>
        </article>
      </div>

      <h3 class="sub" style="--accent: var(--lilac-deep);">Old and likely dead</h3>

      <div class="papers" style="--accent: var(--lilac-deep);">
        <article class="paper">
          <h3>Covers of the Octahedron</h3>
          <p class="meta">joint with D. Lee</p>
        </article>
        <article class="paper">
          <h3>Duality resolutions for general linear groups</h3>
          <p class="meta">joint with E. Belmont, P. VanKoughnett</p>
        </article>
      </div>
    </section>

    <!-- ====================================== expository ============ -->

    <section>
      <h2 class="sec-head" style="--shadow: var(--peach); --tilt: 1.5deg;" data-text="EXPOSITORY">EXPOSITORY</h2>

      <div class="papers" style="--accent: var(--peach);">

        <article class="paper">
          <h3><a href="pdfs/Zeta_Functions_and_THH_Talk3.pdf">Zeta Functions and THH</a></h3>
          <p class="meta">16 July 2025</p>
        </article>

        <article class="paper">
          <h3><a href="http://rin.io/pdfs/Gauss_sums.pdf">Using Automorphism Groups of Curves to Control the Slopes of their Jacobians</a></h3>
        </article>

        <article class="paper">
          <h3>K-theoretic Tate&ndash;Poitou Duality Seminar<span class="status">coming soon</span></h3>
          <p class="meta">March 2025</p>
        </article>

        <article class="paper">
          <h3><a href="pdfs/application_general_audience.pdf">A 4-page summary of my graduate work for a general audience</a></h3>
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
          <h3><a href="/pdfs/officialober-1.pdf">An Overview of the Classic Theory of <i>p</i>-Divisible Groups</a></h3>
          <p class="meta">published in Oberwolfach Proceedings</p>
        </article>

        <article class="paper">
          <h3><a href="/pdfs/formalgroup-1.pdf">Fiber Bundles of Formal Disks</a></h3>
          <p class="meta">with A. Holeman</p>
        </article>

        <article class="paper">
          <h3><a href="/pdfs/gromovprooffill.pdf">A Complete Proof of the Polynomial Ham Sandwich Theorem</a></h3>
          <p class="meta">based on Gromov&rsquo;s proof</p>
        </article>

      </div>

      <h3 class="sub" style="--accent: var(--yellow);">My two Master&rsquo;s theses</h3>

      <div class="papers" style="--accent: var(--yellow);">
        <article class="paper">
          <h3><a href="https://rin.io/images/wp-content/uploads/2017/05/a1-2.pdf">Calculating &pi;<sub>&lowast;</sub>(tmf) at the prime 2</a></h3>
          <p class="meta">an illustrated guide to the May spectral sequence</p>
        </article>
        <article class="paper">
          <h3><a href="https://rin.io/images/wp-content/uploads/2017/08/lubintatemodels-2.pdf">Models of Formal Group Laws of Every Height</a></h3>
        </article>
      </div>
    </section>

    <img class="band-img band-end" src="{{ site.baseurl }}/images/lubin-tate.jpg" alt="Lubin-Tate illustration">

  </div>

</main>


</body>
</html>
