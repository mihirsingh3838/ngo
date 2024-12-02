import React from 'react';
import PageHeader from '../components/PageHeader';
import VolunteerForm from '../components/VolunteerForm';
import { Clock, Heart, Users, Award } from 'lucide-react';

const Volunteer = () => {
  return (
    <div>
      <PageHeader 
        title="Volunteer With Us" 
        subtitle="Join our mission to make a difference"
        backgroundImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Make an Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of dedicated volunteers and help us create positive change in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
            <p className="text-gray-600">Choose from various time slots that fit your schedule.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Make a Difference</h3>
            <p className="text-gray-600">Directly impact the lives of those in need in our community.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Join Our Team</h3>
            <p className="text-gray-600">Become part of a passionate community of volunteers.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Gain Experience</h3>
            <p className="text-gray-600">Learn new skills while helping others.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Volunteer Registration</h3>
            <VolunteerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;