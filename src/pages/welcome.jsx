import React from 'react';
import { Link } from 'react-router-dom';
const Welcome = () => {
    return (
        <div className="flex flex-col gap-6 w-screen h-screen items-center justify-center">
            <div className="flex justify-center items-center gap-3">
            <h1 className="text-2xl font-bold black">Welcome dear Colleague to your Table Management App</h1>
            </div>
            <div>
               <Link to="/register" className='btn btn-primary font-semibold'>Sign Up</Link>
               <Link to="/logging" className='btn btn-primary font-semibold'>Log In</Link>
            </div>
        </div>
    );
};

export default Welcome;
