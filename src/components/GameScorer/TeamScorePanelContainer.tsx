import React from 'react';
import TeamScorePanel from './TeamScorePanel';

type Props = {

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
      <TeamScorePanel />
    )
  }
}