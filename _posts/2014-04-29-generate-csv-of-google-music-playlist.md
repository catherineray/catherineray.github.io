---
title: "Generate CSV of Google Music Playlist"
date: "2014-04-29"
categories: 
  - "code"
  - "explanation"
---

I recently switched my music vendor from Google Music to Spotify. To [avoid manually searching for each song](https://xkcd.com/974/), I semi-automized the transition as follows.

**1. Generate a CSV** (artist, title) from your Google Music Playlist. Zoom your window out all the way (querySelectorAll will only load a static list of currently active rows).

```
// Run in Chrome's Developer Tools Console: Crtl+Shift+I
var playlist = document.querySelectorAll('.song-table tr.song-row');
for(var i =0; i<playlist.length ; i++) { 
  var l = playlist[i]; 
  var title = l.querySelectorAll('td[data-col="title"] .content')[0].textContent;
  var artist = l.querySelectorAll('td[data-col="artist"] .content')[0].textContent;
  console.log(artist.replace(","," ") + ',' + title.replace(","," ")); //take out "," to clean up CSV
}
```

Scroll and rerun until you have all entries.

[![](/wp-content/uploads/2014/04/kk.png)](/wp-content/uploads/2014/04/kk.png)

**2. Open your CSV in vim** to remove the _VM290:8_ at the end of each entry. For example: _Clamavi De Profundis,Far Over the Misty Mountains Cold VM290:8_

```
:%s/.{8}//
```

Now you have a CSV file of arists, titles to do with what you wish. To proceed with migrating this playlist to Spotify specifically, continue to steps 3 & 4.

**3. Copy/paste into [Ivy](https://www.tunemymusic.com/).**

**4. Paste Ivy results** into desired playlist.
