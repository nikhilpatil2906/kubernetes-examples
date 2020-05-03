# Paytm Kubernetes assignment

## localhost Requirements

- Must have docker and kubernetes installed in your system
- Must have some important packages to run kubernetes application on local eg. metrics-server. You can check it by running  "kubectl -n kube-system top pod"

### Enviroment which I am using to build and run the application:

- Mac and Os version(MacOs catalina).
- AWS ECR to push dockerimage and pull it back from ECR.
- Uses docker-desktop(daemon) to build, run, test and push image.

### For docker

To build a Docker image

 > docker build -t nodejs-test .

To Tag and Push a Docker image to AWS ECR

  >
    docker tag nodejs-test:latest <<AWS_ACCOUNT_ID>>.dkr.ecr.us-east-1.amazonaws.com/nodejs-test:latest
  >
    docker push <<AWS_ACCOUNT_ID>>.dkr.ecr.us-east-1.amazonaws.com/nodejs-test:latest


### Kubernetes

*  We need to create a token using following command(Before running please make sure You have AWSCLI access):

  > TOKEN='aws ecr get-login-password --region <<AWS_REGION>>'

Please replace the name with a actual value

  *  SECRET_NAME - Name_OF_Secrete (eg. my-secrets)
  *  AWS_ACCOUNT_ID - Your_AWS_Account_ID (eg. 12344XXXXXXX)
  *  AWS_REGION - Your_AWS_Region_name (eg. ap-southeast-1)
  *  EMAIL - Your_EMAIL_ID (Optional) (eg. abc@gmail.com)

To add a secrets, If you want to pull a image from AWS ECR

  > kubectl create secret docker-registry $SECRET_NAME --docker-server=https://<<AWS_ACCOUNT_ID>>.dkr.ecr.us-east-1.amazonaws.com --docker-username=AWS --docker-password="${TOKEN}" --docker-email="${EMAIL}"

Kubernetes deployment

  >
    kubectl create -f kubernetes/high-priority.yml
    kubectl create -f kubernetes/deployments.yml
    kubectl create -f kubernetes/service.yml
    kubectl create -f kubernetes/autoscaler.yml

## To test the Created enviroment

To get list of all pods, deployments, services and autoscaller.

  >
      kubectl get secrets,pods,deployments,svc,hpa  -owide

To check application is running or not  

  * Make a curl call using terminal or go to the browser and check the result.
    - curl localhost:3000
    - Go to browser and search localhost:3000

## Output

![Image of all running services](/images/list_of_all.png)


![Image of all running Application](/images/nodejs.png)
