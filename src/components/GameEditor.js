import React from 'react';
import styled from 'styled-components';

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

const GameEditor = ({ gameObject }) => {
  return (<div>
    <HeaderBar>
      <H1>{gameObject.name}</H1>
      <AddButton onClick={props.openModal}>+</AddButton>
    </HeaderBar>
    <FlatList
      data={gameObject.gameElements}
      renderItem={(gameElement) => {
        switch (gameElement.type) {
          case 'points':
            break;
          case 'multiplier':
            break;
        }
      }}
    />

  </div>
  )
}

export default GameEditor;