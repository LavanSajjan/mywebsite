import React from 'react';
import { Database, TrendingUp, Cpu, Users, Layers, Code } from 'lucide-react';

// --- Icon Mapping for Skills Section ---
const skillIcons = {
  'SQL': <Database className="w-6 h-6 text-blue-400" />,
  'Python': <Code className="w-6 h-6 text-yellow-400" />,
  'ETL/ELT': <Layers className="w-6 h-6 text-green-400" />,
  'Power BI': <TrendingUp className="w-6 h-6 text-indigo-400" />,
  'Airflow': <Cpu className="w-6 h-6 text-orange-400" />,
  'Cloud': <Users className="w-6 h-6 text-gray-400" />,
};

// --- Dummy Data for Projects Section ---
const projectsData = [
  {
    title: 'ETL Pipeline for E-commerce Analytics',
    description: 'Designed and implemented a modular ETL pipeline using Python (Pandas) and PostgreSQL to ingest raw sales data, clean inconsistent records, and load into a normalized data warehouse for real-time reporting.',
    skills: ['Python', 'PostgreSQL', 'ETL', 'Data Modeling'],
    link: '#', // Replace with your GitHub repo link
  },
  {
    title: 'Advanced SQL Performance Tuning',
    description: 'Optimized 10+ legacy T-SQL stored procedures on a critical dashboard database by refactoring inefficient joins and adding strategic indexing, resulting in a 45% reduction in query execution time.',
    skills: ['T-SQL', 'Indexing', 'Performance Tuning', 'SQL Server'],
    link: '#', // Replace with your GitHub repo link
  },
  {
    title: 'Churn Prediction Data Analysis',
    description: 'Conducted exploratory data analysis (EDA) and built a predictive model in a Jupyter environment to identify customer churn risk factors. Visualized key insights using Power BI.',
    skills: ['Data Analysis', 'Python (Scikit-learn)', 'Power BI', 'Statistical Modeling'],
    link: '#', // Replace with your GitHub repo link
  },
];

// --- Components ---

const Header = () => (
  <header className="py-16 px-6 bg-gray-800 shadow-xl rounded-b-xl">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight">Lavan Sajjan</h1>
      <p className="text-xl text-blue-300 font-medium mb-6">SQL Developer | Data Engineer | Data Analyst</p>
      
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Building and optimizing data infrastructure to drive informed business decisions. Expertise in advanced SQL, ETL automation, and scalable data warehousing solutions.
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

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-bold text-white mb-10 border-b-4 border-blue-600 pb-2 inline-block">
    {children}
  </h2>
);

const Skills = () => {
  const skillsList = [
    'SQL', 'Python', 'ETL/ELT', 'Data Modeling', 'Airflow', 
    'PostgreSQL', 'T-SQL', 'Power BI', 'Tableau', 'Cloud', 
    'Snowflake', 'DWH'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsList.map(skill => (
            <div 
              key={skill} 
              className="flex items-center bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition duration-300"
            >
              {skillIcons[skill] || <Code className="w-6 h-6 text-pink-400" />}
              <span className="ml-4 text-lg font-semibold text-gray-200">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="py-20 px-6 bg-gray-800">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>Featured Projects</SectionTitle>
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

            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto self-start text-blue-400 hover:text-blue-300 transition font-semibold flex items-center"
            >
              View Repository 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);


export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main className="pt-8">
        <Skills />
        <Projects />
      </main>

      <footer className="py-8 text-center text-gray-500 bg-gray-900 border-t border-gray-800">
        <p>Connect with Lavan Sajjan | Portfolio built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
