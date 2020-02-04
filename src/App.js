import React from 'react';
import './App.css';
import GameEditorContainer from './components/GameEditor/GameEditorContainer';
import GameScorerContainer from './components/GameScorer/GameScorerContainer';

function App() {
  return (
    <div className="App">
      {/* <GameEditorContainer name="Spring 2020" /> */}
      <GameScorerContainer />
    </div>
  );
}

export default App;
