Project 2: Kubernetes Observability \& Alerting Stack



Project Objective

The goal of this project was to move from "Blind Deployment" to "Full Observability." I implemented a production-grade monitoring solution using the \*\*Kube-Prometheus-Stack\*\* on AWS EKS to track cluster health, application performance, and automate incident response.







Technology Stack

\* \*\*Monitoring:\*\* Prometheus (Time-series data collection)

\* \*\*Visualization:\*\* Grafana (Custom Dashboards)

\* \*\*Alerting:\*\* Alertmanager (Incident Notification)

\* \*\*Package Management:\*\* Helm (Chart-based deployments)

\* \*\*Infrastructure:\*\* AWS EKS (Managed Kubernetes)



Key Features Implemented



1\. Zero-Touch Service Discovery

Used Prometheus ServiceMonitors to automatically discover and scrape metrics from the Three-Tier application deployed in Project 1.



2\. Custom Reliability Dashboards

Configured Grafana dashboards to monitor "The Four Golden Signals":

\* \*\*Latency:\*\* Time it takes to service a request.

\* \*\*Traffic:\*\* Demand placed on the system.

\* \*\*Errors:\*\* Rate of requests that fail.

\* \*\*Saturation:\*\* How "full" your service is (CPU/Memory).



3\. Automated Alerting Pipeline

Configured \*\*Alertmanager\*\* to handle critical cluster events. 

\* \*\*Validated:\*\* Simulated a "Service Down" event by scaling the backend to 0.

\* \*\*Result:\*\* Successfully triggered `KubePodNotReady` and `KubeDeploymentReplicasMismatch` alerts from Pending -> Firing status.



DevOps Challenges Overcome

\* \*\*EKS Control Plane Blindness:\*\* Identified and documented the "False Positive" alerts (ControllerManagerDown) caused by AWS managing the control plane.

\* \*\*Namespace Isolation:\*\* Implemented a dedicated `monitoring` namespace to ensure system tools do not compete for resources with application workloads.



How to View Dashboards

1\. Run port-forward: `kubectl port-forward -n monitoring svc/monitoring-grafana 3000:80`

2\. Access at `http://localhost:3000`

3\. Default Dashboards: "Kubernetes / Compute Resources / Namespace (Pods)"

