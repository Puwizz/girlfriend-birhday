import { useState, useEffect } from 'react';
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

  const message = `ถึงอ้วนสุดที่รัก🌻,

  วันนี้เป็นวันที่อ้วนโตขึ้นอีกปีละน้าาา 
  ขอให้อ้วนมีฟามสุขมั่กๆกินอิ่มนอนหลับบ 
  สุขภาพเเข็งเเรงๆ สมหวังทุกๆเรื่องเลย 
  อ้วนมีอะไรไม่สบายใจเค้าพร้อมอยู่ข้างๆตะเหมออ
  เค้าดีใจที่ได้เจออ้วนนน้า ช่วงเวลาที่เราใช้ร่วมกัน
  มันมีความหมายสำหรับเค้ามาก
  ขอให้เราคบกันนานๆในทุกช่วงของชีวิต 
  ทั้งสุขเเละทุกข์เราจะผ่านไปด้วยกันน 
  อยู่กับเค้าไปนานๆนะะ 

เค้ารักอ้วนน้าา,
[ภูวววว]`;

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