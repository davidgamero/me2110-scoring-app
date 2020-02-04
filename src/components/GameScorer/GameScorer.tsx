import React, { FC } from 'react';
import GameObject from '../GameObject'
import Match from '../Match';

type GameScorerProps = {
  gameObject: GameObject,
  match: Match
}

const GameScorer: FC<GameScorerProps> = (props) => {
  return (
    <p>{'Start Time: ' + props.match.start.toTimeString()}</p>
  );
};

export default GameScorer;