import  { useState, useEffect } from 'react';

const Typewriter = ({ phrases, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentPhrase = phrases[currentPhraseIndex];

        if (currentCharacterIndex < currentPhrase.length) {
          // Add one character at a time with three dots
          return currentPhrase.substring(0, currentCharacterIndex + 1) ;
        } else {
          // If reached the end of the phrase, reset character index and switch to the next phrase
          setTimeout(() => {
            setCurrentCharacterIndex(0);
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          }, delay);
          return prevText;
        }
      });

      setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
    }, delay);

    return () => clearInterval(interval);
  }, [delay, phrases, currentPhraseIndex, currentCharacterIndex]);

  return <span className="flex justify-center text-[#2d2d2d] font-bold  text-2xl">{currentText}</span>;
};

export default Typewriter;
