Integrantes equipo:
- Sandrino Escobar
- Nicolas Calvo
- Igor Ianiszewski
- Mauricio Moraga
- Antonio Edwards

# Task API Project

This project demonstrates a simple Node.js API for managing tasks, integrated with Docker for containerization and Jenkins for CI/CD pipeline.

## Features

- List all tasks  
- Get task by ID

## Running Locally

1. Install dependencies: `npm install`  
2. Start the server: `npm start`

## Running with Docker

1. Build the image: `docker build -t task-api .`  
2. Run the container: `docker run -p 3000:3000 task-api`

Resultado Test en jenkins:
![image](https://github.com/user-attachments/assets/c0f77979-2d3e-4f14-a48f-1251445274cd)
![image](https://github.com/user-attachments/assets/41c0cf3d-fbfc-44c2-ba02-e1ac97d1b746)

