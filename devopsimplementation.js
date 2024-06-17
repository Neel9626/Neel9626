class DevOpsImplementation {
    constructor() {
        this.ciCdPipeline = "";
        this.containerization = {};
        this.infrastructureProvisioning = "";
        this.configurationManagement = "";
        this.securityMeasures = "";
        this.bestPractices = "";
        this.documentation = "";
    }

    setCiCdPipeline(pipeline) {
        this.ciCdPipeline = pipeline;
    }

    setContainerization(dockerfile, kubernetesConfig) {
        this.containerization.dockerfile = dockerfile;
        this.containerization.kubernetesConfig = kubernetesConfig;
    }

    setInfrastructureProvisioning(terraformConfig) {
        this.infrastructureProvisioning = terraformConfig;
    }

    setConfigurationManagement(ansiblePlaybook) {
        this.configurationManagement = ansiblePlaybook;
    }

    setSecurityMeasures(securityConfig) {
        this.securityMeasures = securityConfig;
    }

    setBestPractices(practices) {
        this.bestPractices = practices;
    }

    setDocumentation(docs) {
        this.documentation = docs;
    }

    printImplementationDetails() {
        console.log("CI/CD Pipeline:", this.ciCdPipeline);
        console.log("Containerization:", this.containerization);
        console.log("Infrastructure Provisioning:", this.infrastructureProvisioning);
        console.log("Configuration Management:", this.configurationManagement);
        console.log("Security Measures:", this.securityMeasures);
        console.log("Best Practices:", this.bestPractices);
        console.log("Documentation:", this.documentation);
    }
}

// Instantiate DevOpsImplementation class
const devOpsImpl = new DevOpsImplementation();

// Set CI/CD Pipeline
const ciCdPipeline = `
    pipeline {
       agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://your-repo-url.git'
            }
        }
        stage('Static Code Analysis') {
            steps {
                sh 'sonar-scanner'
            }
        }
        stage('Build') {
            steps {
                sh './build.sh'
            }
        }
        stage('Test') {
            steps {
                sh './test.sh'
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh'
            }
        }
    }

    post {
        always {
            junit 'reports/**/*.xml'
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
`;
devOpsImpl.setCiCdPipeline(ciCdPipeline);

// Set Containerization
const dockerfile = `
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
`;
const kubernetesConfig = `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: retail-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: retail-app
  template:
    metadata:
      labels:
        app: retail-app
    spec:
      containers:
      - name: retail-app
        image: your-docker-repo/retail-app:latest
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: retail-app-service
spec:
  selector:
    app: retail-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: LoadBalancer
`;
devOpsImpl.setContainerization(dockerfile, kubernetesConfig);

// Set Infrastructure Provisioning
const terraformConfig = `
  provider "aws" 
  {
    region = "us-west-2"
  }`

 ami = " ami-0c55b159cbf "
