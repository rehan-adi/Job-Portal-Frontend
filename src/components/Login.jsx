import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { SlLockOpen } from 'react-icons/sl';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('http://localhost:1000/auth/login', {
        email: email,
        password: password
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/')

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="rounded-lg lg:w-[28vw] md:w-[45vw] sm:w-[45vw] w-full px-5 py-10">
      <h2 className="text-3xl font-semibold text-white text-center mb-14">Signin to your HireSphere account</h2>
        <form onSubmit={handleSubmit} className="mb-6">
           <div class="w-full">
            <div class="relative w-full min-w-[200px] h-10">
              <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                <MdOutlineMarkEmailRead className='text-white text-xl' />
              </div>
              <input
                className="peer w-full h-full bg-transparent text-white  font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-[#EA580C]"
                id="email"
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-[#EA580C] after:border-blue-gray-200 peer-focus:after:!border-[#EA580C]">Email
              </label>
            </div>
          </div>
          <div class="w-full mt-6">
            <div class="relative w-full min-w-[200px] h-10">
              <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                <SlLockOpen className='text-white text-xl' />
              </div>
              <input
                className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-[#EA580C]"
                id="password"
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              /><label
                class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-[#EA580C] after:border-blue-gray-200 peer-focus:after:!border-[#EA580C]">Password
              </label>
            </div>
          </div>
          <div className="flex items-center mt-9 justify-between">
            <button
              class="select-none rounded-lg border w-full lg:w-auto border-[#EA580C] hover:bg-[#EA580C] py-3 px-10 text-center align-middle font-sans text-sm font-bold text-white transition-all"
              type="button"
            >
              Sign In
            </button>
          </div>
          <p className='mt-8'>Don't have an account <Link to="/signup" className="text-blue-500 underline text-sm font-semibold hover:underline">Sign Up</Link> </p>
        </form>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
    </div>
  );
};

export default Login;