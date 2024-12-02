import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Heart, Home, Info, History, Project, DollarSign, Newspaper, Image, Users, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8" />
            <span className="font-bold text-xl">HopeServe NGO</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
            <Link to="/mission" className="hover:bg-blue-700 px-3 py-2 rounded">Mission</Link>
            <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded">About</Link>
            <Link to="/projects" className="hover:bg-blue-700 px-3 py-2 rounded">Projects</Link>
            <Link to="/donate" className="hover:bg-blue-700 px-3 py-2 rounded">Donate</Link>
            <Link to="/news" className="hover:bg-blue-700 px-3 py-2 rounded">News</Link>
            <Link to="/gallery" className="hover:bg-blue-700 px-3 py-2 rounded">Gallery</Link>
            <Link to="/volunteer" className="hover:bg-blue-700 px-3 py-2 rounded">Volunteer</Link>
            <Link to="/contact" className="hover:bg-blue-700 px-3 py-2 rounded">Contact</Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-blue-700"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded hover:bg-blue-700">Home</Link>
            <Link to="/mission" className="block px-3 py-2 rounded hover:bg-blue-700">Mission</Link>
            <Link to="/about" className="block px-3 py-2 rounded hover:bg-blue-700">About</Link>
            <Link to="/projects" className="block px-3 py-2 rounded hover:bg-blue-700">Projects</Link>
            <Link to="/donate" className="block px-3 py-2 rounded hover:bg-blue-700">Donate</Link>
            <Link to="/news" className="block px-3 py-2 rounded hover:bg-blue-700">News</Link>
            <Link to="/gallery" className="block px-3 py-2 rounded hover:bg-blue-700">Gallery</Link>
            <Link to="/volunteer" className="block px-3 py-2 rounded hover:bg-blue-700">Volunteer</Link>
            <Link to="/contact" className="block px-3 py-2 rounded hover:bg-blue-700">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;