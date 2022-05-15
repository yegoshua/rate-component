import styled from "styled-components";

const StyledTitle = styled.h1`
  font-weight: bold;
  margin: 0;
  color: hsl(0, 0%, 100%);
  text-align: ${(props) => props.textAlign || ""};
`;

export const Title = (props) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};
