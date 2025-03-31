# Integrantes equipo:
- Sandrino Escobar
- Nicolas Calvo
- Igor Ianiszewski
- Mauricio Moraga
- Antonio Edwards

# Proyecto

Este proyecto muestra una API básica de Node.js para gestionar tareas, integrada con Docker para la contenerización y Jenkins para el pipeline de CI/CD.

## Capacidades de la API

- Listar todas las tareas
- Obtener una tarea por ID

## Correr de manera local

1. Instalar dependencias: `npm install`  
2. Correr el servidor: `npm start`

## Correr con Docker

1. Construir la imagen: `docker build -t task-api .`  
2. Correr el contenedor: `docker run -p 3000:3000 task-api`

Resultado Test en jenkins:
![image](https://github.com/user-attachments/assets/c0f77979-2d3e-4f14-a48f-1251445274cd)
![image](https://github.com/user-attachments/assets/41c0cf3d-fbfc-44c2-ba02-e1ac97d1b746)

