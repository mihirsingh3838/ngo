import React from 'react';
import PageHeader from '../components/PageHeader';
import DonationForm from '../components/DonationForm';
import { Heart, Shield, Clock } from 'lucide-react';

const Donate = () => {
  return (
    <div>
      <PageHeader 
        title="Make a Donation" 
        subtitle="Your support changes lives"
        backgroundImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous donation helps us provide food, shelter, and support to those in need. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
            <p className="text-gray-600">Your donation directly supports our programs and helps those in need.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Donation</h3>
            <p className="text-gray-600">All transactions are processed securely through our trusted payment partners.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Immediate Help</h3>
            <p className="text-gray-600">Your donation is put to work immediately to help those in need.</p>
          </div>
        </div>

        <DonationForm />
      </div>
    </div>
  );
};

export default Donate;