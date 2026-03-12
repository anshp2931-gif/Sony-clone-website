import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-black text-white">
            {/* Top Utility Bar */}
            <div className="flex justify-end items-center px-4 py-1 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer border-b border-gray-800">
                Sony Sites
            </div>

            {/* Main Navbar */}
            <div className="flex items-center justify-between px-4 py-4 md:px-8">
                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-3xl font-serif font-bold tracking-wider">SONY</Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex space-x-6">
                        <Link to="/tv-home-cinema" className="hover:text-blue-400 transition-colors font-semibold">TV & Home Cinema</Link>
                        <Link to="/audio" className="hover:text-blue-400 transition-colors font-semibold">Audio</Link>
                        <Link to="#" className="hover:text-blue-400 transition-colors font-semibold">Cameras</Link>
                        <Link to="#" className="hover:text-blue-400 transition-colors font-semibold">PlayStation</Link>
                        <Link to="#" className="hover:text-blue-400 transition-colors font-semibold">Support</Link>
                    </nav>
                </div>

                <div className="flex items-center space-x-4">
                    <Search className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                    <User className="w-6 h-6 hidden md:block hover:text-blue-400 cursor-pointer" />
                    <Link to="/login" className="hidden md:block hover:text-blue-400 font-semibold cursor-pointer text-sm">Sign In / Register</Link>
                    <ShoppingCart className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black text-white px-4 pb-4 space-y-4">
                    <Link to="/tv-home-cinema" className="block text-lg font-semibold hover:text-blue-400">TV & Home Cinema</Link>
                    <Link to="/audio" className="block text-lg font-semibold hover:text-blue-400">Audio</Link>
                    <Link to="#" className="block text-lg font-semibold hover:text-blue-400">Cameras</Link>
                    <Link to="#" className="block text-lg font-semibold hover:text-blue-400">PlayStation</Link>
                    <Link to="#" className="block text-lg font-semibold hover:text-blue-400">Support</Link>
                    <div className="bg-gray-800 h-px w-full my-4"></div>
                    <Link to="/login" className="block text-lg font-semibold hover:text-blue-400">Sign In / Register</Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
