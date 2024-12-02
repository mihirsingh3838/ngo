import React from 'react';
import PageHeader from '../components/PageHeader';
import { Target, Heart, Users, Globe } from 'lucide-react';

const Mission = () => {
  return (
    <div>
      <PageHeader 
        title="Our Mission" 
        subtitle="Creating a world where no one goes hungry or homeless"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that every person deserves dignity, respect, and access to basic necessities.
            Our mission is driven by compassion and sustained through dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Purpose</h3>
            <p className="text-gray-600">Dedicated to eliminating hunger and homelessness through immediate action and long-term solutions.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Compassion</h3>
            <p className="text-gray-600">Treating everyone with dignity and respect while providing care and support.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Building strong communities through collaboration and mutual support.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Impact</h3>
            <p className="text-gray-600">Creating lasting change through sustainable programs and initiatives.</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
          <div className="space-y-4">
            <p className="text-gray-600">
              We are committed to providing immediate relief while working towards long-term solutions to end hunger and homelessness. Our approach combines direct assistance with advocacy and education to create lasting change.
            </p>
            <p className="text-gray-600">
              Through our network of food banks, shelters, and community partners, we work tirelessly to ensure that no one in our community goes without basic necessities. We believe that access to food and shelter is not just a privilege, but a fundamental human right.
            </p>
            <p className="text-gray-600">
              Our mission extends beyond providing immediate relief. We work to address the root causes of poverty and homelessness through education, job training, and advocacy programs. By empowering individuals with the tools and resources they need, we help create pathways to self-sufficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;