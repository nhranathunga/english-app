import React, { useState } from 'react';
import pluralize from 'pluralize';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const nouns = [
  { singular: 'cat', plural: 'cats' },
  { singular: 'dog', plural: 'dogs' },
  { singular: 'bus', plural: 'buses' },
  { singular: 'child', plural: 'children' },
  { singular: 'mouse', plural: 'mice' },
  { singular: 'foot', plural: 'feet' },
  { singular: 'leaf', plural: 'leaves' },
  { singular: 'hero', plural: 'heroes' },
  { singular: 'baby', plural: 'babies' },
  { singular: 'roof', plural: 'roofs' },
  { singular: 'fish', plural: 'fish' },
  { singular: 'box', plural: 'boxes' },
  { singular: 'city', plural: 'cities' },
  { singular: 'woman', plural: 'women' },
  { singular: 'man', plural: 'men' },
  { singular: 'person', plural: 'people' },
  { singular: 'tooth', plural: 'teeth' },
  { singular: 'goose', plural: 'geese' },
  { singular: 'knife', plural: 'knives' },
  { singular: 'half', plural: 'halves' },
  { singular: 'life', plural: 'lives' },
  { singular: 'wife', plural: 'wives' },
  { singular: 'calf', plural: 'calves' },
  { singular: 'wolf', plural: 'wolves' },
  { singular: 'shelf', plural: 'shelves' },
  { singular: 'thief', plural: 'thieves' },
  { singular: 'loaf', plural: 'loaves' },
  { singular: 'tomato', plural: 'tomatoes' },
  { singular: 'potato', plural: 'potatoes' },
  { singular: 'echo', plural: 'echoes' },
  { singular: 'hero', plural: 'heroes' },
  { singular: 'piano', plural: 'pianos' },
  { singular: 'radio', plural: 'radios' },
  { singular: 'photo', plural: 'photos' },
  { singular: 'volcano', plural: 'volcanoes' },
  { singular: 'cactus', plural: 'cacti' },
  { singular: 'fungus', plural: 'fungi' },
  { singular: 'focus', plural: 'foci' },
  { singular: 'thesis', plural: 'theses' },
  { singular: 'crisis', plural: 'crises' },
  { singular: 'analysis', plural: 'analyses' },
  { singular: 'synopsis', plural: 'synopses' },
  { singular: 'alumnus', plural: 'alumni' },
  { singular: 'stimulus', plural: 'stimuli' },
  { singular: 'axis', plural: 'axes' },
  { singular: 'datum', plural: 'data' },
  { singular: 'criterion', plural: 'criteria' },
  { singular: 'phenomenon', plural: 'phenomena' },
  { singular: 'index', plural: 'indices' },
  { singular: 'appendix', plural: 'appendices' },
  { singular: 'diagnosis', plural: 'diagnoses' },
  { singular: 'parenthesis', plural: 'parentheses' },
  { singular: 'quiz', plural: 'quizzes' },
  { singular: 'church', plural: 'churches' },
  { singular: 'watch', plural: 'watches' },
  { singular: 'match', plural: 'matches' },
  { singular: 'brush', plural: 'brushes' },
  { singular: 'box', plural: 'boxes' },
  { singular: 'buzz', plural: 'buzzes' },
  { singular: 'fox', plural: 'foxes' },
  { singular: 'wish', plural: 'wishes' },
  { singular: 'dish', plural: 'dishes' },
  { singular: 'sandwich', plural: 'sandwiches' },
  { singular: 'address', plural: 'addresses' },
  { singular: 'pass', plural: 'passes' },
  { singular: 'kiss', plural: 'kisses' },
  { singular: 'class', plural: 'classes' },
  { singular: 'glass', plural: 'glasses' },
  { singular: 'bus', plural: 'buses' },
  { singular: 'lens', plural: 'lenses' },
  { singular: 'gas', plural: 'gases' },
  { singular: 'box', plural: 'boxes' },
  { singular: 'cross', plural: 'crosses' },
  { singular: 'boss', plural: 'bosses' },
  { singular: 'dress', plural: 'dresses' },
  { singular: 'address', plural: 'addresses' },
  { singular: 'press', plural: 'presses' },
  { singular: 'mess', plural: 'messes' },
  { singular: 'guess', plural: 'guesses' },
  { singular: 'pencil', plural: 'pencils' },
  { singular: 'apple', plural: 'apples' },
  { singular: 'banana', plural: 'bananas' },
  { singular: 'grape', plural: 'grapes' },
  { singular: 'carrot', plural: 'carrots' },
  { singular: 'orange', plural: 'oranges' },
  { singular: 'potato', plural: 'potatoes' },
  { singular: 'tomato', plural: 'tomatoes' },
  { singular: 'onion', plural: 'onions' },
  { singular: 'cucumber', plural: 'cucumbers' },
  { singular: 'pepper', plural: 'peppers' },
  { singular: 'car', plural: 'cars' },
  { singular: 'bus', plural: 'buses' },
  { singular: 'train', plural: 'trains' },
  { singular: 'plane', plural: 'planes' },
  { singular: 'bicycle', plural: 'bicycles' },
  { singular: 'boat', plural: 'boats' },
  { singular: 'truck', plural: 'trucks' },
  { singular: 'motorcycle', plural: 'motorcycles' },
  { singular: 'taxi', plural: 'taxis' },
  { singular: 'helicopter', plural: 'helicopters' },
  { singular: 'ship', plural: 'ships' },
  { singular: 'subway', plural: 'subways' },
  { singular: 'ambulance', plural: 'ambulances' },
  { singular: 'bike', plural: 'bikes' },
  { singular: 'scooter', plural: 'scooters' },
  { singular: 'skateboard', plural: 'skateboards' },
  { singular: 'rocket', plural: 'rockets' },
  { singular: 'bus', plural: 'buses' },
  { singular: 'bench', plural: 'benches' },
  { singular: 'desk', plural: 'desks' },
  { singular: 'book', plural: 'books' },
  { singular: 'pen', plural: 'pens' },
  { singular: 'pencil', plural: 'pencils' },
  { singular: 'notebook', plural: 'notebooks' },
  { singular: 'ruler', plural: 'rulers' },
  { singular: 'eraser', plural: 'erasers' },
  { singular: 'chalk', plural: 'chalks' },
  { singular: 'blackboard', plural: 'blackboards' },
  { singular: 'chair', plural: 'chairs' },
  { singular: 'table', plural: 'tables' },
  { singular: 'bag', plural: 'bags' },
  { singular: 'map', plural: 'maps' },
  { singular: 'globe', plural: 'globes' },
  { singular: 'clock', plural: 'clocks' },
  { singular: 'calculator', plural: 'calculators' },
  { singular: 'school', plural: 'schools' },
  { singular: 'teacher', plural: 'teachers' },
  { singular: 'student', plural: 'students' },
  { singular: 'classroom', plural: 'classrooms' },
  { singular: 'library', plural: 'libraries' },
  { singular: 'cafeteria', plural: 'cafeterias' },
  { singular: 'playground', plural: 'playgrounds' },
  { singular: 'gym', plural: 'gyms' },
  { singular: 'swimming pool', plural: 'swimming pools' },
  { singular: 'locker', plural: 'lockers' },
  { singular: 'computer', plural: 'computers' },
  { singular: 'printer', plural: 'printers' },
  { singular: 'tablet', plural: 'tablets' },
  { singular: 'phone', plural: 'phones' },
  { singular: 'keyboard', plural: 'keyboards' },
  { singular: 'monitor', plural: 'monitors' },
  { singular: 'mouse', plural: 'mice' },
  { singular: 'lamp', plural: 'lamps' },
  { singular: 'fan', plural: 'fans' },
  { singular: 'cup', plural: 'cups' },
  { singular: 'plate', plural: 'plates' },
  { singular: 'spoon', plural: 'spoons' },
  { singular: 'fork', plural: 'forks' },
  { singular: 'knife', plural: 'knives' },
  { singular: 'bottle', plural: 'bottles' },
  { singular: 'glass', plural: 'glasses' },
  { singular: 'napkin', plural: 'napkins' },
  { singular: 'straw', plural: 'straws' },
  { singular: 'dish', plural: 'dishes' },
  { singular: 'tablecloth', plural: 'tablecloths' },
  { singular: 'table', plural: 'tables' },
  { singular: 'chair', plural: 'chairs' },
  { singular: 'sofa', plural: 'sofas' },
  { singular: 'couch', plural: 'couches' },
  { singular: 'bed', plural: 'beds' },
  { singular: 'pillow', plural: 'pillows' },
  { singular: 'blanket', plural: 'blankets' },
  { singular: 'sheet', plural: 'sheets' },
  { singular: 'quilt', plural: 'quilts' },
  { singular: 'mirror', plural: 'mirrors' },
  { singular: 'drawer', plural: 'drawers' },
  { singular: 'cabinet', plural: 'cabinets' },
  { singular: 'wardrobe', plural: 'wardrobes' },
  { singular: 'closet', plural: 'closets' },
  { singular: 'bathtub', plural: 'bathtubs' },
  { singular: 'sink', plural: 'sinks' },
  { singular: 'toilet', plural: 'toilets' },
  { singular: 'shower', plural: 'showers' },
  { singular: 'towel', plural: 'towels' },
  { singular: 'soap', plural: 'soaps' },
  { singular: 'shampoo', plural: 'shampoos' },
  { singular: 'conditioner', plural: 'conditioners' },
  { singular: 'toothbrush', plural: 'toothbrushes' },
  { singular: 'toothpaste', plural: 'toothpastes' },
  { singular: 'comb', plural: 'combs' },
  { singular: 'brush', plural: 'brushes' },
  { singular: 'razor', plural: 'razors' },
  { singular: 'tissue', plural: 'tissues' },
  { singular: 'paper', plural: 'papers' },
  { singular: 'magazine', plural: 'magazines' },
  { singular: 'book', plural: 'books' },
  { singular: 'newspaper', plural: 'newspapers' },
  { singular: 'lamp', plural: 'lamps' },
  { singular: 'light', plural: 'lights' },
  { singular: 'bulb', plural: 'bulbs' },
  { singular: 'fan', plural: 'fans' },
  { singular: 'remote', plural: 'remotes' },
  { singular: 'phone', plural: 'phones' },
  { singular: 'television', plural: 'televisions' },
  { singular: 'radio', plural: 'radios' },
  { singular: 'camera', plural: 'cameras' },
];


const getRandomNoun = () => {
  const randomIndex = Math.floor(Math.random() * nouns.length);
  return nouns[randomIndex];
};

const getPluralRule = (singular, plural) => {
  if (singular.endsWith('y') && plural.endsWith('ies')) {
    return 'Rule: Replace -y with -ies for nouns ending in consonant + y';
  }
  if (plural.endsWith('es')) {
    const lastLetter = singular[singular.length - 1];
    const lastTwoLetters = singular.slice(-2);
    if (['s', 'x', 'z'].includes(lastLetter) || ['ch', 'sh'].includes(lastTwoLetters)) {
      return 'Rule: Add -es for nouns ending in s, x, z, ch, or sh';
    }
  }
  if (plural !== pluralize(singular)) {
    return 'Irregular Plural';
  }
  return 'Standard Rule: Add -s';
};

const PluralNounQuiz = () => {
  const [currentNoun, setCurrentNoun] = useState(getRandomNoun);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rule, setRule] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  const checkAnswer = () => {
    const pluralRule = getPluralRule(currentNoun.singular, currentNoun.plural);
    setRule(pluralRule);

    if (userInput.toLowerCase() === currentNoun.plural.toLowerCase()) {
      setFeedback('Correct!');
      setCorrectCount((prev) => prev + 1);
    } else {
      setFeedback(`Incorrect! The plural of "${currentNoun.singular}" is "${currentNoun.plural}".`);
    }

    setTotalAttempts((prev) => prev + 1);
    setUserInput('');
    setCurrentNoun(getRandomNoun);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12 text-center">
          <h2 className="mb-4 text-primary">Plural Nouns Game</h2>

          {/* Display Noun in Large Font */}
          <p className="display-3 font-weight-bold text-warning mb-3">{currentNoun.singular}</p>

          {/* Input Field */}
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder=""
            className="form-control text-center font-weight-bold mb-4"
            style={{ fontSize: '1.5rem', border: '2px solid #007bff' }}
          />

          {/* Check Answer Button */}
          <button onClick={checkAnswer} className="btn btn-lg btn-primary mb-4" style={{ width: '50%' }}>
            Check Answer
          </button>

          {/* Feedback */}
          <h2 className={`feedback ${feedback === 'Correct!' ? 'text-success' : 'text-danger'} font-weight-bold`} style={{ fontSize: '1.2rem' }}>
            {feedback}
          </h2>

          
          {/* Score Display */}
          <p className="score mt-4 text-info">
            Score: <span className="font-weight-bold">{correctCount}</span> / {totalAttempts}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PluralNounQuiz;
