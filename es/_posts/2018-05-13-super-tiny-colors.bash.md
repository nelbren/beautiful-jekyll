---
title: Librería de Colores Súper Pequeña
date: 2018-05-13 17:26:00
ref: super-tiny-colors
lang: es
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

# Librería de Colores Súper Pequeña

## <i class="fa fa-question-circle" aria-hidden="true"></i> ¿Qué es? 
Es una ultra súper recontra compacta pequeñita y minimalista **librería** (*alojoda en 7 líneas de código*) para usarla en secuencias de comandos de [Bash](https://es.wikipedia.org/wiki/Bash).

## <i class="fa fa-wrench" aria-hidden="true"></i> ¿Cómo funciona?
Utiliza variables para fijar los colores, encapsulando de esta manera el uso directo de los [códigos de color ANSI](https://misc.flogisoft.com/bash/tip_colors_and_formatting), logrando con ello rapidez, consolidación e independencia.

## <i class="fa fa-eye" aria-hidden="true"></i> Envoltorio de códigos de color ANSI:

- ### <i class="fa fa-thumbs-down" aria-hidden="true" style="color: red;"></i> Uso de códigos de color ANSI:

  > ```bash
echo -e "\e[40;38;5;82m Hello \e[30;48;5;82m World \e[0m"
```
  > Ejemplo de ejecución de comando:
  > ![](/img/custom/tip_colors_and_formatting.png)

- ### <i class="fa fa-thumbs-up" aria-hidden="true" style="color: green;"></i> Uso de super-tiny-colors:

  > ```bash
git clone git@github.com:nelbren/npres.git
source /usr/local/npres/lib/super-tiny-colors.bash
echo -e "${nG} Hello ${Iy} World $S"
echo -e "${nG} Hello ${Ig} World $S"
echo -e "${nG} Hello ${Ir} World $S"
echo -e "${nG} Hello ${Iw} World $S"
```
  > Ejemplo de ejecución de comando:
  > ![](/img/custom/uso_de_super-tiny-colors.png)

## <i class="fa fa-arrow-circle-down" aria-hidden="true"></i> ¿Cómo la obtengo?

- ### <i class="fa fa-github-square" aria-hidden="true"></i> Por medio de [github](https://github.com/nelbren/npres.git) (recomendado):
  ```bash
  cd /usr/local/
  git clone https://github.com/nelbren/npres.git
  ```
  > <i class="fa fa-quote-left" aria-hidden="true"></i> *Repositorio de utilidades de soporte de gestión de [Debian GNU/Linux](https://debian.org).* <i class="fa fa-quote-right" aria-hidden="true"></i>

- ### <i class="fa fa-download" aria-hidden="true"></i> Por medio de wget:
  ```bash
  wget https://raw.githubusercontent.com/nelbren/npres/master/lib/super-tiny-colors.bash
  ```
  
## <i class="fa fa-info-circle" aria-hidden="true"></i> ¿Cómo están definidos los colores?

- ### <i class="fa fa-table" aria-hidden="true"></i> Identificación de colores:

  **Letra** | **Color**
  --- | ---
  w | white
  m | magenta
  b | blue
  r | red
  g | green
  y | yellow
  a | gray

- ### <i class="fa fa-table" aria-hidden="true"></i> Formato usado por la librería:

  Descripción | Color de fondo | Color de frente | Ejemplo
  --- | --- | --- | --- 
  Normal | black | letra | ![](/img/custom/nr.png)
  Normal **brillante** | black | **LETRA** | ![](/img/custom/nG.png)
  Inverso | letra | black | ![](/img/custom/ib.png)
  Inverso **color brillante** | letra | black | ![](/img/custom/Iy.png)
  Inverso **blanco brillante** | **LETRA** | **white** | ![](/img/custom/iA.png)

## <i class="fa fa-eye" aria-hidden="true"></i> Ejemplos:

- ### <i class="fa fa-eye" aria-hidden="true"></i> examples1:
  > ```bash
examples1
  ```
  > Ejemplo de ejecución de comando:
  > ![](/img/custom/examples1.png) 

- ### <i class="fa fa-eye" aria-hidden="true"></i> examples2:
  > ```bash
examples2
  ```
  > Ejemplo de ejecución de comando:
  > ![](/img/custom/examples2.png) 
