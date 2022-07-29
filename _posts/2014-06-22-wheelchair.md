---
title: "PRIIIME: Modular Powered Wheelchair"
date: "2014-06-22"
categories: 
  - "research-projects"
---

#### Executive Summary

A personal autonomous robotic wheelchair that serves and empowers its users by removing constraints on the occupant’s state. The wheelchair is modular, allowing its user to personalize their mobility device to address their own specific needs.

- [autonomous navigation](#auto) & [obstacle avoidance](#obs)
- [high/low pressure relief & prevention](/pressure-ulcer-prevent/)
- [transformation to a bed at the press of a button](#4)
- [gentle transition between sitting and standing](#3)
- self-cleaning mechanism
- compact folding
- modular => highly customizable & cost effective

PRIIIME brings wheelchairs into the 21st century, by modernizing an abandoned industry with the power of automation, sensors, and well-engineered systems. Additionally, this post includes a [snibbet on closed vs. open source](#b) production of PRIIIME as well as the [research to do list.](#r)

#### Wheelchair Creative Design Methodology

Based on modifications of existing mechanisms, [1] presents a creative design methodology for the generation of all possible topological structures of mechanisms.

1. Identify existing designs with required design specifications that designers would like to have, and conclude the topological characteristics of these designs.
2. Select an existing design arbitrarily, and transform it into its corresponding generalized chain.
3. Synthesize the atlas of generalized chains that have the same numbers of members and joints as the generalized chain obtained in Step 2, based on the algorithm of number synthesis, or simply select the needed atlas from available atlases of chains.
4. Assign types of members and joints to each generalized chain obtained in Step 3, to have the atlas of feasible specialized chains based on the algorithm of specialization to meet needed design requirements and constraints.
5. Particularize each feasible specialized chain obtained in Step 4 into its corresponding schematic format of mechanical device, to have the atlas of mechanical devices.
6. Identify existing designs from the atlas of designs, to have the atlas of new designs.

#### Modular Design

In recent years, powered wheelchairs with sophisticated control have become available. However, these are very expensive and beyond the reach of potential customers particularly in developing countries. To make powered wheelchair an affordable alternative, a modular design approach is highly desirable, wherein different modules are added to a manual wheelchair depending on the user’s requirement and affordability. [2] The first step towards a modular approach for developing wheelchairs is the identification of modules. These modules were identified by talking to various doctors dealing with different wheelchair users and the users themselves [2]. Following features, which can be incorporated in different modules, are listed in order of their significance:

1. Self-controlled mobility by assisting it with automated transmission system, so that the user can enjoy increased independence.
2. Seat elevation, so that the user can access the earlier unreachable environments and get over psychological hassles.
3. Seat tilting, for easy transfer from wheelchair to some other place.
4. Automatic center of mass adjustment for increased stability of the wheelchair.
5. Stair climbing to increase the range of usability of the wheelchair. [see Stair Climbing]
6. Rough terrain movement.

#### Autonomous Navigation

The problem with motorized wheelchairs is that they are large, clumsy and difficult to control. This is especially true if the driver has severely reduced capabilities [Edlund]. PRIIIME satisfies the need for a wheelchair that can take instructions from the driver and then based on its understanding of the environment, construct a plan that will take the user to the intended destination. The user should be able to sit in a room, tell the wheelchair that he wants to be in another room and the wheelchair should take him there as quickly and smoothly as possible. The planner used is a randomized bi-directional tree search. It builds two trees, one from the start state and one from the goal state by randomly sampling the control space of the robot. Each node is a state and each edge is a control input to the robot. In order to decrease the execution time and improve path quality, the planner uses several heuristics to guide the planner. The heuristics are based on Rapidly-exploring Random Trees, Probabilistic Road-maps and the gradient method.

3 Phases of the Planning Problem: **Navigation:**

- Given a map, a start and end position, find a good collision free trajectory connecting these two positions. The trajectory can be found from the control input (to actuators), u, as a function of time.

**Localization:**

- Given a map and sensor readings, estimate the position of the robot in the map. This is necessary for the robot to be able to trace the given path without straying too far from it. The mapping algorithm also needs to have a reasonable estimate of the location to be able to interpret sensor data appropriately.

**Mapping:**

- Given a location and sensor readings, construct a map that accurately describes the surroundings.

#### Obstacle Avoidance

[![Screenshot from 2014-06-21 18:31:32](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-183132.png)](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-183132.png)

People who are visually and cognitively impaired are denied powered wheelchairs due to safety concerns. Implementing a simple obstacle avoidance module grants the mobility of powered wheelchairs to those who need assistance. In a world where we optimize our lives through “smart” technology, a “smart wheelchair” is the next step. **Implementing basic obstacle avoidance techniques (using techniques well-established in the field of autonomous robotics) to remove constraints on the occupant’s state, and increasing safety by decreasing human error.**

#### The control of human-machine systems must be intuitive for the user.

Unintuitive control increases training time and reduces the ability of the user to adapt to unusual circumstances. Intuitive control means, among other things, that **the user must feel that the wheelchair’s responses to input are rational and predictable.** One of the great strengths of utilizing the Vector Field Histogram (VFH) method with autonomous and semi-autonomous robots is actually a drawback when the user is onboard. VFH allows for relatively fast travel through cluttered environments by avoiding obstacles with only a minimum reduction in speed. However, when a user is onboard, this behavior is perceived as sudden and unpredictable change in direction [Bell]. The given UI restraints are satisfied by employing modified VFH to **slow the chair by an amount proportional to the difference between the command direction and the direction of travel selected by obstacle avoidance**. This allows the user to “feel” the presence of the obstacle through the speed reduction as the wheelchair begins to turn. Using semi-autonomous navigation, PRIIIME takes advantage of the capabilities of both the user and the machine by allowing them to share control of the system output. This limits the range of possible command: directions that are too far from the direction specified by the user slow the chair to a halt. In this human-machine system, this method informs the user that the current path is blocked and that another path must be attempted. System performance is a function of quantitative measures as well as subjective ratings of comfort and safety [Bell]:

- **average speed**: m/s
- **jerkiness**: RMS average of the portion of the obstacle avoidance motor command above 10 Hz.
- **average obstacle clearance:** the average distance from the side of the wheelchair to the nearest obstacle
- **collision risk:** collisions and near misses per s

#### Fully Autonomous User Interface For Known Environment

The beta version will operate within roughly known environments by collecting a map of the user’s home. After the map is collected, the user uses my app to label rooms. The user taps where they would like to go on the map and the wheelchair path plans based on the known map of the house and the real-time feedback from its array of **ultrasonic, LIDAR, and IR sensors.**

#### Pressure Sore Relief Mechanisms

**A pressure ulcer is an ulcerated area of skin caused by irritation and continuous pressure on part of the body.** [I’ve created a few device models as proposed solutions, detailed in a separate post.](/pressure-ulcer-prevent/) A viable solution must satisfy the following 6 parameters:

**0. Low cost.** **1. Reduces and distributes pressure.** **2. Low COF that reduces the strain on skin and alleviates shearing forces on the underlying tissues.** **3. Rapidly dissipates moisture & thermoregulates.** **4. Quiet.** **5. Doesn’t shift position drastically.**

#### Wheel Considerations [Mid-wheel vs. 4-wheel drive]

### Mid-Wheel Drive

Having the drive wheels in mid-position makes turning natural and intuitive. [Redman]

- The smaller the arc, the less centripetal force endured – which is important for trunk stability and maneuverability.
- Traction and control are improved with mid-wheel driven chairs. Power chairs, unlike auto-mobiles, have more traction when the wheels are toward the rear of the chair – as most of the weight is there. Front-wheel driven chairs suffer the most as traction is decreased.
- Stability and traction is improved for going up and down ramps.
- Speed and directional stability are improved.
- Traversing slopes is easier as momentum is improved.
- Drive wheels do not have to work as hard to spin casters – especially on soft surfaces.

### Mecanum Wheel [4-Wheel Drive]

[![Screenshot from 2014-06-21 19:26:23](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-192623.png)](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-192623.png)

[Image Source](http://www.kornylak.com/wheels/mecanumwheel_6inch.html)

The split roller performs better on uneven surfaces since each side of the roller pair is able to spin independently of the other. Other advantages: the machining process is more complex when fabricating from a single piece of aluminum and also that it would have required twice the number of rollers as the single-roller design. The wheels also weigh less and provide added versatility, and the wheel requires less power [3]. The rollers are set orthogonal to the wheel hub and because opposing corners of the wheelchair have rollers set in the opposite orthogonal orientation, the wheelchair wheels must be driven independently to move in any direction. Rollers are attached to each side of a spoke or fin that protrudes from the center of the hub at a \(\frac{\Tau}{8}\) rad angle. This makes the drive system capable of full holonomic movement. Holonomicity refers to the relationship between the controllable and total degrees of freedom of the wheelchair. This exploded view [3] shows how the flange bearing and aluminum shaft and the wheelroller fit unto the wheelhub, which is angled at \(\frac{\Tau}{8}\) rads and accommodates a roller on each end.

[![Screenshot from 2014-06-21 19:30:17](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-193017.png)](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-193017.png)

[Image Source](http://www.designworldonline.com/a-new-way-to-roll/)

A 10-in. wheel with nine spokes provides the narrowest possible profile and increased the roller count to 72 [3]. A harder durometer roller is utilized to ease transition from roller to roller; however, to ensure adequate traction, a softer durometer is needed to provide the necessary surface grip. A method was developed to produce a dual-layer roller [3]: The inner layer (core) of the roller is composed of Shore A 90 durometer urethane while the outer layer or tread is comprised of a 3/16-in. layer of Shore A 20 durometer urethane rubber. The result is wheel with drastically improved driving characteristics and increased traction on uneven surfaces. This mechanism requires a custom circuit board to provide closed loop control, taking direction and magnitude input from the three-axis joystick and distributing power to each wheel based on the input received. At the same time it monitors the output shaft speed of each motor and makes corrections for any variation. Large scale manufacturing of custom mecanum wheels: [see [roller development](#roller)]

#### Seat Choice (Frame & Cushion Design)

The frame design of wheelchair seats requires plastic bushings (iglide GLW || iglide G300) for seat height adjustment, backrest and headrest mechanisms. The frame must be lightweight, low profile, low noise, cost efficient, and have high static loads possible. When we sit on a cushion, a number of interacting factors determine whether it is comfortable, functional, and clinically safe. Many of these factors are interrelated; some factors are attributed to properties of the cushion, and others due to the characteristics and needs of the user. [![Screenshot from 2014-06-21 19:35:39](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-193539.png)](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-193539.png) Factors that affect _comfort, functional and clinically safe_ include:

- poor distribution of stresses in soft tissues
- moisture accumulation
- heat accumulation/loss
- compromised stability
- stability provided
- durability &| level of user-maintenance
- cost
- appearance
- cushion thickness
- frictional properties of the cushion and cover

The stresses generated from the compression and deformation of the soft tissues result in occlusion of the blood vessels and lymphatics, and stimulate nerve ending which may signal discomfort to the CNS. The aforementioned stresses can be divided into two groups:

1. Normal stresses (those that act perpendicularly to the skin)
2. Shear stresses (those that act parallel to the skin)

Rather than lying directly on a hip, lie at an angle with cushions supporting the back or front. The seat cushion must have a forward slope to encourage more comfortable posture. A center groove eliminates direct pressure on the coccyx, whilst relieving pressure in the back and lower legs with lumbar and lower leg support. (Similar to [_GSeat MOBILITY Wheelchair Gel Cushion - Gseat Ultra_](http://www.amazon.com/GSeat-Ultra-Portable-Ergonomic-Cushion/dp/B000X2DOJE) by Gelco.)

#### Triple-phase Wheelchair Mechanism Design

[![Screenshot from 2014-06-21 19:46:05](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-194605.png)](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-194605.png) A wheelchair with triple-function of sitting, standing, and lying is essential yet currently non-existent in the market. The triple-phase mechanism design of PRIIIME allows for a **gentle transition between sitting and standing,** and the **transformation to a bed at the press of a button.** Traditionally, a wheelchair is a wheeled mobility device in which the user remains seated. This is propelled either manually (turning the wheels by hand or being pushed by an outside party) or via various automated systems, most commonly the fully-powered wheelchair. Manual with electric assist wheelchairs (similar in design to electric bicycles – using DC brushless hub motors around 1kW) are currently not cost effective, but have been introduced as concept designs. Dual-use mechanism designs are gaining popularity, but have not been accepted by regular or full-time wheelchair users due to a lack of cost-effectiveness and a non-comfortable design. These dual-use mechanism consist of either dual-function [lying-sitting || sitting-standing}, where PRIIIME ventures to be triple-function lying-sitting-standing to accommodate the essential mobility needs of daily users. A crucial aspect of the design of the triple-phase wheelchair is the rear wheels. The rear wheels are movable, so the entire centroid can move between the rear and front wheels of the chair. Note: linkage mechanism has been deprecated for a simple 6-wheel fixed-base mechanism.

A wheelchair with triple-function of sitting, standing, and lying is essential yet currently non-existent in the market. The triple-phase mechanism design of PRIIIME allows for a **gentle transition between sitting and standing**, and the **transformation to a bed at the press of a button**. Traditionally, a wheelchair is a wheeled mobility device in which the user remains seated. This is propelled either manually (turning the wheels by hand or being pushed by an outside party) or via various automated systems, most commonly the fully-powered wheelchair. Manual with electric assist wheelchairs (similar in design to electric bicycles - using DC brushless hub motors around 1kW) are currently not cost effective, but have been introduced as concept designs. Dual-use mechanism designs are gaining popularity, but have not been accepted by regular or full-time wheelchair users due to a lack of cost-effectiveness and a non-comfortable design. These dual-use mechanism consist of either dual-function [lying-sitting || sitting-standing}, where PRIIIME ventures to be triple-function lying-sitting-standing to accommodate the essential mobility needs of daily users. A crucial aspect of the design of the triple-phase wheelchair is the rear wheels. The rear wheels are movable, so the entire centroid can move between the rear and front wheels of the chair. Note: linkage mechanism has been deprecated for a simple 6-wheel fixed-base mechanism.

#### Control Mechanism

The control mechanism is the core to the research and design of a multi-agent system which enables an easy integration of distinct sensors, actuators, user input devices, navigation methodologies, intelligent planning techniques and cooperation methodologies. Due to the requirements of direct bidirectional control and variable speed, the system must be planned. The parts required include a a cortex m4 microcontroller (along with a 3 phase bridge of mosfets, and current sense resistors on every channel) to control my two 1kW 48v brushless motors and 2 Turnigy 5000mAh 6S 20C Lipo Packs to power the motors. The back-EMF is counteracted in software by applying more PWM. Due to the sinusoidal nature of the back-EMF, it is mathematically simple. As an evaluation kit, I suggest the motor controller boosterpack with a c2000 launchpad.

### Power Module

The motor is selected based on the rate power as given by \\(P_{rate}\frac{f_rMgv}{2}\\) where \(M\) is the total mass of the wheelchair and the occupant, \(f_r\) is the coefficient of rolling friction and \(v\) is the speed of the wheelchair.

### Area of Concern: Transmission System

The wheelchair has high torque requirement at low speed. Very few motors can suit such an application and moreover they are costly, bulky and inefficient. So, a transmission system is needed to increase the torque and decrease the speed. **worm gear drive:** low cost, low functionality

- huge power losses
- self-locking behavior doesn’t allow manual override & regenerative braking

**spur gear train:** higher cost, high functionality

- allows for regenerative braking and manual override
- loud & not compact

**in-housed bevel geared motor**

# Other Add-Ons

#### Easy Cleaning Mechanism

Self-changing blanket with breathable, light fabric. Spa-Weave Microfiber was chosen as the material for the fabric due to its properties of being ultra-absorbent, quick drying, and antibacterial fabric. guiding tracks (chain vs. no chain) roll design & locking mechanism roll (see patent)

#### Washroom Assistance

Automated Hermetically-sealed Plastic Waste Containment design (deprecated) After collecting consumer feedback, I found that a built in automated washroom was immediately rejected as a marketable product. Users wish to distance themselves from the toilet due to sociocultural and sanitary concerns. PATCH: adjustable height sitting platform instead for easy transition between surfaces, including toilets.

#### Stair Climbing

(deprecated -- Class 2 (see FDA approval)) Stairclimbing overcomplicates design with needed safegaurds => not cost-effective. My favorite design, created by Lakshmanprasad M and Abdul Basheth: [![Screenshot from 2014-06-21 20:29:59](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-202959.png)](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-202959.png)

#### **Advancing to Consumer Use**

#### Competitive Landscape Study

**Standard Powered Wheelchair ~4K-8K Redman Power Chair** “Our new 2011 Chief 107-Zrx Black Hawk Edition, with many additional features not yet shown on the website, has a cash pre-paid price of **$29,995**. We also have a select few of last year’s demo models (the 107-Zrx) available at $22,500. Additionally, there are a few rebuilt units priced to sell at 20,500 with a twelve-month warranty included in the cost.” Specs: Maximum weight limit 250/350 lbs Seat height 17.5″ (to top of seat base front adjustable to 16.6″ rear – custom as low as 16″) Seat depth 18″ Back height 26″ (from seat base), adjustable 5″ Arm height adjusts from 7″ to 11″ from seat base to top of arm pad Adjustable leg length 13″ to 17″ Ground clearance 3″ Features 4-wheel suspension and uneven ground compensation Overall width 23″ Overall length 39.5″ Turning radius 26″ Driving range 15-20 miles Maximum speed 6.5 MPH standard (9 MPH option) Chair weight: 375 pounds (no accessories, unoccupied) Load capacity: 350 pounds (maximum, occupant and accessories) Total weight: 727 pounds (maximum; chair, occupant, and accessories) **Karma Ergo 115 20” [Manual]** The new’Ergo’ 115 is equipped with Karma’s unique S-Ergo shaped seating system, which redistributes pressure and helps to prevent the occupant sliding down the seat. The S-Ergo seat has been pressure mapped for the optimum shape. In addition to the seating system the wheelchair benefits from detachable anti-bacterial upholstery treated with Aegis microbe shield. The upholstery is available in; silver, black, red and green to enable the user to customise their wheelchair. The Ergo 115 also has swing away detachable footrest hangers. The new shaped armrests have been out rigged to reduce the overall width of the wheelchair. The streamlined oval tubes give the S-Ergo not only make the S-Ergo look great but also add to the strength of the wheelchair structure which is incredibly light. It is available in transit and self propel, in either 16″ x 17″, 18″ x 17″ and 20″ x 17″ seat widths. 519 pounds (**870$**) **Panasonic Bed**

#### Research in Autonomous Navigation with Wheelchairs

There are several existing wheelchair robot projects available. In [35] a real wheelchair was constructed and was then used to roam a railway station as well as the exhibition halls of Hannover Messe. This appears to be a rather complete robot with local planning as well as global. It can handle velocity objects, that is objects that have deterministic motions. Many paths found with older, simpler methods are not acceptable. A robot approaching a narrow doorway may not be able to pass through it if certain constraints limits it. PRIIIME implements a more general algorithm which is guided by a simple planner (A*-search) similar to Edlund’s approach: the Linköping Universitet (2004) constructs a navigation system that can handle relatively arbitrarily kinodynamic constraints in real-time. Trahanias et. al. proposes in [40] a framework to use computer vision and user aided navigation. The wheelchair navigation system consists of a global planner finding collision free paths and a tactical planner that is activated if an unexpected obstacle presents itself. The user selects the goal by indicating the target on a video feed from a camera on the platform. The navigator then tries to reach this target without colliding. Whenever the line of sight or a new obstacle appears the tactical planner takes over and performs some form of evasive maneuver. A semi-autonomous wheelchair robot is introduced in [1]. This robot also uses computer vision only as a means to find the orientation of the robot. It can handle simpler local tasks like moving in a certain direction and following a person (also greatly helped by the vision system) and so on. All without colliding of course. It can’t handle global planning as is handled in this thesis.Morere presents in [33] a structure for wheelchair robot control that considers the robot and the user as part of the same system. That is, the user can give direct low level (or high level) control instructions or he can help the system performing high level instructions.

#### Relevant Manufacturing Info

## Custom Split-Roller Development

Autodesk Inventor drawings are made of both the inner and outer layers of the custom mecanum wheel. The drawings are then sent to a company where stereolithography is used to print ABS Plastic models of the inner and outer roller layers. A silicone mold of each layer is created inside an aluminum casing. Urethane rubber was mixed by the students and poured inside the inner core mold first. After the roller had cured for a short time but not fully, it was transferred to the outer tread layer mold. The softer urethane mixture was poured into the mold around the still soft core to ensure that both layers bonded together. Once removed from the molds, the rollers were heat cured at 65°C for eight hours to cure completely. Once six rollers were created, two larger molds were made which allows for more rollers to be produced in a shorter amount of time. [5]

#### **Business Approaches [Closed vs. Open Source]**

It seems that there are 2 paths: the first is FDA approval and medicare coverage under a closed-source distribution. The second is building a community around it, and open sourcing the designs.

#### Kickstarter [Open Source]

Open-source business runs by different rules. It is harder to get commercially funded and there is a large amount of calculated risk. Open-source business prevents creators from excessive profit; people probably can’t price it much cheaper if you manufacture it. Intellectual freedom allows for easy introduction into becoming a contributing member of a community: the 3D printing revolution happened after the patents expired. Protect your name & brand for these are how you gain trust. Thank you, Erik Katz, for discussing open source business with me.

#### FDA/Medicare Approach [Closed Source]

Class Assistive Tech Certification [8] — PRIIIME = Class 1 Class I devices are subject to only general controls, which are the baseline requirement for all medical devices. According to the FDA website, “[s]ome Class I devices are exempt from the premarket notification and/or parts of the good manufacturing practices regulations. Approximately 572 or 74% of the Class I devices are exempt from the premarket notification process.” A device falls into _Class I_ if:

- general controls are sufficient to provide reasonable assurance of the safety and effectiveness of the device;
- or there is insufficient information to determine whether general controls are sufficient, but the device is not life -supporting or life-sustaining or for a use which is of substantial importance in preventing impairment of human health, and which does not present a potential unreasonable risk of illness or injury.

_Class II_ devices are or will be subject to special controls because general controls are considered insufficient. Special controls may include promulgation of performance standards, post-market surveillance, patient registries, development and dissemination of guidance documents, recommendations, and other appropriate actions, as the Commissioner deems necessary. _Class III_ devices are generally subject to pre-market approval. A Class III device is life-supporting or life-sustaining; or its use is of substantial importance in preventing impairment of human health; or the device presents a potential unreasonable risk of illness or injury. Once a device has received pre-market approval, the FDA mandates that it be made with almost no deviations from the specifications in its approval application. Riegel v. Medtronic, Inc., 128 S.Ct. 999, 1007 (2008).

#### Target Demographic

Chain nursing homes Hospitals Private Home Usage

#### Funding Options

Veteran Affairs Rehabilitation R&D grant Wheelchairfoundation.org FIRST Kickstarter

#### Research Plans: Todo

[![Screenshot from 2014-06-21 20:40:29](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-204029.png)](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-204029.png)![Screenshot from 2014-06-21 20:40:50](/wp-content/uploads/2014/06/Screenshot-from-2014-06-21-204050.png)

#### Patents [Prior Art]

Attempts have been made to develop a standing wheelchair. For example, U.S. Patent No.3,640,566 discloses a spring-loaded wheelchair that assists a disabled user in moving from a sitting position to a standing position. The wheelchair of the ‘566 patent cannot, however, be moved while the user is in the standing position.

U.S. Patent No. 3,964,786 discloses a wheelchair in which the seat, back and leg ends are so articulated and separately actuable, by power means, under control of the occupant, as to enable the occupant to assume any one of three positions, namely sitting, standing or reclining. Two separated leg support members are selectively actuable by the occupant to a horizontal leg supporting position. Steering and forward and reverse propulsion controls accessible to the occupant are also provided, enabling the occupant to obtain substantially total mobility on level ground.

Wheelchairs have been described that employ mechanisms that enable a user to move from a seated position to a reclining position. Such wheelchairs typically include articulated seat, back, and leg ends that are manually adjustable by a person other than the user.

Some wheelchairs, such as those disclosed in U.S. Patent Nos. 2,694,437, 3,191,990, 3,284,126, and 3,495,869, also include a power means that permits the user to control movement from a seated position to a reclining position. These wheelchairs do not, however, permit user mobility.

Wheelchairs having powered propulsion mechanisms include, for example, the wheelchair disclosed in U.S. Patent No. 3,111,181, which employs a seat member and a back member that are configured such that the back member can be lowered to a reclining position upon forward movement of the seat member. A user of these wheelchairs cannot, however, move from a seated position to a standing position.

U.S. Patent No. 2,295,006 discloses a wheelchair having a separable stretcher member capable of pivotal movement on the wheelchair that allows someone other than the disabled user to move the chair from a reclining position to a standing position.

U.S. Patent No. 3,023,048 discloses a wheelchair that includes a hand pump that is operable by a disabled user to activate hydraulic cylinders to facilitate the movement of the user from a seated position to a standing position.

U.S. Patent No. 4,231,614 discloses a wheelchair for mechanically assisting a disabled user move between a sitting and a standing position. The wheelchair of the ‘614 patent employs a lever mechanism having a forward lever arm coupled to a lower-leg support through a cam, and a rearward lever arm coupled to a seat and/or back through a delayed-action channel member to permit the coordinated movement of a user’s feet, lower-legs, thigh, seat, and back.

U.S. Patent Nos. 4,390,076 and 4,456,086 disclose an integrated ambulator and wheelchair to permit a disabled user to stand on the ambulatory and be separated from the wheelchair for maneuvering in confined spaces. The ‘076 and ‘086 patents also disclose a separable walker and a power platform for facilitating standing and maneuverability. U.S. Patent No. 4,437,537 discloses a stand-up motor-driven device for use by a disabled user, which tilts forward to permit user increased mobility, but does not enable the user to sit or recline.

U.S. Patent No. 4,519,649 discloses a wheelchair having a gas spring that is in a compressed state when the user is in a seated position. When the user wishes to stand, the user activates the compressed gas spring, which gradually raise the chair to a standing position. U.S. Patent Nos. 4,231,614 and 4,598,944 disclose hand grip controlled, user assisted raising wheelchairs that permit a user to move to and remain in a standing position. U.S.

Patent No. 4,569,556 discloses a wheelchair that employs an articulated structure of two deformable quadrilaterals and an elastic member, which permits a user to be raised from a sitting to a near standing position. The wheelchair of the ‘556 patent permits a user to be moved while in a standing position but does not permit the user to move, without assistance, while in a standing position.

U.S. Patent No. 4,809,804 discloses a combination wheelchair and walker apparatus that moves a disabled user between a seated position and an upright position, but does not permit the user to move to a reclining position. U.S. Patent No. 4,948,156 discloses a standing support apparatus that can be attached to a wheelchair to permit a user having substantial upper-body strength to move from a seated position to a standing position.

U.S. Patent No. 4,934,723 discloses a wheelchair that enables a user to move from a lower seated position to a higher seated position. The wheelchair of the ‘723 patent employs feet that are lowered onto a floor and air pressure to elevate the chair to a desired height. European Patent No. EP1413278 discloses a manual wheelchair which allows for control of the seat height that does not include a height adjustment mechanism with balance control by automatically locking feet.

U.S. Patent No. 5,096,008 discloses a rotatable stand-up wheelchair that includes a main drive chassis having front and rear wheels and a means for raising and lowering seat and back ends of the wheelchair to raise a disabled user from a substantially seated position to a substantially standing position. Stability of the wheelchair is achieved with two triangular wheel configurations that intercept at their apex. U.S. Patent No. 5,096,008 discloses a wheelchair that includes a main drive for positioning the user in a standing position. U.S. Patent No. 5,108,202 discloses a wheelchair that employs a hydraulic jack to raise the chair to a standing position. The hydraulic jack permits a user of limited strength to raise the chair.

U.S. Patent No. 5,366,036 discloses an electric wheelchair for selectively positioning the operator from a sitting position to a standing position or reclining position. U.S. Patent Nos. 5,609,348 and 5,772,226 disclose wheelchairs that assist a user in moving from a sitting position to a standing position with a hydraulic device. U.S. Patent No. 5,772,226 discloses a wheelchair that employs an electricity source to permit the user to move while in the standing position.

U.S. Patent No. 5,836,654 A discloses a wheelchair seat assembly with contoured seat pan and cushion. This patent does not disclose pressure relief mechanisms for the lower and upper back, nor pressure relief mechanisms for the lower leg. U.S. Patent No. 5,884,929 discloses a wheelchair that employs a mobile frame, a chair assembly for supporting a user in a seated position, and a mechanism that supports the chair assembly on the frame, which is configured to facilitate the transfer of a disabled user onto and off of the wheelchair.

U.S. Patent No. 6,428,103 discloses a wheelchair having a base with a pair of wheels connected to each side of the base, a seat pivotably connected to the base, a backrest pivotably connected to the seat and a transmitting mechanism for pivoting the seat and the backrest. The transmitting mechanism includes a seat bracket secured to the seat, a seat shaft received in the seat bracket, a front gear and a rear respectively mounted on two end of the seat shaft, a main shaft slidably received in the base and extending into the seat bracket, a back shaft securely connected with the backrest and extending into the seat bracket, a back gear mounted on the back shaft and engaging with the rear gear, a seat gear and a main gear mounted on the main shaft and engaging with the front gear alternately. By such an arrangement, the seat and the backrest can be pivoted to an upright position or horizontal position to assist a disabled person to stand up or lie on the wheelchair.

U.S. Patent No. 6,425,634 discloses an apparatus, adaptable to a wheelchair, for assisting a person seated in the wheelchair to move to a standing position, the apparatus including a member that is slidable upward and downward along the chair; a seat, having a seat end hinged to a back end; a flexible strap member, engaged at a first end to the slidable member, and traveling along an under surface of the seat, and engaged at a second end to a stationary end of the wheelchair, so that when the slidable member is moved to a down position, the flexible strap is pulled taut beneath the seat, lifting the seat from a sitting position to a substantially raised flat position, so that a person sitting in the seat is lifted from a seated position to a partially standing position.

U.S. Patent No. 6,454,285 discloses a wheelchair that employs a seat lift mechanism and a chair tilt mechanism that are both actuated by a single lever. Operation of the lever elevates the rear of the seat and raises the rear of the wheelchair thereby moving the wheelchair user toward a standing position and reduces the lifting effort required by another who is assisting the disabled user to move out of the wheelchair.

U.S. Patent No. 6,533,304 discloses a hydraulic powered wheelchair pivotable from a sitting position to a standing position with minimal user effort. The pivoting frame assembly includes a rigid horizontally arranged wheel support structure, a single vertical extending member secured to the wheel support structure and centered between the wheels, and a pivoting frame linkage assembly pivotably connected at the upper end of the vertically extending member. A hydraulic jack rests on the wheel support structure and is connected at the other end to the seat support members of the pivoting assembly. A wheelchair user can pivot a lever assembly to raise the jack thereby raising the chair to a standing position

U.S. Patent No. 6,625,830 discloses a wheelchair cushion having a solid gel patient interface, a matrix or honeycomb panel, and a foam base. The gel layer is molded around and over the panel to produce a composite panel with patient interface characteristics of a gel layer, but with reduced weight. The matrix panel cells are open on the lower ends which are bonded to a soft foam base. The matrix panel interacts with the foam base to spread forces and provide pressure reduction and positioning better than solid gel, but with less weight. The foam base may include several layers of differing

density and contouring elements. The composite panel conforms to the base contours to provide a contoured patient interface. Chinese Patent No. CN2392522 discloses a multifunction wheelchair having a reclining option and a built-in toilet.

U.S. Patent No. 6,934,980 discloses a system to facilitate the transfer of a patient between a chair and a bed or other device. The system includes a chair and a transfer bridge interchangeably securable to either side of the chair. The top surface of the transfer bridge is positioned at substantially the same height as the seat to allow a patient to slide across the transfer bridge between the chair and

U.S. Patent Nos. 7,165,778 and 6,976,698 disclose a manually operable standing wheelchair that employs an actuator for moving a user from a sitting position to a standing position. The manually operable standing wheelchair has a lifting mechanism including a ratchet, cable, pulley, and telescopic tubes, which the user may manually operate to shift from the sitting position to the standing position. There is also a drive system to enable the occupant to manually move from a sitting position to a standing position, or in any position in between. The drive system includes an adjustable lever drive with friction pads to permit the user to move into various positions

U.S. Patent No. 8,360,518 discloses a mechanism for assisting a user out of a wheelchair from a sitting position. The mechanism disclosed in the ‘518 patent includes a seat end, a bar that is pivotably attached to the seat end, a handle that extends outward from the bar, and a mechanism that can attach to an arm of the wheelchair.

#### Sources Cited

[1] Yang, C. W., Wu, H. T., & Liu, H. B. (2012). Main Structure Design on Dual-Purpose Move-Assistant Device of Wheelchair and Crutch on SolidWorks. Advanced Materials Research, 482-484, 2148-2152.

[2] S.K. Kakoty, M. Murarka, P. Kodati & U.S. Dixit (2003). Design Of A Modular Mechatronic Wheelchair.

[3] A New Way to Roll. (n.d.). Design World. http://www.designworldonline.com/a-new-way-to-roll/

[4] Peter Xu (2002). Mechatronics Design of a Mecanum Wheeled Mobile Robot.

[5] Cooper, A., et al. (1997). Methods for determining three-dimensional wheelchair pushrim forces and moments : A technical note. Journal of Rehabilitation Research and Development Vol.34 No. 2, April 1997, 162-170.

[6] Bobbert MF, Schamhardt HC. Accuracy of determining the point of force application with piezoelectric force plates. J Biomech 1990 :23(7) :705—10

[7] Filip Ilievski, Aaron D. Mazzeo, Robert F. Shepherd, Xin Chen, and George M. Whitesides. Soft Robotics for Chemists.

[8] Straube, D. Food and Drug Administration and Assistive Technology Frequently Asked Questions. The National Assistive Technology Advocacy Project.
