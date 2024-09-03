# NNotes__Docker - Instrucciones

Este documento proporciona los pasos necesarios para descargar y ejecutar una imagen de Docker desde Docker Hub.

## Prerrequisitos

Antes de comenzar, asegúrate de tener Docker instalado en tu máquina. Puedes descargarlo e instalarlo desde [Docker](https://www.docker.com/get-started).

-------

## Front Image [Link](https://hub.docker.com/r/delta27222/nnotes_frontend)

#### 1) Descargar la Imagen

Para descargar la imagen desde Docker Hub, usa el siguiente comando. Reemplaza `<image_version>` con la versión específica de la imagen que deseas descargar.

```bash
    docker pull delta27222/nnotes_frontend:<image_version>
```

#### 2) Ejecutar el contenedor

Ejecutar el Contenedor
Una vez que hayas descargado la imagen, puedes ejecutar un contenedor usando el siguiente comando. Nuevamente, asegúrate de reemplazar <image_version> con la versión correcta de la imagen.

```bash
    docker container run -dp 3000:3000 delta27222/nnotes_frontend:<image_version>
```

#### 3) Acceder a la Aplicación

Después de ejecutar el contenedor, abre tu navegador web y dirígete a la siguiente URL para acceder a la aplicación:

```bash
    http://localhost:3000
```
-------

## Back Image [Link](https://hub.docker.com/r/delta27222/nnotes_backend)

### 1) Descargar la Imagen

Para descargar la imagen desde Docker Hub, usa el siguiente comando. Reemplaza `<image_version>` con la versión específica de la imagen que deseas descargar.

```bash
    docker pull delta27222/nnotes_backend:<image_version>
```

### 2) Ejecutar el Contenedor

```bash
    docker container run -dp <port>:<port> delta27222/nnotes_backend:<image_version>
```

## Github Actions

### Workflow

![NNotes_GActions_Workflow](https://github.com/user-attachments/assets/6e901357-7b8b-46f4-ac95-a1b82ea0479a)
