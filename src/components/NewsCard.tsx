import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  date,
  image,
  category,
  link
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
          <span className="text-sm text-gray-500">{date}</span>
          <span className="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a 
          href={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;