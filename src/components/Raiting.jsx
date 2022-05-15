import React from "react";
import styled from "styled-components";
import { useState } from "react";

const RateList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`;
const MarkItem = styled.button`
  font-size: 16px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 0.5s;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.isClicked ? "#fc7617" : "hsl(213, 19%, 18%)"};
  color: ${(props) =>
    props.isClicked ? "hsl(0, 0%, 100%)" : "hsl(217, 12%, 63%)"};
  &:hover {
    background-color: #7c8799;
    color: hsl(0, 0%, 100%);
  }
`;

const Raiting = ({ setRaiting }) => {
  const [marks, setMarks] = useState([
    {
      value: 1,
      isClicked: false,
    },
    {
      value: 2,
      isClicked: false,
    },
    {
      value: 3,
      isClicked: false,
    },
    {
      value: 4,
      isClicked: false,
    },
    {
      value: 5,
      isClicked: false,
    },
  ]);
  return (
    <RateList>
      {marks.map((m) => {
        return (
          <MarkItem
            key={m.value}
            onClick={() => {
              setRaiting(m.value);
              marks.map((mark) => {
                if (mark.value === m.value) {
                  mark.isClicked = true;
                } else {
                  mark.isClicked = false;
                }
              });
            }}
            isClicked={m.isClicked}
          >
            {m.value}
          </MarkItem>
        );
      })}
    </RateList>
  );
};

export default Raiting;
