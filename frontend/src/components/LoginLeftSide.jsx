import React from 'react';
import { Users, BarChart3, Clock, ShieldCheck } from 'lucide-react';

const LoginLeftSide = () => {
  return (
    <div className="relative flex flex-col justify-between w-full h-full bg-slate-950 rounded-3xl overflow-hidden shadow-2xl p-10 lg:p-14 text-white border border-slate-800">
      {/* Background decoration & Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom_right,transparent_0%,rgba(30,58,138,0.1)_100%)] pointer-events-none"></div>
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-blue-600/20 blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-[20rem] h-[20rem] translate-y-1/4 translate-x-1/2 rounded-full bg-indigo-600/20 blur-[80px] pointer-events-none"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col">
        <div className="flex items-center space-x-3 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            EMPIFY
          </h1>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Supercharge your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">workforce</span> management.
        </h2>
        
        <p className="text-slate-300 text-lg max-w-md leading-relaxed">
          The all-in-one HR platform designed to streamline payroll, automate attendance, and empower your organization to scale with confidence.
        </p>

        <div className="mt-14 space-y-7">
          <FeatureItem 
            icon={<Users className="w-5 h-5 text-blue-400" />} 
            title="Unified Team Directory" 
            description="Manage your entire organizational structure intuitively in one centralized workspace." 
          />
          <FeatureItem 
            icon={<Clock className="w-5 h-5 text-indigo-400" />} 
            title="Smart Time Tracking" 
            description="Effortless attendance monitoring, automated timesheets, and leave management." 
          />
          <FeatureItem 
            icon={<BarChart3 className="w-5 h-5 text-purple-400" />} 
            title="Actionable Analytics" 
            description="Transform your HR data into strategic insights that drive growth and retention." 
          />
        </div>
      </div>

      {/* Social Proof */}
      <div className="relative z-10 mt-16 flex items-center space-x-4 bg-slate-900/50 w-max p-2 pr-6 rounded-full border border-slate-800 backdrop-blur-md">
        <div className="flex -space-x-3 ml-2">
          {[1, 2, 3, 4].map((i) => (
            <img 
              key={i}
              src={`https://i.pravatar.cc/100?img=${i + 15}`} 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-slate-900 shadow-sm object-cover"
            />
          ))}
        </div>
        <div className="text-sm font-medium text-slate-300 pl-2">
          Trusted by <span className="text-white font-bold">10,000+</span> modern teams
        </div>
      </div>
    </div>
  )
}

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 group cursor-pointer">
    <div className="flex-shrink-0 p-3 bg-slate-800/80 rounded-xl backdrop-blur-sm border border-slate-700/50 shadow-inner group-hover:scale-110 group-hover:bg-slate-700 transition-all duration-300 ease-out">
      {icon}
    </div>
    <div>
      <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
      <p className="text-slate-400 text-sm mt-1 leading-snug group-hover:text-slate-300 transition-colors duration-300">{description}</p>
    </div>
  </div>
);

export default LoginLeftSide;