import React from 'react';
import { ChevronRight } from 'lucide-react';

const TvHomeCinema = () => {
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <div className="relative w-full h-[500px] bg-[#1a1a1a] flex items-center overflow-hidden">
                <img
                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY25_XR80M2_Primary_image?$primaryshotPreset$&fmt=png-alpha"
                    alt="Sony BRAVIA TV"
                    className="absolute right-0 h-full w-auto object-contain object-right px-8 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="relative z-10 px-8 md:px-16 max-w-xl">
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-3">TVs & Home Cinema</p>
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">BRAVIA</h1>
                    <p className="text-gray-300 text-lg mb-8">Discover reality with our best TVs.</p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        Shop All TVs
                    </button>
                </div>
            </div>

            {/* Navigation sub-menu */}
            <div className="border-b border-gray-200 bg-white sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto flex space-x-8 py-4 text-sm font-semibold whitespace-nowrap">
                    <a href="#" className="text-black border-b-2 border-black pb-1">All Televisions</a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">OLED</a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">Mini LED</a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">Full Array LED</a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">Soundbars</a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">Google TV</a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Featured TV Products */}
                <h2 className="text-3xl font-bold mb-10">Featured Televisions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* OLED - A80L */}
                    <div className="group cursor-pointer border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-[#f5f5f5] p-6 h-56 flex items-center justify-center">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY23_A80L_Primary-Image-1?$primaryshotPreset$&fmt=png-alpha"
                                alt="BRAVIA XR A80L OLED TV"
                                className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">OLED | BRAVIA XR</p>
                            <h3 className="font-bold text-lg mb-1 flex items-center group-hover:text-[#0052cc] transition-colors">
                                A80L <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-gray-500 text-sm">Infinite contrast, pure black</p>
                        </div>
                    </div>

                    {/* X90L - Mini LED */}
                    <div className="group cursor-pointer border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-[#f5f5f5] p-6 h-56 flex items-center justify-center">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY23_X90L_Primary-Image-1?$primaryshotPreset$&fmt=png-alpha"
                                alt="BRAVIA XR X90L TV"
                                className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Mini LED | BRAVIA XR</p>
                            <h3 className="font-bold text-lg mb-1 flex items-center group-hover:text-[#0052cc] transition-colors">
                                X90L <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-gray-500 text-sm">Extraordinary brightness</p>
                        </div>
                    </div>

                    {/* BRAVIA 8 II */}
                    <div className="group cursor-pointer border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-[#f5f5f5] p-6 h-56 flex items-center justify-center">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY25_BRAVIA8II_HP_4span_D?$promotionTilesDesktop4span$&fmt=png-alpha"
                                alt="BRAVIA 8 II TV"
                                className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">OLED | New</p>
                            <h3 className="font-bold text-lg mb-1 flex items-center group-hover:text-[#0052cc] transition-colors">
                                BRAVIA 8 II <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-gray-500 text-sm">Next-level picture quality</p>
                        </div>
                    </div>

                    {/* BRAVIA 5 */}
                    <div className="group cursor-pointer border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-[#f5f5f5] p-6 h-56 flex items-center justify-center">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY25_BRAVIA5_Primary_image-1?$primaryshotPreset$&fmt=png-alpha"
                                alt="BRAVIA 5 TV"
                                className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Full Array LED | New</p>
                            <h3 className="font-bold text-lg mb-1 flex items-center group-hover:text-[#0052cc] transition-colors">
                                BRAVIA 5 <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-gray-500 text-sm">Big entertainment, easy to love</p>
                        </div>
                    </div>

                </div>

                {/* Highlighted Product: BRAVIA XR80M2 */}
                <div className="mt-20 flex flex-col md:flex-row bg-[#f5f5f5] rounded-3xl overflow-hidden">
                    <div className="w-full md:w-1/2 min-h-[400px] flex items-center justify-center p-12 bg-white">
                        <img
                            src="https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY25_XR80M2_Primary_image?$primaryshotPreset$&fmt=png-alpha"
                            alt="BRAVIA XR 80 Master Series"
                            className="max-h-80 object-contain"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                        <div className="text-xs font-bold text-[#0052cc] mb-3 uppercase tracking-wider">★ New 2025</div>
                        <h3 className="text-3xl font-bold mb-4">BRAVIA XR80M2</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our flagship Mini LED TV powered by Cognitive Processor XR™. Experience unprecedented brightness and lifelike colour.
                        </p>
                        <div>
                            <button className="bg-[#0052cc] text-white px-8 py-3 rounded-full font-bold hover:bg-[#003d99] transition-colors">
                                View Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TvHomeCinema;
