import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../components/Button";
import Container from "../helpers/ui/Container";
import Heading from "../helpers/ui/Heading";
import { StyledText } from "../styles/StyledText.styled";

const StyledAccount = styled.div`
  position: relative;
  top: 10vh;

  figure {
    display: none;
  }

  .form__container {
    height: 90vh;
    display: grid;
    place-items: center;

    article {
      display: flex;
      flex-direction: column;
      gap: 1rem;

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

  return (
    <StyledAccount>
      <figure>
        <img src="" alt="" />
      </figure>

      <Container className="form__container">
        <article>
          <Heading className="small--dark">
            {showAccountForm ? createAccount.heading : login.heading}
          </Heading>
          <StyledText>
            {showAccountForm ? createAccount.greeting : login.greeting}
          </StyledText>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <Button
              className="primary--dark"
              onClick={() => {
                console.log("btn");
              }}
            >
              {showAccountForm ? createAccount.button : login.button}
            </Button>

            <StyledText className="prompt">
              {showAccountForm ? (
                <>
                  {createAccount.prompt} &nbsp;
                  <Link to="#login" onClick={handleForm}>
                    Login
                  </Link>
                </>
              ) : (
                <>
                  {login.prompt} &nbsp;
                  <Link to="#create" onClick={handleForm}>
                    Create Account
                  </Link>
                </>
              )}
            </StyledText>
          </form>
        </article>
      </Container>
    </StyledAccount>
  );
};

export default Account;
