import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Find a Store</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Retail Locations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Sony Center</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Online Help</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Track Repair Status</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Locate Service Centres</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">In the News</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Press Releases</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Latest News</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Newsletter Subscription</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
                <p>Copyright © 2026 Sony India. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
