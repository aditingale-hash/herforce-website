import React from 'react';

export const HerForceLogo = () => (
  <div className="flex items-center gap-3">
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#f7a8b8]"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M12 6C9.17 6 6.88 7.82 6.2 10.5H8.23C8.68 8.95 10.21 8 12 8C13.79 8 15.32 8.95 15.77 10.5H17.8C17.12 7.82 14.83 6 12 6Z"
        fill="currentColor"
      />
      <path
        d="M12 18C14.83 18 17.12 16.18 17.8 13.5H15.77C15.32 15.05 13.79 16 12 16C10.21 16 8.68 15.05 8.23 13.5H6.2C6.88 16.18 9.17 18 12 18Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="9" cy="9.5" r="1" fill="currentColor" />
      <circle cx="15" cy="9.5" r="1" fill="currentColor" />
      <circle cx="9" cy="14.5" r="1" fill="currentColor" />
      <circle cx="15" cy="14.5" r="1" fill="currentColor" />
    </svg>
    <div className="flex items-baseline">
      <span className="text-2xl font-bold tracking-tight text-[#f5e6f0]">
        Her
      </span>
      <span className="text-2xl font-bold tracking-tight text-[#f7a8b8]">
        Force
      </span>
    </div>
  </div>
);