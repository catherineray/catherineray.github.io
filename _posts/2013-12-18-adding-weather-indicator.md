---
title: "Adding Weather Indicator"
date: "2013-12-18"
categories: 
  - "linux"
---

Get Weather on the Unity top panel in Ubuntu! Worry not, this tutorial doesn’t assume any term aliases.

```
sudo add-apt-repository ppa:weather-indicator-team/ppa
```

```
sudo apt-get update
```

```
sudo apt-get install indicator-weather
```

If you’d like the indicator to launch upon startup, hit the super key and search for `Startup Applications`. Click on the icon, click Add, pick an arbitrary name, and enter `indicator-weather` as the command.

_Sidenote:_ _I personally prefer to use Celsius. If you were raised with the Imperial system, then I suggest using the following poem to transition._

30’s hot, 20’s nice, 10’s cold, 0’s ice.

Happy hacking!
