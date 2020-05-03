# Paytm Kubernetes assignment

## Requirements

- Must have docker and kubernetes installed in you system

### Enviroment which I am using to build and run the application:

- I am using Mac.
- AWS ECR to push dockerimage.
- Uses docker-desktop(daemon) to build, run and push image.

### For docker

To build a Docker image

> docker build -t nodejs-test .

To Tag and Push a Docker Image to AWS ECR

> docker tag nodejs-test:latest <<AWS_ACCOUNT_ID>>.dkr.ecr.us-east-1.amazonaws.com/nodejs-test:latest

> docker push <<AWS_ACCOUNT_ID>>.dkr.ecr.us-east-1.amazonaws.com/nodejs-test:latest
