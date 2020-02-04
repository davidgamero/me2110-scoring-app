import React from 'react';
import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';

const OptionRowBox = styled.div`
display: flex;
`

const OptionLabelInput = styled.input`
flex: 2;
min-width: 10rem;
`

const OptionValueInput = styled.input`
flex: 1;
min-width: 2rem;
`

const DeleteOptionButton = styled.span`
margin-right: 0.25rem;
padding: 0.25rem;
width: 2rem;
height: 2rem;
float: right;
cursor: pointer;
`

const OptionRow = ({ option, deleteThisOption, updateValue, updateLabel }) => {
  return (
    <OptionRowBox>
      <OptionLabelInput placeholder="Label" value={option.label} onChange={updateLabel} />
      <OptionValueInput placeholder="Value" value={option.value} onChange={updateValue} />
      <DeleteOptionButton onClick={deleteThisOption}>
        <TiDeleteOutline size="20" color="grey" />
      </DeleteOptionButton>
    </OptionRowBox>
  );
};

export default OptionRow;