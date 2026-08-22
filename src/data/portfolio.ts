export type NavItem = {
  label: string;
  href: string;
};

export type ExpertiseCategory = {
  title: string;
  items: string[];
};

export type ExperienceRole = {
  title: string;
  company: string;
  period: string;
  summary: string[];
};

export type Engagement = {
  title: string;
  capabilities: string[];
  description: string;
  overview: string;
  objectives: string[];
  approach: string[];
  outcomes: string[];
  tone: "primary" | "secondary" | "critical" | "gold";
};

export type Credential = {
  shortName: string;
  name: string;
  issuer: string;
  badgeSrc?: string;
  verifyUrl?: string;
  note?: string;
};

export type Project = {
  name: string;
  description: string;
  url: string;
  language?: string;
  tags: string[];
};

export const portfolio = {
  person: {
    name: "Apoorv Bandyopadhyay",
    shortName: "A. Bandyopadhyay",
    role: "Cybersecurity Consultant",
    location: "New Delhi, India",
    email: "apoorvbandyopadhyay@gmail.com",
    linkedin: "https://www.linkedin.com/in/apoorv-bandyopadhyay-33169b121",
    // TODO: Insert the final Fiverr Pro profile URL when it is available.
    fiverr: "",
    resumeUrl: "/resume/Apoorv_Bandyopadhyay_Fiverr_Pro_Resume.pdf",
    portrait: "/assets/profile-picture.webp"
  },
  nav: [
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Engagements", href: "#engagements" },
    { label: "Projects", href: "#projects" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" }
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Cybersecurity Consultant",
    headline: "Securing Applications, Infrastructure & Critical Environments.",
    summary:
      "Cybersecurity Consultant specializing in Penetration Testing, Red Teaming, Threat Hunting, DFIR, and OT/ICS Security. Helping organizations identify risks, investigate threats, and strengthen their security posture.",
    credentials: ["CRTP", "PNPT", "CEH Practical", "eCTHP"]
  },
  expertise: [
    {
      title: "Offensive Security",
      items: ["Web Application VAPT", "API Security", "Network VAPT", "Active Directory Security", "Red Team Operations"]
    },
    {
      title: "Threat Hunting & DFIR",
      items: ["Threat Hunting", "Incident Investigation", "Root Cause Analysis", "Threat Intelligence", "Forensic Reporting"]
    },
    {
      title: "OT/ICS & IoT Security",
      items: ["Critical Infrastructure", "Industrial Networks", "OT/ICS Security Assessments", "IoT Security", "Architecture Reviews"]
    },
    {
      title: "Security Engineering",
      items: ["Python Automation", "PowerShell Scripting", "Security Tool Development", "Proof-of-Concept Development", "Security Research"]
    },
    {
      title: "Security Consulting",
      items: ["Requirement Analysis", "Project Scoping", "Technical Assessments", "Professional Reporting", "Remediation Guidance", "Stakeholder Management"]
    },
    {
      title: "Training & Mentoring",
      items: ["Web & API Security Training", "Network Security Training", "OT/ICS Security Training", "Technical Mentoring", "Professional Development"]
    }
  ] satisfies ExpertiseCategory[],
  sectors: [
    "BFSI",
    "Manufacturing",
    "Power & Energy",
    "Critical Infrastructure",
    "Product-Based Organizations",
    "E-Learning",
    "Healthcare",
    "Defence",
    "Law Enforcement",
    "Enterprise Environments",
    "Data Centers"
  ],
  experience: [
    {
      title: "Senior Security Analyst",
      company: "CyberSRC Consultancy Pvt. Ltd.",
      period: "August 2026 - Present",
      summary: [
        "Leads enterprise red team engagements, simulating advanced adversary tactics across internal networks, identity infrastructure, and physical access controls.",
        "Directs OT/ICS security assessments for critical infrastructure and manufacturing clients, evaluating industrial network architecture, segmentation, and device configuration risk.",
        "Performs IoT and IIoT penetration testing to uncover firmware, protocol, and hardware-level vulnerabilities in connected industrial and enterprise devices.",
        "Assesses Active Directory environments for privilege escalation paths, misconfigurations, and identity-based attack surface across enterprise engagements."
      ]
    },
    {
      title: "Security Analyst",
      company: "CyberSRC Consultancy Pvt. Ltd.",
      period: "August 2025 - July 2026",
      summary: [
        "Leads a team of five cybersecurity professionals across VAPT, Red Teaming, OT/ICS, and IoT engagements.",
        "Executes physical and internal red team operations for BFSI and manufacturing-sector environments.",
        "Conducts threat hunting, root cause analysis, forensic reporting, and incident investigation.",
        "Serves as technical SME for OT, IoT, network security, air-gapped, and MPLS network assessments."
      ]
    },
    {
      title: "Associate Security Analyst",
      company: "CyberSRC Consultancy Pvt. Ltd.",
      period: "September 2024 - July 2025",
      summary: [
        "Delivered remote and onsite assessments across applications, APIs, infrastructure, power plants, data centers, and corporate environments.",
        "Managed stakeholder updates, kick-off meetings, project tracking, and final debriefs.",
        "Created reports, trackers, Python proof-of-concept tooling, automation scripts, and exploit research support.",
        "Supported project scoping, requirement analysis, evidence review, and junior resource training."
      ]
    },
    {
      title: "Apprentice",
      company: "Canon India Pvt. Ltd.",
      period: "November 2022 - November 2023",
      summary: [
        "Performed functional and security testing for web, mobile, and 3D applications using tools including Burp Suite and Qualys.",
        "Created SRS documents, control flow diagrams, block diagrams, and scope documents.",
        "Worked with stakeholders, development teams, and project managers across SDLC activities."
      ]
    }
  ] satisfies ExperienceRole[],
  engagements: [
    {
      title: "Enterprise Red Team Assessment",
      capabilities: ["Red Teaming", "Active Directory", "Internal Security Assessment", "Physical Security", "Enterprise Security"],
      description:
        "Anonymized objective-based assessment covering internal attack paths, Active Directory exposure, and physical-security considerations while preserving client confidentiality.",
      overview:
        "A controlled adversary-simulation engagement designed to help an enterprise security team understand realistic exposure across identity, internal network access, and onsite operational controls. The work emphasized evidence-led validation, clear escalation paths, and executive-ready remediation themes.",
      objectives: [
        "Evaluate practical attack paths from initial access to privileged enterprise resources.",
        "Assess Active Directory configuration, segmentation, and internal control maturity.",
        "Review physical-security assumptions where onsite access could influence cyber risk.",
        "Translate technical findings into prioritized remediation guidance for stakeholders."
      ],
      approach: [
        "Defined scope, rules of engagement, and communication cadence before testing.",
        "Performed internal reconnaissance, identity-path analysis, and controlled exploitation attempts.",
        "Validated risks manually to reduce false positives and preserve business continuity.",
        "Prepared concise technical evidence and leadership-level observations for final reporting."
      ],
      outcomes: [
        "Delivered an anonymized attack-path narrative suitable for both technical and executive audiences.",
        "Provided remediation guidance across identity hygiene, network controls, monitoring, and procedural safeguards.",
        "Supported the client team with a clearer view of how individual weaknesses could combine into higher-risk scenarios."
      ],
      tone: "primary"
    },
    {
      title: "Critical Infrastructure Security Assessment",
      capabilities: ["OT/ICS", "Network Security", "Critical Infrastructure", "Onsite Assessment"],
      description:
        "Onsite security assessment work across OT environments, industrial networks, architecture review, segmentation, and device configuration review.",
      overview:
        "A security assessment for critical infrastructure environments where availability, safety, and operational continuity were primary constraints. The engagement focused on practical OT/ICS risk, network architecture review, device configuration, and defensible remediation planning.",
      objectives: [
        "Review OT/ICS network architecture and segmentation assumptions.",
        "Identify exposure across industrial assets, supporting infrastructure, and access pathways.",
        "Assess configuration risks without disrupting operational processes.",
        "Create practical remediation recommendations suitable for restricted environments."
      ],
      approach: [
        "Worked within approved onsite procedures and operational boundaries.",
        "Reviewed network layout, access methods, device configurations, and supporting documentation.",
        "Performed careful validation of security issues while avoiding unsafe testing methods.",
        "Mapped observations into prioritized themes for engineering, operations, and leadership teams."
      ],
      outcomes: [
        "Produced a clear security assessment report focused on operationally realistic improvements.",
        "Highlighted segmentation, access-control, monitoring, and hardening opportunities.",
        "Helped stakeholders understand cyber risk in language aligned with critical-infrastructure operations."
      ],
      tone: "critical"
    },
    {
      title: "Threat Hunting & Incident Investigation",
      capabilities: ["Threat Hunting", "DFIR", "Threat Intelligence", "OSINT", "Root Cause Analysis"],
      description:
        "Investigation support focused on adversarial activity, evidence review, root cause analysis, forensic reporting, and actionable remediation guidance.",
      overview:
        "A defensive investigation engagement focused on suspicious activity, adversary behavior, and root cause analysis. The work combined threat hunting, forensic review, threat intelligence, and OSINT-driven context to help stakeholders understand what happened and what to improve.",
      objectives: [
        "Investigate suspicious activity and determine likely root causes.",
        "Review available logs, indicators, telemetry, and supporting evidence.",
        "Correlate technical artifacts with known adversary behaviors where appropriate.",
        "Deliver findings in a format useful for response, remediation, and leadership reporting."
      ],
      approach: [
        "Collected and reviewed evidence from available security and infrastructure sources.",
        "Developed hunting hypotheses based on observed indicators and environmental context.",
        "Used threat intelligence and OSINT to enrich technical findings without overclaiming attribution.",
        "Documented timelines, affected areas, likely causes, and recommended containment or hardening steps."
      ],
      outcomes: [
        "Delivered a structured RCA and forensic-style report with defensible conclusions.",
        "Provided remediation guidance across monitoring, access control, detection logic, and operational process.",
        "Supported better incident readiness by turning investigation lessons into repeatable controls."
      ],
      tone: "secondary"
    },
    {
      title: "Security Automation & Research",
      capabilities: ["Python", "PowerShell", "Automation", "Proof-of-Concept Development", "Security Research"],
      description:
        "Development of focused scripts, proof-of-concept tooling, and research workflows to support vulnerability validation and repeatable security assessment delivery.",
      overview:
        "A research and engineering workstream supporting faster, more consistent security assessments. The focus was on building practical automation, proof-of-concept validation scripts, and repeatable workflows that improved assessment quality without introducing unnecessary tooling complexity.",
      objectives: [
        "Automate repetitive validation and evidence-collection tasks where appropriate.",
        "Create proof-of-concept tooling to support safe vulnerability verification.",
        "Improve consistency across reporting, testing, and research workflows.",
        "Support internal knowledge-sharing and junior consultant enablement."
      ],
      approach: [
        "Identified recurring assessment tasks that could be made more reliable through scripting.",
        "Built focused Python and PowerShell utilities aligned with engagement needs.",
        "Validated tool output manually before using it in client-facing reports.",
        "Documented usage, limitations, and safe operating assumptions for repeatability."
      ],
      outcomes: [
        "Created practical automation assets for assessment delivery and research support.",
        "Reduced manual friction in validation and reporting workflows without relying on heavy third-party platforms.",
        "Improved team readiness through reusable technical references and mentoring material."
      ],
      tone: "gold"
    }
  ] satisfies Engagement[],
  projects: [
    {
      name: "NMAP RED",
      description:
        "Cross-platform stealth Nmap evasion orchestrator for red team operators, automating scan-timing, decoy, and fragmentation techniques to reduce detection during reconnaissance.",
      url: "https://github.com/Apoorv-Ban/nmap-red",
      language: "Python",
      tags: ["Red Teaming", "Reconnaissance", "Evasion"]
    },
    {
      name: "Torget",
      description:
        "Command-line utility that searches and surfaces the best available torrent for a given title directly from the terminal, without ads, pop-ups, or tracking.",
      url: "https://github.com/Apoorv-Ban/torget",
      language: "Python",
      tags: ["CLI", "Automation"]
    },
    {
      name: "PNPT Prep Guide",
      description:
        "A structured preparation guide and cheat sheet for the Practical Network Penetration Tester (PNPT) certification, covering methodology, tooling, and exam strategy.",
      url: "https://github.com/Apoorv-Ban/PNPT-Prep-Guide",
      tags: ["Certification Prep", "Documentation", "Red Teaming"]
    }
  ] satisfies Project[],
  credentials: [
    {
      shortName: "CRTP",
      name: "Certified Red Team Professional",
      issuer: "Altered Security",
      badgeSrc: "/certifications/crtp.avif",
      // TODO: Replace with the final verified CRTP credential URL if this exported-design URL is not the preferred public link.
      verifyUrl: "https://www.credential.net/c21a1760-a481-418a-b03a-8232ee8a477e"
    },
    {
      shortName: "PNPT",
      name: "Practical Network Penetration Tester",
      issuer: "TCM Security",
      badgeSrc: "https://pdf.ms.credential.net/badge/image?env=production&credential=p7784wik",
      verifyUrl: "https://www.credential.net/0dc76920-f502-48c5-b2ed-648db1371e3a"
    },
    {
      shortName: "CEH Practical",
      name: "Certified Ethical Hacker Practical",
      issuer: "EC-Council",
      badgeSrc: "/certifications/ceh-practical.png",
      // TODO: Insert the official CEH Practical verification URL when available.
      verifyUrl: ""
    },
    {
      shortName: "eCTHP",
      name: "Certified Threat Hunting Professional",
      issuer: "INE Security",
      badgeSrc: "https://pdf.ms.credential.net/badge/image?env=production&credential=be1c9ykn",
      verifyUrl: "https://www.credential.net/3f481059-2bd7-4ec2-a259-9d76ba906877"
    }
  ] satisfies Credential[],
  contactServices: [
    "Cybersecurity Consulting",
    "Penetration Testing",
    "Security Assessments",
    "Threat Hunting",
    "Incident Investigation",
    "OT/ICS Security",
    "Security Automation",
    "Cybersecurity Training"
  ],
  seo: {
    canonicalUrl: "https://example.com/"
  }
};
