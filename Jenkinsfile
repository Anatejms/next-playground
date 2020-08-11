pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Setup') {
            steps {
                sh 'node --version'
                sh 'apt update'
                sh 'apt install yarn'
                sh 'yarn install'
            }
        }
        stage('Testing') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Building') {
            steps {
                sh 'yarn build'
            }
        }
    }
}
