pipeline {
    agent any
    environment {
        USERNAME = 'Trirey'
    }
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

                stage('Build -  Ejecucion de pruebas') {
                    steps {
                        //solo test por que esta abreviado dentro de package.json
                        sh 'npm run test'
                    }
                }

                stage('Build -  build del proyecto') {
                    steps {
                        //echo "Saludos desde mi segunda etapa"
                        sh 'npm run build'
                    }
                }
            }
        }

        //  NUEVO STAGE
        stage('delivery - subida a nexus') {
            steps {
                echo 'echo bueno'
                sh 'docker build -t backend-test .'
                sh 'docker tag backend-test:latest localhost:8082/backend-test:latest'
                sh 'docker push localhost:8082/backend-test:latest'
                /*script {
                    docker.withRegistry('registry', 'http://localhost:8082') {
                                sh 'docker build -t backend-test .'
                                sh 'docker tag backend-test:latest localhost:8082/backend-test:latest'
                                sh 'docker push localhost:8082/backend-test:latest'
                    }
                }*/
            }
        }
    //
    }
}
