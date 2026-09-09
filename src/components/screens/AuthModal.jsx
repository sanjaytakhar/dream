import React, { useState } from 'react';
import { Logo, CloseIcon } from '../common/Icons';

export const AuthModal = ({ isOpen = true, onClose, onLoginSuccess }) => {
  const [role, setRole] = useState('student'); // 'student' | 'admin'
  const [studentClass, setStudentClass] = useState('Class 10');
  const [identifier, setIdentifier] = useState('DPS-2024-892');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess(role, studentClass);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFAFF] flex items-center justify-center p-4 sm:p-6 py-12 relative">
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#FFB3C7]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#7F58FA]/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-[#60D6A7]/20 rounded-full blur-3xl -z-10"></div>

      <div className="w-full max-w-md bg-white rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-pop relative">
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        )}

        <div className="flex justify-center mb-6">
          <Logo />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">
            {role === 'student' ? 'School Student Login' : 'Teacher & Admin Portal'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {role === 'student' ? 'Classes 6 to 12 &bull; Digital Assessment Hub' : 'Manage student tests, batches & marks'}
          </p>
        </div>

        {/* Role Toggle: Student vs Teacher/Admin */}
        <div className="bg-gray-100/90 p-1 rounded-2xl flex items-center mb-6 border border-gray-200/60">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              role === 'student'
                ? 'bg-[#7F58FA] text-white shadow-md shadow-[#7F58FA]/30'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🎒 Student (Class 6-12)
          </button>
          <button
            type="button"
            onClick={() => setRole('admin')}
            className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              role === 'admin'
                ? 'bg-[#7F58FA] text-white shadow-md shadow-[#7F58FA]/30'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            👩‍🏫 Teacher / Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Class Selector for Student */}
          {role === 'student' && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Your Grade / Class
              </label>
              <select
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm font-semibold bg-gray-50 text-gray-800 focus:border-[#7F58FA] focus:bg-white outline-none transition-all"
              >
                <option value="Class 6">Class 6 (Middle School)</option>
                <option value="Class 7">Class 7 (Middle School)</option>
                <option value="Class 8">Class 8 (Middle School)</option>
                <option value="Class 9">Class 9 (Secondary)</option>
                <option value="Class 10">Class 10 (Secondary Board)</option>
                <option value="Class 11">Class 11 (Senior Secondary)</option>
                <option value="Class 12">Class 12 (Senior Secondary Board)</option>
              </select>
            </div>
          )}

          {/* Admission No or Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              {role === 'student' ? 'Admission No. or School Roll No.' : 'Teacher Work Email'}
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-gray-400 text-sm">
                {role === 'student' ? '🆔' : '✉️'}
              </span>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder={role === 'student' ? 'e.g. DPS-2024-892' : 'teacher@school.edu.in'}
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#7F58FA] focus:ring-2 focus:ring-[#7F58FA]/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-gray-400 text-sm">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#7F58FA] focus:ring-2 focus:ring-[#7F58FA]/20 outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-gray-400 hover:text-gray-600 text-xs"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-[#7F58FA] focus:ring-[#7F58FA] border-gray-300 accent-[#7F58FA]"
              />
              <span>Remember me</span>
            </label>
            <a href="#forgot" className="text-[#7F58FA] font-medium hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#7F58FA] hover:bg-[#6C44E8] text-white text-sm font-bold shadow-lg shadow-[#7F58FA]/30 transition-all hover:scale-[1.01] active:scale-[0.99] mt-2"
          >
            Sign in to {role === 'student' ? `${studentClass} Portal` : 'School Admin'}
          </button>
        </form>

        <div className="text-center mt-6 text-xs text-gray-500">
          Need school credentials? Contact your class teacher or school IT desk.
        </div>

        <div className="text-center mt-4 text-[11px] text-gray-400 font-medium">
          Classes 6 to 12 &bull; Digital School Assessment System
        </div>
      </div>
    </div>
  );
};
