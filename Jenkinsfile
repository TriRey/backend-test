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

        //  SONARQUBE
        stage('Quality Assurance') {
            agent {
                docker {
                    label 'contenedores'
                    image 'sonarsource/sonar-scanner-cli'
                    args '--network=devops-infra_default'
                    reuseNode true
                }
            }
            stages {
                stage('Quality Assurance - sonarqube') {
                    steps {
                        withSonarQubeEnv('sonarqube') {
                            sh 'sonar-scanner'
                        }
                    }
                }
            }
        }

        //  NUEVO STAGE NEXUS
        stage('delivery - subida a nexus') {
            steps {
                script {
                    docker.withRegistry('http://localhost:8082', 'IDRegistro') {
                                sh 'docker build -t backend-test .'
                                sh 'docker tag backend-test:latest localhost:8082/backend-test:latest'
                                sh 'docker push localhost:8082/backend-test:latest'
                    }
                }
            }
        }
    //
    }
}
