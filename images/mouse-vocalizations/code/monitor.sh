#!/bin/sh
# Catherine Ray
# Script to record 5 minute audio  [indexed by time] stored in /songs

# Establish current time
DAY=$(date +%d) # set variable $DAY for day
MO=$(date +%m)  # set variable $MO for month
YR=$(date +%y)  # set variable $YR for year (2 digits)
H=$(date +%H)   # set variable $H for hour (24 hour)
M=$(date +%M)   # set variable $M for minute
NOW=$(date)     # sets date / time variable $NOW

arecord -d300 -D plughw:1,0 sea.mousera.net:/usr/local/www/xbox/$YR$MO$DAY-$H$M.wav  # records audio for 300s=5min
