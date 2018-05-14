---
title: Libreria de Colores  Súper Pequeña
date: 2018-05-13 17:26:00
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

# Libreria de Colores Súper Pequeña

## ¿Que es? 
Es una ultra super recontra compacta pequeñita y minimalista **libreria** (*alojoda en 7 lineas de código*) para usarla en secuencias de comandos de [Bash](https://es.wikipedia.org/wiki/Bash).

## ¿Cómo funciona?
Utiliza variables para fijar los colores, encapsulando de esta manera el uso directo de los [códigos de color ansi](https://misc.flogisoft.com/bash/tip_colors_and_formatting), logrando con ello rapidez, consolidación e independecia.

## Ejemplos:

### Uso de códigos de color ansi:
> ![](/img/custom/tip_colors_and_formatting.png)

### Uso de super-tiny-colors:
> ![](/img/custom/uso_de_super-tiny-colors.png)

## ¿Como la obtengo?

- ### Por medio de [github](https://github.com/nelbren/npres.git) (recomendada):
  - cd /usr/local/
  - git clone https://github.com/nelbren/npres.git

  > *NOTA: repositorio de utilidades de soporte de gestión de [Debian GNU/Linux](https://debian.org).*

- ### Por medio de wget:
  - wget https://raw.githubusercontent.com/nelbren/npres/master/lib/super-tiny-colors.bash

## ¿Como defino los colores?

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

- ### Formato usado por libreria:

  Descripción | Color de fondo | Color de frente | Ejemplo
  --- | --- | --- | --- 
  Normal | black | letra | ![](/img/custom/nr.png)
  Normal **brillante** | black | **LETRA** | ![](/img/custom/nG.png)
  Inverso | letra | black | ![](/img/custom/ib.png)
  Inverso **color brillante** | letra | black | ![](/img/custom/Iy.png)
  Inverso **blanco brillante** | **LETRA** | **white** | ![](/img/custom/iA.png)

## examples1:
> ![](/img/custom/examples1.png) 
