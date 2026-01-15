import { useState, useEffect } from "react";
import { Link } from "react-router";

// I'm using the exact string from your screenshot line 1
const cardStyle = "bg-green-500 w-40 h-40 text-white flex items-center justify-center";

export function Root() {
  // We create an array of 12 items to match your grid
  const items = Array(4).fill("01");

  return (
    /* This container matches the 'text-5xl space-x-2' logic from your screenshot */
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">Home</h1>
      
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <Link key={index} to="/detail" className="block transition-transform hover:scale-105">
            <div className={cardStyle}>
              <span className="text-5xl font-bold">{item}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}