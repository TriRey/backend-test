pipeline {
    agent any
    stages {
        stage("Build - Instalacion de Dependencias"){
            steps{
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage("Build -  buil del proyecto"){
            steps{
                //echo "Saludos desde mi segunda etapa"
                sh 'npm run build'
            }
        }
    }
}