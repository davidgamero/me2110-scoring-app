import React, { FC } from 'react';
import GameObject from '../GameObject'
import Match from '../Match';
import TeamScorePanelContainer from './TeamScorePanelContainer';
import styled from 'styled-components';

const HeaderBar = styled.div`
  height: 10%;
`;

const PanelHolder = styled.div`
  flex-direction: row;
  display: flex;
`;

type Props = {
  gameObject: GameObject,
  match: Match
}

const GameScorer: FC<Props> = (props: Props) => {
  return (
    <div>
      <HeaderBar>
        <p>{props.gameObject.name}</p>
        <p>{props.match.start.toTimeString()}</p>
      </HeaderBar>
      <PanelHolder>
        {props.match.teams.map((t, i) => {
          return (
            <TeamScorePanelContainer team={t} gameObject={props.gameObject} panelNumber={i} key={i} />
          )
        })}
      </PanelHolder>
    </div>

  );
};

export default GameScorer;