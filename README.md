Three-Tier GitOps Project: EKS, ArgoCD, and GitHub Actions
This project demonstrates a fully automated, production-ready Three-Tier Architecture deployed on Amazon EKS. It follows the GitOps philosophy, ensuring that the Git repository is the "single source of truth" for the infrastructure and application state.

🏗️ Architecture Overview
Frontend: HTML5/JavaScript (Nginx) - Served via Ingress.

Backend: Node.js API - Handles logic and DB connectivity.

Database: MongoDB - Persistent storage for the application.

CI/CD: GitHub Actions for Containerization (Docker) and AWS ECR storage.

GitOps: ArgoCD for automated synchronization between GitHub and K8s.

Networking: Nginx Ingress Controller for cost-effective, path-based routing.

🛠️ Tech Stack
Cloud: AWS (EKS, ECR, IAM, VPC)

Containerization: Docker

Orchestration: Kubernetes (kubectl, eksctl)

GitOps: ArgoCD

Automation: GitHub Actions

Web Server: Nginx

🚀 How to Run This Project
1. Prerequisites
AWS CLI, kubectl, and eksctl installed.

Docker installed locally for testing.

An AWS IAM user with appropriate permissions.

2. Infrastructure Setup
Create the EKS cluster using the provided configuration:

Bash

eksctl create cluster --name three-tier-cluster --region ap-south-1 --nodegroup-name standard-nodes --node-type t3.medium --nodes 2 --managed
3. CI/CD Pipeline
Configure AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in GitHub Secrets.

Push code to the main branch to trigger the GitHub Actions workflow.

Images will be automatically built and pushed to AWS ECR.

4. GitOps Deployment
Install ArgoCD on the cluster.

Connect ArgoCD to this repository.

Apply the manifests in the k8s-manifests/ directory.

ArgoCD will automatically pull the images and deploy the pods.

💰 Cost Optimization
To keep AWS costs minimal, this project uses:

Managed Node Groups with t3.medium instances.

Nginx Ingress Controller to route all traffic (Frontend and API) through a single AWS Load Balancer, avoiding the cost of multiple Elastic IPs.

🧹 Cleanup
To avoid ongoing AWS charges, delete the resources with:

Bash

eksctl delete cluster --name three-tier-cluster --region ap-south-1
👨‍💻 Key Skills Demonstrated
Automating CI/CD pipelines with GitHub Actions.

Managing Kubernetes resources using declarative YAML manifests.

Implementing GitOps workflows with ArgoCD.

Configuring complex networking and path-based routing in K8s.

Infrastructure as Code (IaC) using eksctl.

You're all set! Once you add this to your GitHub, your project is complete and ready to show the world.

Is there anything else you need help with—maybe some interview tips for this project or ideas for a second project?
