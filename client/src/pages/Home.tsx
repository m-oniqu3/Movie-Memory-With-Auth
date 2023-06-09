import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../components/Button";
import Container from "../helpers/ui/Container";
import Heading from "../helpers/ui/Heading";
import { StyledText } from "../styles/StyledText.styled";
import { devices } from "../styles/breakpoint";
import Background from "./../assets/background.png";

const StyledHome = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--primary-neutral);

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (${devices.medium}) {
      width: 500px;
    }

    @media (${devices.large}) {
      width: 550px;
    }

    p {
      max-width: 500px;
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/account");
  };

  return (
    <StyledHome>
      <Container>
        <article>
          <Heading className="medium">From rom-coms to action flicks</Heading>

          <StyledText>
            With Movie Memories, you'll never forget your favorite TV shows and
            movies again. Sign up today to create your own watchlist and relive
            all your unforgettable moments.
          </StyledText>

          <Button className="primary" onClick={handleClick}>
            Get started
          </Button>
        </article>
      </Container>
    </StyledHome>
  );
};

export default Home;
