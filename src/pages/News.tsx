import React from 'react';
import PageHeader from '../components/PageHeader';
import NewsCard from '../components/NewsCard';

const News = () => {
  const newsItems = [
    {
      title: 'New Food Distribution Center Opens',
      excerpt: 'Expanding our reach with a new facility capable of serving 1,000 additional families per week.',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Expansion',
      link: '/news/new-distribution-center'
    },
    {
      title: 'Annual Fundraising Gala Success',
      excerpt: 'Community comes together to raise over $500,000 for homeless shelter programs.',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Events',
      link: '/news/fundraising-gala'
    },
    {
      title: 'Mobile Kitchen Program Milestone',
      excerpt: 'Celebrating 100,000 meals served through our mobile kitchen initiative.',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'Achievement',
      link: '/news/mobile-kitchen-milestone'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="News & Updates" 
        subtitle="Stay informed about our latest initiatives and impact"
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest News</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep up with our latest news, achievements, and upcoming events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;