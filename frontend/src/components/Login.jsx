import React, { useState } from 'react';
import Header from './Header';
import bglogo from '../assets/bglogo.png';
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img src={bglogo} alt="image" className="w-full" />
      </div>
      <form
        action=""
        className="flex flex-col w-3/12 left-0 right-0 my-48 mx-auto items-center justify-center absolute bg-black opacity-80"
      >
        <h1 className="text-white font-bold text-3xl font-serif mb-4">
          {isLogin ? 'Login' : 'Signup'}
        </h1>
        {!isLogin && (
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-white font-bold font-serif">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="px-4 py-2 rounded-md border-none outline-none my-2 bg-gray-800 text-white"
            />
          </div>
        )}
        <div className="flex flex-col gap-4">
          <label htmlFor="" className="text-white font-bold font-serif">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-md border-none outline-none my-2 bg-gray-800 text-white"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="" className="text-white font-bold font-serif">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="px-4 py-2 rounded-md border-none outline-none my-2 bg-gray-800 text-white"
          />
        </div>
        <button className="px-8 py-2 bg-red-600 rounded-xl text-xl font-bold text-white">
          Signup
        </button>
        <p className="text-white font-bold font-serif">
          {isLogin ? 'Already have an account?' : 'New to Fun?'}{' '}
          <a href="#" className="text-blue-600 hover:underline">
            {isLogin ? 'Login' : 'Signup'}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
