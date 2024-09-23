import React, { useState, useEffect } from "react";
import { words } from "./words"; // Import word data file
import './SpellingGame.css'; // Custom styles for responsive design

const SpellingGame = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showSentences, setShowSentences] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex].word);
  
  useEffect(() => {
    // Speak the word when the app loads
    speak(currentWord);

    // Clear word and speak button after 5 seconds and show meaning
    const timer = setTimeout(() => {
      setShowMeaning(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, [currentWord]);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const showSentencesHandler = () => {
    setShowSentences(true);
    speak(`${words[currentWordIndex].meaning}`);
  };

  const showStoryHandler = () => {
    setShowMeaning(false);
    setShowSentences(false);
    setShowStory(true);
    speak(words[currentWordIndex].story);
  };

  const nextWord = () => {
    const nextIndex = (currentWordIndex + 1) % words.length;
    setCurrentWordIndex(nextIndex);
    setCurrentWord(words[nextIndex].word);
    setShowMeaning(false);
    setShowSentences(false);
    setShowStory(false);
  };

  return (
    <div className="app-container">
  

      <div className="content-container">
        {!showMeaning && (
          <>
            <h1 className="word-display">{currentWord}</h1>
            <button className="speak-btn" onClick={() => speak(currentWord)}>
              Speak
            </button>
          </>
        )}

        {showMeaning && !showStory && (
          <>
            <p className="meaning-display">"  {words[currentWordIndex].meaning}  "</p>
            <p className="part-of-speech-display">{words[currentWordIndex].partOfSpeech}</p>

            <button className="sentences-btn" onClick={showSentencesHandler}>
              Show Sample Sentences
            </button>

            {showSentences && (
              <div className="sentences-display">
                <p>1. {words[currentWordIndex].example1} </p>
                <p>2. {words[currentWordIndex].example2} </p>
              </div>
            )}

            <button className="learn-more-btn" onClick={showStoryHandler}>
              Learn More
            </button>
          </>
        )}

        {showStory && (
          <>
            <div className="story-display">
              <p>"{words[currentWordIndex].story}"</p>
            </div>
            <div className="footer">
              <button className="next-word-btn" onClick={nextWord}>
                Next Word
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SpellingGame;
