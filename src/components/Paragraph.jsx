import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: hsl(216, 12%, 54%);
  margin-bottom: 2rem;
  text-align: ${(props) => props.textAlign || "left"};
`;

const Paragraph = (props) => {
  return <StyledParagraph {...props}>{props.children}</StyledParagraph>;
};

export default Paragraph;
