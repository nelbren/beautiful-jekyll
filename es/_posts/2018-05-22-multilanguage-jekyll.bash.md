---
title: Librería de Colores Súper Pequeña
date: 2018-05-13 17:26:00
ref: super-tiny-colors
lang: es
show-avatar: true
bigimg: /img/custom/super-tiny-colors.png
categories:
- terminal
- consola
tags:
- github
- bash
- lib
- ansi
- colors
---

# Librería de Colores Súper Pequeña

- [Multilingual blog with Jekyll 1.5](http://www.nicoespeon.com/en/2014/04/multilingual-blog-with-jekyll-1-5/)

- [Build a multilingual website with jekyll](http://chocanto.me/2016/04/16/jekyll-multilingual.html)

- [How to make Jekyll multilingual](http://migueldavid.eu/en/2017/04/04/how-to-make-jekyll-multilingual/)

- [Making Jekyll multilingual](https://www.sylvaindurand.org/making-jekyll-multilingual/)

## ¿Qué es? 
Es una ultra súper recontra compacta pequeñita y minimalista **librería** (*alojoda en 7 líneas de código*) para usarla en secuencias de comandos de [Bash](https://es.wikipedia.org/wiki/Bash).

## ¿Cómo funciona?
Utiliza variables para fijar los colores, encapsulando de esta manera el uso directo de los [códigos de color ANSI](https://misc.flogisoft.com/bash/tip_colors_and_formatting), logrando con ello rapidez, consolidación e independencia.

## Ejemplos:

### Uso de códigos de color ANSI:
> ![](/img/custom/tip_colors_and_formatting.png)

### Uso de super-tiny-colors:
> ![](/img/custom/uso_de_super-tiny-colors.png)

## ¿Cómo la obtengo?

- ### Por medio de [github](https://github.com/nelbren/npres.git) (recomendado):
  - cd /usr/local/
  - git clone https://github.com/nelbren/npres.git

  > *NOTA: repositorio de utilidades de soporte de gestión de [Debian GNU/Linux](https://debian.org).*

- ### Por medio de wget:
  - wget https://raw.githubusercontent.com/nelbren/npres/master/lib/super-tiny-colors.bash

## ¿Cómo están definidos los colores?

- ### Identificación de colores:

  **Letra** | **Color**
  --- | ---
  w | white
  m | magenta
  b | blue
  r | red
  g | green
  y | yellow
  a | gray

- ### Formato usado por la librería:

  Descripción | Color de fondo | Color de frente | Ejemplo
  --- | --- | --- | --- 
  Normal | black | letra | ![](/img/custom/nr.png)
  Normal **brillante** | black | **LETRA** | ![](/img/custom/nG.png)
  Inverso | letra | black | ![](/img/custom/ib.png)
  Inverso **color brillante** | letra | black | ![](/img/custom/Iy.png)
  Inverso **blanco brillante** | **LETRA** | **white** | ![](/img/custom/iA.png)

## examples1:
> ![](/img/custom/examples1.png) 
