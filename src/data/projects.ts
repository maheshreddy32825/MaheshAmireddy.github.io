export const projects = [
  {
    id: "kubernetes-guide",
    name: "Kubernetes Learning Guide",
    description: "Comprehensive Kubernetes setup, deployment patterns, and best practices repository with real-world examples",
    url: "https://github.com/maheshreddy32825/Kubernetes",
    language: "Documentation",
    topics: ["Kubernetes", "K8s", "Deployment", "Learning"],
    featured: true
  },
  {
    id: "aws-infrastructure",
    name: "AWS Infrastructure Automation",
    description: "AWS infrastructure as code examples, Terraform modules, and CloudFormation templates",
    url: "https://github.com/maheshreddy32825/AWS",
    language: "Python",
    topics: ["AWS", "Terraform", "CloudFormation", "IaC"],
    featured: true
  },
  {
    id: "getting-started-app",
    name: "Getting Started App",
    description: "Deploying sample application using GitHub, Jenkins, and Docker with complete CI/CD pipeline",
    url: "https://github.com/maheshreddy32825/getting-started-app",
    language: "JavaScript",
    topics: ["Docker", "Jenkins", "GitHub", "CI/CD"],
    featured: true
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    description: "Modern, responsive portfolio built with Astro, Tailwind CSS, and interactive components (this site!)",
    url: "https://github.com/maheshreddy32825/maheshreddy32825.github.io",
    language: "Astro",
    topics: ["Astro", "Tailwind", "Portfolio", "TypeScript"],
    featured: false
  }
];

export const projectStats = {
  totalRepos: 4,
  featuredProjects: 3,
  totalStars: 0,
  languages: ["Python", "JavaScript", "Shell", "YAML", "Terraform"]
};

export const industryProjects = [
  {
    type: "USAA Project",
    title: "AWS EKS Multi-Cluster Architecture",
    period: "Oct 2024 - Present",
    impact: [
      "30% reduction in deployment times",
      "Serverless-first approach with Fargate",
      "Full GitOps CI/CD pipeline"
    ],
    tech: ["AWS EKS", "Terraform", "Helm", "GitLab CI/CD", "Datadog"]
  },
  {
    type: "AT&T Project",
    title: "Multi-Cloud Migration & SRE Transformation",
    period: "Dec 2019 - Oct 2024",
    impact: [
      "25% infrastructure cost reduction",
      "99.95% uptime achievement",
      "35% MTTR improvement",
      "Kubernetes-first platform engineering"
    ],
    tech: ["AWS", "Azure AKS", "Terraform", "Prometheus", "Grafana", "Splunk"]
  }
];
