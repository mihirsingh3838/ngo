import React, { useState } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

const DonationForm = () => {
  const [amount, setAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const predefinedAmounts = ['10', '25', '50', '100'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', {
      amount: amount === 'custom' ? customAmount : amount,
      donorName,
      email
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-8">
        <label className="block text-gray-700 font-semibold mb-4">Select Amount</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {predefinedAmounts.map((value) => (
            <button
              key={value}
              type="button"
              className={`p-4 rounded-lg border-2 ${
                amount === value 
                  ? 'border-blue-600 bg-blue-50 text-blue-600' 
                  : 'border-gray-200 hover:border-blue-600'
              }`}
              onClick={() => setAmount(value)}
            >
              <DollarSign className="w-6 h-6 mx-auto mb-1" />
              ${value}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 mb-2">Custom Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              className="w-full pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => {
                setAmount('custom');
                setCustomAmount(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 flex items-center justify-center"
      >
        <CreditCard className="mr-2" />
        Proceed to Payment
      </button>
    </form>
  );
};

export default DonationForm;