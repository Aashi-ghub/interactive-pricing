"use client";

import React, { useState, useEffect } from "react";
import Slider from "./slidebar";

const PricingCard: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50); // Default: 50K pageviews
  const [isChecked, setIsChecked] = useState(false); // Yearly billing toggle

  // Pricing calculation logic
  const priceMap = [
    { pageviews: 10, price: 8 },
    { pageviews: 50, price: 12 },
    { pageviews: 100, price: 16 },
    { pageviews: 500, price: 24 },
    { pageviews: 1000, price: 36 },
  ];

  const getPrice = (value: number) => {
    let price = 8; // Default price
    for (let i = priceMap.length - 1; i >= 0; i--) {
      if (value >= priceMap[i].pageviews) {
        price = priceMap[i].price;
        break;
      }
    }
    return price;
  };

  const calculatePrice = (value: number) => {
    const monthlyPrice = getPrice(value);
    return isChecked ? monthlyPrice * 12 * 0.75 : monthlyPrice; // 25% yearly discount
  };

  const handleToggleChange = () => setIsChecked(!isChecked);

  const finalPrice = calculatePrice(sliderValue);

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 h-auto w-[500px] shadow-md text-center mx-auto font-manrope text-gray-900 dark:text-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-500 dark:text-gray-100 text-lg">
          {sliderValue}K PAGEVIEWS
        </h2>
        <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold">
          ${finalPrice.toFixed(2)}{" "}
          <span className="text-gray-500 dark:text-gray-400 text-base">
            / {isChecked ? "year" : "month"}
          </span>
        </h1>
      </div>

      <Slider value={sliderValue} onChange={setSliderValue} />

      <div className="flex items-center justify-center gap-4 mt-4">
        <label className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
          <span>Monthly Billing</span>
        </label>
        <label className="flex items-center relative">
  <input
    type="checkbox"
    checked={isChecked}
    onChange={handleToggleChange}
    className="appearance-none w-10 h-6 bg-gray-300 dark:bg-gray-400 rounded-full cursor-pointer transition-all"
    style={{
      backgroundColor: isChecked ? "hsl(174, 77%, 80%)" : "gray",
    }}
  />
  <span
    className="absolute w-5 h-5 bg-white dark:bg-white rounded-full transition-all"
    style={{
      transform: isChecked ? "translateX(100%)" : "translateX(0)",
      backgroundColor: "white",
    }}
  ></span>
</label>

        <label className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
          <span>Yearly Billing</span>
          <span
            className="ml-2 text-xs font-semibold px-2 py-1 rounded-lg"
            style={{
              backgroundColor: "hsl(14, 92%, 95%)",
              color: "hsl(15, 100%, 70%)",
            }}
          >
            25% discount
          </span>
        </label>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-600 mt-5 mb-4"></div>

      <div className="flex justify-between mt-7">
        <ul className="text-gray-500 dark:text-gray-400 space-y-2 w-2/3">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-cyan-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Unlimited websites
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-cyan-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            100% data ownership
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-cyan-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Email reports
          </li>
        </ul>
        <div className="ml-4 mt-4">
          <button className="bg-gray-800 dark:bg-slate-300 text-white dark:text-slate-950 w-44 px-3 py-3 rounded-3xl hover:bg-gray-900 dark:hover:bg-gray-600 transition-all">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
