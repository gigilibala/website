// The top roles mirror the E-Gen resume (~/Projects/resume/egen). The site
// also keeps earlier roles that the PDF leaves out for space.

export type Role = {
  company: string
  companyUrl?: string
  note?: string
  title: string
  location: string
  start: string
  // Omitted for a current role.
  end?: string
  highlights: string[]
}

export const SUMMARY =
  'Principal-level engineer and tech lead with over ten years building production infrastructure and AI systems at Google, Nuro, and early-stage startups.'

export const EXPERIENCE: Role[] = [
  {
    company: 'E-Gen',
    title: 'Principal Application ML Architect',
    location: 'Remote, USA',
    start: 'Feb 2024',
    highlights: [
      'Led the design and deployment of LLM pipelines that automate document analysis, risk assessment, and customer interaction for one of the largest mortgage underwriters in the US.',
      'Doubled underwriter output per day and cut the error rate from 20% to 1% by bringing LLMs into those workflows.',
      'Built end-to-end LLM serving for high-throughput, real-time document processing on GCP, containerized and horizontally scaled.',
      'Designed and built agent-first, multi-tenant infrastructure for a medical data provider.',
      'Built an internal AI engineering agent, used company-wide, that takes engineering requests from ticket to shipped change.',
      'Owned the cloud platform for an AI-driven claims product, migrating 15+ services across three environments to infrastructure-as-code with zero data loss.',
      'Built gated, credential-free delivery pipelines and standardized trunk-based releases, versioning, and failure alerting across every repository.',
      'Led a full-stack modernization (UI, serverless backend, SDKs, runtime) and stood up CI testing so every change gets a real pass/fail signal.',
      'Shipped right-to-deletion for AI data across relational, document, and vector stores, with role-based access and lifecycle tests.',
    ],
  },
  {
    company: 'Nuro',
    companyUrl: 'https://www.nuro.ai',
    title: 'Senior Software Engineer, Tech Lead',
    location: 'Mountain View, CA',
    start: 'Aug 2021',
    end: 'Mar 2023',
    highlights: [
      'Led a team of six engineers and two interns building the robot software release and delivery infrastructure, in the cloud and on-premise, for large-scale AV production.',
      'Built the robot gateway and process orchestration systems that manage software on every vehicle in the fleet.',
      'Delivered end-to-end, secure-by-design release pipelines in partnership with 20+ cross-functional teams.',
    ],
  },
  {
    company: 'Google',
    companyUrl: 'https://www.google.com',
    title: 'Senior Software Engineer, Tech Lead',
    location: 'Mountain View, CA',
    start: 'Jun 2016',
    end: 'Aug 2021',
    highlights: [
      'Built end-to-end OS delivery infrastructure, client and server side, for millions of Chromebooks and Android devices, including large-scale test automation.',
      'Optimized over-the-air updates, saving Google and its users several petabytes of storage and bandwidth every month.',
      'Built and deployed OS provisioning software used by thousands of schools and enterprises.',
      'Designed and built a secure, space-efficient feature delivery mechanism for Chromebooks, used by internal teams and third-party vendors to ship optional features to users.',
    ],
  },
  {
    company: 'Google',
    companyUrl: 'https://www.google.com',
    title: 'Software Engineer Intern',
    location: 'Madison, WI',
    start: 'May 2015',
    end: 'Jul 2015',
    highlights: [
      'Designed and implemented solutions for HPC systems on Google Cloud Platform.',
    ],
  },
  {
    company: 'Emergency CallWorks',
    note: 'part of Motorola Solutions',
    title: 'Software Developer Intern',
    location: 'Birmingham, AL',
    start: 'May 2014',
    end: 'Aug 2014',
    highlights: [
      'Built a scalable SIP call-taking test framework driven by XML, covering several hundred call scenarios.',
      'Built a test framework for adding SMS handling to 911 call-taking systems using MSRP.',
      'Researched telephony and web technologies including Asterisk, SIP, MSRP and WebRTC.',
    ],
  },
  {
    company: 'Barid Samaneh Novin',
    title: 'Software Developer',
    location: 'Tehran, Iran',
    start: 'Sep 2008',
    end: 'May 2009',
    highlights: [
      'Implemented the reporting service and part of the UI for an enterprise resource planning (ERP) system.',
    ],
  },
  {
    company: 'Tebyan',
    title: 'Game Developer',
    location: 'Tehran, Iran',
    start: 'Jun 2007',
    end: 'Nov 2007',
    highlights: [
      'Customized the PowerRender3D engine for a 3D first-person shooter.',
    ],
  },
]

const year = (date: string) => date.slice(-4)

// Compact range for timelines, e.g. '2016–2021' or '2024–now'.
export function yearSpan(start: string, end?: string): string {
  if (!end) return `${year(start)}–now`
  return year(start) === year(end) ? year(start) : `${year(start)}–${year(end)}`
}

export type Degree = {
  degree: string
  school: string
  location: string
  start: string
  end: string
  thesis: string
  detail?: string
}

export const EDUCATION: Degree[] = [
  {
    degree: 'PhD, Computer Science',
    school: 'University of Alabama at Birmingham',
    location: 'Birmingham, AL',
    start: 'Aug 2010',
    end: 'Apr 2016',
    thesis:
      'Toward a Scalable Transactional Fault-Tolerant Message Passing Interface for Petascale and Exascale Machines',
    detail:
      'Coursework in parallel and numerical computing, databases, virtualization, software engineering, and cloud security.',
  },
  {
    degree: 'BSc, Software Engineering',
    school: 'Amirkabir University of Technology (Tehran Polytechnic)',
    location: 'Tehran, Iran',
    start: '2006',
    end: '2010',
    thesis: 'Cloth Modeling in the Irrlicht 3D Game Engine',
  },
]

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`

export type Skill = { name: string; icon: string }

export const SKILL_GROUPS: { title: string; skills: Skill[] }[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'C', icon: devicon('c/c-original') },
      { name: 'C++', icon: devicon('cplusplus/cplusplus-original') },
      { name: 'Go', icon: devicon('go/go-original') },
      { name: 'Python', icon: devicon('python/python-original') },
      { name: 'Java', icon: devicon('java/java-original') },
      { name: 'JavaScript', icon: devicon('javascript/javascript-original') },
      { name: 'TypeScript', icon: devicon('typescript/typescript-original') },
      { name: 'Bash', icon: devicon('bash/bash-original') },
      { name: 'Solidity', icon: devicon('solidity/solidity-original') },
      { name: 'LaTeX', icon: devicon('latex/latex-original') },
    ],
  },
  {
    title: 'Systems and infrastructure',
    skills: [
      { name: 'Linux', icon: devicon('linux/linux-original') },
      { name: 'Ubuntu', icon: devicon('ubuntu/ubuntu-plain') },
      { name: 'Gentoo', icon: devicon('gentoo/gentoo-plain') },
      { name: 'Chrome OS', icon: devicon('chrome/chrome-original') },
      { name: 'Android', icon: devicon('android/android-plain') },
      {
        name: 'AWS',
        icon: devicon('amazonwebservices/amazonwebservices-plain-wordmark'),
      },
      { name: 'Terraform', icon: devicon('terraform/terraform-original') },
      { name: 'Docker', icon: devicon('docker/docker-original') },
      { name: 'Kubernetes', icon: devicon('kubernetes/kubernetes-plain') },
      {
        name: 'Google Cloud',
        icon: devicon('googlecloud/googlecloud-original'),
      },
      { name: 'Firebase', icon: devicon('firebase/firebase-plain') },
      { name: 'Jenkins', icon: devicon('jenkins/jenkins-original') },
      { name: 'Grafana', icon: devicon('grafana/grafana-original') },
      {
        name: 'Raspberry Pi',
        icon: devicon('raspberrypi/raspberrypi-original'),
      },
    ],
  },
  {
    title: 'Web and data',
    skills: [
      { name: 'Node.js', icon: devicon('nodejs/nodejs-original') },
      { name: 'React Native', icon: devicon('react/react-original') },
      { name: 'Tailwind CSS', icon: devicon('tailwindcss/tailwindcss-plain') },
      { name: 'MongoDB', icon: devicon('mongodb/mongodb-original') },
      { name: 'MySQL', icon: devicon('mysql/mysql-original') },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: devicon('git/git-original') },
      { name: 'GitHub', icon: devicon('github/github-original') },
      { name: 'Jira', icon: devicon('jira/jira-original') },
      { name: 'Confluence', icon: devicon('confluence/confluence-original') },
      { name: 'GCC', icon: devicon('gcc/gcc-original') },
      { name: 'pytest', icon: devicon('pytest/pytest-original') },
      { name: 'VS Code', icon: devicon('vscode/vscode-original') },
      {
        name: 'Android Studio',
        icon: devicon('androidstudio/androidstudio-original'),
      },
      { name: 'Yarn', icon: devicon('yarn/yarn-original') },
      { name: 'SSH', icon: devicon('ssh/ssh-original') },
    ],
  },
]
