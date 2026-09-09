import React from 'react';
import { 
  Logo, 
  LayoutDashboardIcon, 
  BookOpenIcon, 
  BarChartIcon, 
  BookmarkIcon, 
  TrophyIcon, 
  BellIcon, 
  UserIcon, 
  SettingsIcon,
  CheckIcon
} from './Icons';

export const StudentSidebar = ({ activeTab = 'Dashboard', onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboardIcon, screen: 'dashboard' },
    { id: 'tests', label: 'My Tests', icon: BookOpenIcon, screen: 'catalog' },
    { id: 'practice', label: 'Practice', icon: CheckIcon, screen: 'cbt' },
    { id: 'performance', label: 'Performance', icon: BarChartIcon, screen: 'results' },
    { id: 'bookmarks', label: 'Bookmarks', icon: BookmarkIcon, screen: 'catalog' },
    { id: 'notes', label: 'My Notes', icon: BookOpenIcon, screen: 'profile' },
    { id: 'leaderboard', label: 'Leaderboard', icon: TrophyIcon, screen: 'dashboard' },
    { id: 'notifications', label: 'Notifications', icon: BellIcon, badge: '3', screen: 'dashboard' },
    { id: 'profile', label: 'Profile', icon: UserIcon, screen: 'profile' },
    { id: 'settings', label: 'Settings', icon: SettingsIcon, screen: 'dashboard' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-[#E5E7EB] min-h-screen flex flex-col justify-between p-5 select-none shrink-0">
      <div>
        <div className="mb-8" onClick={() => onNavigate('landing')}>
          <Logo />
        </div>

        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab.toLowerCase() === item.label.toLowerCase();
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.screen)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#F3EFFF] text-[#7F58FA] font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#7F58FA]' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="w-5 h-5 rounded-full bg-[#FFB3C7] text-[#9D174D] text-xs font-bold flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Pro Study Card */}
      <div className="bg-gradient-to-br from-[#F3EFFF] to-[#E9FBF3] p-4 rounded-2xl border border-purple-100">
        <div className="flex items-center gap-2 text-xs font-bold text-[#7F58FA] uppercase tracking-wider mb-1">
          <span>✨ Pro Prep</span>
        </div>
        <p className="text-xs text-gray-600 mb-3">Get unlimited mock tests with AI detailed analysis.</p>
        <button 
          onClick={() => onNavigate('catalog')}
          className="w-full py-2 bg-[#7F58FA] text-white rounded-xl text-xs font-semibold hover:bg-[#6C44E8] transition-colors shadow-sm"
        >
          Explore All Tests
        </button>
      </div>
    </aside>
  );
};

export const AdminSidebar = ({ activeTab = 'Dashboard', onNavigate }) => {
  const adminItems = [
    { id: 'admin-dash', label: 'Admin Dashboard', icon: LayoutDashboardIcon, screen: 'admin' },
    { id: 'admin-users', label: 'Users', icon: UserIcon, screen: 'admin' },
    { id: 'admin-tests', label: 'Test Management', icon: BookOpenIcon, screen: 'catalog' },
    { id: 'admin-questions', label: 'Question Bank', icon: BookOpenIcon, screen: 'question-creator' },
    { id: 'admin-analytics', label: 'Analytics', icon: BarChartIcon, screen: 'admin' },
    { id: 'admin-notifs', label: 'Notifications', icon: BellIcon, badge: '5', screen: 'admin' },
    { id: 'admin-settings', label: 'Settings', icon: SettingsIcon, screen: 'admin' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-[#E5E7EB] min-h-screen flex flex-col justify-between p-5 select-none shrink-0">
      <div>
        <div className="mb-8" onClick={() => onNavigate('landing')}>
          <Logo />
        </div>

        <div className="px-3 py-1 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Administration</span>
        </div>

        <nav className="space-y-1.5">
          {adminItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab.toLowerCase() === item.label.toLowerCase();
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.screen)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#7F58FA] text-white shadow-md shadow-[#7F58FA]/25 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${
                    isActive ? 'bg-white text-[#7F58FA]' : 'bg-[#FFB3C7] text-[#9D174D]'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#7F58FA]/20 text-[#7F58FA] font-bold text-xs flex items-center justify-center">
            AD
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-800">Admin Portal</p>
            <p className="text-[11px] text-gray-400">admin@examwave.com</p>
          </div>
        </div>
        <button 
          onClick={() => onNavigate('dashboard')}
          title="Switch to Student View"
          className="text-xs text-[#7F58FA] hover:underline font-medium"
        >
          Exit
        </button>
      </div>
    </aside>
  );
};
