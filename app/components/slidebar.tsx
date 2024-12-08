"use client";

import React from "react";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-full mt-12 mb-12">
      {/* Input Range Slider */}
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-thumb appearance-none w-full h-2 rounded-lg cursor-pointer"
        style={{
          background: "transparent", // Make the main track transparent
        }}
      />
      
      {/* Dynamic Background Track */}
      <div
        className="absolute top-0 left-0 h-2 rounded-lg"
        style={{
          background: `hsl(174, 77%, 80%)`,
          width: `calc(${value}% - 20px)`, 
          zIndex: 1, 
        }}
      />

      {/* Custom Thumb with Shadow Effect */}
      <div
        className="absolute top-1/2 pointer-events-none w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-md"
        style={{
          left: `calc(${value}% - 20px)`, 
          transform: "translateY(-50%)", 
          boxShadow: `0 0 15px rgba(0, 255, 255, 0.6), 0 0 25px rgba(0, 255, 255, 0.4)`, 
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="13"
          fill="none"
          viewBox="0 0 22 13"
        >
          <g fill="#80FFF3" fillRule="evenodd">
            <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
          </g>
        </svg>
      </div>

      {/* Styling for Browsers */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 10px;
          background: #d1d5db; /* Default track color */
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: transparent; /* Make the thumb background transparent */
          border-radius: 50%;
          cursor: pointer;
          z-index: 2;
        }

        input[type="range"]::-moz-range-track {
          height: 8px;
          border-radius: 10px;
          background: #d1d5db;
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: transparent;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Slider;
