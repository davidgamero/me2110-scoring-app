import React from 'react';
import styled from 'styled-components';
import PointsEdit from './PointsEdit';
import MultiplierEdit from './MultiplierEdit';
import { TiDeleteOutline } from 'react-icons/ti';
import OptionsEditContainer from './OptionsEditContainer';

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

const DeleteElementButton = styled.span`
margin-right: 0.25rem;
padding: 0.25rem;
width: 2rem;
height: 2rem;
float: right;
cursor: pointer;
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

const ElementEdit = ({ gameElement, updateGameElementName, updateGameElementField, removeGameElement }) => {
  return (
    <ElementEditCard>
      <ElementNameInput
        placeholder="New GameElement Name"
        onChange={updateGameElementName} />
      <OptionsEditContainer
        gameElement={gameElement}
        updateGameElementField={updateGameElementField}
      />
      <FieldText>{gameElement.key}</FieldText>
      <FieldText>{gameElement.name}</FieldText>
      {getGameReactElement(gameElement)}
      <DeleteElementButton onClick={removeGameElement}>
        <TiDeleteOutline size="20" color="palevioletred" />
      </DeleteElementButton>
    </ElementEditCard>
  );
}

export default ElementEdit;