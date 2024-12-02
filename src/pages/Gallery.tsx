import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import GalleryImage from '../components/GalleryImage';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'events', 'projects', 'community', 'volunteers'];

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Food Distribution Event',
      category: 'events'
    },
    {
      src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Emergency Shelter',
      category: 'projects'
    },
    {
      src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Community Gathering',
      category: 'community'
    },
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Volunteer Training',
      category: 'volunteers'
    },
    {
      src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Mobile Kitchen',
      category: 'projects'
    },
    {
      src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      alt: 'Community Event',
      category: 'events'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div>
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Capturing moments of hope and impact"
        backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A visual journey through our mission, events, and community impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full capitalize ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;