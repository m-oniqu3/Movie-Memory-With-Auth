import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";
import { fetchFrequentlySearched } from "../../helpers/api/api";
import Container from "../../helpers/ui/Container";
import { devices } from "../../styles/breakpoint";
import { ExtendedFilmDetails, FilmData } from "../../types/Film";
import FilmGrid from "../film/FilmGrid";

const StyledSearch = styled.div`
  background-color: var(--primary-dark);
  min-height: 100vh;
  height: 100%;
  padding-top: 10vh;

  .container {
    padding: 1rem 0;

    form {
      input {
        width: 100%;
        border: 2px solid var(--primary-light);
        border-radius: 5px;
        padding: 0.5rem;
        background: none;
        font-size: 1rem;

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: var(--primary-light);
        }

        @media (${devices.medium}) {
          padding: 0.675rem;
        }
      }
    }

    .film-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));

      grid-gap: 1rem;
      padding: 2rem 0;

      @media (${devices.medium}) {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-gap: 2rem;
      }

      .figure {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 10.8rem;
          width: 6.5rem;
          object-fit: cover;
          border-radius: 5px;
          cursor: pointer;

          @media (${devices.medium}) {
            height: 17rem;
            width: 10.8rem;
          }
        }
      }
    }
  }
`;

const Search = () => {
  const results = useQuery({
    queryKey: ["frequentlySearched"],
    queryFn: fetchFrequentlySearched,
  });

  const { data, isLoading, error } = results;

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  console.log(data);

  return (
    <StyledSearch>
      <Container className="container">
        <form>
          <input type="text" placeholder="Search for movies or tv shows" />
        </form>

        <div className="film-grid">
          {data
            .filter((film: FilmData) => film.poster_path)
            .map((film: ExtendedFilmDetails) => {
              return <FilmGrid key={film.id} film={film} />;
            })}
        </div>
      </Container>
    </StyledSearch>
  );
};

export default Search;
