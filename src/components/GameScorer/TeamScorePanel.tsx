import React, { FC } from 'react';
import GameObject from '../GameObject';
import { Team } from '../Match';
import styled, { StyledFunction } from 'styled-components';
import PanelColors from '../PanelColors'

interface Props {
  team: Team,
  gameObject: GameObject,
  panelNumber: number,
};

const Panel: any = styled.div`
  flex: 1;
  background-color: ${(props: Props) => {
    console.log(props);
    return PanelColors[props.panelNumber]
  }}
`;

const TeamScorePanel: FC<Props> = (props) => {
  return (
    <Panel panelNumber={props.panelNumber}>
      <p>{JSON.stringify(props.team.name)}</p>
      <p>{'Team #' + props.team.number}</p>
    </Panel>
  );
};

export default TeamScorePanel;