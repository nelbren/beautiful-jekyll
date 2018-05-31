---
title: Barra de Info. del Sistema
date: 2018-05-23 21:00:00
ref: minimalist-system-information-bar
lang: es
show-avatar: true
bigimg: /img/custom/sib_system-information-bar_big.png
categories:
- terminal
tags:
- github
- bash
- colors
- system
---

# Barra de Información del Sistema

## <i class="fa fa-question-circle" aria-hidden="true"></i> ¿Qué es esto?

### <i class="fa fa-quote-left" aria-hidden="true"></i> Scientia potentia est <i class="fa fa-quote-right" aria-hidden="true"></i>
***El conocimiento es poder.*** El saber de antemano o previo a que el sistema colapse o se quede sin recursos, se convierte en una prioridad, debido a esto, y para completar el panorama de programas que nos muestran los recursos y rendimiento de nuestros sistemas, nos llega **SI** con una super potente fabulosa y extremadamente consisa barra de informacion de los recursos actuales.

## <i class="fa fa-globe" aria-hidden="true"></i> Herramientas con más detalle:

- ### <i class="fa fa-terminal" aria-hidden="true"></i> Terminal:

  - #### <i class="fa fa-star" aria-hidden="true"></i> [sysstat - Performance monitoring tools for Linux](http://sebastien.godard.pagesperso-orange.fr/)

  - #### <i class="fa fa-star" aria-hidden="true"></i> [top - Dynamic real-time view of running processes](https://gitlab.com/procps-ng/procps)

  - #### <i class="fa fa-star" aria-hidden="true"></i> [htop - Interactive process viewer for Unix](https://hisham.hm/htop/)

  - #### <i class="fa fa-star" aria-hidden="true"></i> [conky-cli - Light-weight system monitor for terminal](https://github.com/brndnmtthws/conky)

  - #### <i class="fa fa-star" aria-hidden="true"></i> [glances - An Eye on your system. A top/htop alternative](https://nicolargo.github.io/glances/)

  - #### <i class="fa fa-star" aria-hidden="true"></i> [The Stress Terminal UI: s-tui](https://amanusk.github.io/s-tui/)

    - ##### <i class="fa fa-line-chart" aria-hidden="true"></i> pip install s-tui; apt install stress; s-tui
    ![](/img/custom/stress_s-tui.png)
    - ##### <i class="fa fa-tachometer" aria-hidden="true"></i> while true; do si; done 
    ![](/img/custom/stress_si.png)

- ### <i class="fa fa-desktop" aria-hidden="true"></i> Web:

  - #### <i class="fa fa-star" aria-hidden="true"></i> [conky - Light-weight system monitor for X](https://github.com/brndnmtthws/conky)

  - #### <i class="fa fa-star" aria-hidden="true"></i> [munin - Networked resource monitoring tool](http://munin-monitoring.org/)

  - #### <i class="fa fa-star" aria-hidden="true"></i> [scout_realtime - Top for the modern developer](https://scoutapp.github.io/scout_realtime/)

  - #### <i class="fa fa-star" aria-hidden="true"></i> [eZ Server Monitor - Monitoring Linux servers](https://www.ezservermonitor.com/)

## <i class="fa fa-wrench" aria-hidden="true"></i> ¿Cómo funciona?
Es una secuencia de comandos de bash que extrae la información utilizando las herramientas del sistema o de los archivos de proceso, segun los umbrales asigna el color, y muestra todo en una sola linea en menos de 80 caracteres.

## <i class="fa fa-eye" aria-hidden="true"></i> Información mostrada:

  ![](/img/custom/sib_system-information-bar.png)

## <i class="fa fa-arrow-circle-down" aria-hidden="true"></i> ¿Cómo lo obtengo?

- ### <i class="fa fa-github-square" aria-hidden="true"></i> Por medio de [github](https://github.com/nelbren/npres.git):
  ```bash
  cd /usr/local/
  git clone https://github.com/nelbren/npres.git
  ```

## <i class="fa fa-info-circle" aria-hidden="true"></i> ¿Cómo lo uso?

- ### <i class="fa fa-sign-in" aria-hidden="true"></i> Al iniciar sesión, adicionar al archivo **/etc/profile**:
  ```bash
  . /usr/local/npres/bin/alias/set.bash
  ```

- ### <i class="fa fa-keyboard-o" aria-hidden="true"></i> Por demanda:
  ```bash
  si
  ```

## <i class="fa fa-eye" aria-hidden="true"></i> Ejemplos:

- ### <i class="fa fa-sign-in" aria-hidden="true"></i> Al iniciar sesión:
  Ejemplo de ejecución de comando:
  ![](/img/custom/sib_example_etc_profile.png)

- ### <i class="fa fa-keyboard-o" aria-hidden="true"></i> Por demanda:
  Ejemplo de ejecución de comando:
  ![](/img/custom/sib_example_por_demanda.png)

<hr class="small">

## <i class="fa fa-thumbs-up" aria-hidden="true"></i> Gracias a:

  - #### <i class="fa fa-male" aria-hidden="true"></i> Paul Colby <i class="fa fa-smile-o" aria-hidden="true"></i> por el código del [Cálculo del uso de CPU desde /proc/stat](http://colby.id.au/calculating-cpu-usage-from-proc-stat/)
  - #### <i class="fa fa-male" aria-hidden="true"></i> Nelbren <i class="fa fa-smile-o" aria-hidden="true"></i> por el código del [si](https://github.com/nelbren/npres/blob/master/bin/system/si.bash)  
