import React from 'react';
import PageHeader from '../components/PageHeader';

const Timeline = () => {
  const milestones = [
    {
      year: '1995',
      title: 'Foundation',
      description: 'HopeServe NGO was established by a group of community leaders.'
    },
    {
      year: '2000',
      title: 'First Food Bank',
      description: 'Opened our first food bank serving 100 families per week.'
    },
    {
      year: '2005',
      title: 'Shelter Program',
      description: 'Launched our emergency shelter program with 50 beds.'
    },
    {
      year: '2010',
      title: 'Education Initiative',
      description: 'Started after-school programs for underprivileged children.'
    },
    {
      year: '2015',
      title: 'Mobile Kitchen',
      description: 'Launched mobile food service reaching remote areas.'
    },
    {
      year: '2020',
      title: 'Crisis Response',
      description: 'Expanded services during global pandemic.'
    }
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
      {milestones.map((milestone, index) => (
        <div key={index} className={`relative ${index % 2 === 0 ? 'pr-8 md:ml-auto md:pl-8 md:pr-0 md:w-1/2' : 'pl-8 md:mr-auto md:pr-8 md:pl-0 md:w-1/2'} mb-8`}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="absolute top-6 -mt-1.5 rounded-full bg-blue-600 border-4 border-white h-4 w-4 
              ${index % 2 === 0 ? 'right-0 md:-right-6' : 'left-0 md:-left-6'}"></div>
            <span className="text-blue-600 font-bold">{milestone.year}</span>
            <h3 className="text-xl font-bold mt-1">{milestone.title}</h3>
            <p className="text-gray-600 mt-2">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const History = () => {
  return (
    <div>
      <PageHeader 
        title="Our History" 
        subtitle="A journey of hope and impact since 1995"
        backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to a comprehensive support network, our history is marked by continuous growth and unwavering commitment to serving those in need.
          </p>
        </div>

        <Timeline />

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Looking to the Future</h3>
          <div className="space-y-4">
            <p className="text-gray-600">
              As we look ahead, we remain committed to our founding principles while adapting to meet the evolving needs of our community. Our future initiatives focus on:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Expanding our reach to underserved areas</li>
              <li>Implementing innovative solutions to combat hunger</li>
              <li>Developing sustainable housing programs</li>
              <li>Strengthening community partnerships</li>
              <li>Enhancing volunteer engagement programs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;