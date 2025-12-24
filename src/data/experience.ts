export const experience = [
  {
    title: "DevOps Engineer",
    company: "Technumen Inc",
    client: "USAA",
    location: "Plano, TX",
    startDate: "Oct 2024",
    endDate: "Present",
    duration: "3 months",
    description: "Cloud Infrastructure, Kubernetes, SRE & Observability",
    achievements: [
      "Architected and deployed AWS EKS clusters with managed nodes and Fargate profiles using Terraform, enabling scalable, secure, and highly available Kubernetes infrastructure",
      "Deployed Java Spring Boot microservices to EKS using Helm charts and Kubernetes manifests, resolving complex Docker image and dependency issues to stabilize and speed up production releases",
      "Built GitLab CI/CD pipelines integrated with Terraform modules and JFrog Artifactory to eliminate manual steps, improving engineering efficiency and reducing deployment times by about 30%",
      "Supported SOC 2 and PCI-like security initiatives by enforcing IaC guardrails, container image scanning, and OS hardening across AWS environments",
      "Established SRE-driven observability for cloud and application workloads using Datadog, ELK, and CloudWatch, owning Kubernetes/AWS on-call and reducing costs with Terraform-driven budget alerts"
    ],
    technologies: ["AWS", "EKS", "Kubernetes", "Terraform", "Helm", "GitLab CI/CD", "Datadog", "Docker", "JFrog Artifactory"],
    metrics: {
      deploymentReduction: "30%",
      uptime: "99.99%"
    }
  },
  {
    title: "DevOps Engineer",
    company: "Technumen Inc",
    client: "AT&T",
    location: "Dallas, TX",
    startDate: "Dec 2019",
    endDate: "Oct 2024",
    duration: "4 years 11 months",
    description: "Multi-Cloud Infrastructure, Azure Migration, SRE & Observability",
    achievements: [
      "Designed and automated multi-cloud infrastructure on AWS and Azure using Terraform modules and CloudFormation, standardizing deployments and accelerated scalability and provisioning",
      "Led migration of on-prem applications to Azure AKS, designing VNet, load balancing, Key Vault, and App Gateway patterns that increased scalability and reduced infrastructure costs by 25% through IaC",
      "Strengthened application security by integrating Veracode into CI/CD and using automated patching and container image scanning to systematically reduce vulnerabilities",
      "Partnered with application teams during on-call incidents to troubleshoot Kubernetes and AWS issues, restore services quickly, refine runbooks, and drive better problem-solving and collaboration",
      "Built SRE-style observability for AKS by defining and tracking SLIs/SLOs with Prometheus, Grafana, and Splunk, and standardizing DR runbooks and Terraform-based workflows, achieving 99.95% uptime, 35% lower MTTR, and faster DR incident resolution"
    ],
    technologies: ["AWS", "Azure", "AKS", "Kubernetes", "Terraform", "CloudFormation", "Prometheus", "Grafana", "Splunk", "Veracode", "Jenkins"],
    metrics: {
      costReduction: "25%",
      uptime: "99.95%",
      mttrImprovement: "35%"
    }
  }
];

export const timelineEvents = [
  {
    year: 2017,
    title: "Career Start",
    description: "Began professional journey in DevOps & Cloud Infrastructure",
    type: "milestone"
  },
  {
    year: 2019,
    title: "AT&T Role",
    description: "Joined Technumen as DevOps Engineer for AT&T",
    type: "role"
  },
  {
    year: 2022,
    title: "AWS Certification",
    description: "Certified Solutions Architect - Associate",
    type: "certification"
  },
  {
    year: 2023,
    title: "Azure Certification",
    description: "Azure Administrator Associate",
    type: "certification"
  },
  {
    year: 2024,
    title: "USAA Role & CKA",
    description: "Advanced to USAA role; Started CKA certification journey",
    type: "role"
  }
];

export const stats = {
  yearsExperience: 8,
  projectsDelivered: 8,
  certificationsCount: 2,
  activeStackCount: 30
};

export const education = [
  {
    degree: "Master of Science",
    field: "Information Systems Technologies / Web Design and Internet",
    institution: "Wilmington University, New Castle, DE",
    year: "2017",
    startDate: "Jan 2016",
    gpa: "3.86"
  },
  {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    institution: "Jawaharlal Nehru Technological University, Hyderabad, India",
    year: "2015",
    startDate: "Jul 2011"
  }
];
