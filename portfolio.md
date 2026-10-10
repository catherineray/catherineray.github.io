---
layout: work
title_shadow: "#6cc8f0"   # color of the title's offset copy
title: Portfolio
permalink: /portfolio/
rail: minimal
# Selected work. The layout (_layouts/work.html) is shared with the Art page (/art/), so any design change applies to both;
# this file only lists what the Portfolio shows. Entries point at posts by slug (the filename without the date).
intro: "When the universe remembers it has no skin."
other_link: { label: "See everything →", url: /art/ }
gallery_selected: true   # only the selected pieces, not the ones that came from blog posts
gallery_hide: [film, digital photo]   # In a box shows polaroids only here; the other photos are on /art/
# pieces left off the Portfolio (they stay on /art/), by file name
gallery_hide_files: ["freeiran", "halftone-unknown-origin-2", "z-beetlevessel", "z-intuition-and-precision", "t-japan-round-street", "t-lisbon-lamppost", "t-lisbon-balconies", "t-lisbon-tree", "t-lisbon-harbour", "t-japan-towers", "t-lisbon-tram"]
# the Portfolio's own order: the wall as it opens, polaroids scattered among the drawn and painted pieces as before ...
gallery_first: ["neon-mantis", "a-vibing", "00-lain-mexicocity", "exhausted-silence", "2020-10-25", "Messenger_creation_FEBCBDB3-6B9E-44BC-8FBB-DFCE332BB1D5", "t-japan-horse", "caterpillar", "b-katzenkindergarten", "chaos-penrose", "blackboard-cleaner", "t-japan-train", "t-japan-arcade", "t-japan-cows", "fab-liquid-demon", "blue-edges", "mind-melting", "ta-Screenshot from 2025-09-02 07-26-22", "t-japan-flowers", "chinesenewyear", "halftone-unknown-origin-1", "pride-snakes", "homeless", "mischief-tarantula", "static-depersonalization", "t-japan-shop", "z_IMG_20251115_152202_202", "sleep-duck", "t-japan-izakaya", "roest", "elevator", "sun", "ta-Screenshot from 2025-09-02 07-24-26", "bpi", "hiro-posh", "botanicals", "ta-Screenshot from 2025-09-02 07-24-50", "t-japan-signs", "t-japan-alley", "stairway", "t-lisbon-wires", "storm-coming", "t-japan-statue", "depths", "cartunnell", "ab-Screenshot from 2025-09-02 07-22-23", "mystical-door-tepoz", "singlepoint", "t-bbord", "steep-climb", "t-Screenshot from 2025-09-02 07-26-03", "t-blau-amstie", "t-bw-storm", "ta-Screenshot from 2025-09-02 07-24-01", "aegidiimarkt"]
# ... and the polaroids when In a box is picked
group_first:
  in-a-box: ["00-lain-mexicocity", "t-japan-horse", "b-katzenkindergarten", "t-japan-train", "t-japan-arcade", "t-japan-cows", "ta-Screenshot from 2025-09-02 07-26-22", "t-japan-flowers", "t-japan-shop", "t-japan-izakaya", "elevator", "ta-Screenshot from 2025-09-02 07-24-26", "bpi", "botanicals", "ta-Screenshot from 2025-09-02 07-24-50", "t-japan-signs", "t-japan-alley", "stairway", "t-lisbon-wires", "storm-coming", "t-japan-statue", "depths", "cartunnell", "ab-Screenshot from 2025-09-02 07-22-23", "mystical-door-tepoz", "singlepoint", "t-bbord", "steep-climb", "t-Screenshot from 2025-09-02 07-26-03", "t-blau-amstie", "t-bw-storm", "ta-Screenshot from 2025-09-02 07-24-01"]

# the caterpillar mural plays as a video tile inside the wall once `file` (or `youtube`) is set; `poster` is the image it replaces
gallery_video:
  poster: /gallery/caterpillar.png
  file:
  youtube:

comics:
  - title: "Endo­mortis"   # has a soft hyphen: wraps as Endo-mortis on narrow screens
    credit: with Petra Flurin
    cover: /images/endomortis-cover.jpg
    tagline: "Crayolapunk surrealist comic about grief."
    description: "Sunbean navigates their apartment changing around them guided by their cat, Mr. Rotisserie F*****t, and a recently deceased friend."

# writing: kind = the stamp. An item with an image is a wide tile (the play, whose buttons come from the post's card_links);
# the others are cards showing their opening lines.
writing:
  - slug: impaction
    kind: Play
    title: Impaction
    image: /images/nothingtoseehere.jpeg
    blurb: "My first play, performed in LA as part of *Nothing to See Here*, directed by Jacques Manjarrez."
  - kind: Poem
    slug: hidden-structure
    mid: true   # the card starts mid-stanza
    lines:
      - "creation lives to create"
      - "chipping from the ob’lisk slate"
      - "talk amoungst our little selves"
      - "speculating filling shelves"
  - kind: Poem
    slug: staring
    title: Staring
    lines:
      - And I sit here, undeserving,
      - in a small flat
      - staring out the window, dear.
      - Thinking of patterns, and sometimes of regrets.

# music: albums are player tiles (a local `file` or a `soundcloud` url per track); lyrics are cards; adult sits behind the 18+ switch
music:
  albums:
    - tracks:
      - { title: "ｂｌｏｏｍｐｓ", soundcloud: "https://soundcloud.com/semistable/bloomps", duration: "3:07" }
      - { title: "Čech Covers", file: "/images/Cech cover.m4a" }
      - { title: "Beilinson–Drin(fel'd)", file: /images/wp-content/uploads/2018/06/Lecture-8-BeilinsonDrin.m4a }
      - { title: "ｌｏｏｐ░ｐｅｄａｌ░００", soundcloud: "https://soundcloud.com/semistable/loop-pedal-00", duration: "3:20" }
  lyrics:
    - slug: cech-covers
      title: "Čech Covers"
      lines:
        - I'll cut you into manageable pieces
        - I hope you're not too hard to glue back together
        - There's so many ways to form an affine cover
    - slug: ska-college
      title: "College, Would You Like Fries With That?"
      note: "Third-wave ska for trombone."
      lines:
        - You'll struggle through your classes,
        - and they'll let you out of school
  adult:
    tracks:
      - { title: "ｆｕｃｋｗｈｅａｔ (celiacdisstrack)", soundcloud: "https://soundcloud.com/semistable/fuckwheat", duration: "1:26", explicit: true }
    lyrics: []
---
