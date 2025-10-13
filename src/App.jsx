import React, { useState } from 'react';
import { Database, TrendingUp, Cpu, Users, Layers, Code, Github, Linkedin, Mail, GraduationCap, Briefcase, FileText } from 'lucide-react';

// --- Icon Mapping for Skills Section ---
const skillIcons = {
  'SQL': <Database className="w-6 h-6 text-blue-400" />,
  'Python': <Code className="w-6 h-6 text-yellow-400" />,
  'ETL/ELT': <Layers className="w-6 h-6 text-green-400" />,
  'Power BI': <TrendingUp className="w-6 h-6 text-indigo-400" />,
  'Airflow': <Cpu className="w-6 h-6 text-orange-400" />,
  'Cloud': <Users className="w-6 h-6 text-gray-400" />,
  'Snowflake': <Database className="w-6 h-6 text-blue-300" />,
  'Tableau': <TrendingUp className="w-6 h-6 text-pink-400" />,
};

// --- REAL DATA: Professional Experience ---
const experienceData = [
  {
    title: 'Trainee Consultant (Analytics Focus)',
    company: 'Esoft Labs Pvt Ltd, Hyderabad',
    years: 'Jun 2023 - Oct 2024',
    details: [
      'Built **ETL workflows in ADF & SSIS**, migrating multi-terabyte datasets into **Azure Synapse** for scalable analytics.',
      'Optimized **T-SQL/PL-SQL queries**, improving reporting speed by **30%** and enabling high-availability BI dashboards.',
      'Designed analytical data marts and stored procedures, supporting business reporting for multiple units.',
      'Implemented data integrity checks, reconciling ERP and logistics systems for a single source of truth.',
    ],
  },
  {
    title: 'Full Stack Developer (Data Engineering Focus)',
    company: 'SocialTek AI ML Business Solutions, Hyderabad',
    years: 'Jan 2022 - Jan 2023',
    details: [
      'Enhanced SQL queries and indexing, reducing report load times by **20%**.',
      'Automated data cleansing and ingestion routines using **Python (Pandas)**, improving data reliability.',
      'Supported data lake onboarding and streamlined reporting workflows, reducing time-to-market for new reports by **15%**.',
    ],
  },
  {
    title: 'Full Stack Developer Intern (Database Focus)',
    company: 'SocialTek AI ML Business Solutions, Hyderabad',
    years: 'Jun 2021 - Dec 2021',
    details: [
      'Contributed to **SQL Server schema design** and stored procedure development for a high-volume retail client.',
      'Assisted with ETL tasks and documentation, supporting delivery of client-ready reporting systems.',
    ],
  },
];


// --- REAL DATA: Education Section ---
const educationData = [
  {
    institution: 'Sreyas Institute of Engineering and Technology, Hyderabad',
    degree: 'B.Tech in Computer Science and Engineering',
    years: '2016 - 2020',
    details: ['Relevant coursework in Database Management Systems and Algorithms.'],
  },
];

// --- REAL DATA: Projects Section (Updated with longDescription for Case Study Modal) ---
const projectsData = [
  {
    title: 'Query Optimization for Dashboard Performance',
    description: 'Refactored reporting queries, improving dashboard performance by an impressive **80%**, showcasing expertise in SQL performance tuning and indexing.',
    skills: ['T-SQL', 'Indexing', 'Performance Tuning', 'SQL Server'],
    link: 'https://github.com/LavanSajjan/sql-optimization', // Use a dedicated repo for this
    longDescription: '### Problem & Solution\n\nThe executive dashboard, crucial for daily decision-making, suffered from load times exceeding 40 seconds due to inefficient legacy T-SQL stored procedures. This high latency directly impacted user satisfaction and adoption.\n\nMy solution involved a comprehensive rewrite of over 15 procedures. I replaced complex, multi-level nested subqueries with structured **Common Table Expressions (CTEs)** and utilized the **Query Execution Plan** tool to pinpoint bottlenecks. I then implemented strategic **non-clustered indexes** on frequently joined foreign key columns, significantly reducing disk I/O.\n\n### Results\n\nThis optimization effort reduced the average query execution time to under 8 seconds, achieving an **80% improvement** in dashboard load time and stabilizing the reporting environment for critical stakeholders.',
  },
  {
    title: 'Cloud Migration & ETL Pipeline Construction',
    description: 'Built **ADF pipelines** to ingest inbound, shipment, and inventory data into **Azure Synapse**, demonstrating skills in cloud data integration and warehousing.',
    skills: ['Azure Synapse', 'ADF', 'ETL/ELT', 'Cloud'],
    link: 'https://github.com/LavanSajjan/azure-synapse-etl', // Use a dedicated repo for this
    longDescription: '### Challenge\n\nThe organization needed to migrate from an on-premise data warehouse to a scalable, cost-effective cloud solution to handle growing multi-terabyte datasets.\n\n### Implementation\n\nI architected and built the entire data ingestion process using **Azure Data Factory (ADF)**. The pipeline handles three types of data: inbound, shipment, and inventory. It performs **incremental data loading**, robust error logging, and schema enforcement before loading the data into dedicated pools within **Azure Synapse Analytics**. This ensured data governance and scalability from the start.\n\n### Outcome\n\nThe project successfully enabled the decommissioning of legacy infrastructure and provided the BI team with a high-performance, centralized platform for scalable analytics.',
  },
  {
    title: 'Supply Chain Data Modeling & Governance',
    description: 'Designed relational schemas to track KPIs for order processing and consolidation. Developed validation routines ensuring entity-level accuracy across ERP-WMS systems.',
    skills: ['Data Modeling', 'Data Governance', 'PostgreSQL', 'Normalization'],
    link: 'https://github.com/LavanSajjan/supply-chain-schema', // Use a dedicated repo for this
    longDescription: '### Project Scope\n\nEnsuring data accuracy across disparate Enterprise Resource Planning (ERP) and Warehouse Management Systems (WMS) was critical for accurate supply chain reporting.\n\n### Methodology\n\nI led the design of a normalized relational schema in **PostgreSQL** that served as the central data mart for supply chain KPIs. Key steps included defining facts (e.g., Order Status, Shipment Volume) and dimensions (e.g., Warehouse, Product).\n\nCrucially, I developed and implemented **data validation routines** to automatically check for referential integrity and consistency errors between the two source systems, ensuring entity-level accuracy and providing stakeholders with a trusted view of the supply chain.',
  },
];

// --- Utility Components ---

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-bold text-white mb-10 border-b-4 border-blue-600 pb-2 inline-block">
    {children}
  </h2>
);

// --- New Component: ProjectModal (Case Study Pop-up) ---
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    // Fixed overlay for the modal
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-95 p-4 overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-full overflow-y-auto transform transition-all duration-300" 
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="p-8">
          <div className="flex justify-between items-start border-b border-gray-700 pb-4 mb-4">
            <h2 className="text-3xl font-bold text-blue-300">{project.title}</h2>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-white transition p-1"
              aria-label="Close Case Study"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div className="space-y-6 text-gray-300">
            
            <h3 className="text-xl font-semibold text-white">Summary</h3>
            <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: project.description }} />
            
            <h3 className="text-xl font-semibold text-white pt-2 border-t border-gray-700">In-Depth Case Study</h3>
            <div className="text-gray-400 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: project.longDescription }} />

            <h3 className="text-xl font-semibold text-white pt-2 border-t border-gray-700">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map(skill => (
                <span key={skill} className="bg-blue-900 text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 font-semibold text-white rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              View Code on GitHub
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Navigation Bar Component ---
const NavBar = () => {
  const navItems = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-blue-500 hover:text-blue-400 transition">
            Lavan Sajjan
          </a>
          <div className="flex space-x-6">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-gray-300 hover:text-blue-400 font-medium transition duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};


// --- Header Component (UPDATED with Profile Picture) ---

const Header = () => (
  <header id="home" className="py-20 px-6 bg-gray-800 shadow-xl rounded-b-xl"> 
    <div className="max-w-4xl mx-auto text-center">
      {/* Profile Picture / Avatar */}
      <img
        src="https://placehold.co/128x128/1d2d44/ffffff?text=LS"
        alt="Lavan Sajjan Profile Picture"
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500 shadow-2xl"
        // Replace the src above with your actual image URL!
      />

      <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight">Lavan Sajjan</h1>
      <p className="text-xl text-blue-300 font-medium mb-6">SQL Developer | Data Engineer | Data Analyst</p>
      
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Aspiring Data Engineer / Data Analyst with 2.5+ years of experience in **ETL pipeline design**, **cloud data solutions (Azure Synapse, ADF)**, and analytics. Skilled in **SQL, Python, and Snowflake**, with proven success optimizing query performance up to **80%**.
      </p>

      <a
        href="/lavansajjan.pdf"
        className="inline-flex items-center px-8 py-3 bg-blue-600 font-semibold text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        download
      >
        📄 Download Resume
      </a>
    </div>
  </header>
);


// --- Skills Component ---

const Skills = () => {
  const skillsList = [
    'Azure Synapse', 'Snowflake', 'ADF', 'Azure SQL', 'SQL Server', 'SSIS', 
    'T-SQL', 'PL/SQL', 'Python (Pandas/PySpark)', 'ETL/ELT Pipeline Design', 
    'Query Optimization', 'Power BI', 'SSRS', 'Data Modeling', 'ERP-WMS Integration'
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsList.map(skill => (
            <div 
              key={skill} 
              className="flex items-center bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition duration-300"
            >
              {skillIcons[skill.split(' ')[0]] || <Code className="w-6 h-6 text-pink-400" />}
              <span className="ml-4 text-lg font-semibold text-gray-200">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Work Experience Component ---
const Experience = () => (
    <section id="experience" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
            <SectionTitle>Work Experience</SectionTitle>
            <div className="space-y-12">
                {experienceData.map((item, index) => (
                    <div key={index} className="flex flex-col bg-gray-700 p-6 rounded-xl shadow-xl border-l-4 border-blue-500">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="text-2xl font-bold text-white flex items-center">
                                    <Briefcase className="w-5 h-5 mr-2 text-blue-400" />
                                    {item.title}
                                </h3>
                                <p className="text-lg text-blue-300 font-semibold mt-1">{item.company}</p>
                            </div>
                            <span className="text-sm font-semibold text-gray-400 bg-gray-600 px-3 py-1 rounded-full">{item.years}</span>
                        </div>
                        <ul className="list-disc list-outside ml-6 text-gray-300 space-y-2">
                            {item.details.map((detail, dIndex) => (
                                <li key={dIndex} dangerouslySetInnerHTML={{ __html: detail }} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// --- Education Component ---

const Education = () => (
    <section id="education" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
            <SectionTitle>Education & Certifications</SectionTitle>
            <div className="space-y-12">
                {educationData.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row bg-gray-800 p-6 rounded-xl shadow-xl border-l-4 border-blue-600">
                        <div className="flex-shrink-0 w-full sm:w-1/4 mb-4 sm:mb-0 sm:pr-6">
                            <p className="text-sm font-semibold text-gray-400">{item.years || 'N/A'}</p>
                            <h4 className="text-xl font-bold text-white mt-1 flex items-center">
                                <GraduationCap className="w-5 h-5 mr-2 text-blue-400" />
                                {item.degree}
                            </h4>
                        </div>
                        <div className="sm:border-l sm:border-gray-700 sm:pl-6">
                            <h3 className="text-2xl font-semibold text-blue-300 mb-2">{item.institution}</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                {item.details.map((detail, dIndex) => (
                                    <li key={dIndex}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
             <div className="mt-12 text-center">
                <p className="text-lg text-gray-400">
                    * Include specific Certifications here, such as **AWS Data Analytics** or **Microsoft Azure Data Engineer**!
                </p>
             </div>
        </div>
    </section>
);


// --- Projects Component (Updated to use modal) ---
const Projects = ({ openModal }) => (
  <section id="projects" className="py-20 px-6 bg-gray-800">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>Key Projects & Achievements</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-700 p-6 rounded-xl shadow-2xl flex flex-col h-full hover:shadow-blue-500/50 transition duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-blue-400" /> {project.title}
            </h3>
            <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
            
            <div className="mb-4">
              {project.skills.map(skill => (
                <span key={skill} className="inline-block bg-blue-900 text-blue-200 text-xs font-medium mr-2 mt-2 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between mt-auto pt-4 border-t border-gray-600">
                <button 
                    onClick={() => openModal(project)}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition font-semibold"
                >
                    <FileText className="w-4 h-4 mr-1" />
                    View Case Study
                </button>
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition font-semibold"
                    aria-label={`View code for ${project.title}`}
                >
                    <Github className="w-4 h-4 mr-1" />
                    View Code
                </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Contact Section ---
const Contact = () => (
    <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
            <SectionTitle>Get In Touch</SectionTitle>
            <p className="text-gray-400 mb-10 text-lg">
                I am actively seeking new data engineering and analytics opportunities. Feel free to connect with me!
            </p>
            <div className="flex justify-center space-x-8">
                <a 
                    href="mailto:sajjan.lavan96@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 transition transform hover:scale-110 flex flex-col items-center"
                    aria-label="Email Lavan Sajjan"
                >
                    <Mail className="w-10 h-10 mb-2" />
                    <span className="text-sm">Email</span>
                </a>
                <a 
                    href="https://linkedin.com/in/lavansajjan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition transform hover:scale-110 flex flex-col items-center"
                    aria-label="LinkedIn profile"
                >
                    <Linkedin className="w-10 h-10 mb-2" />
                    <span className="text-sm">LinkedIn</span>
                </a>
                <a 
                    href="https://github.com/LavanSajjan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition transform hover:scale-110 flex flex-col items-center"
                    aria-label="GitHub profile"
                >
                    <Github className="w-10 h-10 mb-2" />
                    <span className="text-sm">GitHub</span>
                </a>
            </div>
        </div>
    </section>
);


export default function App() {
  // State to manage the currently selected project for the modal
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <NavBar />
      <Header />
      
      <main className="pt-8">
        <Skills />
        <Experience /> 
        <Education />
        {/* Pass the state setter to the Projects component */}
        <Projects openModal={setSelectedProject} /> 
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 bg-gray-900 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Lavan Sajjan. Built with React & Tailwind CSS.</p>
      </footer>

      {/* Conditionally render the modal when a project is selected */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
