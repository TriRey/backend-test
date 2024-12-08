pipeline {
    agent any
    stages {
        stage('Build - Instalacion de Dependencias') {
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            stages {
                stage('Build -  Instalacion de Dependencias') {
                    steps {
                        sh 'npm install'
                    }
                }

                stage('Build -  buil del proyecto') {
                    steps {
                        //echo "Saludos desde mi segunda etapa"
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}
