import React from 'react';
import TeamScorePanel from './TeamScorePanel';
import { Team } from '../Match';
import GameObject from '../GameObject';

type Props = {
  team: Team,
  gameObject: GameObject,
  panelNumber: number,
};

type State = {

};

export default class TeamScorePanelContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {

  }

  render() {
    return (
      <TeamScorePanel team={this.props.team} gameObject={this.props.gameObject} panelNumber={this.props.panelNumber} />
    )
  }
}