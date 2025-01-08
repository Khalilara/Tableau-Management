import React from 'react';
import { Link } from 'react-router-dom';
const Welcome = () => {
    return (
        <div className="flex flex-col gap-6 w-screen h-screen items-center justify-center">
            <div className="flex justify-center items-center gap-3">
               <h1>Welcome dear Colab to Samsung</h1>
               <div>
               <Link to="/register" className='btn btn-primary font-semibold'>Log In</Link>
               <Link to="/profile" className='btn btn-primary font-semibold'>Sign In</Link>
               </div>
            </div>
        </div>
    );
};

export default Welcome;
