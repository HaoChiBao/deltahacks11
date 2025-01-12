import Timeline from "./timeline";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import Background from "./background";

import "./landing.css";

export default function Landing({ onWrappedSuccess }) {
  let emotions = [
    ["happy", 14],
    ["sad", 12],
    ["angry", 9],
    ["fear", 12],
    ["happy", 20],
    ["sad", 23],
    ["angry", 22],
    ["fear", 6],
    ["happy", 10],
  ];

  return (
    <div className="min-h-screen p-6 relative bg-gradient-to-br from-[#FFE4E1] via-[#E6F3EC] to-[#E0FFFF]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="landing">your feelings today,</div>
        <Timeline emotions={emotions} />
        <div className="second">
          <button className="additional-photos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M11 16.5H22M16.5 22V11M12.375 30.25H20.625C27.5 30.25 30.25 27.5 30.25 20.625V12.375C30.25 5.5 27.5 2.75 20.625 2.75H12.375C5.5 2.75 2.75 5.5 2.75 12.375V20.625C2.75 27.5 5.5 30.25 12.375 30.25Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="romp">add additional photos!</div>
          </button>
        </div>
      </div>
      <div className="bottom">
        <button className="unwrapped">
          <div>day unwrapped</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
          >
            <path
              d="M14.43 5.18872L20.5 10.5L14.43 15.8112M3.5 10.5H20.33"
              stroke="#2C85CE"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <Background emotions={emotions} />
    </div>
  );
}
