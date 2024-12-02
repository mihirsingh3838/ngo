import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  image,
  bio,
  linkedin,
  email
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-4">
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`}
              className="text-gray-600 hover:text-blue-600"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;