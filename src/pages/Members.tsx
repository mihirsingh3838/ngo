import React from 'react';
import PageHeader from '../components/PageHeader';
import MemberCard from '../components/MemberCard';

const Members = () => {
  const members = [
    {
      name: 'Sarah Johnson',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      bio: 'Sarah has been leading our organization for over 10 years, bringing extensive experience in nonprofit management and community development.',
      linkedin: 'https://linkedin.com',
      email: 'sarah@hopeserve.org'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      bio: 'Michael oversees our daily operations and ensures the smooth running of our food distribution and shelter programs.',
      linkedin: 'https://linkedin.com',
      email: 'michael@hopeserve.org'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Volunteer Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      bio: 'Emily manages our volunteer program and coordinates community outreach initiatives.',
      linkedin: 'https://linkedin.com',
      email: 'emily@hopeserve.org'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Team" 
        subtitle="Meet the dedicated individuals behind our mission"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals who lead our organization and drive our mission forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;