import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Food Distribution Network',
      description: 'Establishing food banks and distribution centers across the city to provide nutritious meals to those in need.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      impact: 'Served over 50,000 meals in the last year',
      link: '/projects/food-distribution'
    },
    {
      title: 'Emergency Shelter Program',
      description: 'Providing safe and comfortable temporary housing for individuals and families experiencing homelessness.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      impact: 'Sheltered 1,000+ individuals in 2023',
      link: '/projects/emergency-shelter'
    },
    {
      title: 'Mobile Kitchen Initiative',
      description: 'Bringing hot meals directly to underserved areas and communities with limited access to food resources.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      impact: 'Reaches 15 communities weekly',
      link: '/projects/mobile-kitchen'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Projects" 
        subtitle="Making a difference through action"
        backgroundImage="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Current Initiatives</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our projects focus on providing immediate relief while building sustainable solutions for long-term impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;