import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../components/Button";
import Container from "../helpers/ui/Container";
import Heading from "../helpers/ui/Heading";
import { StyledText } from "../styles/StyledText.styled";
import Poster from "./../assets/poster.png";

const StyledAccount = styled.div`
  position: relative;
  top: 10vh;
  display: grid;

  @media (min-width: 900px) {
    grid-template-columns: 40% 60%;
    height: 100%;
    top: 0;
  }

  figure {
    display: none;
    width: 600px;
    position: relative;
    top: 0;
    left: 0;

    @media (min-width: 900px) {
      display: grid;
      height: 100vh;
      width: 100%;
      z-index: 0;
    }

    img {
      width: 100%;
      height: 100%;
      max-height: 100vh;
      object-fit: cover;
    }
  }

  .form__container {
    height: 90vh;
    display: grid;
    place-items: center;

    @media (min-width: 900px) {
      height: 100vh;
    }

    article {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 300px;
      margin: auto;

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
          border: none;
          outline: none;
          border-bottom: 1px solid var(--placeholder);
          margin-top: 0.5rem;
          width: 100%;
          padding: 0.8rem 0;
          background: none;

          &::placeholder {
            color: var(--placeholder);
          }
        }

        .primary--dark {
          width: 100%;
        }

        .prompt {
          text-align: center;

          a {
            color: var(--primary-dark);
          }
        }
      }
    }
  }
`;

const formContent = {
  createAccount: {
    heading: "Create Account",
    greeting:
      "Keep track of the movies you've watched. Create an account to get started.",
    button: "Create Account",
    link: "create",
    prompt: "Already have an account?",
  },
  login: {
    heading: "Welcome Back",
    greeting:
      "Sign in to keep track of the movies you've watched with Movie Memory.",
    button: "Login",
    link: "login",
    prompt: "Don't have an account?",
  },
};

const Account = () => {
  const [showAccountForm, setShowAccountForm] = useState(true);
  const { createAccount, login } = formContent;

  const handleForm = () => setShowAccountForm((state) => !state);
  const handleClick = () => console.log("click");

  const heading = showAccountForm ? createAccount.heading : login.heading;
  const greeting = showAccountForm ? createAccount.greeting : login.greeting;
  const button = showAccountForm ? createAccount.button : login.button;

  const createAccountPrompt = (
    <>
      {createAccount.prompt} &nbsp;{" "}
      <Link to="#login" onClick={handleForm}>
        Login
      </Link>
    </>
  );

  const loginPrompt = (
    <>
      {login.prompt} &nbsp;
      <Link to="#create" onClick={handleForm}>
        Create Account
      </Link>
    </>
  );

  const prompt = showAccountForm ? createAccountPrompt : loginPrompt;

  return (
    <StyledAccount>
      <figure>
        <img src={Poster} alt="poster" />
      </figure>

      <Container className="form__container">
        <article>
          <Heading className="small--dark">{heading}</Heading>
          <StyledText>{greeting}</StyledText>

          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <Button className="primary--dark" onClick={handleClick}>
              {button}
            </Button>

            <StyledText className="prompt">{prompt}</StyledText>
          </form>
        </article>
      </Container>
    </StyledAccount>
  );
};

export default Account;
