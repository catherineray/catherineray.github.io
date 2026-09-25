---
layout: work
title_shadow: "#ec3f9e"   # color of the title's offset copy
title: Portfolio
permalink: /portfolio/
rail: minimal
# Selected work. The layout (_layouts/work.html) is shared with the Art page (/art/), so any design change applies to both;
# this file only lists what the Portfolio shows. Entries point at posts by slug (the filename without the date).
intro: "Selected Work. Vessel for the Universe to Play with Itself."
other_link: { label: "See everything →", url: /art/ }
gallery_selected: true   # only the selected pieces, not the ones that came from blog posts
gallery_hide: [film, digital photo]   # In a box shows polaroids only here; the other photos are on /art/

# the caterpillar mural plays as a video tile inside the wall once `file` (or `youtube`) is set; `poster` is the image it replaces
gallery_video:
  poster: /gallery/caterpillar.png
  file:
  youtube:

comics:
  - title: Endomortis
    credit: with Petra Flurin
    cover:
    description: "Sunbean navigates their apartment changing around them guided by their cat, Mr. Rotisserie F*****t, and a recently deceased friend. Crayolapunk surrealist comic about grief."

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
    lines:
      - Beauty wilts and love will flucture
      - what remains is hidden structure
      - blushing primes sly chiding knots
      - intertwine betwixt our thoughts
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
