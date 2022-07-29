---
title: "Pressure Ulcer Prevention"
date: "2014-05-10"
categories: 
  - "research-projects"
---

**A pressure ulcer is an ulcerated area of skin caused by irritation and continuous pressure on part of the body.** It starts as an area of skin damage which spreads to the tissues underlying the skin. In severe cases (Stage IV), there can be permanent damage to muscle or bone underneath the skin. Pressure ulcers are most common over bony prominences. Leading contributors to pressure ulcers: pressure, moisture, friction/shear and nutrition. Tissue is stressed between the bony mass and a rigid surface (such as a chair seat or bed mattress).

From the biomechanical view of stresses inside tissue: compression stress, shear stress, tensile stress, pressure, and friction act in concert to create tissue damage.

[![](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-17-56-25.png)](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-17-56-25.png)

If the compression reduces the pressure in local capillaries to less than 32 torr for 1 to 2 hours without intermittent relief, the cells die from lack of oxygen and nutrition [3,4].

[![](/wp-content/uploads/2014/05/Screen-shot-2014-05-10-at-11.15.51-AM.png)](/wp-content/uploads/2014/05/Screen-shot-2014-05-10-at-11.15.51-AM.png)

[![](/wp-content/uploads/2014/05/Screen-shot-2014-05-10-at-11.16.01-AM.png)](/wp-content/uploads/2014/05/Screen-shot-2014-05-10-at-11.16.01-AM.png)

[![](/wp-content/uploads/2014/05/Screen-shot-2014-05-10-at-11.16.08-AM.png)](/wp-content/uploads/2014/05/Screen-shot-2014-05-10-at-11.16.08-AM.png)

[![](/wp-content/uploads/2014/05/Screen-shot-2014-05-10-at-11.16.14-AM.png)](/wp-content/uploads/2014/05/Screen-shot-2014-05-10-at-11.16.14-AM.png)

Pressure ulcers are grouped into 4 stages according to the extent of tissue injury:

- Stage 1:
    - Intact but reddened skin. Cellular damage is observed through skin that remains red and fails to resume its normal color when pressure is relieved.
- Stage 2:
    - Red and accompanied by blistering or a skin tear (shallow break in the skin). Impairment of skin may lead to colonization and infection of the wound.
- Stage 3:
    - Shallow skin crater that extends to the subcutaneous tissue. May be accompanied by serious damage (leaking plasma) or purulent damage (white or greenish fluid) caused by a wound infection.
- Stage 4:
    - Life threatening. The tissue is deeply ulcerated, exposing muscle and bone. The infection easily spreads throughout the body, causing sepsis (potentially fatal systematic infection).

Stage I ulcers can develop in less than 1 hour in people who are at _high risk_. Pressure ulcers are especially prevalent in geriatric care.

[![](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-12-35-52.png)](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-12-35-52.png)

#### [Medical Overview](http://emedicine.medscape.com/article/1293614-overview#a0104) of Anatomical Effects of Ulceration

_Maceration (softening and turning white of the skin due to being consistently wet) often occurs in those with incontinence, predisposing the skin to injury. Pressure, shear forces, and friction cause microcirculatory occlusion resulting in _ischemia_ (restriction in blood supply to tissues), which leads to inflammation and tissue anoxia. Tissue _anoxia_ (deprived of oxygen supply) leads to cell death, necrosis, and ulceration. Of the various tissues that are at risk of death due to pressure, muscle tissue is damaged first, likely because of its increased need for oxygen and higher metabolic requirements. Irreversible changes may occur during as little as 2 hours of uninterrupted pressure. Skin is able to withstand ischemia from direct pressure for up to 12 hours. By the time ulceration is present through the skin level, significant damage of underlying muscle may already have occurred, making the overall shape of the ulcer an inverted cone. _Reperfusion_ (restoration of blood flow to an ischemic area of tissue) has recently been suggested as a cause of more damage to that area, causing a pressure sore to enlarge or become more chronic. This occurs, for example, when a paraplegic or quadriplegic patient is turned from one side to the other, in a well-intentioned attempt to combat prolonged pressure on a given side. The exact mechanism of the ischemia-reperfusion cycle of injury is not yet fully understood. Continued production of _inflammatory mediators_ (soluble, diffusible molecules that act locally at the site of tissue damage and infection) and _reactive oxygen species_ (reactive molecules containing oxygen — high levels cause [oxidative stress](http://en.wikipedia.org/wiki/Oxidative_stress)) during ischemia reperfusion may contribute to the chronicity of pressure sores._

#### Instead of patenting my designs, I’ve decided to open source my research.

I’ve created a few device models (which I’ll discuss throughout this report) as proposed solutions. A viable solution must satisfy the following 6 parameters: **0. Low cost. 1. Reduces and distributes pressure. 2. Low COF that reduces the strain on skin and alleviates shearing forces on the underlying tissues. 3. Rapidly dissipates moisture & thermoregulates. 4. Quiet. 5. Doesn’t shift position drastically.**

#### “Bear” (Bar-Gear Train) Design

Each unit, termed a _bear_, consists of a bar with two gears perpendicular to the flat ends of the bar. By mounting the gears on either side of the bar on a frame so the teeth of the gears attached to adjacent bars engage, we create a gear train. The ratio of the pitch circles of the mating gears determines the _mechanical advantage_ (torque ratio of the gear train) of the system. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/lhvi6pvIPxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 _Animation courtesy of [Nicky Case](http://ncase.me/)._

To not shift position drastically, there are 2 options for the relative phase of the bear \(n_i\) to its neighbor \(n_{i+1}\): \(\frac{\tau}{4}\) and \(\frac{\tau}{2}\).

[![](/wp-content/uploads/2014/05/bear1.png)](/wp-content/uploads/2014/05/bear1.png)

The \(\frac{\tau}{4}\)-offset design allows for a lower cost mechanism. The larger gear pitch allows for less individual bear units \(\rightarrow\) less moving parts. To maintain uniformity, we wish to use the same pitch circle on each bear unit (use the same sized gears in series); the energy loss between the first and last gear is made negligible by overspecing the gears. The sinusoidal system is then covered with at least 8cm thick cushioning of LRPu (low-resilience polyurethane) to further distribute the pressure exerted by the bars on the user.

#### Elastomer-Pocket Fluidic || Pneumatic Design

**An elastomer is a _viscoelastic_ polymer** (high failure strain and low stiffness). _Viscous materials strain linearly as stress is applied; elastic materials strain when stretched and quickly return to their original state._

My first design of the Elastomer-Pocket employs fluid distribution in an array of pockets. Each pocket is approx. 10cm in length, 10cm in width, and 3cm in depth when fully inflated. Each pocket is connected via double-sided pipettes running vertically and horizontally throughout the system.

Each pocket includes a pipette protection layer having a rigid imprint of half of the volume of a vertically oriented double-sided pipette, which cradles the vertically oriented double-sided pipette, which is configured adjacent to a pipette protection layer having a rigid imprint of the other half of the volume of vertically oriented double sided pipette on a back side, a layer of cushioning, and a rigid imprint of half of a volume of a horizontally oriented double-sided pipette that holds horizontally oriented double sided pipette between itself and pipette protection layer with a rigid imprint of half of the volume of the horizontally oriented double sided pipette.

[![](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-18-18-28.png)](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-18-18-28.png)

An inflatable soft hydrophobic polymer container encompasses the resulting cushion mechanism, with a hermetic seal between itself and the next cell in an array and two openings for vertically oriented and horizontally oriented double-sided pipettes to connect a first cell to a second, adjacent cell.

[![](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-18-06-50.png)](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-18-06-50.png)

[![](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-18-06-30.png)](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-18-06-30.png)

Double-sided pipettes are composed of hard tubing with a gap fixedly connected to a pipette filler, a soft polymer pipette filler having a surface covered by a thermally sensitive wire that contracts when electrically stimulated. The pipette filler is fixedly connected to a direction switch that switches direction of a double-sided pipette’s fluid distribution. Direction switches are controlled by a control station on the arm of the operant’s wheelchair and activated by selecting cells to inflate and/or to deflate.

[![](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-18-06-43.png)](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-18-06-43.png)

**Actuation of Elastomer** Regarding the chemical composition of elastomer pocket material, PRIIIME implements soft robotic methods and rheology (the science of the deformation and flow of matter) into applications of pressure sore relief.

The choice of materials, coupled with the design of the channels, determines the response of the pressure sore relief device to applied pressure. The pressure necessary to achieve a particular amplitude of actuation scales with the stiffness of the materials.

[![](/wp-content/uploads/2014/05/Screenshot-from-2014-04-07-20-54-06.png)](/wp-content/uploads/2014/05/Screenshot-from-2014-04-07-20-54-06.png)

Pneumatically-driven actuators [Ilievski: a, b, & c] are among the most highly developed soft actuators, and have existed for more than 50 years; they consist of a bladder covered in a shell of braided, strong, inextensible fibers. These actuators can be fast, and have a length-load dependence similar to that of muscle [Ilievski] but possess one actuation mode—contraction and extension when pressurization changes. Unfortunately, the volume of air required for supporting high loads causes high acoustic intensity which is commonly reported as unpleasant to the operator. 

We thus turn to

1. The alternative to pneumatic actuation: Hydraulic actuation is amenable to similar designs and are useful for situations that require greater force (or incompressible robotic modules).
2. A quiet, closed loop with a high volume air blower and a lower volume air pump.

Area of concern: chemical composition of fluid used in elastomer pressure relief system (mineral oil vs. water). _Sidenote: Employing electro-rheological (ER) fluids in hydraulic actuation is an interesting area of active research. ER fluids are smart fluids which can transform into solid-like phase by applying an electric field. This process is reversible and can be strategically used to build fluidic components for innovative soft robots capable of soft locomotion. This potential application of ER fluids to build valves that simplify design of fluidic based soft robots has been demonstrated by Sadeghi at the IEEE/RSJ 2012 International Conference on IROS._

**Elastomer Pocket Material Considerations**

IIevski used two silicone elastomers (polydimethylsiloxane PDMS, Dow Corning Sylgard 184) and Ecoflex 00-30 (siloxane produced by Smooth-On) because they are easily accessible, are easy to work with, bond well to each other to form multilayer structures, and are relatively inexpensive.

PDMS is transparent and has a Shore A hardness of 50.[7] It is elastic and can withstand repeated bending, but fractures above a maximum strain of 150 %.[7] As a result, PDMS has a limited range of deformation, and is best suited for the more rigid parts of a structure.

Ecoflex is translucent and has a hardness below the Shore A scale.[7] It fractures only above a maximum strain of 900 %;[7] it is more flexible than PDMS, and therefore, it is suitable for components with larger strains/displacements (i.e., the layers of actuation).

Because it is so soft, Ecoflex, if unsupported, will bend under its own weight (PDMS will not). Composite structures, comprising layers of PDMS and Ecoflex, balance the rigidity of PDMS with the flexibility of Ecoflex for optimal function.

[Deprecated] Dual layered, with an outer harder shell and an inner pocket. The shells were a PDMS-Ecoflex blend protecting an inner pocket of soft polyurethane, which is viscoelastically optimal. Unfortunately, this is not cost effective, and too yielding at high loads.

[![](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-11-49-13.png)](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-11-49-13.png)

_The cost-effective alternative [3] is composing the pockets with 25 Shore A EPDM (ethylene propylene diene monomer (M-class)) rubber, which results in a harder, cheaper, leak-resistant, and high-load bearing pocket. To lighten the system’s weight, we can switch from hydraulic actuation to pneumatic actuation comprising of a quiet, closed loop with a high volume air blower and a lower volume air pump._

[![](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-11-46-52.png)](/wp-content/uploads/2014/05/Screenshot-from-2014-05-08-11-46-52.png)

To simplify the control system, we introduce AB timer logic [4]: this provides 2 modes for pressure relief and 1 floating mode (resulting in the **Trinary State Pneumatic Design):** The desired AB-manifold is manufactured as a bubblesheet with channels molded into each “bubble” [0]. The holes at the end of each channel are connected to the fill/dump valve.

Fortunately, forming channels in silicones and other elastomers is a well understood, widely used technique in soft lithography and microfluidics.

[![](/wp-content/uploads/2014/05/PnuematicAB.png)](/wp-content/uploads/2014/05/PnuematicAB.png)

In practice, we can surround the pnuematic bladders with hard foam frame around the edges of the cushion to support and stabilize the patient during transfer between surfaces.

A version of this system is currently [commercially available](http://www.combinationtherapymattress.com/p-12851-span-america-pressure-guard-easy-air-lateral-rotation-mattress-system.html) for around 4K. Unfortunately, though potentially covered under medicare), this design does not satisfy the given constraint of Low Cost. I address this issue by bringing the price down an order of magnitude with my Double-Roller design (400$).

Credit: [7] Filip Ilievski, Aaron D. Mazzeo, Robert F. Shepherd, Xin Chen, and George M. Whitesides. Soft Robotics for Chemists.

#### Double-Roller Design

It is important to _never_ rub or massage any places where the skin has reddened, as this could cause further damage. As result of decreased collagen and elastin, the elasticity of the skin and its repair rates are greatly decreased as we age.

To avoid harming delicate skin, we wish to stimulate circulation by gently re-distributing pressure. We can modify the commonly available double-bar massage chair back by adding a roller and double sided pressure distributing overlay.

[![](/wp-content/uploads/2014/05/Screen-shot-2014-05-09-at-6.07.05-PM.png)](/wp-content/uploads/2014/05/Screen-shot-2014-05-09-at-6.07.05-PM.png)

“The roller chair has a dynamic mechanism and a sliding unit. The sliding unit is movable between two tracks: each track having a first lateral plate and a second lateral plate. At least one of wheel units installed at a periphery of the sliding unit. Each wheel unit includes a first wheel, a second wheel and one elastic element. The elastic element resists one wheel outwards so that the first wheel and second wheel resist against inner sides of the two lateral plates of one respective track. Thus, since the sliding unit has wheels which are tightly resist against the lateral plates of moving tracks, no noise is generated as the dynamic mechanism of the roller chair moves.”

Note that the design of the double roller mechanical metal frame back (above) is not my invention, this is a common frame design for adjustable lumbar support and massage chairs. My contribution is the addition of toppers and rollers to eliminate the harmful effects of massage on pressure ulcer development.

1. Hollow Elastomer Toriods [1]

The rollers press forward, compressing the air distributed throughout the hollow elastomer toroid to the front half of the chair to re-distribute pressure.

[![](/wp-content/uploads/2014/05/image-2.png)](/wp-content/uploads/2014/05/image-2.png)

Essentially, we have the pnuematic system (using EPDMr) without air compressors, valves, pumps, etc.

2. Gel & Foam [2]

The rollers press forward to cause a deformation in the gel & foam cushioning of the seat back. The entire system is then covered with 8cm of LRPu (low-resilience polyurethane).

#### Band Design

[![](/wp-content/uploads/2014/05/Diagram-1.png)](/wp-content/uploads/2014/05/Diagram-1.png)

The band design is the lowest cost design. The basic principle of the device is adjusting the gel&foam padding from a natural state of contouring to a user’s body.

The cushion is comprised of high-crosslink density gel sections, sandwiched in-between convoluted, high density polyurethane foam layers. This configuration distributes a person’s weight more evenly than an LRPu alone to relieve pressure around bony prominences. Gel&foam cushions are commonly used by full-time wheelchair users to prevent posterior and lateral compression which occurs when sitting in a sling-like seat.

The deformation of the cushion is adjusted by tightening and loosening bands (by means of winch worm gears, or manually to reduce cost) to subtlety adjust the position of the user. This re-positioning is made possible through the aforementioned layered high-density cushion. With a low density, one-layered cushion the user’s weight will deform the cushion enough to negate the pressure relief from the band-deformation.

#### Cost-effective Shear & Friction Reduction

We wish to eliminate the deformation of two contiguous internal parts the patient’s body in the transverse plane. This can be accomplished by a multi-layer sheet cover (biomimicry of genuine sheepskin).

If the blanket-blanket interface COF is lower than that of the other two interfaces, the two blankets will slide across one another before there is movement elsewhere, reducing shear.

[![](/wp-content/uploads/2014/05/Screen-shot-2014-05-09-at-4.30.16-PM.png)](/wp-content/uploads/2014/05/Screen-shot-2014-05-09-at-4.30.16-PM.png)

For further shear reduction, we wish to wick moisture away and then absorb: microfiber top, cotton bottom.

As the top layer, 4-way stretch microfiber moves with the body to effectively eliminate friction and chafing while capillary action wicks moisture away from the skin to be absorbed by the cotton layer. [Here](http://backreaction.blogspot.com/2013/05/what-is-microfiber-cloth-and-how-does.html) is a great explanation of how microfiber works.

_Sidenote: My work focused on the prevention and relief of pressure sores from a mechanical perspective. I encourage the reader to additionally [explore](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3223487/) the active research topic of tissue regeneration in treatment of wounds._

Thank you to [0]Adam Munich, [1]Danielle Fong, [2]Paul Sebexen, [3]Matthew Putman, and [4]Kettner Griswold Sr. for your suggestions, inventiveness, and encouragement.

Additional thanks to the kind nurses and residents at Paul Springs for answering my questions on mobility assistance in geriatric care.

_Bibliography_

[Prevent Pressure Ulcers. Is it possible?](http://www.ltlmagazine.com/article/prevent-pressure-ulcers-it-possible)

[Friction vs. Shear Wounds](http://journals.lww.com/aswcjournal/pages/articleviewer.aspx?year=2004&issue=06000&article=00006&type=Fulltext)

[Genuine Sheepskin Treatment Superior to Medical-Grade Sheepskin](http://www.ncbi.nlm.nih.gov/pubmed/8427643)

Inge GP Duimel-Peeters, Mirjam A Hulsenboom, Martijn PF Berger, Luc HEH Snoeckx, Ruud JG Halfens, Massage to prevent pressure ulcers: knowledge, beliefs and practice. A cross-sectional study among nurses in the Netherlands in 1991 and 2003, _Journal of Clinical Nursing_, 2006, 15, 4

Carol Dealey, C. Tod Brindle, Joyce Black, Paulo Alves, Nick Santamaria, Evan Call, Michael Clark, Challenges in pressure ulcer prevention, _International Wound Journal_, 2014, 11, 2

“Pressure Ulcer Management.” Nursing Management (Springhouse) 31.10 (2000): 51. Print.
