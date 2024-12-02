import React from 'react';
import PageHeader from '../components/PageHeader';
import { Award, Users, Clock, Smile } from 'lucide-react';

const About = () => {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Making a difference in our community since 1995"
        backgroundImage="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                HopeServe NGO was founded in 1995 with a simple yet powerful mission: to ensure that no one in our community goes hungry or sleeps without shelter. What began as a small group of dedicated volunteers has grown into a comprehensive support network that serves thousands of individuals annually.
              </p>
              <p className="text-gray-600">
                Our organization brings together passionate volunteers, dedicated staff, and generous donors who share our vision of a world where everyone has access to life's basic necessities. We believe in the power of community and the impact that collective action can have on creating positive change.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">People Helped</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5K+</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">Committed to maintaining the highest standards in all our programs and services.</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Building strong relationships and fostering collaboration within our community.</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dedication</h3>
            <p className="text-gray-600">Available 24/7 to provide support and assistance to those in need.</p>
          </div>
          <div className="text-center">
            <Smile className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p className="text-gray-600">Treating everyone with dignity, respect, and understanding.</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
          <div className="space-y-4">
            <p className="text-gray-600">
              We take a holistic approach to addressing hunger and homelessness in our community. Our programs are designed to provide both immediate relief and long-term solutions, ensuring that we not only meet immediate needs but also work towards preventing future hardship.
            </p>
            <p className="text-gray-600">
              Through our various initiatives, we focus on:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Immediate food and shelter assistance</li>
              <li>Long-term housing solutions</li>
              <li>Job training and employment support</li>
              <li>Mental health and counseling services</li>
              <li>Community education and advocacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;