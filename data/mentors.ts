export interface Mentor {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  expertise: string[]
  experience: string
  // rating?: number
  // students?: number
  bio: string
  specialties: string[]
  availability: string
  timezone: string
  languages: string[]
  linkedin: string
}

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Viacheslav Maksimov",
    role: "Senior Software Engineer",
    company: "AUTO1 Group",
    avatar: "/viacheslav_maksimov.jpg",
    expertise: ["Java 21", "Spring-boot 3", "postgres", "flyway", "spring-data", "maven", "docker", "AWS", "terraform", "jenkins"],
    experience: "10+ years",
    bio: "Experienced software architect skilled in leading development lifecycles, designing scalable solutions, and delivering next-generation technologies.",
    specialties: ["Software Architecture", "Large-Scale Application Development", "System Design"],
    availability: "Available",
    timezone: "CEST",
    languages: ["English", "Russian"],
    linkedin: "https://www.linkedin.com/in/viacheslav-maksimov/"
  },
  {
    id: 2,
    name: "Pankaj Mishra",
    role: "Software Engineer",
    company: "Uber",
    avatar: "/pankaj_mishra.jpg",
    expertise: ["Python", "Java", "JavaScript (React, Node.js)", "Microservices", "Distributed Systems", "MySQL", "PostgreSQL", "AWS", "Docker", "CI/CD"],
    experience: "3+ years",
    bio: "Software Engineer at Uber passionate about building scalable platforms and bridging business with technology.",
    specialties: ["Scalable Platform Development", "Distributed Systems Engineering", "Software Development Life Cycle (SDLC)"],
    availability: "Available",
    timezone: "IST",
    languages: ["English", "Hindi"],
    linkedin: "https://www.linkedin.com/in/pkj-m/"
  },
  {
    id: 3,
    name: "Badal Bhushan",
    role: "Director- IAM services",
    company: "Walmart",
    avatar: "/badal_bhusan.jpg",
    expertise: ["Siteminder", "SSO", "Identity Management", "Middleware", "Integration", "Oracle", "Oracle Access Manager", "LDAP", "Microsoft SQL Server", "Unix", "SOA", "SDLC", "Solution Architecture."],
    experience: "20+ years",
    bio: "Experienced IT professional specializing in Identity & Access Management, SSO, Middleware, and Solution Architecture, with a strong background in Oracle, Unix, and enterprise integration solutions.",
    specialties: ["Identity & Access Management (IAM)", "Oracle & Database Management", "Unix-based System Administration"],
    availability: "Available",
    timezone: "EST",
    languages: ["English","Hindi"],
    linkedin: "http://www.linkedin.com/in/badal-bhushan-491b263a"
  },
  {
    id: 4,
    name: "Monish A.G",
    role: "Security Consultant",
    company: "Black Duck",
    avatar: "/ag_monish.jpg",
    expertise: ["AWS Cloud", "Secure Software Development", "Vulnerability Assessment", "Identity & Access Management", "Information Security Tools."],
    experience: "5+ years",
    bio: "Security Consultant at Black Duck specializing in cybersecurity, cloud security, and secure software development.",
    specialties: ["Application & Cloud Security", "Vulnerability Assessment", "Secure Authentication"],
    availability: "Available",
    timezone: "CST",
    languages: ["English", "Hindi"],
    linkedin: "https://www.linkedin.com/in/ag-monish/"
  },
  {
    id: 5,
    name: "Ashwini Joshi",
    role: "Senior Machine Learning Engineer",
    company: "Warner Bros Discovery",
    avatar: "/ashwini_joshi.jpg",
    expertise: ["Artificial Intelligence", "Voice Assistants", "Machine Learning", "Natural Language Understanding", "Oracle", "Data Structures & Algorithms", "Java", "Python"],
    experience: "15+ years",
    bio: "ML/AI Engineer focused on user personalization, recommendation systems, and conversational AI, with experience in streaming media and voice assistant technologies.",
    specialties: ["Machine Learning", "AI", "Recommendation Systems", "Conversational AI", "Voice Assistant Development", "Streaming Media Analytics"],
    availability: "Available",
    timezone: "PST",
    languages: ["English","Hindi"],
    linkedin: "https://www.linkedin.com/in/ashwinijoshi1/"
  },
  {
    id: 6,
    name: "Pulkit Gupta",
    role: "SDE-4",
    company: "Walmart Global Tech India",
    avatar: "/pulkit_gupta1.png",
    expertise: ["Java", "Spring Boot/MVC", "Distributed Systems", "AWS", "Docker", "Jenkins", "RESTful APIs", "SQL/NoSQL", "DevOps", "RabbitMQ."],
    experience: "10+ years",
    bio: "Tech-driven Engineering Lead at Walmart Global Tech, passionate about scalable distributed systems, cloud migration, automation, and product-focused architecture.",
    specialties: ["Cloud Architecture & Migration", "Microservices & RESTful API Design", "DevOps & CI/CD", "Database Management"],
    availability: "Available",
    timezone: "IST",
    languages: ["English", "Hindi"],
    linkedin: "https://www.linkedin.com/in/pulkitgupta16/"
  },
  {
    id: 7,
    name: "Himanshu Tikle",
    role: "Data Analyst",
    company: "Pine Healthcare Pvt Ltd",
    avatar: "himanshu.png",
    expertise: ["GenAI", "Data Analysis", "Machine Learning", "SQL", "Azure", "AWS"],
    experience: "3+ years",
    bio:"GenAI & Data Science Expert passionate about transforming data into actionable insights through machine learning, analytics, and cloud technologies.",
    specialties: ["Expert in Generative AI, Machine Learning, and Data Science with skills in Python, SQL, Cloud, and Data Visualization."],
    availability: "Available",
    timezone: "IST",
    languages: ["English", "Hindi"],
    linkedin: "https://www.linkedin.com/in/himanshutikle/"
  },
  {
    id: 8,
    name: "Dr.Prakash P",
    role: "Associate Professor",
    company: "VIT Chennai",
    avatar: "/prakash.jpg",
    expertise: ["Kubernetes", "Docker", "Terraform", "AWS", "GCP", "Jenkins", "GitLab CI", "Prometheus", "Grafana", "Ansible", "Python", "Bash"],
    experience: "15+ years",
    bio: "Cloud Computing and Artificial Intelligence, with extensive research, consultancy, and award-winning experience in technology and education.",
    specialties: ["Cloud Infrastructure", "Container Orchestration", "CI/CD Pipeline Design", "Monitoring & Observability"],
    availability: "Available",
    timezone: "IST",
    languages: ["English", "Tamil"],
    linkedin: "https://www.linkedin.com/in/prakash-periyasamy-036804141"
  },
  {
    id: 9,
    name: "Damodhara P.",
    role: "Lead Developer",
    company: "Social Security Administration",
    avatar: "/d.jpg",
    expertise: ["Java", "Spring Boot", "Hibernate", "MuleSoft Anypoint Platform", "System Integration", "Enterprise Web Applications", "Oracle", "Performance Optimization", "Quality Assurance", "Team Collaboration"],
    experience: "10+ years",
    bio: "Deep expertise in Java, Hibernate, Spring Boot, and the MuleSoft Anypoint Platform, specializing in system integration, performance optimization, and scalable architecture.",
    specialties: ["Full-Stack Development", "API Design", "Testing & Quality Assurance", "Code Review & Mentoring", "Enterprise System Integration"],
    availability: "Available",
    timezone: "IST",
    languages: ["English", "Hindi",],
    linkedin: "https://www.linkedin.com/in/damodharap/"
  },
  {
    id: 10,
    name: "Harshith Vaddiparthy",
    role: "Council Member",
    company: "Forbes Technology Council",
    avatar: "/harshith.jpg",
    expertise: ["AWS", "Azure", "Node.js", "React.js", "JavaScript", "Ethereum", "Web3.js", "Blockchain."],
    experience: "4+ years",
    bio: "Head of Growth at YC-backed JustPaid and Forbes Technology Council member, building at the intersection of AI, Web3, and blockchain—scaling products, driving innovation, and advancing the future of technology through growth and insights.",
    specialties: ["Vibe Coding", "Cloud Computing", "Full-Stack Development", "Blockchain & Web3 Solutions"],
    availability: "Available",
    timezone: "PST",
    languages: ["English", "Hindi"],
    linkedin: "https://www.linkedin.com/in/harshith-vaddiparthy/"
  },
  {
    id: 11,
    name: "Pramod Gannavarapu",
    role: "Sr Systems Engineer",
    company: "Compunnel Inc.",
    avatar: "/pramod.jpg",
    expertise: ["Microsoft Azure", "Microsoft 365", "Active Directory", "Windows Server", "VMware", "Citrix XenApp", "AWS", "Microsoft Exchange", "DNS."],
    experience: "18+ years",
    bio: "Senior Systems Engineer specializing in cloud, infrastructure, and identity solutions with a strong focus on secure, scalable, and reliable IT operations.",
    specialties: ["Single Sign-On (SSO)", "MFA", "RBAC", "IT Architecture", "System Administration", "Virtualization", "Disaster Recovery", "Enterprise Collaboration Solutions"],
    availability: "Available",
    timezone: "EST",
    languages: ["English", "Hindi"],
    linkedin: "https://www.linkedin.com/in/pramodkg/"
  },
  {
    id: 12,
    name: "Sarah Chen",
    role: "Frontend Architect",
    company: "Meta",
    avatar: "/professional-headshot-of-chinese-female-data-scien.jpg",
    expertise: ["React", "TypeScript", "Next.js", "GraphQL", "Webpack", "Jest", "Cypress", "Design Systems", "Performance Optimization", "Accessibility"],
    experience: "8+ years",
    bio: "Frontend Architect at Meta with expertise in building scalable, performant web applications and leading frontend teams. Passionate about user experience and modern web technologies.",
    specialties: ["Frontend Architecture", "Performance Optimization", "Design Systems", "Team Leadership", "Accessibility"],
    availability: "Available",
    timezone: "PST",
    languages: ["English", "Mandarin"],
    linkedin: "https://www.linkedin.com/in/sarah-chen-frontend/"
  },
  {
    id: 13,
    name: "Marcus Johnson",
    role: "DevOps Engineer",
    company: "Netflix",
    avatar: "/professional-headshot-of-african-female-security-e.jpg",
    expertise: ["Kubernetes", "Docker", "Terraform", "AWS", "Jenkins", "GitLab CI", "Prometheus", "Grafana", "Ansible", "Python", "Bash", "Monitoring"],
    experience: "12+ years",
    bio: "DevOps Engineer at Netflix specializing in cloud infrastructure, automation, and reliability engineering. Expert in building resilient, scalable systems that serve millions of users.",
    specialties: ["Cloud Infrastructure", "Automation", "Reliability Engineering", "Monitoring & Observability", "Team Mentoring"],
    availability: "Available",
    timezone: "PST",
    languages: ["English", "Spanish"],
    linkedin: "https://www.linkedin.com/in/marcus-johnson-devops/"
  },
  {
    id: 14,
    name: "Elena Rodriguez",
    role: "Product Manager",
    company: "Google",
    avatar: "/professional-headshot-of-hispanic-female-developer.jpg",
    expertise: ["Product Strategy", "User Research", "Data Analysis", "Agile", "Scrum", "Figma", "SQL", "Python", "A/B Testing", "Roadmapping"],
    experience: "10+ years",
    bio: "Product Manager at Google with a strong technical background and passion for building user-centric products. Expert in translating business requirements into technical solutions.",
    specialties: ["Product Strategy", "User Research", "Data-Driven Decision Making", "Cross-functional Leadership", "Technical Product Management"],
    availability: "Available",
    timezone: "PST",
    languages: ["English", "Spanish", "Portuguese"],
    linkedin: "https://www.linkedin.com/in/elena-rodriguez-pm/"
  },
  {
    id: 15,
    name: "David Kim",
    role: "Full Stack Developer",
    company: "Stripe",
    avatar: "/professional-headshot-of-korean-female-designer.jpg",
    expertise: ["Node.js", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL", "Jest", "Cypress", "Microservices"],
    experience: "6+ years",
    bio: "Full Stack Developer at Stripe building payment infrastructure and developer tools. Passionate about clean code, system design, and mentoring junior developers.",
    specialties: ["Full Stack Development", "System Design", "API Development", "Code Review", "Mentoring"],
    availability: "Available",
    timezone: "PST",
    languages: ["English", "Korean"],
    linkedin: "https://www.linkedin.com/in/david-kim-fullstack/"
  },
  {
    id: 16,
    name: "Priya Sharma",
    role: "Data Scientist",
    company: "Microsoft",
    avatar: "/professional-headshot-of-indian-female-product-man.jpg",
    expertise: ["Python", "R", "SQL", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "Jupyter", "Tableau", "Power BI"],
    experience: "7+ years",
    bio: "Data Scientist at Microsoft working on AI and machine learning solutions. Expert in predictive modeling, data visualization, and translating complex data insights into business value.",
    specialties: ["Machine Learning", "Data Visualization", "Predictive Modeling", "Statistical Analysis", "Business Intelligence"],
    availability: "Available",
    timezone: "PST",
    languages: ["English", "Hindi", "Tamil"],
    linkedin: "https://www.linkedin.com/in/priya-sharma-datascience/"
  }
]
