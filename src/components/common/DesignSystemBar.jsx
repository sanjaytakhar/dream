import React, { useState } from 'react';

export const DesignSystemBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = [
    { label: 'Primary', hex: '#7F58FA', border: false },
    { label: 'Secondary', hex: '#60D6A7', border: false },
    { label: 'Accent', hex: '#FFB3C7', border: false },
    { label: 'Info', hex: '#93C5FD', border: false },
    { label: 'Warning', hex: '#FDE68A', border: false },
    { label: 'Background', hex: '#FDFAFF', border: true },
    { label: 'Surface', hex: '#FFFFFF', border: true },
    { label: 'Border', hex: '#E5E7EB', border: true },
    { label: 'Text Primary', hex: '#1F2937', border: false },
    { label: 'Text Secondary', hex: '#6B7280', border: false },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200/80 shadow-md py-3 px-4 sm:px-6 transition-all select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7F58FA]"></span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-gray-800">
            ExamWave Design System
          </span>
          <span className="text-[11px] text-gray-400 hidden md:inline">&bull; Exact pastel tokens & UI component specs</span>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-bold text-[#7F58FA] hover:text-[#6C44E8] bg-[#F3EFFF] px-3 py-1 rounded-full transition-colors"
        >
          {isExpanded ? 'Hide Specs ▲' : 'Show Specs ▼'}
        </button>
      </div>

      {isExpanded && (
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-gray-100 space-y-5 animate-fadeIn">
          {/* Color Palette Row matching mockup */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Color Palette (Pastel)</p>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {colors.map((c) => (
                <div key={c.label} className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div
                    className={`w-7 h-7 rounded-full shadow-sm ${c.border ? 'border border-gray-300' : ''}`}
                    style={{ backgroundColor: c.hex }}
                  ></div>
                  <span className="text-[10px] font-bold text-gray-800 text-center leading-tight">{c.label}</span>
                  <span className="text-[9px] font-mono text-gray-400">{c.hex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography & Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Typography */}
            <div className="bg-gray-50/70 p-4 rounded-2xl border border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Typography (Inter)</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="font-bold">H1 Display:</span> 32/40 Bold</div>
                <div><span className="font-medium">Body Large:</span> 16/24 Regular</div>
                <div><span className="font-semibold">H2 Heading:</span> 24/32 Semibold</div>
                <div><span className="font-normal">Body:</span> 14/20 Regular</div>
                <div><span className="font-semibold">H3 Subheading:</span> 18/28 Semibold</div>
                <div><span className="text-[11px] text-gray-500">Caption:</span> 12/16 Regular</div>
              </div>
            </div>

            {/* Components Sample */}
            <div className="bg-gray-50/70 p-4 rounded-2xl border border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Components</p>
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-4 py-1.5 rounded-full bg-[#7F58FA] text-white text-xs font-bold shadow-sm">
                  Primary Button
                </button>
                <button className="px-4 py-1.5 rounded-full bg-white border border-gray-300 text-gray-700 text-xs font-semibold">
                  Secondary Button
                </button>
                <input
                  type="text"
                  placeholder="Input Field..."
                  readOnly
                  className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs w-32 outline-none"
                />
                <span className="px-2.5 py-0.5 rounded-full bg-[#F3EFFF] text-[#7F58FA] text-[11px] font-bold border border-purple-200">
                  Active Tag
                </span>
                <label className="flex items-center gap-1 text-xs cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#7F58FA]" readOnly />
                  <span>Checkbox</span>
                </label>
                <label className="flex items-center gap-1 text-xs cursor-pointer">
                  <input type="radio" defaultChecked className="accent-[#7F58FA]" readOnly />
                  <span>Radio</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
