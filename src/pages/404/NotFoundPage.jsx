import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const exitHome = () => {
    navigate("/");
  };
  return (
    <StyledContainer>
      <section>
        <h1>404</h1>
        <h2>OOPS! PAGE NOT FOUND</h2>
        <p>
          Sorry, the page you're looking for doesn't exist. If you think
          something is broken, report a problem
        </p>
        <div className="container-buttons">
          <Button onClick={exitHome}> return home </Button>
          <Button > report problem</Button>
        </div>
      </section>
    </StyledContainer>
  );
};

export default NotFoundPage;
const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(https://avatars.mds.yandex.net/i?id=69465b95e1abf2fa014c56d47ebbff6a_l-9858428-images-thumbs&n=13);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 70%;
    border-radius: 20px;
    gap: 20px;
    & > h1 {
      font-size: 7rem;
      color: white;
      font-weight: bold;
    }
    & > h2 {
      font-size: 4rem;
      color: white;
    }
    & > p {
      font-size: 2rem;
      width: 70%;
      color: white;
      text-align: center;
      font-weight: 700;
    }
    .container-buttons {
      display: flex;
      gap: 30px;
      margin-top: 20px;
      button {
        color: #00ccff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 19px;
        border-radius: 25px;
        background-color: #fff;
        border: 1px solid #00ccff;
        &:hover {
          background-color: #00ccff;
          color: white;
        }
      }
    }
  }
`;
