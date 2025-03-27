pipeline {
  agent any
  stages {
    stage('Clonar Repo') {
      steps {
        git url: 'https://github.com/mmogaP/desafiolatam-CodeCraft.git', branch: 'main'
      }
    }
    stage('Instalar Dependencias') {
      steps {
        sh 'npm install' // Cambia de 'npm ci' a 'npm install'
      }
    }
    stage('Pruebas') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Construir Docker') {
      steps {
        sh 'docker build -t task-api .'
      }
    }
  }
}