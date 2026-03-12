import React from 'react';
import { ChevronRight } from 'lucide-react';

const Audio = () => {
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <div className="relative w-full h-[550px] bg-[#111] flex items-center overflow-hidden">
                <img
                    src="https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_KV_760x960?$promotionTilesDesktop4span$"
                    alt="WH-1000XM6 Hero"
                    className="absolute right-0 h-full object-contain object-right-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="relative z-10 px-8 md:px-16 max-w-xl">
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-3">Industry-leading noise cancellation</p>
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">WH-1000XM6</h1>
                    <p className="text-gray-300 text-lg mb-8">For The Music. Immerse yourself in sound like never before.</p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        Explore the series
                    </button>
                </div>
            </div>

            {/* Navigation sub-menu */}
            <div className="border-b border-gray-200 bg-white sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto flex space-x-8 py-4 text-sm font-semibold whitespace-nowrap">
                    <a href="#" className="text-black border-b-2 border-black pb-1">All Audio</a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">Headphones</a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">Truly Wireless</a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">Wireless Speakers</a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">Home Audio</a>
                    <a href="#" className="text-gray-500 hover:text-black transition-colors">High-Res Audio</a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold mb-10">Featured Products</h2>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* XM6 - Large tile */}
                    <div className="md:row-span-2 group cursor-pointer border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="bg-[#f5f5f5] flex-grow flex items-center justify-center p-8">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/WH1000XM6_Primary_image_Sand-pink?$primaryshotPreset$&fmt=png-alpha"
                                alt="WH-1000XM6 Pink"
                                className="w-48 h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 bg-white">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Headband | New</p>
                            <h3 className="font-bold text-xl mb-1 group-hover:text-[#0052cc] transition-colors flex items-center">
                                WH-1000XM6 <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-gray-500 text-sm">The Best Noise Cancelling Headphones</p>
                        </div>
                    </div>

                    {/* WH-CH720 */}
                    <div className="group cursor-pointer border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                        <div className="bg-[#f0f0f0] flex-grow flex items-center justify-center p-6 h-52">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$primaryshotPreset$&fmt=png-alpha"
                                alt="WH-CH720"
                                className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 bg-white">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Headband</p>
                            <h3 className="font-bold text-lg group-hover:text-[#0052cc] transition-colors flex items-center">
                                WH-CH720 <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                        </div>
                    </div>

                    {/* ULT Wear */}
                    <div className="group cursor-pointer border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                        <div className="bg-[#e8e8e8] flex-grow flex items-center justify-center p-6 h-52">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/WH-ULT900N_Primary_image_Black?$primaryshotPreset$&fmt=png-alpha"
                                alt="WH-ULT900N ULT Wear"
                                className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 bg-white">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Headband | ULT</p>
                            <h3 className="font-bold text-lg group-hover:text-[#0052cc] transition-colors flex items-center">
                                ULT WEAR <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                        </div>
                    </div>

                    {/* WH-CH520 - spanning 2 columns */}
                    <div className="md:col-span-2 group cursor-pointer border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-row">
                        <div className="bg-[#f5f5f5] w-1/2 flex items-center justify-center p-6">
                            <img
                                src="https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$primaryshotPreset$&fmt=png-alpha"
                                alt="WH-CH520"
                                className="h-40 object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="w-1/2 p-6 bg-white flex flex-col justify-center">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Headband | Wireless</p>
                            <h3 className="font-bold text-xl mb-2 group-hover:text-[#0052cc] transition-colors flex items-center">
                                WH-CH520 <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-gray-500 text-sm">Wireless headphones with up to 50h battery life and hands-free calling.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Audio;
