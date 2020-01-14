import React from 'react';
import styled from 'styled-components';
import ElementEditContainer from './ElementEditContainer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const H1 = styled.h1`
  display: inline-block;
`

const AddButton = styled.button`
  display: inline-block;
  float: right;
  color: palevioletred;
  font-size: 1.5em;
  margin: 0.2em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const HeaderBar = styled.div`
  
`

const ElementEditList = styled.li`
  display: flex;
  flex-direction: column;
`


const GameEditor = ({ gameObject, addGameElement, updateGameElement }) => {
  return (<div>
    <HeaderBar>
      <H1>{gameObject.name}</H1>
      <AddButton onClick={() => { addGameElement('multiplier') }}>+Multiplier</AddButton>
      <AddButton onClick={() => { addGameElement('points') }}>+Point</AddButton>
    </HeaderBar>
    <ElementEditList>
      {gameObject.gameElements ? gameObject.gameElements.map(
        (gameElement) => {
          console.log('Elem type=' + gameElement.type);
          return (
            <ElementEditContainer
              updateGameElement={updateGameElement}
              gameElement={gameElement}
              key={gameElement.key} />
          )
        }
      )
        : ''}
    </ElementEditList>
  </div >)
};

export default GameEditor;