import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Banner 1: Bravia */}
            <div className="relative w-full h-[500px] md:h-[700px] bg-black flex items-end justify-start overflow-hidden">
                <img
                    src="https://www.sony.co.in/content/dam/sony/contents/regional-FSMC/india/common/homepage/primary-tout/2025/Bravia_4000x980_D_Raja%20Mouli%20Banner.jpg"
                    alt="Sony BRAVIA TV Banner"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
                <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-24 max-w-xl">
                    <p className="text-gray-300 text-sm font-bold uppercase tracking-widest mb-3">New</p>
                    <h2 className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">BRAVIA</h2>
                    <p className="text-gray-200 text-lg md:text-xl mb-8 font-light">Cinema is coming home.</p>
                    <Link to="/tv-home-cinema" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
                        Discover BRAVIA
                    </Link>
                </div>
            </div>

            {/* Feature Tiles Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Bravia 8 II */}
                <div className="relative group overflow-hidden bg-[#f5f5f5] flex flex-col">
                    <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-white">
                        <img
                            src="https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY25_BRAVIA8II_HP_4span_D?$promotionTilesDesktop4span$&fmt=png-alpha"
                            alt="BRAVIA 8 II"
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">BRAVIA 8 II</p>
                        <h3 className="text-xl font-bold mb-2">Ultimate OLED Picture</h3>
                        <Link to="/tv-home-cinema" className="inline-flex items-center text-black font-semibold hover:text-[#0052cc] transition-colors group-hover:underline text-sm">
                            Learn more <ChevronRight className="ml-1 w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* WH-1000XM6 */}
                <div className="relative group overflow-hidden bg-[#f0f0f0] flex flex-col">
                    <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-white">
                        <img
                            src="https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_KV_760x960?$promotionTilesDesktop4span$"
                            alt="WH-1000XM6 Headphones"
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">WH-1000XM6</p>
                        <h3 className="text-xl font-bold mb-2">The Best Noise Cancelling</h3>
                        <Link to="/audio" className="inline-flex items-center text-black font-semibold hover:text-[#0052cc] transition-colors text-sm">
                            Learn more <ChevronRight className="ml-1 w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Home Audio */}
                <div className="relative group overflow-hidden bg-[#e8e8e8] flex flex-col">
                    <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-white">
                        <img
                            src="https://sony.scene7.com/is/image/sonyglobalsolutions/HAVFY25_EG1_HP_4span_D?$promotionTilesDesktop4span$&fmt=png-alpha"
                            alt="Sony Home Audio System"
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">BRAVIA Theatre System 6</p>
                        <h3 className="text-xl font-bold mb-2">Cinematic Surround Sound</h3>
                        <Link to="/audio" className="inline-flex items-center text-black font-semibold hover:text-[#0052cc] transition-colors text-sm">
                            Learn more <ChevronRight className="ml-1 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* What's Hot Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold mb-10">What's Hot</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    <Link to="/tv-home-cinema" className="group block text-center">
                        <div className="bg-gray-50 rounded-xl p-4 mb-3 h-52 flex items-center justify-center overflow-hidden">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY25_BRAVIA5_Primary_image-1?$primaryshotPreset$&fmt=png-alpha"
                                alt="BRAVIA 5 TV"
                                className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mb-1">BRAVIA 5 | XR55A</p>
                        <h4 className="font-semibold text-sm group-hover:text-[#0052cc] transition-colors">Big on entertainment</h4>
                    </Link>

                    <Link to="/audio" className="group block text-center">
                        <div className="bg-gray-50 rounded-xl p-4 mb-3 h-52 flex items-center justify-center overflow-hidden">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_Primary_image_Sand-pink?$primaryshotPreset$&fmt=png-alpha"
                                alt="WH-1000XM6 Headphones Pink"
                                className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mb-1">WH-1000XM6</p>
                        <h4 className="font-semibold text-sm group-hover:text-[#0052cc] transition-colors">Best Noise Cancelling</h4>
                    </Link>

                    <Link to="/tv-home-cinema" className="group block text-center">
                        <div className="bg-gray-50 rounded-xl p-4 mb-3 h-52 flex items-center justify-center overflow-hidden">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY23_A80L_Primary-Image-1?$primaryshotPreset$&fmt=png-alpha"
                                alt="A80L OLED TV"
                                className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mb-1">BRAVIA XR A80L</p>
                        <h4 className="font-semibold text-sm group-hover:text-[#0052cc] transition-colors">Stunning OLED Picture</h4>
                    </Link>

                    <Link to="/audio" className="group block text-center">
                        <div className="bg-gray-50 rounded-xl p-4 mb-3 h-52 flex items-center justify-center overflow-hidden">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/WH-ULT900N_Primary_image_Black?$primaryshotPreset$&fmt=png-alpha"
                                alt="ULT Wear Headphones"
                                className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mb-1">WH-ULT900N</p>
                        <h4 className="font-semibold text-sm group-hover:text-[#0052cc] transition-colors">ULT Wear Headphones</h4>
                    </Link>

                </div>
            </div>

            {/* Second Hero: Bravia 5 */}
            <div className="relative w-full h-[450px] overflow-hidden bg-[#f5f5f5] flex items-center">
                <img
                    src="https://www.sony.co.in/content/dam/sony/contents/global/televisionsandhometheatre/televisions/year-2025/bravia-5---xr50/banner/TVFY25_XR50-XR55A_HP_4span_D.png"
                    alt="BRAVIA 5 XR55A Banner"
                    className="absolute inset-0 w-full h-full object-cover object-right"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent"></div>
                <div className="relative z-10 px-8 md:px-16 max-w-md text-black">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">BRAVIA 5 | XR55A</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Big on entertainment, easy to love</h2>
                    <Link to="/tv-home-cinema" className="inline-flex items-center text-black font-bold hover:text-[#0052cc] transition-colors group">
                        Learn more <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* PlayStation Section */}
            <div className="bg-black text-white py-24 text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">PlayStation®5</h2>
                <p className="text-xl mb-8 font-light max-w-2xl mx-auto text-gray-300">Play Has No Limits™</p>
                <button className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors duration-300">
                    Find out more
                </button>
            </div>

        </div>
    );
};

export default Home;
