import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="relative group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
            {alt}
          </p>
        </div>
        <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={src} 
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
};

export default GalleryImage;