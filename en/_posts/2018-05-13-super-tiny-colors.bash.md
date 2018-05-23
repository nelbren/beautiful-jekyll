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

## <i class="fa fa-question-circle" aria-hidden="true"></i> What is it?
It is an ultra-super small compact and minimalist **library** (*done in 7 code lines*) used for scripts of [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).

## <i class="fa fa-wrench" aria-hidden="true"></i> How does it work?
This uses variables to set the colors, encapsulating in this way the direct use of the [ANSI color codes](https://misc.flogisoft.com/bash/tip_colors_and_formatting), accomplishing quickness, consolidation and independence.

## <i class="fa fa-eye" aria-hidden="true"></i> Wrapper of ANSI color codes:

- ### <i class="fa fa-thumbs-down" aria-hidden="true" style="color: red;"></i> Use of ANSI color codes:

  > ```bash
echo -e "\e[40;38;5;82m Hello \e[30;48;5;82m World \e[0m"
  ```
  > Example of command execution:
  > ![](/img/custom/tip_colors_and_formatting.png)

- ### <i class="fa fa-thumbs-up" aria-hidden="true" style="color: green;"></i> Use of the super-tiny-colors:

  > ```bash
git clone git@github.com:nelbren/npres.git
source /usr/local/npres/lib/super-tiny-colors.bash
echo -e "${nG} Hello ${Iy} World $S"
echo -e "${nG} Hello ${Ig} World $S"
echo -e "${nG} Hello ${Ir} World $S"
echo -e "${nG} Hello ${Iw} World $S"
  ```
  > Example of command execution:
  > ![](/img/custom/uso_de_super-tiny-colors.png)

## <i class="fa fa-arrow-circle-down" aria-hidden="true"></i> How do I obtain it?

- ### <i class="fa fa-github-square" aria-hidden="true"></i> Through [github](https://github.com/nelbren/npres.git) (recommended):
  ```bash
  cd /usr/local/
  git clone https://github.com/nelbren/npres.git
  ```

  > <i class="fa fa-quote-left" aria-hidden="true"></i> *Repository of utilities of support of management of [Debian GNU/Linux](https://debian.org). *<i class="fa fa-quote-right" aria-hidden="true"></i>

- ### <i class="fa fa-download" aria-hidden="true"></i> Through wget:
  ```bash
  wget https://raw.githubusercontent.com/nelbren/npres/master/lib/super-tiny-colors.bash
  ```

## <i class="fa fa-info-circle" aria-hidden="true"></i> How are the colors defined?

- ### <i class="fa fa-table" aria-hidden="true"></i> Identification of colors:

  **Letter** | **Color**
  --- | ---
  w | white
  m | magenta
  b | blue
  r | red
  g | green
  y | yellow
  a | gray

- ### <i class="fa fa-table" aria-hidden="true"></i> Format used by the library:

  Description | Background color | Front color | Example
  --- | --- | --- | --- 
  Normal | black | letter | ![](/img/custom/nr.png)
  Normal **bright** | black | **LETTER** | ![](/img/custom/nG.png)
  Inverse | letter | black | ![](/img/custom/ib.png)
  Inverse ***bright color** | letter | black | ![](/img/custom/Iy.png)
  Inverse **bright white** | **LETTER** | **white** | ![](/img/custom/iA.png)

## <i class="fa fa-eye" aria-hidden="true"></i> Examples:

- ### <i class="fa fa-laptop" aria-hidden="true"></i> examples1
  > ```bash
examples1
  ```
  > Example of command execution:
  > ![](/img/custom/examples1.png) 

- ### <i class="fa fa-laptop" aria-hidden="true"></i> examples2
  > ```bash
examples2
  ```
  > Example of command execution:
  > ![](/img/custom/examples2.png) 
