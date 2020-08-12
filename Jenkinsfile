pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            label 'linux'
        }
    }
    stages {
        stage('Setup') {
            steps {
                sh 'node --version'
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
