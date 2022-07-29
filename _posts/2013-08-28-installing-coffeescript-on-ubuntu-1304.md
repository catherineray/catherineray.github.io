---
title: "Installing CoffeeScript on Ubuntu 13.04"
date: "2013-08-28"
categories: 
  - "linux"
---

Unfortunately, the current CoffeeScript docs do not support installation on the latest Ubuntu distro. To get around this, we must manually install the dependencies. Don't worry, I've done most of the work for you.

Create a plain text file, `vi installcoffee.sh` and insert the following:

```
sudo apt-get update
sudo apt-get install git-core curl build-essential openssl libssl-dev
git clone https://github.com/joyent/node.git && cd node
./configure
make 
sudo make install
cd
curl http://npmjs.org/install.sh | sudo sh
sudo npm install -g coffee-script
```

Save `Esc + : + w` and run the script `. installcoffee.sh`
