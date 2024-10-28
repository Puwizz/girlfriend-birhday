import React, { useState, useEffect } from 'react';
import { InitialGreeting } from './components/InitialGreeting';
import { EnvelopeButton } from './components/EnvelopeButton';
import { BirthdayMessage } from './components/BirthdayMessage';

function App() {
  const [stage, setStage] = useState(0);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage(1);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const message = `My dearest love,

Every moment with you makes life more beautiful than all the sunflowers in the world. Your smile brightens my days, and your love gives meaning to every breath I take.

On your special day, I want you to know that you're the most precious gift I could ever ask for. You make every day feel like a celebration just by being you.

Happy Birthday, my love! 🌻

With all my heart,
[Your Name]`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-100 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-4">
        <InitialGreeting visible={stage === 0} />
        
        <div className={`transition-all duration-1000 ${stage === 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
          {!isEnvelopeOpen ? (
            <EnvelopeButton onClick={() => setIsEnvelopeOpen(true)} />
          ) : (
            <BirthdayMessage message={message} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;