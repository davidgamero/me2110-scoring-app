import React from 'react';
import GameScorer from './GameScorer';
import GameObject from '../GameObject';
import Match from '../Match';

type GameScorerContainerProps = {
  gameObject: GameObject,
  match: Match
}

interface GameScorerContainerState {
  gameObject: GameObject,
}

export default class GameScorerContainer extends React.Component<GameScorerContainerProps, GameScorerContainerState> {
  constructor(props: GameScorerContainerProps) {
    super(props);
  }

  static defaultProps = {
    gameObject: {
      name: 'Spring 2020',
      gameElements: [
        {
          key: 100001,
          type: 'points',
          name: 'The Girls',
          options: [
            {
              label: 'Zone 1',
              value: '10',
              key: 100001001,
            },
            {
              label: 'Zone 2',
              value: '25',
              key: 100001002,
            }
          ]
        },
        {
          key: 100002,
          type: 'points',
          name: 'Rocket',
          options: [
            {
              label: 'Height 1',
              value: '5',
              key: 100002001,
            },
            {
              label: 'Height 2',
              value: '50',
              key: 100002002,
            }
          ]
        },
        {
          key: 100003,
          type: 'multiplier',
          name: 'The Girls',
          options: [
            {
              label: 'M 1',
              value: '1',
              key: 100003001,
            },
            {
              label: 'M 2',
              value: '2',
              key: 100003002,
            },
            {
              label: 'M 5',
              value: '5',
              key: 100003002,
            }
          ]
        }
      ]
    },
    match: {
      start: new Date(),
      teams: [1, 12, 15, 19],
      teamNames: ['team1', 'team12', 'team15', 'team19']
    }
  }

  render() {
    return (
      <GameScorer gameObject={this.props.gameObject} match={this.props.match} />
    )
  }
}