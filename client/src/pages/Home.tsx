import { styled } from "styled-components";
import Container from "../helpers/ui/Container";
import Heading from "../helpers/ui/Heading";
import { StyledText } from "../styles/StyledText.styled";

const StyledHome = styled.div`
  background-color: green;
  height: 100vh;
  display: grid;
  place-items: center;

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Home = () => {
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

          <button>Get started</button>
        </article>
      </Container>
    </StyledHome>
  );
};

export default Home;
