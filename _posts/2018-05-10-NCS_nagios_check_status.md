---
title: Nagios Check Status (NCS)
date: 2018-05-10 23:22:00
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


## ¿Que es? 
Nagios Check Status significa **Estado de comprobación de Nagios**

Es un conjunto de secuencias de comandos de [Bash](https://es.wikipedia.org/wiki/Bash) para obtener un reporte de salida basado en los estados de los servidores y servicios monitoreados por [Nagios](http://www.nagios.org)

## ¿Cómo funciona?
Obtiene la información de Nagios a través de [MK Livestatus](http://mathias-kettner.com/check_mk.html) y la procesa para mostrar el resultado así:

- **Protector de pantalla:** cambia el color de fondo.
- **Alarma:** pronuncia el resumen de estado y/o reproduce un archivo mp3.
- **Terminal:** muestra un reporte por demanda.
- **Correo:** envia un correo electrónico similar al protector de pantalla o terminal.
- **Imagen:** genera una imagen, usando un conjunto de imagenes como tema y marca de tiempo de color.


> Ejemplo de Imagenes que son actualizan cada 5 minutos:  
> Sitio #[01](https://npr3s.com/pelican/)   
> ![](https://npr3s.com/pelican/images/nagios/status_npro-vps-01.png)
> ![](https://npr3s.com/pelican/images/nagios/status_ndev-vps-01.png)  
> Sitio #[02](https://npr3s.net/pelican/)  
> ![](https://npr3s.net/pelican/images/nagios/status_npro-vps-01.png)
> ![](https://npr3s.net/pelican/images/nagios/status_ndev-vps-01.png)

> Ejemplo de como se muestra el Protector de pantalla: 
> ![NCS Protector de Pantalla Ejemplo](/img/custom/ncs.png)

## Sitio oficial de [Nagios Check Status (NCS)](http://ncs.npr3s.com)
