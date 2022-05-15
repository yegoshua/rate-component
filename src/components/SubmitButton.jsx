import styled from "styled-components";
import React from "react";

const StyledSubmit = styled.button`
  color: hsl(0, 0%, 100%);
  background-color: #ff750e;
  width: 100%;
  padding: 1rem;
  border-radius: 2rem;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  &:hover {
    background-color: hsl(0, 0%, 100%);
    color: #ff750e;
  }
`;

const SubmitButton = ({ setFinalMark, raiting }) => {
  return (
    <StyledSubmit
      onClick={() => {
        setFinalMark(raiting);
      }}
    >
      SUBMIT
    </StyledSubmit>
  );
};

export default SubmitButton;
