import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div 
            className="flex flex-col w-screen h-screen bg-cover bg-center bg-no-repeat relative p-12"
            style={{
                backgroundImage: 'url(https://www.red-dot.org/fileadmin/_processed_/7/d/csm_05856-2023BC.1003713.org_87107c17c1.jpg)',
            }}
        >
            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-white">
                        Welcome dear Colleague to your Table Management App
                    </h1>
                   
                </div>
                <div className="flex gap-4">
                    <Link 
                        to="/register" 
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                        Sign Up
                    </Link>
                    <Link 
                        to="/logging" 
                        className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                    >
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;