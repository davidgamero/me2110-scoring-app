import React from 'react';
import OptionRowContainer from './OptionRowContainer';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const OptionEditBox = styled.span`
border: 0.1rem solid lightgray;
width: 25rem;
display: flex;
flex-direction: column;
padding: 0.2rem;
border-radius: 3px;
`

const OptionsTitle = styled.p`
`

const OptionsEdit = ({ gameElement, addOption, deleteOption, updateOption }) => {
  let options = gameElement.options || [];

  return (
    <OptionEditBox>
      <OptionsTitle>Options</OptionsTitle>
      {
        options.map((option, index) =>
          <OptionRowContainer
            option={option}
            index={index}
            key={option.key}
            deleteOption={deleteOption}
            updateOption={updateOption} />)
      }
      <Button variant="outline-secondary" onClick={addOption}>Add New Option</Button>
    </OptionEditBox>
  );
};

export default OptionsEdit;