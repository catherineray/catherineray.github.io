---
title: "Linux Laptop Environment Setup"
date: "2014-03-21"
categories: 
  - "explanation"
  - "german"
  - "linux"
---

I'm regularly asked about the setup of my laptop: a System76 [Gazelle Professional](https://www.system76.com/laptops/model/gazp9) named Felix running Ubuntu 14.04. Writing a return to that query produced the following:

Chromium Addons:

```
Pocket #Formerly Read It Later
Lazarus
GmailTeX #Gmail + LaTeX = GmailTeX
AdBlock [for YouTube] #Saves time
Session Buddy
Diigo
HTTPS Everywhere
Disconnect
Incognito-Filter #Great for keeping facebook.com, accounts.google.com, etc. from hijacking web history
Hacker Vision #Save your eyes!
The Great Suspender #Suspends tabs not in use
What font? #satisfies curiosity
Wolfram Alpha
GHangouts
Chrome Downloads
Have I Downloaded This Before?
BetterTube #Optimize your YouTube experience
```

Get Flashplugin working on Chromium:

```
get adobe-flashplugin
#if that doesn't work, try:
sudo add-apt-repository "deb http://archive.canonical.com/ $(lsb_release -sc) partner"
sudo apt-get update && sudo apt-get install flashplugin-installer
```

Some of my favorite term aliases*:

```
alias up='sudo apt-get update && sudo apt-get upgrade'
alias meta='sudo vi ~/.bashrc'
alias rmeta='. ~/.bashrc'
alias sag='sudo apt-get'
alias cx='chmod +x'
alias purge='rm `find *~`'
alias ip='ifconfig | grep "inet addr:"| grep -v "127.0.0.1" | cut -d: -f2 | awk "{ print $1}"'
alias get='sudo apt-get install'
alias matlab='matlab -glnx86'
alias p='python'
alias pipi='sudo pip install'
alias sim='cd ~/V-REP_PRO_EDU_V3_0_4_64_Linux/ && ./vrep.sh'
```

Python-based Research:

```
get python-pip #pip for managing packages
get build-essential liblapack-dev gfortran gcc g++ 
#Either the ATLAS or OpenBLAS implementation of BLAS. OpenBLAS is speedier but finnicky wrt multiprocessing.
get libatlas-dev libatlas3-base 
#or
get libopenblas-dev
sudo easy_install -U distribute
pipi dev numpy scipy setuptools matplotlib
pipi nose #nicer testing
#Machine Learning
pipi -U scikit-learn
#Computer Vision
get gcc g++ cmake
#download latest opencv from #website
#untar it with
tar -xvf opencv-* #or
unzip opencv-*
#inside untarred folder make new folder call "r" (arbitrary name)
#run the following command in it
cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local -D BUILD_NEW_PYTHON_SUPPORT=ON -D BUILD_EXAMPLES=ON ..
make
make install
```

A few choice packages/programs:

```
get guake #drop down term window - crazy useful (Sublime users: check this out)
get vim
get screen
get tex4ht #convert LaTeX to html
get chromium-browser #Preferred browser
get gparted #for managing partitions
get wine #Run (some) Windows on Linux
get haskell-platform
get vlc #My favorite multimedia plugin
get ipython #Bro, do you even Python?
get texmaker #LaTeX editor of choice (gedit plugin is also nice)
get openjdk-6-jre openjdk-7-jre #Open source Java platform
get geary #Alternative to thunderbird
get gwenview #crop pictures
get p7zip #extract *.7z files
get unrar #extract rar
get bleachbit #free your disk space
#ffmpeg
get libav-tools
sudo add-apt-repository ppa:samrog131/ppa
sudo apt-get update
get ffmpeg
#dropbox
cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86" | tar xzf -
~/.dropbox-dist/dropboxd
#broke grub?
sudo add-apt-repository ppa:yannubuntu/boot-repair
up
get -y boot-repair
boot-repair #run boot-repair after installation
#Be safe, use a proxy or VPN (more info)
get squid squid-common
#Note: If you are running 13.04, sudo service squid3 (start|stop|restart)
#evernote on linux
sudo add-apt-repository ppa:nvbn-rm/ppa
sudo apt-get update && sudo apt-get install everpad
#numlock activates at startup
sudo apt-get -y install numlockx
sudo sed -i 's|^exit 0.*$|# Numlock enablen[ -x /usr/bin/numlockx ] && numlockx onnnexit 0|' /etc/rc.local
"""
For quick scripting, I use or IntelliJ IDEA or Sublime with vim command mode enabled. 
To enable control mode in Sublime Text 2: Find Preferences.sublime-settings 
Change the line "ignored_packages": ["Vintage"] to "ignored_packages": []. 
Restart Sublime: boom! Vim controls.
"""
#xscreensaver
sudo apt-get remove gnome-screensaver
sudo apt-get install xscreensaver xscreensaver-data-extra xscreensaver-gl-extra
#Oracle(Sun) Java (docs)
cd ~/
wget https://github.com/flexiondotorg/oab-java6/raw/0.3.0/oab-java.sh -O oab-java.sh
chmod +x oab-java.sh
sudo ./oab-java.sh
get sun-java6-jre
#VMWare Workstation
#compiz
get compiz compizconfig-settings-manager compiz-fusion-plugins-extra compiz-fusion-plugins-main compiz-plugins
#matlab from cd
cd /media/MATLAB{version}
gksu ./install
#blender
sudo add-apt-repository ppa:irie/blender
sudo apt-get update
get blender
get myunity #Awesome control panel for unity
#Deprecated: get unity-tweak-tool 
#My free robotics simulator of choice, the educational version is free for all and available for OSX, Windows, 32 and 64bit Linux
v-rep
```

*To edit your own `cd && vim ~/.bashrc` After editing, refresh your bashrc with `. ~/.bashrc`. Now your aliases can be used! Huzzah!

Using a US Keyboard Layout to type in German? Lesen [diesen Beitrag](/writing-in-german-keyboard-shortcuts/) für deutsche Tastaturkürzel.
