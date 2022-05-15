import styled from "styled-components";
import SubmitButton from "./components/SubmitButton";
import Raiting from "./components/Raiting";
import { useState } from "react";
import { useEffect } from "react";
import { Title } from "./components/Title";
import Paragraph from "./components/Paragraph";
import ThankYou from "./ThankYou";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
`;

const Container = styled.div`
  background: linear-gradient(
    0deg,
    rgba(23, 30, 40, 1) 0%,
    rgba(28, 35, 45, 1) 40%,
    rgba(30, 37, 47, 1) 100%
  );
  width: 500px;
  height: 500px;
  border-radius: 3rem;
  padding: 2rem;
`;

const StarImg = styled.div`
  border-radius: 50%;
  background-color: hsl(213, 19%, 18%);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

function App() {
  const [raiting, setRaiting] = useState(null);
  const [finalMark, setFinalMark] = useState(null);
  console.log(finalMark);
  return (
    <>
      <Wrapper>
        {finalMark ? (
          <ThankYou setFinalMark={setFinalMark} raiting={raiting} />
        ) : (
          <Container>
            <StarImg>
              <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                  fill="#FC7614"
                />
              </svg>
            </StarImg>
            <Title>How did we do?</Title>
            <Paragraph>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </Paragraph>
            <Raiting setRaiting={setRaiting} />
            <SubmitButton setFinalMark={setFinalMark} raiting={raiting} />
          </Container>
        )}
      </Wrapper>
    </>
  );
}

export default App;
