import React from 'react';

/**
 * Industrial Toggle Switch
 * From Uiverse.io by njesenberger
 */
export const ThemeToggle = ({
  theme = 'light',
  onToggleTheme,
  className = '',
  showLabels = true
}) => {
  const isDark = theme === 'dark';

  const handleToggle = (e) => {
    const next = e.target.checked ? 'dark' : 'light';
    if (onToggleTheme) onToggleTheme(next);
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full border transition-all select-none ${
        isDark
          ? 'bg-[#181a29] border-[#2e334e] text-gray-200'
          : 'bg-white/80 border-gray-200 text-gray-700 shadow-sm'
      } ${className}`}
      title={isDark ? 'Switch to Light Mode (लाइट मोड चालू करें)' : 'Switch to Dark Mode (डार्क मोड चालू करें)'}
    >
      {/* Sun icon */}
      {showLabels && (
        <span
          role="button"
          tabIndex={0}
          onClick={() => onToggleTheme && onToggleTheme('light')}
          className={`text-xs cursor-pointer transition-all duration-200 ${
            !isDark
              ? 'scale-110 opacity-100 font-bold'
              : 'opacity-40 hover:opacity-80 scale-95'
          }`}
          title="Light Mode"
        >
          ☀️
        </span>
      )}

      {/* Lever Switch Wrapper with dedicated vertical headroom */}
      <label
        className="toggle-switch-wrapper relative flex items-center justify-center cursor-pointer"
        style={{
          paddingTop: '20px',
          paddingBottom: '2px',
          paddingLeft: '4px',
          paddingRight: '4px'
        }}
      >
        <div className="toggle-container" style={{ fontSize: '9px' }}>
          <input
            className="toggle-input"
            type="checkbox"
            checked={isDark}
            onChange={handleToggle}
            aria-label="Toggle dark and light mode"
          />
          <div className="toggle-handle-wrapper">
            <div className="toggle-handle">
              <div className="toggle-handle-knob"></div>
              <div className="toggle-handle-bar-wrapper">
                <div className="toggle-handle-bar"></div>
              </div>
            </div>
          </div>
          <div className="toggle-base">
            <div className="toggle-base-inside"></div>
          </div>
        </div>
      </label>

      {/* Moon icon */}
      {showLabels && (
        <span
          role="button"
          tabIndex={0}
          onClick={() => onToggleTheme && onToggleTheme('dark')}
          className={`text-xs cursor-pointer transition-all duration-200 ${
            isDark
              ? 'scale-110 opacity-100 font-bold'
              : 'opacity-40 hover:opacity-80 scale-95'
          }`}
          title="Dark Mode"
        >
          🌙
        </span>
      )}
    </div>
  );
};
