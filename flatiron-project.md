---
layout: page
title: "Interactive Research Statement"
permalink: /flatiron/project/
sitemap: false
noindex: true
comments: false
---

<style>
  .fm-lead { font-size: 1.15em; line-height: 1.5; border-left: 5px solid #d12d88; padding: 4px 0 4px 16px; margin: 8px 0 28px; }
  .fm-card { border: 3px solid #1b1b1b; border-radius: 18px; box-shadow: 5px 5px 0 #1b1b1b; padding: 18px 22px 8px; margin: 0 0 30px; }
  .fm-card h3 { font: 400 clamp(17px, 2.3vw, 22px) 'Archivo Black', sans-serif; text-transform: uppercase; letter-spacing: .02em; margin: 0 0 4px; }
  .fm-papers { font: 400 13px 'Space Mono', monospace; color: #4a3a63; margin: 0 0 12px; }
  .fm-label { font: 700 12px 'Space Mono', monospace; text-transform: uppercase; letter-spacing: .08em; margin: 14px 0 4px; }
  .fm-card p, .fm-card li { line-height: 1.5; }
  .fm-card ul { margin-top: 4px; padding-left: 1.2em; }
  .fm-card li { margin-bottom: 8px; }
  .fm-bg { border: 2px dashed #6a4cb0; border-radius: 12px; padding: 8px 16px; margin: 4px 0 8px; background: rgba(255,255,255,.35); }
  .fm-bg summary { cursor: pointer; font: 700 13px 'Space Mono', monospace; text-transform: uppercase; letter-spacing: .06em; color: #4a3a63; }
  .fm-bg li { margin: 6px 0; line-height: 1.45; }
  .fm-map { display: flex; flex-wrap: wrap; gap: 14px; margin: 6px 0 10px; }
  .fm-step { flex: 1 1 calc(50% - 14px); min-width: 200px; border: 3px solid #1b1b1b; border-radius: 16px; box-shadow: 4px 4px 0 #1b1b1b; padding: 10px 12px 12px; }
  .fm-step .n { display:inline-block; background:#fff; border:2px solid #1b1b1b; border-radius:999px; padding:1px 10px; margin-bottom:4px; font: 400 13px 'Archivo Black', sans-serif; letter-spacing: .04em; }
  .fm-step .t { font: 700 14px/1.3 'Space Mono', monospace; margin: 2px 0 6px; }
  .fm-step svg { display: block; width: 100%; height: 64px; }
  .fm-step .d { font-size: .86em; line-height: 1.4; margin: 6px 0 0; }
  .fm-step.math { outline: 3px dashed #d12d88; outline-offset: 4px; }
  .fm-where { border-left: 5px solid #6a4cb0; padding: 6px 0 6px 14px; margin: 18px 0 26px; font-size: 1.02em; line-height: 1.5; }
  .fm-chips { margin: 0 0 6px; }
  .fm-chip { display: inline-block; font: 700 11px 'Space Mono', monospace; text-transform: uppercase; letter-spacing: .06em; border: 2px solid #1b1b1b; border-radius: 999px; padding: 2px 9px; margin: 0 4px 4px 0; }
  .fm-step { cursor: pointer; transition: transform .12s, box-shadow .12s; }
  .fm-step:hover, .fm-step:focus-visible { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #1b1b1b; outline: none; }
  .fm-step[aria-expanded="true"] { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #1b1b1b, 0 0 0 4px #fff inset; }
  .fm-step .more { font: 700 11px 'Space Mono', monospace; text-transform: uppercase; letter-spacing: .06em; margin-top: 8px; }
  .fm-hint { font: 400 13px 'Space Mono', monospace; color: #4a3a63; margin: 0 0 8px; }
  .fm-detail { border: 3px solid #1b1b1b; border-radius: 16px; box-shadow: 4px 4px 0 #1b1b1b; padding: 14px 20px 6px; margin: 4px 0 8px; background: rgba(255,255,255,.55); }
  .fm-detail h4 { font: 400 16px 'Archivo Black', sans-serif; text-transform: uppercase; margin: 0 0 8px; }
  .fm-detail p, .fm-detail li { line-height: 1.5; }
  .fm-detail .eq { font-family: 'Times New Roman', serif; font-size: 1.12em; text-align: center; margin: 10px 0; }
  @media (prefers-reduced-motion: reduce) { .fm-step { transition: none; } }
  .fm-qs { display: flex; flex-wrap: wrap; gap: 14px; margin: 10px 0 16px; }
  .fm-q { flex: 1 1 220px; border: 3px solid #1b1b1b; border-radius: 14px; box-shadow: 4px 4px 0 #1b1b1b; padding: 12px 16px; font-size: 1.08em; line-height: 1.4; }
  .fm-q b { font: 400 20px 'Archivo Black', sans-serif; margin-right: 6px; }
  .fm-goal { border: 3px solid #1b1b1b; border-radius: 18px; box-shadow: 5px 5px 0 #1b1b1b; background: #fff6b0; padding: 16px 22px; margin: 6px 0 26px; }
  .fm-goal h3 { font: 400 clamp(17px,2.3vw,22px) 'Archivo Black', sans-serif; text-transform: uppercase; margin: 0 0 6px; }
  .fm-goal p { line-height: 1.5; margin: 6px 0; }
  .fm-step .ans { display:inline-block; font: 700 11px 'Space Mono', monospace; text-transform: uppercase; letter-spacing:.05em; background:#fff; border:2px solid #1b1b1b; border-radius:999px; padding:1px 8px; margin-top:8px; }
  .fm-detail[hidden], .fm-detail section[hidden] { display: none !important; }
  .fm-map { position: relative; }
  .fm-map > .fm-detail { flex: 1 1 100%; position: relative; margin: 2px 0 6px; }
  .fm-map > .fm-detail::before { content: ""; position: absolute; top: -16px; left: calc(var(--notch-x, 50%) - 14px); border: 14px solid transparent; border-top: 0; border-bottom: 16px solid #1b1b1b; }
  .fm-map > .fm-detail::after { content: ""; position: absolute; top: -13px; left: calc(var(--notch-x, 50%) - 10px); border: 10px solid transparent; border-top: 0; border-bottom: 12px solid var(--panel-bg, #fff); }
  .fm-step[aria-expanded="true"] { outline: 3px solid #1b1b1b; outline-offset: 3px; }
  .fm-detail .fm-card { box-shadow: 3px 3px 0 #1b1b1b; margin: 6px 0 16px; }
  .fm-detail sub { vertical-align: sub; font-size: .72em; } .fm-detail sup { vertical-align: super; font-size: .72em; }
  .fm-legend { font: 400 13px/1.5 'Space Mono', monospace; background: rgba(255,255,255,.6); border: 2px solid #1b1b1b; border-radius: 10px; padding: 8px 12px; margin: 8px 0 0; }
  .fm-legend span { font-weight: 700; }
  .fm-flow { display:block; width:100%; height:auto; margin: 4px 0 18px; }
  .fm-qlist { list-style: none; padding: 0 0 0 16px; margin: 6px 0 14px; border-left: 4px solid #1b1b1b; }
  .fm-qlist li { font-size: 1.08em; line-height: 1.45; margin: 8px 0; display: flex; gap: 10px; align-items: baseline; }
  .fm-qlist .qn { flex: none; font: 400 13px 'Archivo Black', sans-serif; border: 2px solid #1b1b1b; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; }
  .fm-plain { line-height: 1.55; margin: 0 0 18px; }
  .fm-parts { list-style: none; padding: 0; margin: 8px 0 12px; }
  .fm-parts li { line-height: 1.55; margin: 0 0 12px; }
  .fm-parts .pill { display: inline-block; font: 400 12px 'Archivo Black', sans-serif; text-transform: uppercase; letter-spacing: .03em; border: 2px solid #1b1b1b; border-radius: 999px; padding: 1px 10px; margin-right: 4px; }
  .fm-evidence { border: 3px solid #1b1b1b; border-radius: 18px; box-shadow: 5px 5px 0 #1b1b1b; background: #fbd3f2; padding: 16px 22px 8px; margin: 10px 0 24px; }
  .fm-evidence h3 { font: 400 clamp(17px,2.3vw,22px) 'Archivo Black', sans-serif; text-transform: uppercase; margin: 0 0 8px; }
  .fm-evidence p, .fm-evidence li { line-height: 1.55; }
  .fm-part { border: 3px solid #1b1b1b; border-radius: 16px; box-shadow: 4px 4px 0 #1b1b1b; margin: 0 0 16px; background: var(--pastel); overflow: hidden; }
  .fm-part > summary { list-style: none; cursor: pointer; background: var(--neon); padding: 12px 16px; line-height: 1.5; }
  .fm-part > summary::-webkit-details-marker { display: none; }
  .fm-part > summary .pill { display: inline-block; font: 400 12px 'Archivo Black', sans-serif; text-transform: uppercase; border: 2px solid #1b1b1b; border-radius: 999px; padding: 1px 10px; margin-right: 4px; background: #fff; }
  .fm-part > summary .more { display: block; margin-top: 10px; }
  .fm-part > summary .more::after { content: "▸ Open: details, figures and the math"; display: inline-block; font: 700 12px 'Space Mono', monospace; text-transform: uppercase; letter-spacing: .05em; background: #1b1b1b; color: #fff; border-radius: 999px; padding: 5px 14px; box-shadow: 3px 3px 0 #fff; }
  .fm-part[open] > summary .more::after { content: "▾ Close"; background: #fff; color: #1b1b1b; box-shadow: none; outline: 2px solid #1b1b1b; }
  .fm-part > summary:hover .more::after { transform: translateY(-1px); }
  .fm-part > summary:hover { filter: brightness(1.04); }
  .fm-part-body { padding: 6px 20px 8px; border-top: 3px solid #1b1b1b; }
  .fm-part-body p, .fm-part-body li { line-height: 1.55; }
  .fm-part-body .eq { font-family: 'Times New Roman', serif; font-size: 1.12em; text-align: center; margin: 10px 0; }
  .fm-part-body sub { vertical-align: sub; font-size: .72em; } .fm-part-body sup { vertical-align: super; font-size: .72em; }
  .fm-part-body .fm-card { box-shadow: 3px 3px 0 #1b1b1b; margin: 6px 0 16px; }
  .fm-eqtable { width: 100%; border-collapse: collapse; margin: 6px 0 12px; }
  .fm-eqtable td { border-top: 1px solid rgba(27,27,27,.25); padding: 8px 6px; vertical-align: top; line-height: 1.45; }
  .fm-eqtable td.eqc { font-family: 'Times New Roman', serif; font-size: 1.05em; white-space: nowrap; width: 42%; }
  @media (max-width: 640px) { .fm-eqtable td { display: block; width: auto !important; white-space: normal !important; } }
  .fm-fold { display: block; width: 100%; max-width: 560px; height: auto; margin: 8px auto 6px; background: rgba(255,255,255,.55); border: 2px solid #1b1b1b; border-radius: 12px; }
  .fm-mathline { background: rgba(255,255,255,.7); border: 2px dashed #1b1b1b; border-radius: 10px; padding: 8px 12px; margin: 10px 0 12px; }
</style>

<p class="fm-lead">Chronic pain, irritable bowel syndrome, autoimmune disease, anxiety disorders and sensory over-responsivity are comorbid far beyond chance, yet each is diagnosed and treated as a separate condition. The hypothesis, which Luca Estinto and I developed together in our essay <a href="/biome/">Biome of Overstimulation</a>, is <b>one latent mechanism with many phenotypes</b>: a deficit in habituation, the nervous system’s failure to attenuate its response to a repeated stimulus. The project builds a latent-variable model of this comorbidity around two questions:</p>

<ol class="fm-qlist">
  <li><span class="qn" style="background:#ee5fd4">1</span>Is there a single shared latent state, rather than several independent mechanisms?</li>
  <li><span class="qn" style="background:#7fd8e8">2</span>What determines which phenotype it produces in a given person?</li>
</ol>

<p>The model should be predictive: from a small set of measurements, estimate each person’s latent severity and its organ-system loading, and forecast which diagnoses they will accrue. <b>If it holds, clinical trials can stratify patients by mechanism rather than by diagnosis.</b></p>

<div class="fm-evidence">
<h3>Why I think it is one thing</h3>
<p><b>The evidence so far is pairwise.</b> Each known link connects two conditions at a time, and each pair was found in a different population: autoimmune disease before mood disorders in 3.56 million Danes; stress-related disorders before autoimmune disease in 106,464 Swedes; sensory over-responsivity and anxiety before gut problems in autistic children. Putting the pairs together cannot distinguish one shared cause from several overlapping ones. That needs every condition measured in the same people, which is what this project builds toward.</p>
<iframe class="biome-embed" src="/embeds/one-fault.html?act=0" title="Six conditions, with each known link coloured by the group of people it was found in" loading="lazy" allowtransparency="true" style="display:block;background:transparent;width:100%;height:580px;border:0;margin:1rem 0 1.2rem;"></iframe>
<p><b>The strongest mechanistic clue.</b> In mice, keeping gut enterochromaffin cells active made the gut hypersensitive to stretch, and the hypersensitivity <i>outlasted the stimulus</i>; the same cells drove anxiety-like behaviour, which went away when serotonin signalling was blocked (Bayrer et al., 2023). A sensitivity that persists after the stimulus is gone is exactly what this project proposes to measure, and it is measurable over time rather than asked about once in a questionnaire.</p>
</div>

<p class="fm-hint">How the four parts connect:</p>
<svg class="fm-flow" viewBox="0 0 760 330" role="img" aria-label="Measure feeds each person's profile into Model; Combine joins studies through their overlapping tests; Explain gives the mechanism behind Model; Model's output is trials by mechanism">
  <defs><marker id="fa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1b1b1b"/></marker></defs>
  <g font-family="Space Mono, monospace" fill="#1b1b1b">
    <!-- Explain (top) -->
    <rect x="283" y="8" width="194" height="58" rx="12" fill="#1b1b1b"/><rect x="279" y="4" width="194" height="58" rx="12" fill="#ffa86b" stroke="#1b1b1b" stroke-width="3"/>
    <text x="376" y="28" text-anchor="middle" font-weight="700" font-size="15">EXPLAIN</text>
    <text x="376" y="48" text-anchor="middle" font-size="12.5">the mechanism behind it</text>
    <!-- Measure (left) -->
    <rect x="13" y="136" width="170" height="70" rx="12" fill="#1b1b1b"/><rect x="9" y="132" width="170" height="70" rx="12" fill="#fbe919" stroke="#1b1b1b" stroke-width="3"/>
    <text x="94" y="156" text-anchor="middle" font-weight="700" font-size="15">MEASURE</text>
    <text x="94" y="176" text-anchor="middle" font-size="12.5">one slope per test,</text><text x="94" y="191" text-anchor="middle" font-size="12.5">per person</text>
    <!-- Model (center) -->
    <rect x="283" y="126" width="194" height="90" rx="14" fill="#1b1b1b"/><rect x="279" y="122" width="194" height="90" rx="14" fill="#ee5fd4" stroke="#1b1b1b" stroke-width="3"/>
    <text x="376" y="146" text-anchor="middle" font-weight="700" font-size="15">MODEL</text>
    <text x="376" y="167" text-anchor="middle" font-size="13.5">h = s × u, in groups</text>
    <text x="376" y="186" text-anchor="middle" font-size="12.5">answers both</text><text x="376" y="200" text-anchor="middle" font-size="12.5">questions</text>
    <!-- Combine (bottom) -->
    <rect x="283" y="268" width="194" height="58" rx="12" fill="#1b1b1b"/><rect x="279" y="264" width="194" height="58" rx="12" fill="#7fd8e8" stroke="#1b1b1b" stroke-width="3"/>
    <text x="376" y="284" text-anchor="middle" font-weight="700" font-size="15">COMBINE</text>
    <text x="376" y="304" text-anchor="middle" font-size="12.5">model how to</text><text x="376" y="317" text-anchor="middle" font-size="12.5">join the studies</text>
    <!-- Trials (right) -->
    <rect x="585" y="136" width="166" height="70" rx="12" fill="#1b1b1b"/><rect x="581" y="132" width="166" height="70" rx="12" fill="#fff" stroke="#1b1b1b" stroke-width="3"/>
    <text x="664" y="156" text-anchor="middle" font-weight="700" font-size="15">TRIALS</text>
    <text x="664" y="176" text-anchor="middle" font-size="12.5">enroll by</text><text x="664" y="191" text-anchor="middle" font-size="12.5">mechanism</text>
    <!-- arrows -->
    <line x1="180" y1="167" x2="274" y2="167" stroke="#1b1b1b" stroke-width="2.5" marker-end="url(#fa)"/>
    <text x="227" y="158" text-anchor="middle" font-size="12">profile h</text>
    <line x1="474" y1="167" x2="576" y2="167" stroke="#1b1b1b" stroke-width="2.5" marker-end="url(#fa)"/>
    <text x="525" y="150" text-anchor="middle" font-size="12">severity,</text><text x="525" y="161" text-anchor="middle" font-size="12">phenotype</text>
    <line x1="376" y1="262" x2="376" y2="218" stroke="#1b1b1b" stroke-width="2.5" marker-end="url(#fa)"/>
    <text x="384" y="244" font-size="12">more people, more tests</text>
    <line x1="376" y1="64" x2="376" y2="116" stroke="#1b1b1b" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#fa)"/>
    <text x="384" y="94" font-size="12">why the groups exist, why flares persist</text>
  </g>
</svg>
<div class="fm-plain">
<p>The proposed project has four main parts. Each one opens: press <b>▸ Open</b> on a part to see its details, figures and the math behind it.</p>
<details class="fm-part" style="--neon:#fbe919;--pastel:#fff6b0">
<summary><span class="pill">Measure</span> <b>Re-analyze data that already exists.</b> Studies have already given people the same stimulus many times in a row and recorded every response. From those recordings I estimate, for each person and each test, how much their response <i>fails to fade</i>, with an error bar. The current score (the change between two blocks of trials) is too crude to settle the question; a slope fitted to every trial is not. <span class="more"></span></summary>
<div class="fm-part-body">
<p class="fm-mathline"><b>The math here:</b> Bayesian measurement models, one per test, fitted to every trial.</p>
<iframe class="biome-embed" src="/embeds/one-fault.html?act=1" title="Response amplitude over ten identical stimuli, healthy versus non-habituating" loading="lazy" allowtransparency="true" style="display:block;background:transparent;width:100%;height:360px;border:0;margin:1rem 0 1.2rem;"></iframe>
<p>The first step needs no new experiment. A group in Zurich has already recorded pain ratings, evoked potentials and skin responses to every one of a series of identical heat pulses, in patients and healthy people. Michèle Hubli’s group at Balgrist holds the single-trial data and is open to a joint reanalysis. They scored it with a two-point measure: the percent change between the averages of two blocks of 15 to 20 identical stimuli. Noisy single responses are set to zero, non-responders are dropped, and the index is capped. A null from an estimator like that is weak evidence, and three such scores failing to correlate cannot tell three phenomena from one hidden decrement seen through three noisy instruments.</p>
<p>Instead, one measurement model per channel, fitted to every trial, with the decrement as a latent quantity:</p>
<ul>
<li><b>Pain rating:</b> an ordinal response, with a person-specific scale and drift in where people anchor.</li>
<li><b>Evoked potential:</b> an amplitude with single-trial noise, whose early component habituates.</li>
<li><b>Skin (sympathetic) response:</b> an event that occurs at some rate.</li>
</ul>
<p>Each channel then reports the same quantity with a known distortion, and the agreement between channels becomes a parameter with a posterior instead of a correlation coefficient. For person <i>i</i> the output is a profile <i>h<sub>i</sub></i>, one slope per channel (skin, gut, evoked response, questionnaire …), each with an error bar. Run on the existing recordings, this decides early, and cheaply, whether the rest of the project is worth doing.</p>
</div>
</details>
<details class="fm-part" style="--neon:#ee5fd4;--pastel:#fbd3f2">
<summary><span class="pill">Model</span> <b>Turn those numbers into a severity and a direction.</b> Severity is how much of the fault a person has; direction is which systems it hits (gut, skin, mood). The model groups people by direction and answers both questions: is it one shared state, and what decides the phenotype? <span class="more"></span></summary>
<div class="fm-part-body">
<p class="fm-mathline"><b>The math here:</b> a latent-variable mixture model on the sphere, and model comparison. <b>Lawrence Saul’s methods enter here</b>, to fit it without losing the correlations.</p>
<p><b>What we measure.</b> For each person, Measure gives one number per test: how much that person’s response <i>fails</i> to fade. The tests: a skin heat test, pain build-up with repetition, pain inhibition, a gut balloon test, brain responses, and a sensory questionnaire. Together these numbers form the person’s <b>profile</b>, <i>h</i>.</p>
<p><b>How the model reads a profile.</b> It splits it into two parts:</p>
<p class="eq"><i>h</i> = <i>s</i> × <i>u</i></p>
<ul>
<li><b><i>s</i>, severity:</b> how big the profile is, that is, how much of the fault the person has.</li>
<li><b><i>u</i>, direction:</b> the shape of the profile, which systems it hits most: gut, skin or mood.</li>
</ul>
<p>Drag the point to move one person around: the corners are skin, gut and brain, and where the point sits is that person’s direction.</p>
<iframe class="biome-embed" src="/embeds/one-fault.html?act=2" title="Direction simplex with draggable patient point" loading="lazy" allowtransparency="true" style="display:block;background:transparent;width:100%;height:520px;border:0;margin:1rem 0 1.2rem;"></iframe>
<p><b>How people are grouped.</b> The model assumes people fall into a few groups. Each group has a typical direction (a phenotype, like “mostly gut”), and its members cluster tightly around it. Written out, with vMF a bell curve on a sphere:</p>
<p class="eq"><i>s<sub>i</sub></i> ∼ <i>p<sub>s</sub></i>, &nbsp; group <i>z<sub>i</sub></i> ∼ Cat(π), &nbsp; <i>u<sub>i</sub></i> | <i>z<sub>i</sub></i> = <i>j</i> ∼ vMF(μ<sub><i>j</i></sub>, κ<sub><i>j</i></sub>)</p>
<p>Here μ<sub><i>j</i></sub> is group <i>j</i>’s typical direction, κ<sub><i>j</i></sub> how tightly its members stick to it, and π<sub><i>j</i></sub> how common it is.</p>
<p><b>How this answers the two questions.</b></p>
<ul>
<li><b>Is it one shared state?</b> Compare two models: one where a single severity <i>s</i> drives every test, and one where each test has its own unrelated problem. Then check whether the directions form a few tight groups (3 to 6) or are scattered.</li>
<li><b>What decides the phenotype?</b> The group a person’s direction falls into. Two tests: a direction measured once should predict that person’s future diagnoses better than any single test; and it should stay the same across visits, while severity rises and falls with flares.</li>
</ul>
<p>What the population of directions should look like under each hypothesis, and what one person looks like over a year (severity moves, direction stays):</p>
<iframe class="biome-embed" src="/embeds/one-fault.html?act=3" title="Population of direction points on the simplex under three hypotheses" loading="lazy" allowtransparency="true" style="display:block;background:transparent;width:100%;height:520px;border:0;margin:1rem 0 1.2rem;"></iframe>
<iframe class="biome-embed" src="/embeds/one-fault.html?act=5" title="One person over twelve months: severity rises and falls while direction stays put, or drifts" loading="lazy" allowtransparency="true" style="display:block;background:transparent;width:100%;height:420px;border:0;margin:1rem 0 1.2rem;"></iframe>
<p>There is precedent: neuropathic pain patients fall into three sensory groups that cut across causes, and autistic children into four sensory subtypes, nine in ten still in the same one a year later. Neither study measured habituation.</p>
<p><b>The hard part: inference.</b> Both answers depend on whether the tests move <i>together</i> across people, which in a statistical model is the correlation between them in the posterior. With thousands of people, the usual fast method (mean-field variational inference) assumes every hidden quantity is independent, so it reports those correlations as zero. Lawrence Saul’s group has worked out exactly what this loses:</p>
<div class="fm-card" style="background:#fff">
  <h3>What fast approximations lose</h3>
  <p class="fm-papers">Margossian &amp; Saul 2023 <a href="#m1">[1]</a> · Margossian, Pillaud-Vivien &amp; Saul 2024 <a href="#m2">[2]</a></p>
  <p>A mean-field fit of a correlated posterior sets the correlations to zero and shrinks the variances, and however it is fitted it gets at most one of three measures of spread right: variances, precisions, or overall spread (the table next to the slider). In my project it would lean toward "several separate conditions" whatever the truth, and report the link between cohorts as absent.</p>
  <p class="fm-label">What I would prove</p>
  <p>The same analysis for the decision I care about, one shared fault against several: how strongly skin and gut must really be linked, and how much correlation an approximation must keep, before it gets the answer right.</p>
</div>
<p>The figure shows the problem on two tests, skin and gut:</p>
<p class="fm-legend"><span style="color:#d12d88">● pink ellipse and dots</span>: the true posterior, no approximation; tilted because skin and gut share one severity. <span style="color:#2a7fb8">● blue circle</span>: the fast approximation (mean-field, fitted the standard way). <span style="color:#6a4cb0">◌ dashed circle</span>: mean-field fitted another way. Slide to change how strongly skin and gut truly move together: the ellipse stretches, the circles stay round.</p>
<iframe class="biome-embed" src="/embeds/mean-field.html" title="Two channels sharing one severity, and their mean-field approximations" loading="lazy" allowtransparency="true" style="display:block;background:transparent;width:100%;height:540px;border:0;margin:1rem 0 1.2rem;"></iframe>
</div>
</details>
<details class="fm-part" style="--neon:#7fd8e8;--pastel:#d2f2f8">
<summary><span class="pill">Combine</span> <b>Work out how to join studies that each measured different things.</b> No single study has every test: autism studies have sensory data, health registries have immune and psychiatric data. Joining them is not just pooling: it needs its own model of how each study’s partial view relates to the full picture. Combine builds that model, works out what the studies together can and cannot determine, and from that, which overlap would join them best: which test to add to which study, or a small group of people measured on everything. <span class="more"></span></summary>
<div class="fm-part-body">
<p class="fm-mathline"><b>The math here:</b> identifiability (what the studies together can determine) and information gain. <b>Lawrence Saul’s methods enter here too</b>, to fit one model across all the studies.</p>
<p><b>The problem.</b> No single study measures all the tests. SPARK, a large autism study, has sensory questionnaires and genomes but almost no immune data; national health registries have immune and psychiatric diagnoses but no sensory tests. A study that only saw skin tests cannot, on its own, say how skin relates to gut.</p>
<p><b>Combining is itself a modeling problem.</b> Each study sees only part of each person’s profile, measured with its own instruments (a parent questionnaire here, a diagnosis code there). So before the studies can be joined, we need a model of how each partial view relates to the full profile, and a way to work out which parts of the full picture the studies, taken together, actually determine.</p>
<p><b>What makes joining possible: overlap.</b> If some people are measured on tests from both sides, those shared tests anchor everything. For example, a few hundred SPARK participants could do the full set of tests: a <i>bridge</i>. The model then places everyone, from every study, on the same map of severity and direction.</p>
<p>Which study measures which test, and what a small bridge group adds:</p>
<iframe class="biome-embed" src="/embeds/one-fault.html?act=4" title="Cohorts by channels observation grid with optional bridging sample" loading="lazy" allowtransparency="true" style="display:block;background:transparent;width:100%;height:400px;border:0;margin:1rem 0 1.2rem;"></iframe>
<p><b>When it works.</b> Three conditions:</p>
<ul>
<li><b>Coverage:</b> every test is measured in at least one study.</li>
<li><b>Distinguishable groups:</b> the phenotype groups look different to at least one study.</li>
<li><b>A chain of overlaps:</b> studies share enough tests that you can tell it is the same group as you move from one study to the next.</li>
</ul>
<p><b>What the math gives.</b> Exactly which parts of the model the existing studies pin down, and a ranking of which new overlap (which test, added to which study) would help most.</p>
<p><b>The hard part: inference.</b> The overlap works only through correlations, in one shared posterior over a few population parameters and thousands of people. The usual fast method sets those correlations to zero, so it would report the studies as unrelated (see Model). Lawrence Saul’s group has methods that keep them:</p>
<div class="fm-card" style="background:#fff">
  <h3>Methods that keep the correlations</h3>
  <p class="fm-papers">Cai, Modi, Pillaud-Vivien, Margossian, Gower, Blei &amp; Saul 2024 <a href="#m3">[3]</a></p>
  <p>Batch and match fits Gaussian approximations with full or structured covariance, fast, using a score-based divergence.</p>
  <p class="fm-label">What I would build</p>
  <ul>
    <li><b>A family shaped like the model:</b> full covariance for the few population parameters (how strongly each channel shows the fault, where the clusters sit), low-rank-plus-diagonal for each of thousands of people. It keeps the person-to-population correlations at a cost linear in the number of people.</li>
    <li><b>The same on the sphere:</b> a person's direction <i>u</i> lives on a sphere, where a Gaussian is the wrong shape, so I would extend these methods to projected normal and von Mises–Fisher families.</li>
  </ul>
</div>
</div>
</details>
<details class="fm-part" style="--neon:#ffa86b;--pastel:#ffe0c8">
<summary><span class="pill">Explain</span> <b>Model the mechanism.</b> A dynamical model of how the nervous system turns its own gain up and down: why the fault persists once triggered, why flares come, and which system tips first, which is what sets a person’s direction. <span class="more"></span></summary>
<div class="fm-part-body">
<div class="fm-mathline"><p><b>The math here:</b> dynamical systems, real algebraic geometry, and manifold learning.</p>
<ul>
<li><b>Reduction and folds.</b> Separating fast and slow timescales (geometric singular perturbation theory) reduces the model to one equation on a <i>slow manifold</i>. Its repeated roots are the folds, and cylindrical algebraic decomposition finds them exactly.</li>
<li><b>Lawrence Saul’s manifold learning.</b> His methods (locally linear embedding, with Roweis; maximum variance unfolding, with Weinberger) recover a low-dimensional manifold from high-dimensional samples. Here the samples are people’s repeated measurements over months, across all their tests. If the model is right, those points lie near the slow manifold, and unfolding them recovers it, folds included, from the data alone. That is a direct test of the mechanism: the folds the data show should match the folds the equations predict.</li>
</ul></div>
<p><b>The idea.</b> Picture each body system (skin, gut, mood) as having a <b>volume knob</b>, its gain. When the same signal keeps arriving, a healthy system turns the knob down: that is habituation. But the knob also turns itself <i>up</i> slowly when strong signals keep coming. Past a tipping point it can no longer turn back down, and the response stays loud even after the stimulus is gone. That stuck-high state is the fault.</p>
<p><b>Try it.</b> Slide the resting gain right and back: the ball follows the normal branch, jumps up at one tipping point, and only comes down at the other.</p>
<iframe class="biome-embed" src="/embeds/fold.html" title="Interactive tipping point: settled response against resting gain, with repeated measurements below" loading="lazy" allowtransparency="true" style="display:block;background:transparent;width:100%;height:470px;border:0;margin:.8rem 0 1rem;"></iframe>
<p>The gap between the two jumps is why the fault outlasts its trigger: once stuck high, removing the stimulus is not enough to come back down.</p>


<p><b>Three parts, three speeds.</b></p>
<table class="fm-eqtable">
<tr><td class="eqc">τ<sub><i>r</i></sub> <i>ṙ</i> = −<i>r</i> + <i>g</i>·<i>s</i> ⁄ (σ + β<i>a</i>)</td><td><b>Response <i>r</i></b> (fast, seconds): how strongly the system fires right now, to a stimulus of strength <i>s</i>, amplified by the knob <i>g</i> and damped by the brake <i>a</i>.</td></tr>
<tr><td class="eqc">τ<sub><i>a</i></sub> <i>ȧ</i> = −<i>a</i> + <i>r</i></td><td><b>Brake <i>a</i></b> (slower, minutes): builds up while the response stays on. This is ordinary habituation, the response fading over repeated trials.</td></tr>
<tr><td class="eqc">τ<sub><i>g</i></sub> <i>ġ</i> = −(<i>g</i> − <i>g</i><sub>0</sub>(<i>M</i>)) + <i>k</i>·<i>H</i>(<i>r</i>)</td><td><b>Knob <i>g</i></b> (very slow, weeks): drifts back toward a resting level <i>g</i><sub>0</sub>, set by the gut microbiome <i>M</i>, but is pushed up by sustained strong responses (<i>H</i> is a switch-like curve).</td></tr>
</table>

<p><b>Why it can get stuck.</b> Because the three speeds are so different, the fast parts settle first and the whole system reduces to one question: where can the slow knob come to rest? The answer is the positive roots of a single polynomial,</p>
<p class="eq"><i>P</i>(<i>x</i>) = (σ<i>x</i> + β<i>x</i>² − <i>s g</i><sub>0</sub>)(<i>K<sup>n</sup></i> + <i>x<sup>n</sup></i>) − <i>s k x<sup>n</sup></i>,</p>
<p>where <i>x</i> is the settled response. One root means the system always recovers. Three roots mean two stable states, normal and stuck-high, separated by a tipping point (a <b>fold</b>), as in the picture above.</p>



<p><b>What the math gives.</b></p>
<ul>
<li><b>Exact tipping points.</b> The coefficients of <i>P</i> are polynomials in the parameters, so cylindrical algebraic decomposition gives the exact regions of parameter space with one or two stable states, rather than a parameter sweep in simulation.</li>
<li><b>Where the fault lands.</b> Each system has its own knob. Whichever crosses its tipping point first decides a person’s direction <i>u</i>, which is a mechanistic account of the groups in Model.</li>
<li><b>An early warning of flares.</b> Near a tipping point, the system recovers more slowly from small disturbances, so repeated measurements become noisier and more correlated over time. That predicts a flare before it happens.</li>
</ul>
<p><b>Evidence for the pieces.</b> In mice, keeping gut enterochromaffin cells active left the gut hypersensitive after the trigger stopped, with anxiety-like behaviour reversed by blocking serotonin: a knob held on the high branch (Bayrer et al., 2023). In a Swedish national cohort, stress-related disorders raised the later risk of autoimmune disease, the slow loop through stress, immunity and the gut back to the resting gain (Song et al., 2018).</p>
</div>
</details>
<p>Together they give what a trial needs: who has the state, how much, and in which form.</p>
</div>
<div class="fm-evidence" style="background:#fff">
<h3>What would show this wrong</h3>
<p>I’d give up on this if:</p>
<ul>
<li>habituation measured as a slope turns out preserved, as the Balgrist group found with a two-block measure;</li>
<li>the channels don’t actually move together once you account for each test’s own quirks;</li>
<li>knowing where someone’s fault lands adds nothing beyond knowing how bad it is;</li>
<li>a person’s direction wanders around from one visit to the next;</li>
<li>or the clusters predict someone’s next diagnosis no better than the single best test does.</li>
</ul>
<p>A clean negative, with the data behind it, would also change how these fields work.</p>
</div>

<div class="fm-goal" id="impact">
  <h3>Potential broader impact</h3>
  <p class="fm-label">Mechanism-based trial stratification</p>
  <p>A new measure changes care when it changes how treatments are developed and tested. Trials of drugs that target central sensitization now enroll by diagnosis, so a true effect in the mechanistically defined subgroup is diluted by everyone else. With <i>s</i> and <i>u</i> estimated, a trial can enrich for the mechanism and use the habituation slope as an early pharmacodynamic endpoint. <b>The same drug can then be tested once against the shared mechanism, rather than five times against five diagnoses.</b></p>
  <p><b>What measuring a person would look like, if it all works.</b> A short, non-invasive session: a few series of identical, repeated stimuli (heat or pressure on the skin, for example), each rated as it comes, plus a questionnaire, in a clinic or with a home kit. The model turns that into a severity and a direction with error bars. Which few tests are enough is exactly what the information-gain ranking in Combine decides, so the session can be as short as the data allow.</p>
<p>That is also the most realistic route to actually improving the daily lives of patients. Smaller, better-powered trials with a clear biological rationale are what make industry partners willing to invest, and regulatory and clinical uptake follows a successful trial. And where no company has an incentive, as with cheap off-patent drugs like <a href="/memantine/">memantine</a>, the same smaller trials become affordable for public funders.</p>
</div>

The full plan is in my research statement.

<ol class="sources" style="font-size:.85em;margin-top:2rem">
<li id="m1">C. C. Margossian, L. K. Saul, <a href="https://arxiv.org/abs/2302.09163">The shrinkage-delinkage trade-off: an analysis of factorized Gaussian approximations for variational inference</a>, 2023.</li>
<li id="m2">C. C. Margossian, L. Pillaud-Vivien, L. K. Saul, <a href="https://arxiv.org/abs/2403.13748">Variational inference for uncertainty quantification: an analysis of trade-offs</a>, 2024.</li>
<li id="m3">D. Cai, C. Modi, L. Pillaud-Vivien, C. C. Margossian, R. M. Gower, D. M. Blei, L. K. Saul, <a href="https://arxiv.org/abs/2402.14758">Batch and match: black-box variational inference with a score-based divergence</a>, 2024.</li>
</ol>

