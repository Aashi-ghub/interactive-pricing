"use client";

import { useState, useEffect } from "react";
import PricingCard from "./components/pricingcard";
import ThemeToggler from "./components/themeToggle";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="relative bg-white dark:bg-zinc-900 min-h-screen flex items-center justify-center overflow-hidden font-manrope">
      {/* Theme Toggler */}
      <ThemeToggler className="absolute top-4 right-4 z-40" />

      {/* Page Content */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30 text-center dark:text-[hsl(220,8%,92%)]">
        <h2 className="text-4xl font-bold mb-2">Simple, traffic-based pricing</h2>
        <p className="text-lg">Sign-up for our 30-day trial. No credit card required.</p>
      </div>

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-no-repeat bg-cover bg-[url('/bg-pattern.svg')] dark:bg-[url('/bg-pattern-3.svg')]"
        style={{
          backgroundPosition: "bottom left",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Decorative Circle */}
      <div
        className="absolute top-5 px-2 left-1/2 transform -translate-x-1/2 z-20 w-44 h-44 bg-no-repeat bg-cover opacity-80 dark:opacity-30 bg-[url('/pattern-circles.svg')] dark:bg-[url('/pattern-circles-dark.svg')]"
      ></div>

      {/* Pricing Card */}
      <div className="z-10">
        <PricingCard />
      </div>
    </main>
  );
}
