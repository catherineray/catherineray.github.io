---
title: "The Six-Cent Drug Nobody Will Test: Memantine as an Alternative to Opioids for Chronic Pain"
date: "2026-10-10"
description: "Memantine is a cheap generic dementia drug that might help with chronic pain. Nobody has tested it properly, and that's mostly about money."
categories:
  - "medicine"
  - "bio"
genre: science
tags:
  - memantine
  - chronic-pain
  - opioids
  - nmda-receptor
  - central-sensitization
  - drug-repurposing
  - cbd
card_image: /images/memantine.svg   # the molecule, drawn for the post cards
format: explanation
topics:
  - "Biology & medicine"
---

*Memantine is a cheap generic dementia drug that might help with chronic pain. Nobody has tested it properly, and that's mostly about money.*

`Uncompetitive NMDA receptor antagonist` · `Off patent` · `≈ $0.06 per 10 mg tablet` · `Evidence: thin, mixed, underpowered`

{% include audience-toggle.html %}

---

## What this document is

<div class="for-pros" markdown="1">

An argument for a publicly funded trial of memantine, an uncompetitive open-channel NMDA receptor antagonist, in chronic pain states characterized by central sensitization (fibromyalgia, complex regional pain syndrome, migraine) and in opioid tolerance and opioid-induced hyperalgesia. It covers the mechanistic rationale, the pharmacology relative to ketamine, dextromethorphan and PCP, the clinical trial record including the null and negative results, and the commercial history that explains why the question was dropped.

The evidence does not support memantine as an established analgesic. The only meta-analysis pooled eleven small trials and found no significant effect,[^2] and the only industry Phase III, in painful diabetic neuropathy, missed its primary endpoint.[^3] The claim here is narrower: the mechanism is sound, the positive signals cluster in a mechanistically coherent subset of conditions, a definitive trial would be inexpensive, and at an acquisition cost of about $0.06 per 10 mg tablet[^1] no sponsor has a commercial reason to run one. Note also that memantine has been tested for pain at 10–20 mg/day orally, a small fraction of the dose at which ketamine is used as an analgesic (section 04).

The question came from patients. This started with a conversation in 2015: I asked users of mobility aids what would most improve their quality of life, and a number of them named pain, and specifically the trade-off between sedation on opioids and uncontrolled pain. This is not clinical guidance and not a protocol.

</div>

In 2015 I asked people who use mobility aids what would make their lives better. Some of them talked about pain, and about the bargain it forced on them every day: stoned past the point of finishing a sentence, or lucid and in agony.

That's why I care about this. I want to know if there's something that doesn't force that choice.

Memantine is an Alzheimer's drug. It blocks the NMDA receptor, the same ion channel that ketamine, dextromethorphan and PCP block. It does this gently enough that people take it every day for years without getting high. It is also prescribed at a much smaller dose than ketamine is when ketamine is used for pain: 20 mg a day by mouth, against 80 mg or more per infusion into a vein.[^17] It's been off patent for years, and US pharmacies pay about six cents a tablet for it.[^1]

I think memantine could be an alternative to opioids for the kinds of chronic pain driven by central sensitization: fibromyalgia, complex regional pain syndrome, migraine, and maybe the pain that opioids themselves cause. We don't know yet if that's true. I think the reason we don't know is money, not science.

**Memantine is not an established treatment for chronic pain.** The only meta-analysis pooled eleven small trials and found no significant effect.[^2] The only Phase III trial a company ever paid for failed.[^3] I'm not saying anyone buried a drug that works. I'm saying a good trial would be cheap and nobody stands to make money from running one.

This isn't medical advice and it isn't a protocol. It's an argument with references. You can take it to a doctor or a funder and ask if it's worth considering.

|  |  |
| --- | --- |
| **Mechanism** | Sound. NMDA receptors drive central sensitization, opioid tolerance and opioid-induced hyperalgesia |
| **Best human evidence** | One 63-patient fibromyalgia trial, number needed to treat 6.2 |
| **Worst human evidence** | A failed Phase III in diabetic neuropathy; null results in postherpetic neuralgia and chronic phantom limb pain |
| **Price** | ≈ $0.06 per tablet, so no company profits from testing it |
| **What is missing** | A large, long, publicly funded trial in the right patients |
{: .both}

## 01 · Opioids are the wrong tool for most chronic pain

<div class="for-pros" markdown="1">

For chronic non-cancer pain the comparator is weaker than usually assumed. SPACE randomized 240 veterans with chronic back pain or hip or knee osteoarthritis pain to opioid or non-opioid pharmacotherapy for twelve months.[^4] Pain-related function did not differ between arms. Pain intensity on the Brief Pain Inventory favored the non-opioid arm (3.5 against 4.0), and medication-related symptoms were about twice as frequent on opioids.

Long-term µ-opioid agonism also produces two adaptations that work against analgesia: tolerance, a rightward shift of the dose–response curve, and opioid-induced hyperalgesia, a lowered nociceptive threshold that shows up between doses. Both are NMDA receptor dependent.[^5] The Mao–Price–Mayer model puts µ-opioid and NMDA receptor mechanisms in the same dorsal horn nociceptive neurons, with protein kinase C as the proposed link, and makes two predictions: hyperalgesia should travel with tolerance, and an NMDA antagonist should block both.[^5]

In mice this mostly holds up. Memantine at 5–10 mg/kg, given before each morphine dose, prevents the rightward shift of the morphine dose–response curve in the tail-flick test, and in animals that are already tolerant, co-administered memantine reverses the tolerance. Dextromethorphan did not do the latter.[^6] One result goes the other way: in rats, memantine at 20 mg/kg/day had no effect on methadone-induced hyperalgesia.[^7]

All of this is rodent data, so the opioid-sparing claim is a hypothesis and not clinical evidence.

</div>

Opioids work well for acute pain. For chronic pain, the best long trial we have says they do no better than a regimen that starts with acetaminophen.

The SPACE trial randomized 240 veterans with chronic back pain or hip or knee osteoarthritis to opioid or non-opioid medication and followed them for a year.[^4] Pain-related function did not differ between the groups. Pain intensity was *better* in the non-opioid group (3.5 against 4.0 on the Brief Pain Inventory), and medication-related symptoms were twice as common on opioids.

This matters because memantine isn't competing with a drug that works well for chronic pain. It's competing with a drug that did no better than non-opioids over a year and that people overdose on.

There's a mechanistic reason opioids fail here. Taking them long-term makes the nervous system more sensitive to pain, not less. The dose that worked in March doesn't work in September, and the pain between doses gets worse than the pain you started with. The first is called **tolerance** and the second **opioid-induced hyperalgesia**.

Both depend on the NMDA receptor.[^5] That's the main reason I think memantine is worth testing against opioids. It blocks the receptor that makes opioids stop working.

## 02 · Chronic pain is a glutamate problem

<div class="for-pros" markdown="1">

Central sensitization is activity-dependent synaptic plasticity in nociceptive pathways, and it is NMDA receptor dependent. The receptor is a coincidence detector: at resting membrane potential the pore is occluded by Mg²⁺, and it conducts only when glutamate is bound and the postsynaptic membrane is already depolarized. Opening admits Ca²⁺ and potentiates the synapse,[^8] the same mechanism that underlies memory formation.

In the dorsal horn, sustained nociceptor input holds second-order neurons depolarized for long enough to relieve the Mg²⁺ block. Ca²⁺ entry strengthens the synapse, and the input–output gain of the circuit stays raised after the peripheral injury has resolved.

NMDA receptors come in at least two functional populations. Synaptic receptors drive plasticity and survival signaling. Extrasynaptic receptors, activated by glutamate spillover during excessive activity, oppose them, triggering CREB shut-off and cell-death pathways.[^8] This distinction matters in section 03.

The electrophysiological correlate is wind-up: repeated low-frequency C-fiber stimulation produces progressively larger dorsal horn responses, and NMDA antagonists abolish it. I am going from memory on that and have not attached a reference.

A µ-agonist reduces the afferent drive into this circuit without lowering its gain, and with chronic exposure it raises the gain (section 01). An NMDA antagonist acts on the gain itself. The glutamate side of this, raised free glutamate and failure of habituation, is in [Sensory Sensitivity as a Unifying Mechanism](https://rin.io/biome/).

</div>

Chronic pain often keeps going after the injury has healed, because the spinal cord and brain have become more responsive to pain signals. That change depends on the NMDA receptor.

The NMDA receptor is a coincidence detector. At rest its channel is plugged by a magnesium ion. It opens only when glutamate is bound *and* the neuron is already depolarized, so only when a signal arrives on top of other signals. When it opens, calcium flows in and the synapse gets stronger.[^8] This is how memories form.

The same process happens in the spinal cord with pain. Sustained input from pain fibers holds dorsal horn neurons depolarized for long enough to knock the magnesium out. Calcium enters, the synapse strengthens, and the same input now produces a larger output. This is **central sensitization**: the gain on the pain system has been turned up, and it stays up after the original injury has healed.

I wrote about related things in [Sensory Sensitivity as a Unifying Mechanism](https://rin.io/biome/): excess free glutamate, sensory signals that never habituate, and the conditions that come with them. Chronic pain is one of those conditions, and the hangover comparison I used there applies here too.

An opioid turns down the signal arriving at this system. It does nothing about the gain, and over months it turns the gain up further. An NMDA antagonist goes after the gain itself.

## 03 · What memantine actually does

<div class="for-pros" markdown="1">

Memantine is an uncompetitive, voltage-dependent open-channel blocker that binds within the pore where Mg²⁺ binds. Three properties distinguish it from most blockers of this channel.

- **Use dependence.** Block requires an agonist-bound, open channel, so the fraction of receptors blocked rises with pathological activation.[^8]
- **Fast off-rate.** It dissociates quickly enough that it does not accumulate in channels during brief, phasic synaptic transmission.[^8]
- **Extrasynaptic preference.** At therapeutic concentrations it blocks extrasynaptic NMDA currents about twice as potently as synaptic ones.[^9]

The net effect is suppression of tonic, excessive NMDA receptor activity with relative sparing of phasic transmission. A sensitized dorsal horn is tonic, excessive NMDA receptor activity, and that is the pharmacological case for testing it in chronic pain.

Pharmacokinetics: 20 mg/day gives steady-state plasma concentrations of 70–150 ng/mL (0.5–1 µM), with wide variation between individuals. The half-life is 60–80 hours, and most of the dose is excreted unchanged in urine.[^11] Two consequences follow. Steady state takes weeks, so a trial shorter than a month or two is testing the titration rather than the drug. And renal elimination falls by a factor of 7 to 9 in alkaline urine,[^11] so a patient who changes diet drastically, or starts living on antacids, can drift into a much higher exposure at an unchanged dose, and an adverse effect caused this way could be misattributed to the drug itself.

History: Eli Lilly synthesized it in 1963 as a candidate hypoglycemic agent, and it was inactive. Merz developed it, found some activity in Parkinson's disease, and launched it for dementia in Germany in 1989, the year its NMDA mechanism was identified.[^10] EU approval for Alzheimer's disease came in 2002 and FDA approval in 2003. Both repurposings came before the mechanism was known.

</div>

Memantine sits inside the open NMDA channel, where magnesium sits, and blocks it. Three things make it different from most other drugs that do this.

- **It only blocks channels that are open.** No glutamate, no block. Pharmacologists call this uncompetitive antagonism: the more pathologically active the receptor, the more of it gets blocked.[^8]
- **It leaves quickly.** Its off-rate is fast enough that it doesn't pile up in channels during brief, ordinary synaptic signaling.[^8]
- **It mostly blocks extrasynaptic receptors.** At therapeutic concentrations it blocks extrasynaptic NMDA currents about twice as potently as synaptic ones.[^9]

So memantine reduces sustained, excessive NMDA activity and mostly leaves normal transmission alone. A sensitized dorsal horn *is* sustained, excessive NMDA activity. That's the pharmacological case for trying it in chronic pain.

Its history is odd. Eli Lilly synthesized memantine in 1963 as a diabetes drug. It didn't lower blood sugar. Merz, in Germany, took it over, found it did something in Parkinson's disease, and launched it for dementia in 1989, the same year its NMDA mechanism was worked out.[^10] The EU approved it for Alzheimer's in 2002 and the US in 2003.

So it's already been repurposed twice, both times before anyone knew how it worked.

## 04 · Comparison with the dissociatives

<div class="for-pros" markdown="1">

PCP, ketamine and dextromethorphan are open-channel NMDA receptor blockers acting in the same pore, and each has been tried as an analgesic. The table compares route of administration, psychotomimetic liability at clinical doses, the chronic pain evidence, and the commercial outcome.

</div>

PCP, ketamine and dextromethorphan block the same channel as memantine, and all of them have been tried for pain. The table compares them.

| Drug | Known as | How it is given | Dissociation at clinical dose | Chronic pain evidence | What the market did with it |
| --- | --- | --- | --- | --- | --- |
| PCP | The oldest of the group | Not given | Yes, and psychosis | None usable | Abandoned as an anesthetic; a street drug |
| Ketamine | Anesthetic, club drug, antidepressant | IV infusion, supervised; **80 mg or more per infusion**[^17] | Yes | Moderate for CRPS, up to 12 weeks; no sustained benefit shown elsewhere[^17] | S-enantiomer sold as a nasal spray at $590–885 per session at launch[^36] |
| Dextromethorphan | Cough syrup | Oral, several times a day | Sedation, dizziness at pain doses | Diabetic neuropathy at a median 400 mg/day; nothing in postherpetic neuralgia[^18] | Combined with quinidine and sold at about $1,235 a month[^38] |
| Memantine | Alzheimer's drug | Oral, once daily; **20 mg a day** | No at 20 mg; yes at about eight times that[^16] | Section 05 | Generic, about $0.06 a tablet, no sponsor[^1] |
{: .both}

### Memantine and ketamine are more alike than usually stated

<div class="for-pros" markdown="1">

The usual description of memantine as a low-affinity blocker and ketamine as a high-affinity one is not supported: IC50, blocking kinetics and voltage dependence at the NMDA receptor differ by less than a factor of two.[^13] The clinical divergence needs another explanation. There are three candidates, and they are not mutually exclusive.

- **Receptor population and state.** Memantine preferentially blocks extrasynaptic receptors,[^9] and it stabilizes a Ca²⁺-dependent desensitized state of the channel, which ketamine does not.[^14] This biases it toward receptors under prolonged activation.
- **Block at rest.** In physiological Mg²⁺, ketamine blocks NMDA receptors at resting membrane potential and memantine does not. Ketamine's block of resting receptors dephosphorylates eEF2 and releases a burst of BDNF synthesis; memantine does neither.[^15] This is the best current account of why ketamine is a rapid-acting antidepressant and memantine is not.
- **Exposure profile.** Memantine is held at a steady-state concentration of 0.5–1 µM for weeks.[^11] Ketamine is infused to a peak and cleared within hours. The target is the same and the concentration–time profile is very different. This is my inference from the pharmacokinetics, and I have no citation for it.

</div>

You'll often read that memantine is a "low-affinity" blocker and ketamine a "high-affinity" one. That's mostly wrong. Their IC50, kinetics and voltage dependence at the NMDA receptor differ by less than a factor of two.[^13] Yet one is used as a dementia treatment and the other as an anesthetic.

There are several possible explanations, and more than one may be true.

- **Which receptors.** Memantine favors extrasynaptic receptors,[^9] and it stabilizes a calcium-dependent desensitized state of the channel, which ketamine does not.[^14] It preferentially silences receptors that have been open too long.
- **Magnesium.** With physiological magnesium present, ketamine still blocks NMDA receptors at rest. Memantine does not. Ketamine's block of resting receptors dephosphorylates eEF2 and releases a burst of BDNF synthesis; memantine does neither.[^15] This is the best current explanation for why ketamine is a rapid antidepressant and memantine is not.
- **Exposure.** Memantine is dosed to sit at 0.5–1 µM for weeks.[^11] Ketamine is infused to a peak and is gone in hours. The receptor is the same but the exposure over time is very different. This is my own reasoning from the pharmacokinetics. I don't have a citation for it.

### Memantine is a dissociative at high doses

<div class="for-pros" markdown="1">

The separation from the dissociatives is a matter of dose, not of kind. A French analysis of online self-reports found recreational doses averaging 156 mg, about eight times the maximum daily dose, producing a slow-onset dissociation that lasted a mean of 47 hours.[^16]

The 60–80 hour half-life[^11] gives slow onset and a very long offset, which probably accounts for how rare recreational use is. The controlled-release coating of OxyContin could be defeated by crushing the tablet. Memantine's slow kinetics are a property of the molecule, so there is no formulation to tamper with.

</div>

At high enough doses memantine acts like the others. A French analysis of online self-reports found recreational users taking an average of 156 mg, about eight times the maximum daily dose, and describing a dissociation that crept in over hours and lasted an average of 47 hours.[^16]

A high that comes on slowly and lasts two days isn't what most people want, which is probably why recreational use of memantine is rare. OxyContin was marketed with a slow-release coating that could be defeated by crushing the tablet. Memantine's slow action comes from its half-life, so there is nothing to crush.

### What the comparison says about pain

<div class="for-pros" markdown="1">

Ketamine has the strongest analgesic evidence of the group: moderate evidence in CRPS for up to 12 weeks, requiring supervised intravenous infusion, with no sustained benefit shown in other conditions.[^17]

There is one head-to-head comparison. In the crossover trial of Sang and colleagues in painful diabetic neuropathy, pain fell 33% on dextromethorphan (median dose 400 mg/day, several times the antitussive dose), 17% on memantine and 16% on the lorazepam active placebo. None of the differences was significant in the main trial, but dextromethorphan showed a dose-response in its responders, and memantine was indistinguishable from the active placebo.[^18]

**Dose is the main confound in this comparison.** For analgesia the consensus guidelines recommend a first outpatient ketamine infusion of at least 80 mg over more than 2 hours, find moderate evidence that higher dosages over longer periods and more frequent administration work better, cite 0.35 mg/kg per hour over 4 hours daily for 10 days in CRPS, and describe multiday infusions of up to 7 mg/kg per hour under intensive care monitoring.[^17] Memantine is prescribed at 20 mg/day orally, and its positive pain trials used 10–20 mg/day. With potency at the receptor within a factor of two,[^13] memantine has been tested as an analgesic at a small fraction of the ketamine dose, and at a low steady concentration instead of a high peak.

So the apparent ranking is a ranking of regimens, not of molecules. Dose is not the whole story: trials have gone as high as a median 55 mg/day, and at about 156 mg memantine is itself a dissociative.[^16] But no trial has compared the two drugs at matched receptor occupancy.

On the short-trial data memantine is the weakest analgesic of the three, at a much smaller dose. It is also the only one whose tolerability and once-daily oral dosing would allow continuous use over years.

One caution about my own argument. If the magnesium result generalizes, memantine barely touches NMDA receptors at rest.[^15] That is the property that makes it tolerable. It may also be the property that limits it as an analgesic: a blocker that only engages during sustained depolarization should do most in a circuit that is being driven hard right now, and least in one whose sensitization has already been consolidated structurally.

That predicts memantine should do better at prevention than at reversal, and better in ongoing central sensitization than in old peripheral nerve injury. Section 05 looks roughly like that. No trial has been designed to test it, so it stays a hypothesis.

</div>

Ketamine has the best pain evidence of the four, but it needs infusions and monitoring, and outside CRPS the benefit has not been shown to last.[^17]

Dextromethorphan was compared with memantine head to head in diabetic neuropathy. Pain fell 33% on dextromethorphan, 17% on memantine and 16% on the lorazepam control. None of those differences reached significance in the main trial, but dextromethorphan, at a median 400 mg a day (several times what the cough-syrup label allows), showed a dose-response in its responders. Memantine was indistinguishable from the control.[^18]

**The doses are nowhere near each other, and this matters more than anything else in this comparison.** As a painkiller, ketamine is given at a minimum of 80 mg per infusion, straight into a vein over two hours or more, and the guidelines say that higher doses given for longer work better.[^17] For CRPS that means infusions every day for ten days. Memantine is prescribed at 20 mg a day, by mouth.

The two drugs block the channel about equally well.[^13] So memantine has been tried for pain at a small fraction of the dose at which ketamine works. When someone says memantine is a weaker painkiller than ketamine, they are comparing a small dose of one with a large dose of the other.

In the short trials we have, memantine is the weakest painkiller of the three, at a much smaller dose. Its advantage is that it's the only one you could realistically take every day for years.

## 05 · The evidence

<div class="for-pros" markdown="1">

The clinical evidence is about a dozen small, heterogeneous trials. The table lists the main ones by condition, including the null and negative results.

</div>

The clinical evidence is a dozen or so small trials that disagree with each other. The table lists the main ones, including the negative results.

| Condition | What was done | Result |
| --- | --- | --- |
| Fibromyalgia | RCT, 63 patients, 20 mg/day, 6 months[^19] | **Positive.** Pain VAS effect size d = 1.43 at 6 months; NNT 6.2 (95% CI 3 to 47) |
| CRPS | Small RCT, memantine + morphine against morphine + placebo, 8 weeks[^21] | **Positive.** Pain fell at rest and on movement with the combination, not with morphine alone |
| Phantom limb, recent amputation | One prospective study, case series[^22] | **Positive** |
| Phantom limb, over a year old | Four prospective studies[^22] | **Negative** |
| Postherpetic neuralgia | Pooled RCTs[^23] | **Null.** Effect size 0.03 |
| Diabetic neuropathy | Crossover RCT against active placebo[^18]; industry Phase III[^3] | **Negative.** 17% pain reduction against 16% on control; Phase III missed its endpoint |
| Pain after surgery (prevention) | Two trials[^2] | **Positive.** −1.02 units on the pain scale |
| Episodic migraine | Two RCTs, 109 patients, 10 mg/day[^24] | **Positive.** −1.58 migraine days a month |
| All chronic pain, pooled | Meta-analysis, 11 trials[^2] | **Not significant.** −0.58 units (95% CI −1.31 to 0.14), I² = 82%, low quality |
{: .both}

### The pattern

<div class="for-pros" markdown="1">

The results sort by pain mechanism and by chronicity. Memantine is null or negative in established peripheral neuropathic pain: postherpetic neuralgia, phantom limb pain of more than a year's standing, painful diabetic neuropathy. It is positive, in small trials, where the process is central and either recent or ongoing: fibromyalgia, CRPS, acute post-amputation pain, perioperative prevention, and migraine prophylaxis.

The fibromyalgia trial was designed on magnetic resonance spectroscopy findings of raised glutamate in the insula, hippocampus and posterior cingulate of fibromyalgia patients.[^20] A 2024 network meta-analysis of 38 migraine trials ranked memantine among the more effective preventives, with the lowest dropout rate of any drug compared, though the interval on the dropout estimate includes no difference.[^25]

This is a post hoc reading of a small evidence base. No trial has been designed to test it.

</div>

I see a pattern in the table. Memantine fails in established peripheral neuropathic pain: old shingles, old amputations, diabetic nerves. It works, in small trials, where the problem is central and either recent or ongoing: fibromyalgia, CRPS, fresh amputations, surgery that hasn't happened yet, migraine.

The fibromyalgia trial was based on spectroscopy showing raised glutamate in the insula, hippocampus and posterior cingulate of fibromyalgia patients.[^20] A 2024 network meta-analysis of 38 migraine trials placed memantine among the more effective preventives, with the lowest dropout rate of any drug compared, though the interval on that last estimate includes no difference.[^25]

That's my reading, not a finding. Nobody has designed a trial to test it.

### The number

<div class="for-pros" markdown="1">

The number needed to treat in the fibromyalgia trial was 6.2 (95% CI 3 to 47).[^19] For reference, the pooled NNTs in neuropathic pain are 3.6 for tricyclic antidepressants, 6.4 for SNRIs, 7.7 for pregabalin and 4.3 for strong opioids.[^27] The point estimate sits with the SNRIs. The comparison is indirect and across different conditions, and the upper bound of the interval is compatible with no clinically useful effect.

</div>

The number needed to treat in fibromyalgia was 6.2.[^19] For comparison, the pooled NNTs for the drugs we actually prescribe for neuropathic pain are 3.6 for tricyclics, 6.4 for SNRIs, 7.7 for pregabalin and 4.3 for strong opioids.[^27] On the point estimate, memantine in fibromyalgia is similar to the SNRIs and better than pregabalin.

> ### ⚠ An honest caveat
>
> That confidence interval runs from 3 to 47. It comes from one trial of 63 people in one Spanish city, and the comparison above is across different conditions. A number needed to treat of 47 is a drug that doesn't work.
>
> The pooled analysis is not significant.[^2] The only large, well-funded trial ever run failed.[^3] If a company were selling a patented drug on this evidence, I'd be writing a post about how they were overselling it.
>
> I'm not saying memantine works. I'm saying we don't know, it would be cheap to find out, and nobody has in more than twenty years.

### On replacing opioids specifically

<div class="for-pros" markdown="1">

The opioid-sparing evidence is thinner still. It consists of the rodent tolerance data (section 01); one small randomized trial in CRPS in which memantine plus morphine reduced pain at rest and on movement and morphine plus placebo did not;[^21] and one Medicare claims analysis suggesting an opioid-sparing association in older adults with dementia and chronic pain, whose authors cannot establish temporal order.[^26] That justifies a trial and does not justify prescribing.

On the pooled result: an I² of 82% says the eleven trials are not measuring one thing.[^2] Pooling fibromyalgia with postherpetic neuralgia and asking whether memantine "works for chronic pain" is like averaging the truth of a theorem over the cases where its hypotheses hold and the cases where they don't. The useful question is which pain mechanisms it works for.

Dose is the second unknown. The trials above ran from 10 mg to a median 55 mg a day. The early industry trial that came out positive in diabetic neuropathy used 40 mg in about 420 patients;[^3] the Alzheimer's dose, and the fibromyalgia dose, is 20. Nobody has run a dose-response study of memantine in pain.

Then there is blinding. An NMDA antagonist with noticeable CNS effects unblinds itself against an inert placebo. Sang and colleagues used lorazepam as an active placebo for exactly this reason,[^18] and it bothers me that against an active placebo memantine's effect vanished. As far as I can tell from the abstracts, the positive trials used inert placebo. That helps the skeptic's case more than mine.

</div>

The claim in my title has even less support. There is the mouse data in section 01, and one randomized trial in which memantine made morphine work in CRPS when morphine alone did not.[^21] There is also one Medicare claims study suggesting memantine may be opioid-sparing in older adults with dementia and chronic pain, and its own authors say they can't tell which came first.[^26]

That's all I found. I think it's enough to justify a trial and not enough to justify prescribing.

## 06 · Why nobody ran the trial

There was a commercial pain program for memantine. It ended in 2003. What the company did next shows how the incentives work.

In 2001, analysts expected Forest Laboratories to file memantine for neuropathic pain in 2003.[^28] Pain was where the money was. Neurobiological Technologies, the small company that had done the early work, stood to collect a 13% royalty on pain sales against 1% on Alzheimer's.[^29] An earlier trial of 40 mg had come out positive.[^3]

In May 2003 the confirmatory Phase III in diabetic neuropathy missed its primary endpoint.[^3] Forest said it would run another Phase II and perhaps file by 2006.[^30] Five months later memantine was approved for Alzheimer's. No pain indication ever followed.

That was one failed trial, in one condition, in the kind of pain where memantine looks worst, and it basically ended industry interest. I don't think that was irrational. A company with a newly approved blockbuster and a patent that's running out has no reason to pay for a second expensive attempt at working out *which* pain patients respond.

It made business sense, and it left the question unanswered.

### What the company did before the patent expired

With generic memantine due in 2015, Forest, which Actavis bought in the middle of all this, announced in 2014 that it would withdraw the twice-daily tablet and leave only a newer once-daily capsule, Namenda XR. People with Alzheimer's disease would be moved onto the new version before the cheap one existed, and pharmacists would then have nothing to substitute. The industry term is a **hard switch**.

New York's attorney general sued. In May 2015 the Second Circuit upheld an injunction, the first appellate ruling that a product hop can violate the Sherman Act.[^31] A class action by direct purchasers, which also alleged a pay-for-delay deal with a generic manufacturer, settled for $750 million on the day trial was due to open. The company admitted nothing.[^32]

So in the last years of memantine's exclusivity the pain program went nowhere, and the company's effort went into moving dementia patients from two tablets to one capsule to keep generics out.

I don't think Forest was unusually bad. Each step was what a company maximizing profit would do, and none of those steps involved finding out whether the drug helps people in pain.

### The problem of new uses

Once a drug is generic there's no incentive at all. If one company pays for a trial in a new indication, every other manufacturer gets to sell the same tablets off the back of it. Legal scholars call this the **problem of new uses**, and it applies to roughly 2,000 off-patent drugs.[^33] Health economists have said for years that generic repurposing needs public money because no private party will supply it.[^34]

Memantine's price shows the problem. US pharmacies acquire a 10 mg tablet for 6.4 cents.[^1] The "average retail price" of 28 of them is $145, and a discount card brings that to $4.68.[^35] The same box costs $1.80, $4.68 or $145 depending on who is paying and how. None of those prices tells you what the drug is worth.

### What happened to the related drugs

Compare what happened to ketamine and dextromethorphan.

Ketamine is generic. Its S-enantiomer was put in a nasal spray, wrapped in new patents, and launched as Spravato at $590 to $885 per session.[^36] The US cost-effectiveness body ICER priced a year at about $32,400, found too little evidence that it beat generic ketamine, and noted it cost roughly ten times the intravenous generic.[^37]

Dextromethorphan is cough syrup. Combined with a little quinidine to slow its metabolism, it became Nuedexta at around $1,235 a month.[^38] In 2019 its maker agreed to pay more than $108 million over kickbacks to doctors and misleading marketing in nursing homes, for use on dementia patients it was never approved for.[^39]

In both cases an old NMDA antagonist showed promise, and companies did not test the old generic drug. They made a version that could be patented.

Esketamine did get real trials this way, and that's the main argument for patents: exclusivity pays for evidence. It also means that a drug with no exclusivity gets no evidence. Memantine is the example: nobody owns it, so nobody paid for the trials, so a pain doctor deciding whether to try it has almost nothing to go on.

## 07 · CBD: the opposite case

<div class="for-pros" markdown="1">

Cannabidiol is the mirror case: a non-opioid with a large consumer market for pain and almost no supporting trial evidence. If incentives determine what is tested and sold (section 06), there should be compounds that sell without evidence as well as compounds with a rationale that go untested. The table sets the two side by side.

</div>

Cannabidiol (CBD) is the opposite of memantine. It is a non-opioid sold for pain, with an enormous market and almost no evidence.

If incentives decide what gets tested and sold, as I argued in section 06, there should also be drugs that sell well without being tested. CBD is one. Anyone can sell it, nobody has to show it works, and people in pain buy it.

|  | Memantine | CBD |
| --- | --- | --- |
| Proposed target | One: the open NMDA channel | Many: 5-HT1A, glycine receptors, TRP channels, GPR55, σ1[^51] |
| Randomized pain trials | A dozen, mixed (section 05) | 16 with verified CBD; 15 found no benefit[^50] |
| What is in the box | A regulated tablet | Accurately labeled in 24% of 89 products tested[^52] |
| Known harm at usual dose | Dizziness, headache[^19] | Liver enzymes over three times normal in 5.6% of healthy adults at four weeks[^53] |
| Who sells it | Generic manufacturers, at six cents | Supplement companies, shops, online sellers |
| The patented version | None | Epidiolex: $32,500 a year at launch, $1.06 billion in 2025 sales[^54][^55] |
{: .both}

### What it does

<div class="for-pros" markdown="1">

CBD is not an NMDA channel blocker and is not a dissociative. Its pharmacology is promiscuous: it facilitates 5-HT1A and glycine receptor function and impairs GPR55 and several TRP channels, at concentrations from nanomolar to micromolar.[^51] With that many targets a mechanism can be proposed for almost any indication, and any single one is hard to test.

One target converges on the NMDA receptor. In mice CBD behaves as a σ1 receptor antagonist: it weakens the association of σ1 with the NR1 subunit of the NMDA receptor, enhances morphine antinociception and reduces NMDA-induced seizures.[^51] CBD may therefore reduce NMDA receptor activity indirectly, by a route distinct from open-channel block. This is rodent data only.

</div>

CBD is not a dissociative and it does not block the NMDA channel. It hits a lot of targets: it facilitates 5-HT1A and glycine receptors and impairs GPR55 and several TRP channels, at concentrations from nanomolar to micromolar.[^51] With that many targets it is easy to propose a mechanism for almost any condition, and hard to test any one of them.

One of those targets does connect back to the NMDA receptor. In mice, CBD behaves like a σ1 receptor antagonist. It weakens σ1's binding to the NR1 subunit of the NMDA receptor, enhances morphine antinociception and reduces NMDA-induced seizures.[^51] So CBD may reduce NMDA activity by a different route than memantine. This has only been shown in mice.

### What the trials say

<div class="for-pros" markdown="1">

A 2024 review identified sixteen randomized trials of pharmaceutical-grade CBD with a pain outcome, across twelve pain conditions, at doses from 6 to 1,600 mg and durations from a single dose to twelve weeks. Fifteen found no benefit over placebo.[^50] An updated systematic review of cannabinoids as opioid-sparing agents found the effect in preclinical and observational studies and not in the higher-quality randomized trials.[^57] CBD does have demonstrated efficacy in two severe childhood epilepsies, where proper trials were run.

I have to be consistent here. Those sixteen trials span twelve pain states, three routes of administration and a dose range of more than 250-fold.[^50] That is the same heterogeneity I used in section 05 to excuse memantine's null pooled result, and I can't have it both ways. Fifteen of sixteen negative is weaker as evidence of absence than it sounds.

</div>

A 2024 review collected every randomized trial that used pharmaceutical-grade CBD with pain as an outcome. There were sixteen trials across twelve pain conditions, with doses from 6 to 1,600 mg and durations from a single dose to twelve weeks. Fifteen found no benefit over placebo.[^50] The authors concluded that CBD for pain is expensive, ineffective and possibly harmful.

It's the same story for replacing opioids. An updated systematic review of cannabinoids in general found that animal and observational studies suggest an opioid-sparing effect and the higher-quality randomized trials do not.[^57]

CBD does work for some things. It reduces seizures in two severe childhood epilepsies, and proper trials were run for those.

### What the market did

<div class="for-pros" markdown="1">

Product quality: in a 2022 analysis, 24% of 89 over-the-counter CBD topicals were accurately labeled, and THC was detected in 35% of 105 products, including some labeled THC-free.[^52] An earlier study of extracts sold online found 31% accurately labeled.[^58]

Hepatic safety: in the FDA's randomized trial in healthy adults, at 5 mg/kg/day for 28 days, 8 of 151 participants (5.6%) had liver enzyme elevations above three times the upper limit of normal, against none of 50 on placebo. Seven met withdrawal criteria for possible drug-induced liver injury, and all resolved within about two weeks of stopping.[^53] The study drug was Epidiolex itself, so the signal belongs to the molecule and not to a contaminant.

The tested product is Epidiolex: the same molecule, purified, trialed and patented. It launched at about $32,500 a year[^54] and earned $1,059 million in 2025, and its owner has settled with generic challengers for entry in the very late 2030s.[^55]

Regulation: for seven years after the 2018 Farm Bill there was no federal product standard. In November 2025 Congress redefined hemp in a spending bill, with a cap of 0.4 mg total THC per container due to take effect on November 12, 2026. The law targets intoxicating hemp-derived THC and removes most full-spectrum CBD products with it; the industry estimates about 95% of hemp cannabinoid products, from a market it values at $28 billion.[^56]

</div>

The untested version is sold to people in pain, and the tested version is sold to insurers.

Only 24% of 89 over-the-counter CBD topicals tested in 2022 contained what the label said; THC turned up in 35% of 105 products, including some sold as THC-free.[^52] An earlier study of online extracts got 31%.[^58] When the FDA ran its own trial of a consumer-range dose in healthy adults, 5.6% had liver enzymes above three times the upper limit of normal within four weeks, against none on placebo.[^53]

The tested version is Epidiolex: the same molecule, purified, tested in trials and patented. It launched at about $32,500 a year.[^54] It earned $1,059 million in 2025, and its owner has settled with generic challengers for entry in the very late 2030s.[^55]

The regulation went the same way as it did for opioids (section 08). For seven years after the 2018 Farm Bill there was no federal product standard. Then, in November 2025, Congress redefined hemp in a spending bill, with a cap of 0.4 mg total THC per container due to take effect on November 12, 2026. The law is aimed at intoxicating hemp THC and sweeps up most full-spectrum CBD products with it. The industry says about 95% of hemp cannabinoid products will go, from a market it values at $28 billion.[^56] So there was no standard and then a ban, with no attempt at regulation in between.

### Why this belongs in a post about memantine

<div class="for-pros" markdown="1">

The two cases are the same incentive failure seen from opposite directions. Memantine has a mechanism, a small number of positive trials, and no sponsor. CBD has a mass market for pain and fifteen negative trials out of sixteen. The populations overlap: patients whose opioids have been tapered or stopped and who were told there is nothing else. One of the review's authors noted that chronic pain makes people vulnerable to promises of this kind.[^50]

There is one difference I would defend. Memantine has one positive six-month trial in a population chosen on a mechanistic hypothesis.[^19][^20] CBD, for pain, has nothing equivalent. A properly designed CBD trial in a σ1-relevant pain state could still come out positive.

I don't know whether σ1 antagonism and open-channel block would be additive. I haven't found anyone who has tested it.

</div>

The two drugs show the same problem from opposite directions.

Memantine has a mechanism and a few positive trials, and nobody markets it for pain. CBD is marketed everywhere for pain, and fifteen of sixteen trials were negative. In both cases companies sold what was profitable to sell.

The customers are often the same people. Someone whose opioid prescription was cut, and who was told there is nothing else, will try a product that promises natural pain relief. One of the review's authors said that chronic pain makes people vulnerable to promises like these.[^50]

## 08 · Two policy failures

People with chronic pain in the US got screwed twice, in opposite directions, by the same institutions.

### First, the overselling

Purdue Pharma has pleaded guilty to federal charges over OxyContin twice, in 2007 and in 2020.[^40] McKinsey earned $93 million advising Purdue over roughly fifteen years,[^41] including a plan to "turbocharge" OxyContin sales while overdose deaths were climbing. In 2024 it paid $650 million to end the federal investigation, in a civil settlement that admits no liability.[^40]

In November 2025 a bankruptcy judge approved a $7.4 billion plan under which the Sackler family pays about $6.5 billion over fifteen years.[^42] Individual victims share something over $850 million of it.[^43]

### Then, the crackdown

When prescribing was restricted, patients paid for it more than the companies did. Doctors under regulatory pressure cut doses or stopped prescribing altogether.

A study of 113,618 patients on stable long-term opioids found that tapering was followed by significantly more overdoses and mental health crises.[^45] The paper was corrected in 2022 for coding errors; the associations got smaller but held up. For that reason I am not quoting the original headline figure.

Prescriptions fell, but deaths kept rising for years, because by then most were from illicit fentanyl. The CDC's provisional count for 2025 is 69,973 overdose deaths, 44,564 of them involving opioids, down from 81,313 and 55,296 the year before.[^44] That is three years of decline, and it is still about 120 opioid deaths a day.

So a person with chronic pain in America has been told three things in a row. This drug is safe, take more. This drug is dangerous, you can't have it. There's nothing else.

The third one is wrong. There are other options. Some have decent evidence, and memantine has never been properly tested.

### Germany as a comparison

I'm writing this from Germany, where it went differently. Germany has ranked second in the world for opioid consumption per capita and, by all accounts, has no opioid epidemic.[^46] A systematic review of German prescribing found rising use and no sign of one.[^48]

The usual explanation is how the system is set up. Opioids were never a first-line treatment here, prescribers face extra screening and paperwork, and addiction treatment is covered.[^47] One German primary-care paper lists what was different in the US: higher doses per patient, a heavy cost burden on individuals, lighter regulation, and a health system oriented toward profit.[^49]

Memantine itself was on the market in Germany fourteen years before the FDA approved it.[^10]

I should be honest that people use Germany to argue opposite things. The left reads it as proof that regulation and universal coverage work. Libertarians read it as proof that prescribing volume was never the cause and the American crackdown on prescribers was the real error. Both readings fit the German data. The tapering study is evidence for the second, which is awkward for an argument like mine that blames the market, and both are worth knowing.

Both sides agree that the same drugs caused far fewer deaths in a different health system. So the crisis came from how the drugs were sold and regulated, and not only from the drugs themselves.

## 09 · What a real trial would look like

<div class="for-pros" markdown="1">

A conventional parallel-group randomized trial would answer the question.

- **Population.** Fibromyalgia and CRPS first, where the signal is, with a second cohort of patients tapering long-term opioid therapy, where the need is. Enrich for mechanism and not for diagnosis: if the hypothesis is that memantine treats central sensitization, select and stratify on a measure of it, such as temporal summation on quantitative sensory testing. A trial that enrolls by diagnostic label will reproduce the heterogeneity that sank the meta-analysis.
- **Dose.** 20 mg and 40 mg/day against placebo. The only positive industry trial used 40.[^3] Both remain far below analgesic ketamine dosing (section 04), so a null result at 20 mg alone would not settle the question.
- **Duration.** At least six months. Steady state alone takes weeks,[^11] and the one positive long trial ran six months.[^19]
- **Design.** Parallel groups, no crossover. With a half-life of 60–80 hours[^11] an adequate washout is weeks long, and carry-over biases a crossover toward the null. The head-to-head with dextromethorphan was a crossover.[^18] I have not checked its washout, and I would want to before leaning on it as hard as section 04 does.
- **Control.** An active placebo. An inert placebo is unblinded by a psychoactive drug.[^18]
- **Outcomes.** Pain-related function and opioid dose in addition to pain intensity. SPACE used function as its primary outcome.[^4]
- **Prevention.** Pre-register it separately. The perioperative signal[^2] and the acute-versus-chronic split in phantom limb pain[^22] both say timing matters, and that deserves its own trial, not a subgroup analysis.
- **Sponsor.** Public funding, since no company will pay.

The points on enrichment, crossover design and prevention are my own reasoning and are not taken from the literature.

On funding: the Purdue plan describes its payments as compensating victims and abating the opioid crisis, and it follows a $26 billion settlement with the distributors and Johnson & Johnson in 2022.[^42] A memantine trial would cost a tiny fraction of either. Under the bankruptcy plan Purdue's assets pass to a new public benefit company, Knoa Pharma, chartered to make overdose-reversal and addiction-treatment drugs.[^42] A public benefit drug company is the kind of organization that could test a drug nobody can own. Whether it does is a political decision.

</div>

The trial that would answer this is an ordinary one, and there is already money that could pay for it.

- **Who.** Fibromyalgia and CRPS first, because that's where the signal is. A second arm in people tapering long-term opioids, because that's where the need is.
- **Dose.** 20 mg and 40 mg against placebo. The only positive industry trial used 40.[^3] Even 40 mg a day is far below the doses at which ketamine is given for pain (section 04).
- **How long.** Six months at least. Steady state alone takes weeks,[^11] and the one positive long trial ran six months.[^19]
- **Control.** An active placebo. Sugar pills against a psychoactive drug are not blind.[^18]
- **Outcomes.** Function and opioid dose, not only a pain score. SPACE used function as its main outcome.[^4]
- **Sponsor.** Public money, since no company will pay.

On the money: the Purdue plan describes its payments as compensating victims and abating the opioid crisis, and it follows a $26 billion settlement with the distributors and Johnson & Johnson in 2022.[^42] Testing whether a six-cent non-opioid works seems to me a reasonable use of abatement money. A memantine trial would cost a tiny fraction of either settlement.

There is also a possible sponsor. Under the bankruptcy plan Purdue's assets pass to a new public benefit company, Knoa Pharma, chartered to make overdose-reversal and addiction-treatment drugs.[^42] A public benefit drug company is the kind of organization that could test a drug nobody can own. Whether it does is a political decision.

## 10 · Taking this to your own doctor

<div class="for-pros" markdown="1">

Positioning first. Tricyclics, SNRIs and gabapentinoids carry a strong first-line recommendation in neuropathic pain, with NNTs of 3.6, 6.4 and 7.7; strong opioids sit third-line on a weak recommendation despite an NNT of 4.3, because of their harms.[^27] Ketamine infusion has better evidence in CRPS than memantine does.[^17] Dextromethorphan did better in the one head-to-head.[^18] CBD, on the trials so far, does not make the list.[^50] On current evidence memantine comes after all of these, and nobody has funded the trial that would show whether it belongs earlier.

What to establish before any off-label trial of therapy:

- **Pain phenotype.** Plausibly centrally sensitized (fibromyalgia, CRPS, migraine, widespread pain out of proportion to tissue damage), as opposed to established peripheral neuropathic pain.
- **Prior treatment.** Adequate trials of a tricyclic, an SNRI and a gabapentinoid.[^27]
- **Renal function.** Memantine is eliminated renally and the dose is reduced in renal impairment.[^11]
- **Concomitant NMDA antagonists.** Amantadine, dextromethorphan, ketamine.[^11]
- **Opioid therapy.** In patients on long-term opioids, as an adjunct to a slow, supervised taper and not as a substitute for one. Tapering is itself associated with overdose and mental health crisis.[^45]
- **Off-label status.** Who pays, and who monitors.

On self-sourcing: in the French analysis, people self-medicating at a mean of 23 mg/day for 15 weeks reported adverse effects in 77% of cases, including dissociation, clouded consciousness, anxiety and insomnia.[^16] Given the half-life, an error takes days to wear off; one accidental overdose took close to 100 hours to resolve.[^12]

</div>

If you have chronic pain, these are questions you could ask your doctor.

1. Is my pain plausibly centrally sensitized (fibromyalgia, CRPS, migraine, widespread pain out of proportion to any tissue damage) rather than an old peripheral nerve injury?
2. Have the drugs with real evidence been tried and failed: a tricyclic, an SNRI, a gabapentinoid?[^27]
3. What is my kidney function? Memantine leaves through the kidneys and the dose comes down in renal impairment.[^11]
4. Am I taking anything else that acts on NMDA receptors, such as amantadine, dextromethorphan or ketamine?[^11]
5. If I am on long-term opioids, could this be tried *alongside* a slow, supervised taper rather than instead of one?
6. This is off-label. Who pays, and who monitors?

> ### ⚠ Do not stop opioids abruptly
>
> Tapering long-term opioids is itself associated with overdose and mental health crisis.[^45] Nothing in this document is a reason to stop or cut a prescribed opioid by yourself.

> ### ⚠ Do not source it yourself
>
> Memantine circulates online as a self-experimentation drug. In the French analysis, people self-medicating at an average of 23 mg a day for 15 weeks reported adverse effects in 77% of cases: dissociation, clouded consciousness, anxiety, insomnia.[^16] The half-life means a mistake takes days to wear off. One accidental overdose took close to 100 hours to resolve.[^12]

> **No doses are given here as a protocol**
>
> Deliberately. The numbers in this document are what trials used. Titration, kidney function and interactions are a prescriber's job. This document exists to start a conversation, not to replace one.
{: .both}

Memantine hasn't been properly tested for pain, so I can't say it works. It costs six cents a tablet, and the last serious trial was twenty-three years ago. Since then there's been an opioid epidemic and tens of billions of dollars in settlements. I think someone should run the trial.
{: .both}

## Keyword summary

- central sensitization
- NMDA receptor, open-channel block
- opioid tolerance, opioid-induced hyperalgesia
- memantine, ketamine, dextromethorphan, PCP
- fibromyalgia, CRPS, migraine
- product hopping, hard switch
- the problem of new uses
- abatement
- cannabidiol (CBD), σ1 receptor

---

## References

[^1]: Memantine HCl 10 mg tablet, average pharmacy acquisition cost $0.06449 each, June 17, 2026, as listed by DrugPatentWatch. [source ↗](https://www.drugpatentwatch.com/p/drug-price/drugname/MEMANTINE+HCL){: .ref-link}

[^2]: Kurian R, Raza K, Shanthanna H. A systematic review and meta-analysis of memantine for the prevention or treatment of chronic pain. *European Journal of Pain.* 2019;23(7):1234–1250. [source ↗](https://experts.mcmaster.ca/scholarly-works/1634326){: .ref-link}

[^3]: Forest Laboratories discloses failure of pivotal memantine trial in diabetic neuropathic pain. *BioWorld*, May 2003. [source ↗](https://www.bioworld.com/articles/470635){: .ref-link}. *Trade source; replace with the trial publication if one exists.*

[^4]: Krebs EE, Gravely A, Nugent S, et al. Effect of opioid vs nonopioid medications on pain-related function in patients with chronic back pain or hip or knee osteoarthritis pain: the SPACE randomized clinical trial. *JAMA.* 2018;319(9):872–882. doi:10.1001/jama.2018.0899 [source ↗](https://stacks.cdc.gov/view/cdc/249394){: .ref-link}

[^5]: Price DD, Mayer DJ, Mao J, Caruso FS. NMDA-receptor antagonists and opioid receptor interactions as related to analgesia and tolerance. *Journal of Pain and Symptom Management.* 2000;19(1 Suppl):S7–11.

[^6]: Popik P, Kozela E. Clinically available NMDA antagonist, memantine, attenuates tolerance to analgesic effects of morphine in a mouse tail flick test; and Popik P, Kozela E, Danysz W. Clinically available NMDA receptor antagonists memantine and dextromethorphan reverse existing tolerance to the antinociceptive effects of morphine in mice. *Journals and years to be completed before print.*

[^7]: Hay JL, Kaboutari J, White JM, Salem A, Irvine R. Model of methadone-induced hyperalgesia in rats and effect of memantine. *European Journal of Pharmacology.* 2010;626(2–3):229–233. [source ↗](https://digital.library.adelaide.edu.au/dspace/handle/2440/58316){: .ref-link}

[^8]: Lipton SA. Paradigm shift in neuroprotection by NMDA receptor blockade: memantine and beyond. *Nature Reviews Drug Discovery.* 2006;5:160–170. [source ↗](https://www.nature.com/articles/nrd1958){: .ref-link}

[^9]: Xia P, Chen HS, Zhang D, Lipton SA. Memantine preferentially blocks extrasynaptic over synaptic NMDA receptor currents in hippocampal autapses. *Journal of Neuroscience.* 2010. [source ↗](https://go.drugbank.com/articles/A177169){: .ref-link}

[^10]: Memantine. *MedLink Neurology.* [source ↗](https://www.medlink.com/article/memantine){: .ref-link}

[^11]: Ebixa (memantine hydrochloride) product monograph. Lundbeck Canada. [source ↗](https://pdf.hres.ca/dpd_pm/00030500.PDF){: .ref-link}

[^12]: Memantine overdose case report. *BMC Geriatrics.* 2024. [source ↗](https://link.springer.com/article/10.1186/s12877-024-04658-2){: .ref-link}. *Author list to be completed before print.*

[^13]: Johnson JW, Glasgow NG, Povysheva NV. Recent insights into the mode of action of memantine and ketamine. *Current Opinion in Pharmacology.* 2015;20:54–63. [source ↗](https://pmc.ncbi.nlm.nih.gov/articles/PMC4318755){: .ref-link}

[^14]: Glasgow NG, et al. Memantine and ketamine differentially alter NMDA receptor desensitization. *Journal of Neuroscience.* 2017;37(40):9686–9704. [source ↗](https://pmc.ncbi.nlm.nih.gov/articles/PMC5628409){: .ref-link}

[^15]: Gideons ES, Kavalali ET, Monteggia LM. Mechanisms underlying differential effectiveness of memantine and ketamine in rapid antidepressant responses. *PNAS.* 2014;111(23):8649–8654. [source ↗](https://pmc.ncbi.nlm.nih.gov/articles/PMC4060670){: .ref-link}

[^16]: Memantine: dissociative disorders. *Prescrire International.* 2021;30(227):159. [source ↗](https://english.prescrire.org/en/81/168/61035/0/NewsDetails.aspx){: .ref-link}

[^17]: Cohen SP, et al. Consensus guidelines on the use of intravenous ketamine infusions for chronic pain. *Regional Anesthesia and Pain Medicine.* 2018;43(5):521–546. [source ↗](https://pubmed.ncbi.nlm.nih.gov/29870458/){: .ref-link}

[^18]: Sang CN, Booher S, Gilron I, Parada S, Max MB. Dextromethorphan and memantine in painful diabetic neuropathy and postherpetic neuralgia: efficacy and dose-response trials. *Anesthesiology.* 2002;96(5):1053–1061. [source ↗](https://www.epistemonikos.org/en/documents/08553c5084fe6b7474b6c6303a95ddcdd6d18b2d){: .ref-link}

[^19]: Olivan-Blázquez B, et al. Efficacy of memantine in the treatment of fibromyalgia: a double-blind, randomised, controlled trial with 6-month follow-up. *Pain.* 2014;155(12):2517–2525. doi:10.1016/j.pain.2014.09.004 [source ↗](https://zaguan.unizar.es/record/129936){: .ref-link}

[^20]: Olivan-Blázquez B, et al. Evaluation of the efficacy of memantine in the treatment of fibromyalgia: study protocol. *Trials.* 2013;14:3. [source ↗](https://pmc.ncbi.nlm.nih.gov/articles/PMC3598995){: .ref-link}

[^21]: Behandlungsinduzierte kortikale Reorganisation und Analgesie bei neuropathischen Schmerzen: eine fMRI- und MEG-Studie. Dissertation, Universität Tübingen. [source ↗](https://publikationen.uni-tuebingen.de/xmlui/handle/10900/48996){: .ref-link}. *Thesis record; replace with the journal publication before print.*

[^22]: Loy BM, Britt RB, Brown JN. Memantine for the treatment of phantom limb pain: a systematic review. *Journal of Pain & Palliative Care Pharmacotherapy.* 2016.

[^23]: NMDA receptor antagonists for the treatment of neuropathic pain. Systematic review. [source ↗](https://epistemonikos.org/en/documents/941f1fc63378c88092fe836ad3e014201e6aa0b7){: .ref-link}. *Author list and journal details to be completed before print.*

[^24]: Mondia MWL, et al. Memantine for episodic migraine: a systematic review and meta-analysis. *Acta Medica Philippina.* [source ↗](https://actamedicaphilippina.upm.edu.ph/index.php/acta/article/view/2776){: .ref-link}

[^25]: Li G, Qu B, Zheng T, Duan S, Liu L, Liu Z. Role of memantine in adult migraine: a systematic review and network meta-analysis. *Frontiers in Pharmacology.* 2024;15:1496621. [source ↗](https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1496621/full){: .ref-link}

[^26]: Medicare claims study of memantine, cholinesterase inhibitors and opioid prescribing in older adults with dementia and chronic pain. [source ↗](https://pmc.ncbi.nlm.nih.gov/articles/PMC11880075){: .ref-link}. *Citation to be completed before print.*

[^27]: Finnerup NB, Attal N, Haroutounian S, et al. Pharmacotherapy for neuropathic pain in adults: a systematic review and meta-analysis. *Lancet Neurology.* 2015;14(2):162–173. [source ↗](https://pmc.ncbi.nlm.nih.gov/articles/PMC4493167/){: .ref-link}

[^28]: Memantine drug profile recording analyst expectations of a 2003 neuropathic pain filing. PMID 12090556. [source ↗](https://www.ncbi.nlm.nih.gov/pubmed/12090556){: .ref-link}

[^29]: Ebb & Flow. *BioCentury*, May 2003. [source ↗](https://www.biocentury.com/article/237994){: .ref-link}

[^30]: Namenda neuropathic pain trial. *The Pink Sheet*, 2003. [source ↗](https://pink.citeline.com/PS042704/Namenda-neuropathic-pain-trial){: .ref-link}

[^31]: Appellate court weighs in on pharmaceutical "product hopping": People of the State of New York v. Actavis PLC (2d Cir. 2015). *JD Supra.* [source ↗](https://www.jdsupra.com/legalnews/appellate-court-weighs-in-on-37067/){: .ref-link}

[^32]: Allergan shelling out $750M to settle lawsuit over its Namenda "hard switch" campaign. *Fierce Pharma*, 2019. [source ↗](https://www.fiercepharma.com/pharma/allergan-pays-750m-to-settle-alzheimer-s-drug-namenda-forced-switching-suit){: .ref-link}

[^33]: Roin BN. Solving the problem of new uses. [source ↗](https://www.bu.edu/law/files/2016/10/Solving-the-Problem-of-New-Uses-Ben-n.-Roin.pdf){: .ref-link}

[^34]: van der Pol KH, et al. Drug repurposing of generic drugs: challenges and the potential role for government. *Applied Health Economics and Health Policy.* 2023. [source ↗](https://pmc.ncbi.nlm.nih.gov/articles/PMC10627937){: .ref-link}

[^35]: Memantine retail and discount prices. SingleCare, 2026. [source ↗](https://www.singlecare.com/prescription/memantine-hcl){: .ref-link}

[^36]: J&J foresees broad insurance coverage for Spravato nasal spray. *Scrip*, 2019. [source ↗](https://scrip.pharmaintelligence.informa.com/SC124867/JJ-Foresees-Broad-Insurance-Coverage-For-Groundbreaking-Spravato-Nasal-Spray){: .ref-link}

[^37]: J&J's Spravato for depression "should be much cheaper." *pharmaphorum*, 2019. [source ↗](https://pharmaphorum.com/news/jjs-spravato-for-depression-should-be-much-cheaper/){: .ref-link}

[^38]: Nuedexta in agitated dementia. *The Carlat Psychiatry Report.* [source ↗](https://www.thecarlatreport.com/articles/3081-nuedexta-in-agitated-dementia){: .ref-link}

[^39]: US Department of Justice. Pharmaceutical company targeting elderly victims admits to paying kickbacks, resolves related False Claims Act violations. 2019. [source ↗](https://justice.gov/opa/pr/pharmaceutical-company-targeting-elderly-victims-admits-paying-kickbacks-resolves-related){: .ref-link}

[^40]: McKinsey & Company to pay $650 million for role in opioid crisis. *NPR*, December 13, 2024. [source ↗](https://www.hppr.org/2024-12-13/mckinsey-company-to-pay-650-million-for-role-in-opioid-crisis){: .ref-link}

[^41]: McKinsey to pay $650 million in opioid settlement with Justice Department. Wire report in *West Hawaii Today*, December 2024. [source ↗](https://westhawaiitoday.com/?p=277646){: .ref-link}

[^42]: Purdue bankruptcy plan: [approval, Fierce Pharma, November 2025 ↗](https://www.fiercepharma.com/pharma/sackler-family-purdue-pharma-can-settle-opioid-claims-74b-deal-judge-signs-bankruptcy){: .ref-link}; [plan filing, Fierce Pharma ↗](https://www.fiercepharma.com/pharma/purdue-pharma-files-new-74b-bankruptcy-reorganization-plan-settle-opioid-claims){: .ref-link}; [Knoa Pharma, Bloomberg Law ↗](https://news.bloomberglaw.com/bankruptcy-law/purdue-pharma-gets-court-nod-for-bankruptcy-exit-sackler-deal){: .ref-link}

[^43]: Purdue Pharma gets court approval to give more than $7.4B to creditors. *Hartford Business Journal.* [source ↗](https://hartfordbusiness.com/article/purdue-pharma-gets-court-approval-to-give-more-than-74b-to-creditors-as-part-of-chapter-0/){: .ref-link}

[^44]: CDC National Center for Health Statistics. U.S. overdose deaths decrease for third consecutive year in 2025. May 13, 2026. [source ↗](https://cdc.gov/nchs/pressroom/releases/20260513.html){: .ref-link}

[^45]: Agnoli A, Xing G, Tancredi DJ, Magnan E, Jerant A, Fenton JJ. Association of dose tapering with overdose or mental health crisis among patients prescribed long-term opioids. *JAMA.* 2021;326(5):411–419. doi:10.1001/jama.2021.11013. Corrected 2022. [summary ↗](https://health.ucdavis.edu/chpr/news/Articles/2021/researchers-identify-risks-tapering-opioid-dose-patients-prescribed-long-term-opioids){: .ref-link}

[^46]: What the US and Canada can learn from other countries to combat the opioid crisis. *Brookings*, 2020. [source ↗](https://www.brookings.edu/articles/what-the-us-and-canada-can-learn-from-other-countries-to-combat-the-opioid-crisis/){: .ref-link}

[^47]: Luthra S. How Germany averted an opioid crisis. *KFF Health News*, 2019. [source ↗](https://kffhealthnews.org/news/how-germany-averted-an-opioid-crisis/){: .ref-link}

[^48]: Rosner B, et al. Opioid prescription patterns in Germany and the global opioid epidemic: systematic review of available evidence. *PLOS One.* 2019. [source ↗](https://pmc.ncbi.nlm.nih.gov/articles/PMC6713321/){: .ref-link}

[^49]: Study of prescription opioid misuse risk in German general practice. *BMC Family Practice.* 2018. [source ↗](https://link.springer.com/article/10.1186/s12875-018-0775-9){: .ref-link}. *Author list and title to be completed before print.*

[^50]: Moore A, Straube S, Fisher E, Eccleston C. Cannabidiol (CBD) products for pain: ineffective, expensive, and with potential harms. *The Journal of Pain.* 2024;25(4):833–842. doi:10.1016/j.jpain.2023.10.009 [source ↗](https://researchportal.bath.ac.uk/en/publications/cannabidiol-cbd-products-for-pain-ineffective-expensive-and-with-/){: .ref-link}

[^51]: Rodríguez-Muñoz M, Onetti Y, Cortés-Montero E, Garzón J, Sánchez-Blázquez P. Cannabidiol enhances morphine antinociception, diminishes NMDA-mediated seizures and reduces stroke damage via the sigma 1 receptor. *Molecular Brain.* 2018;11(1):51. [source ↗](https://pmc.ncbi.nlm.nih.gov/articles/PMC6142691){: .ref-link}

[^52]: Spindle TR, et al. Cannabinoid content and label accuracy of hemp-derived topical products available online and at national retail stores. *JAMA Network Open.* 2022;5(7):e2223019. [summary ↗](https://www.hopkinsmedicine.org/news/newsroom/news-releases/2022/07/study-shows-widespread-mislabeling-of-cbd-content-occurs-for-over-the-counter-products){: .ref-link}

[^53]: Florian J, et al. Cannabidiol and liver enzyme level elevations in healthy adults: a randomized clinical trial. *JAMA Internal Medicine.* 2025;185(9):1070–1078. doi:10.1001/jamainternmed.2025.2366 [summary ↗](https://gastroenterology.acponline.org/archives/2025/07/25/3.htm){: .ref-link}

[^54]: GW Pharma launches first cannabis-derived drug in US. *BioPharma Dive*, 2018. [source ↗](https://www.biopharmadive.com/news/gw-pharma-launches-first-cannabis-derived-drug-in-us/541259/){: .ref-link}

[^55]: Jazz Pharmaceuticals plc. Form 10-K for fiscal year 2025. [source ↗](https://www.sec.gov/Archives/edgar/data/1232524/000123252426000013/jazz-20251231.htm){: .ref-link}

[^56]: Navigating new hemp laws: a major shift for the cannabis industry. Womble Bond Dickinson, on P.L. 119-37. [source ↗](https://www.womblebonddickinson.com/us/insights/law-meets-science/102n8im/navigating-new-hemp-laws-a-major-shift-for-the-cannabis-industry){: .ref-link}

[^57]: Opioid-sparing effect of cannabinoids for analgesia: an updated systematic review and meta-analysis of preclinical and clinical studies. *Neuropsychopharmacology.* 2022. doi:10.1038/s41386-022-01322-4 [summary ↗](https://www.iasp-pain.org/publications/pain-research-forum/papers-of-the-week/paper/195752-opioid-sparing-effect-cannabinoids-analgesia-updated-systematic-review-and-meta){: .ref-link}. *Author list to be completed before print.*

[^58]: Bonn-Miller MO, Loflin MJE, Thomas BF, Marcu JP, Hyke T, Vandrey R. Labeling accuracy of cannabidiol extracts sold online. *JAMA.* 2017. doi:10.1001/jama.2017.11909

<style>
/* the wide comparison tables: smaller type, cells aligned to the top, sideways scroll if they still do not fit */
#main table { display: block; max-width: 100%; overflow-x: auto; font-size: .8em; line-height: 1.4; border-collapse: collapse; }
#main table th, #main table td { padding: .35em .7em .35em 0; vertical-align: top; text-align: left; }
#main table th { border-bottom: 2px solid #1b1b1b; }
#main table td { border-bottom: 1px dashed rgba(27,27,27,.25); }
</style>
