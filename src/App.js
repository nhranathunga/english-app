import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import './App.css';
import PluralNounQuiz from './EnglishApps/plural/Plural';
import SpellingGame from './EnglishApps/Spell/Spellings';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/plural-quiz" element={<PluralNounQuiz />} />
          <Route path="/spelling-game" element={<SpellingGame />} />
        </Routes>
      </div>
    </Router>
  );
};

const MainMenu = () => (
  <div className="container text-center my-5">
    <h1 className="mb-4 text-primary">Choose an Activity</h1>
    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-8 mb-3">
        <Link to="/plural-quiz">
          <button className="btn btn-lg btn-warning w-100">Plural Noun Quiz</button>
        </Link>
      </div>
      <div className="col-md-6 col-sm-8">
        <Link to="/spelling-game">
          <button className="btn btn-lg btn-info w-100">Spelling Game</button>
        </Link>
      </div>
    </div>
  </div>
);

export default App;
