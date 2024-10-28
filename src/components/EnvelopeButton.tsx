import React from 'react';
import { Mail, Heart } from 'lucide-react';

interface EnvelopeButtonProps {
  onClick: () => void;
}

export function EnvelopeButton({ onClick }: EnvelopeButtonProps) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-amber-800 mb-12">
        I have something to tell you
      </h2>
      <button
        onClick={onClick}
        className="group relative transform transition-transform hover:scale-105"
      >
        <Mail size={120} className="text-amber-600 mx-auto animate-bounce" />
        <Heart 
          size={24} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" 
        />
      </button>
      <p className="mt-4 text-amber-700">Click to open</p>
    </div>
  );
}