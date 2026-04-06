import React, { useState } from "react";
import LoginLeftSide from "./LoginLeftSide";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const LoginForm = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("printing form data");
    console.log(email, password);
  }

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 p-4">
        <LoginLeftSide />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 relative">
        <div className="w-full max-w-[420px] mx-auto relative">
          {/* Back Button */}
          <Link
            to="/login"
            className="absolute -top-20 left-0 flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to portals</span>
          </Link>

          {/* Heading */}
          <h1 className="text-[2.5rem] leading-tight font-bold text-slate-800 mb-2">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm mb-8">{subtitle}</p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[13px] font-medium text-slate-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="[EMAIL_ADDRESS]"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 outline-none transition-all text-slate-700 bg-white placeholder-slate-400 text-sm"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/20 outline-none transition-all text-slate-700 bg-white placeholder-slate-400 text-sm pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-[18px] h-[18px]" />
                  ) : (
                    <Eye className="w-[18px] h-[18px]" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 px-4 bg-[#635BFF] hover:bg-[#524ae3] text-white font-medium text-[15px] rounded-lg shadow-sm transition-all duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
