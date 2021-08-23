import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, googleAuth } from "../../firebase";

const Login = () => {
  const signin = (e) => {
    e.preventDefault();
    auth.signInWithPopup(googleAuth).catch((error) => alert(error));
  };
  return (
    <LoginContainer>
      <LoginInContainer>
        <img
          src="https://static.dezeen.com/uploads/2019/01/slack-rebrand-pentagram-michael-bierut_dezeen_hero-1704x958.jpg"
          alt=""
        />
        <h1>Check out my Github profile</h1>
        <p>https://github.com/DaimSyed</p>
        <Button onClick={signin} variant="contained" color="secondary">
          Sign in with Google
        </Button>
      </LoginInContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const LoginInContainer = styled.div`
  padding: 100px;
  text-align: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    margin: 0 0 40px 0;
    height: 200px;
  }

  > button {
    margin-top: 30px;
  }
`;
