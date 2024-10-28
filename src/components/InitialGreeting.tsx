import React from 'react';

interface InitialGreetingProps {
  visible: boolean;
}

export function InitialGreeting({ visible }: InitialGreetingProps) {
  return (
    <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-5xl font-bold text-amber-800 text-center mb-8 animate-fade-in">
        Another year older
      </h1>
    </div>
  );
}