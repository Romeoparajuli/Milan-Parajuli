export const skills = {
  Frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'],
  Backend: ['Java', 'Spring Boot', 'REST APIs', 'JPA/Hibernate', 'PHP'],
  Database: ['MySQL', 'Database Design', 'Query Optimization'],
  'DevOps & Tools': ['Docker', 'Ubuntu', 'Git', 'Bitbucket'],
  'Testing & QA': ['Selenium', 'Manual Testing', 'Automation Testing'],
  'Design & Docs': ['Figma', 'System Planning', 'Technical Documentation'],
}

export const learning = ['Microservices', 'Kubernetes', 'CI/CD', 'Cloud Deployment']

export const projects = [
  {
    name: 'Food Order — E-Commerce Web App',
    summary: 'Full-stack food ordering e-commerce platform with product listing, cart management, and order workflow.',
    features: ['Product listing & filtering', 'Shopping cart management', 'Order placement workflow', 'Responsive UI', 'Fast page loads'],
    stack: ['React', 'TailwindCSS', 'JavaScript'],
    highlights: 'Component-driven React architecture, clean state management, responsive design, deployed on Vercel.',
    challenge: 'Built a seamless cart and order flow with real-time UI updates without external state management libraries.',
    featured: false,
    live: 'https://foodorder-puce.vercel.app/',
    github: 'https://github.com/Romeoparajuli',
  },
  {
    name: 'CDMS — Cadet Data Management System',
    summary: 'Enterprise cadet management system for handling training, reports, attendance, and centralized records.',
    features: ['Role-based authentication', 'Dashboard analytics', 'Document management', 'REST API integration', 'Pagination & filtering', 'Responsive UI'],
    stack: ['Spring Boot', 'React', 'MySQL', 'Docker'],
    highlights: 'MVC architecture, JWT auth, normalized DB schema, server-side pagination, reusable component system.',
    challenge: 'Optimized large dataset retrieval using server-side pagination and efficient SQL query design.',
    featured: true,
  },
  {
    name: 'HRM System',
    summary: 'Human resource management platform for employee lifecycle, payroll, and attendance tracking.',
    features: ['Employee onboarding', 'Leave management', 'Payroll module', 'Role-based access', 'Reporting dashboard'],
    stack: ['Spring Boot', 'React', 'MySQL'],
    highlights: 'Clean layered architecture, DTO pattern, optimized relational schema.',
    challenge: 'Designed a flexible role-permission system that scales across departments without schema changes.',
    featured: true,
  },
  {
    name: 'Spring Boot REST API',
    summary: 'Production-ready RESTful API backend with authentication, pagination, and clean architecture.',
    features: ['JWT authentication', 'Server-side pagination', 'Global exception handling', 'DTO validation', 'Swagger docs'],
    stack: ['Spring Boot', 'MySQL', 'Docker'],
    highlights: 'Follows REST best practices, layered architecture, containerized with Docker.',
    challenge: 'Implemented generic pagination wrapper reusable across all resource endpoints.',
    featured: false,
  },
  {
    name: 'Pharmacy Management System',
    summary: 'Desktop-based pharmacy management system with inventory tracking, prescription management, and sales monitoring.',
    features: ['Inventory tracking', 'Prescription management', 'Sales monitoring', 'User authentication', 'Role-based access control', 'Real-time reporting module'],
    stack: ['Java', 'Swing', 'MySQL'],
    highlights: 'Desktop GUI built with Java Swing, normalized MySQL schema, role-based access control, and modular reporting system.',
    challenge: 'Implemented a real-time reporting module that aggregates sales and inventory data efficiently without performance degradation.',
    featured: false,
  },
  {
    name: 'Automation Testing Suite',
    summary: 'End-to-end automated test suite for web applications using Selenium WebDriver.',
    features: ['Page Object Model', 'Cross-browser testing', 'Test reporting', 'CI integration', 'Reusable test utilities'],
    stack: ['Selenium', 'Java', 'TestNG'],
    highlights: 'POM design pattern, data-driven testing, automated regression coverage.',
    challenge: 'Built a reusable driver factory supporting multiple browsers without code duplication.',
    featured: false,
  },
]

export const experience = [
  {
    role: 'Junior Full Stack Developer',
    company: 'Infoxit Pvt. Ltd.',
    companyUrl: 'https://infoxit.com.np',
    location: 'Butwal, Nepal',
    period: '2025 — Present',
    type: 'Full-time',
    points: [
      'Developing and maintaining scalable ERP modules (Accounting, CCI) using Java, Spring Boot, React, and MySQL',
      'Designing and optimizing RESTful APIs and database operations for enterprise business workflows',
      'Working on role-based enterprise systems with complex business logic in production environments',
      'Contributing to frontend UI implementation and backend architecture alongside senior developers',
      'Participating in debugging, testing, deployment, and system maintenance cycles',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'ORM/JPA', 'REST APIs', 'Docker', 'Git'],
  },
  {
    role: 'Software Development Intern',
    company: 'SynthBit Technologies',
    companyUrl: 'https://www.synthbitgroup.com',
    location: 'Nepal',
    period: '6-Month Internship',
    type: 'Internship',
    points: [
      'Developed full-stack enterprise application features using Spring Boot and React',
      'Worked on HRM systems — employee management, attendance, and payroll modules',
      'Designed and managed relational database schemas using MySQL and ORM/JPA',
      'Followed industry-standard coding practices, agile workflows, and team collaboration',
      'Gained hands-on experience in backend API development and frontend component architecture',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'ORM/JPA', 'HRM Systems'],
  },
  {
    role: 'Province Director & Head of IT and Communication',
    company: 'NCCAA Nepal',
    companyUrl: null,
    location: 'Nepal',
    period: 'Ongoing',
    type: 'Leadership',
    points: [
      'Leading IT operations, digital communication strategy, and technical infrastructure at provincial level',
      'Initiated digital transformation efforts including website development and social media management',
      'Planning and developing internal ERP systems for workflow automation and organizational management',
      'Coordinating technical activities and communication between departments',
      'Managing technical documentation, reporting, and digital campaigns for awareness programs',
    ],
    stack: ['ERP Planning', 'Web Development', 'Digital Strategy', 'Technical Documentation'],
  },
]

export const achievements = [
  {
    title: 'First Prize — Startup Idea Challenge',
    description: 'Awarded First Place for presenting an innovative startup concept focused on scalable digital solutions and real-world problem solving.',
    tags: ['Innovation', 'Entrepreneurship', 'Leadership'],
  },
  {
    title: 'Java Training — Deerwalk Institute',
    description: 'Completed professional Java training at Deerwalk Institute of Technology, covering core Java, OOP principles, and foundational backend development concepts.',
    tags: ['Java', 'OOP', 'Backend', 'Certified'],
  },
 
  {
    title: 'DevOps Training',
    description: 'Completed professional DevOps training covering Docker, containerization, Linux/Ubuntu environments, deployment workflows, and modern development pipelines.',
    tags: ['Docker', 'Linux', 'CI/CD', 'Deployment'],
  },
  {
    title: 'Cybersecurity Bootcamp',
    description: '7-day intensive bootcamp covering cybersecurity fundamentals, threat awareness, secure system practices, and digital safety concepts.',
    tags: ['Cybersecurity', 'Ethical Security', 'Risk Management'],
  },
]
