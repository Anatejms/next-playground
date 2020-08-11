pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Setup') {
            steps {
                sh 'node --version'
                sh 'sudo npm install -g yarn'
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
