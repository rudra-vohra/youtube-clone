import React from 'react';

export default function Spinner() {
  return (
    <div className="flex items-center w-full justify-center">
      <div className="w-10 h-10 border-2 border-red-500 border-solid rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
}
