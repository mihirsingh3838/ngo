import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hope Starts Here</h1>
            <p className="text-xl md:text-2xl mb-8">Providing food and shelter to those in need</p>
            <a 
              href="/donate" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center"
            >
              Donate Now
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">50,000+</h3>
              <p className="mt-2 text-gray-600">Meals Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">1,000+</h3>
              <p className="mt-2 text-gray-600">People Sheltered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">5,000+</h3>
              <p className="mt-2 text-gray-600">Volunteers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Programs */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Food Distribution"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Food Distribution</h3>
                <p className="text-gray-600">Providing nutritious meals to those in need through our network of food banks and mobile kitchens.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Emergency Shelter"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Emergency Shelter</h3>
                <p className="text-gray-600">Providing safe and warm temporary housing for individuals and families experiencing homelessness.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Education Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Education Support</h3>
                <p className="text-gray-600">Empowering through education with our after-school programs and skill development initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-xl mb-8">Join us in our mission to create a world where no one goes hungry or homeless.</p>
          <div className="space-x-4">
            <a href="/volunteer" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold inline-block hover:bg-gray-100">
              Volunteer With Us
            </a>
            <a href="/donate" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold inline-block hover:bg-white hover:text-blue-600">
              Support Our Cause
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;