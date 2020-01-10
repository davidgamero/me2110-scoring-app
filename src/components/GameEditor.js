import React from 'react';
import styled from 'styled-components';
import PointsEdit from './PointsEdit';
import MultiplierEdit from './MultiplierEdit';

const H1 = styled.h1`
  display: inline-block;
`

const AddButton = styled.button`
  display: inline-block;
  float: right;
  padding: 0.5rem;
  font-size: 2rem;
  margin: 0.2rem;
`

const HeaderBar = styled.div`
  
`

const EditorContainer = styled.li`
  display: flex;
  flex-direction: column;
`


const GameEditor = ({ gameObject, openModal }) => {
  return (<div>
    <HeaderBar>
      <H1>{gameObject.name}</H1>
      <AddButton onClick={openModal}>+</AddButton>
    </HeaderBar>
    <EditorContainer>
      {gameObject.gameElements ? gameObject.gameElements.map(
        (gameElement) => {
          console.log('Elem type=' + gameElement.type);
          switch (gameElement.type) {
            case 'points':
              return (<PointsEdit gameElement={gameElement} key={gameElement.key} />);
            case 'multiplier':
              return (<MultiplierEdit gameElement={gameElement} key={gameElement.key} />);
            default:
              return 'Flatlist Default'
          }
        }
      )
        : ''}
    </EditorContainer>

  </div>)
};

export default GameEditor;