import React from 'react';
import styled from 'styled-components';

import PointsEdit from './PointsEdit';
import MultiplierEdit from './MultiplierEdit';

const FieldText = styled.p`
float: left;
margin: 0 3rem;
`

const ElementEditCard = styled.div`
border-radius: 0.5rem;
border: 0.1rem solid palevioletred;
margin: 0.5rem;
padding: 0.5rem;
float: left;
`

const ElementNameInput = styled.input`
width: 20rem;
float: left;
`

const getGameReactElement = (gameElement) => {
  switch (gameElement.type) {
    case 'points':
      return (<PointsEdit gameElement={gameElement} key={gameElement.key} />);
    case 'multiplier':
      return (<MultiplierEdit gameElement={gameElement} key={gameElement.key} />);
    default:
      return 'Unknown Game Element Type';
  }
}

const ElementEdit = ({ gameElement }) => {
  return (
    <ElementEditCard>
      <ElementNameInput placeholder="New GameElement Name" />
      <FieldText>{gameElement.key}</FieldText>
      {getGameReactElement(gameElement)}
    </ElementEditCard>
  );
}

export default ElementEdit;