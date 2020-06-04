import React from 'react';
import styled from 'styled-components';

function MaterialUnderlineTextbox(props) {
  return (
    <Container {...props}>
      <InputStyle placeholder={props.inputStyle || 'Placeholder'}></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-bottom-width: 1px;
  border-color: #d9d5dc;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  color: rgba(255, 255, 255, 1);
  padding-right: 5px;
  font-size: 20px;
  align-self: stretch;
  flex: 1 1 0%;
  line-height: 16px;
  padding-top: 16px;
  padding-bottom: 8px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default MaterialUnderlineTextbox;
