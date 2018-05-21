---
title: Nagios Check Status (NCS)
date: 2018-05-10 23:22:00
ref: nagios-check-status
lang: en
show-avatar: true
bigimg: /img/custom/mincs.png
categories:
- nagios
tags:
- github
- bash
- ncs
---

# Nagios Check Status (NCS)

> ![Nagios Check Status (NCS)](/img/custom/nagios_check_status.png)

## What is it?
It is a set of scripts of [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) to obtain an exit report based on the server statuses and services monitored by [Nagios](http://www.nagios.org).

## How does it work?
It obtains the information from Nagios through the [MK Livestatus](http://mathias-kettner.com/check_mk.html) and process it to show the result in this way:

- **Screen saver:** changes the background color.
- **Alarm:** pronounces the status summary and/or plays an mp3 file.
- **Terminal:** shows a report by the demand.
- **Mail:** sends an email similar to the screen saver or terminal. 
- **Image:** generates an image, using a set of images as theme and a mark of time of color.


> Example of Images which update every 5 minutes:  
> Site #[01](https://npr3s.com/pelican/)   
> ![](https://npr3s.com/pelican/images/nagios/status_npro-vps-01.png)
> ![](https://npr3s.com/pelican/images/nagios/status_ndev-vps-01.png)  
> Site #[02](https://npr3s.net/pelican/)  
> ![](https://npr3s.net/pelican/images/nagios/status_npro-vps-01.png)
> ![](https://npr3s.net/pelican/images/nagios/status_ndev-vps-01.png)

> Example on how the screen saver displays: 
> ![NCS Protector de Pantalla Ejemplo](/img/custom/ncs.png)

## Official site of [Nagios Check Status (NCS)](http://ncs.npr3s.com)
