---
title: Super Tiny Colors Library
date: 2018-05-13 17:26:00
ref: super-tiny-colors
lang: en
show-avatar: true
bigimg: /img/custom/super-tiny-colors.png
categories:
- terminal
tags:
- github
- bash
- lib
- ansi
- colors
---

# Super Tiny Colors Library

## What is it?
It is an ultra-super small compact and minimalist **library** (*done in 7 code lines*) used for scripts of [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).

## How does it work?
This uses variables to set the colors, encapsulating in this way the direct use of the [ANSI color codes](https://misc.flogisoft.com/bash/tip_colors_and_formatting), accomplishing quickness, consolidation and independence.

## Examples:

### Use of ANSI color codes:
> ![](/img/custom/tip_colors_and_formatting.png)

### Use of the super-tiny-colors:
> ![](/img/custom/uso_de_super-tiny-colors.png)

## How do I obtain it?

- ### •	Through [github](https://github.com/nelbren/npres.git) (recommended):
  - cd /usr/local/
  - git clone https://github.com/nelbren/npres.git

  > *NOTA: repository of utilities of support of management of [Debian GNU/Linux](https://debian.org).*

- ### Through wget:
  - wget https://raw.githubusercontent.com/nelbren/npres/master/lib/super-tiny-colors.bash

## How are the colors defined?

- ### Identification of colors:

  **Letter** | **Color**
  --- | ---
  w | white
  m | magenta
  b | blue
  r | red
  g | green
  y | yellow
  a | gray

- ### •	Format used by the library:

  Description | Background color | Front color | Example
  --- | --- | --- | --- 
  Normal | black | letter | ![](/img/custom/nr.png)
  Normal **bright** | black | **LETTER** | ![](/img/custom/nG.png)
  Inverse | letter | black | ![](/img/custom/ib.png)
  Inverse ***bright color** | letter | black | ![](/img/custom/Iy.png)
  Inverse **bright white** | **LETTER** | **white** | ![](/img/custom/iA.png)

## examples1:
> ![](/img/custom/examples1.png) 
