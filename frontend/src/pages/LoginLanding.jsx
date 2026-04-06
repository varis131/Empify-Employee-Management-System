import React from 'react';
import { ArrowRight } from 'lucide-react';
import LoginLeftSide from '../components/LoginLeftSide';
import { useNavigate } from 'react-router-dom';

const LoginLanding = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side - Hidden on smaller screens, takes up half width on large screens */}
      <div className="hidden lg:flex w-1/2 p-4">
        <LoginLeftSide />
      </div>
      
      {/* Right Side - Portal Selection */}
      <div className="flex-1 flex flex-col p-8 sm:p-12 lg:p-16 relative">
        {/* Mobile Heading (only shows when left side is hidden) */}
        <div className="lg:hidden mb-8 text-center mt-10">
          <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">EMPIFY</h1>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-lg w-full mx-auto">
          <h1 className="text-[2.5rem] leading-tight font-bold text-slate-900 mb-3">Welcome Back</h1>
          <p className="text-slate-500 text-lg mb-10">
            Select your portal to secure access the system.
          </p>

          <div className="space-y-5">
            <button onClick={()=>navigate('/login/admin')} className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all duration-200 group text-left">
              <span className="text-xl font-medium text-slate-800">Admin Portal</span>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </button>

            <button onClick={()=>navigate('/login/employee')} className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all duration-200 group text-left">
              <span className="text-xl font-medium text-slate-800">Employee Portal</span>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginLanding;