import React from 'react';

interface BirthdayMessageProps {
  message: string;
}

export function BirthdayMessage({ message }: BirthdayMessageProps) {
  return (
    <div className="animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl p-8 mb-8 transform transition-all hover:shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1697403991543-f51e33ce5c6c?auto=format&fit=crop&q=80&w=1000"
          alt="Your girlfriend"
          className="w-64 h-64 rounded-full mx-auto mb-8 object-cover border-4 border-yellow-300 shadow-lg"
        />
        <div className="mt-8">
          <pre className="whitespace-pre-wrap font-sans text-lg text-gray-700 leading-relaxed">
            {message}
          </pre>
        </div>
      </div>
    </div>
  );
}