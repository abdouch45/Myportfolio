import React from 'react';
import '../Styles/Project.css'



const projectss = [
  {
    title: 'E-commerce Platform',
    description: 'A full-fledged e-commerce platform with product listings, shopping cart, and payment processing.',
    screenshot: 'ecommerce-screenshot.jpg',
    demoLink: 'https://ecommerce-demo.example.com',
    repoLink: 'https://github.com/example/ecommerce-platform',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Social Media App',
    description: 'A social media application where users can post updates, follow others, and interact with posts.',
    screenshot: 'social-media-screenshot.jpg',
    demoLink: 'https://social-media-demo.example.com',
    repoLink: 'https://github.com/example/social-media-app',
    technologies: [],
  },
  {
    title: 'Healthcare App',
    description: 'App to replce traditional prescription and heathcare record and pharmacies online meds orders.',
    screenshot: 'img1.jpg',
    demoLink: '',
    repoLink: 'https://github.com/abdouch45/precriplink',
    technologies: ['flutter', 'laravel', 'mySql'],
  },
  {
    title: 'University absences management system',
    description: 'web site that manages students absences and justification',
    screenshot: 'im3.jpg',
    demoLink: '',
    repoLink: 'https://github.com/abdouch45/class-companion',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
];
const ProjectShowcase = () => {
  return (
    <div className="project-showcase">
      <h2>Project Showcase</h2>
      {projectss.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.screenshot} alt={`Screenshot of ${project.title}`} />
          <div>
            <strong>Technologies used:</strong> {project.technologies.join(', ')}
          </div>
          <div>
            <strong>Demo:</strong>{' '}
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
          <div>
            <strong>Repository:</strong>{' '}
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;