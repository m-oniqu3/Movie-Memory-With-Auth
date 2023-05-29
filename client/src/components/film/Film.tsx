import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { styled } from "styled-components";
import Container from "../../helpers/ui/Container";
import Heading from "../../helpers/ui/Heading";
import Loading from "../../helpers/ui/Loading";

import { devices } from "../../styles/breakpoint";
import type {
  ExtendedFilmDetails,
  FilmDetails,
  MediaType,
} from "../../types/Film";
import FilmGrid from "./FilmGrid";

const StyledFilms = styled.div`
  background-color: var(--primary-dark);
  padding: 2rem 0;
  min-height: 100vh;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));

    grid-gap: 1rem;
    padding: 2rem 0;

    @media (${devices.medium}) {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      grid-gap: 2rem;
    }

    figure {
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
`;

type Props = {
  heading: string;
  url: string;
  queryKey: string;
  mediaType: MediaType;
};

const fetchFilms = async (url: string): Promise<FilmDetails[]> => {
  const APIKEY = import.meta.env.VITE_API_KEY;

  try {
    const response: AxiosResponse = await axios.get(`${url}`, {
      params: { api_key: APIKEY },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Error fetching movies");
  }
};

const Film = ({ heading, queryKey, url, mediaType }: Props) => {
  const results = useQuery({
    queryKey: [`${queryKey}`],
    queryFn: () => fetchFilms(url),
  });

  const { isLoading, error, data = [] } = results;

  if (isLoading) {
    return (
      <StyledFilms>
        <Container>
          <Loading />
        </Container>
      </StyledFilms>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <StyledFilms>
      <Container>
        <Heading className="small white white--styled">{heading}</Heading>

        <div className="grid">
          {data
            .filter((film: FilmDetails) => film.poster_path)
            .map((film: FilmDetails) => {
              const extendedFilm: ExtendedFilmDetails = {
                ...film,
                media_type: mediaType,
              };

              return <FilmGrid key={film.id} film={extendedFilm} />;
            })}
        </div>
      </Container>
    </StyledFilms>
  );
};

export default Film;
