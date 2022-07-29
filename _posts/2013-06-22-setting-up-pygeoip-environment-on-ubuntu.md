---
title: "Setting Up pygeoip Environment on Ubuntu"
date: "2013-06-22"
categories: 
  - "code"
  - "explanation"
  - "linux"
  - "python"
---

GeoIP uses a large database to find information about a given IP address or website. I went through a couple different package installations before it integrated with my programs successfully. The fairly simple process I settled upon to set up the functional package, [pygeoip](https://pypi.python.org/pypi/pygeoip/) (python API for GeoIP), is as follows:

```
sudo easy_install pygeoip
cd /usr
```

To find the path of GeoIP.dat, embrace the power of `  (not ', `  on US keyboards shares a key with ~).

```
find `pwd` -name 'GeoIP.dat'
```

After [downloading GeoLiteCity.dat](https://code.google.com/p/pysnip/downloads/detail?name=GeoLiteCity.dat&amp;can=2&amp;q=), a simple way rename the file to GeoIPCity.dat whilst moving said file to the same path as GeoIP.dat (for convenience)...

```
sudo mv Downloads/GeoLiteCity.dat /usr/share/GeoIP/GeoIPCity.dat
```

In order to check the success of your environment's set-up, run this as a py script or in a term window

```
import pygeoip
#gi = pygeoip.GeoIP('/usr/share/GeoIP/GeoIP.dat', pygeoip.MEMORY_CACHE)
gi = pygeoip.GeoIP('/usr/share/GeoIP/GeoIPCity.dat)
print gi.record_by_addr('64.233.161.99')
```
