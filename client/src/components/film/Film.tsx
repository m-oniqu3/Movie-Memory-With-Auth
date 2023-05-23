import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { styled } from "styled-components";
import Container from "../../helpers/ui/Container";
import Heading from "../../helpers/ui/Heading";
import Loading from "../../helpers/ui/Loading";

import { devices } from "../../styles/breakpoint";
import type { FilmData } from "../../types/Film";

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
`;

type Props = {
  heading: string;
  url: string;
  queryKey: string;
  mediaType: "movie" | "tv";
};

const fetchFilms = async (url: string): Promise<FilmData[]> => {
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

const Film = ({ heading, queryKey, url }: Props) => {
  const {
    isLoading,
    error,
    data = [],
  } = useQuery({
    queryKey: [`${queryKey}`],
    queryFn: () => fetchFilms(url),
  });

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

  console.log(data);

  return (
    <StyledFilms>
      <Container>
        <Heading className="small--white">{heading}</Heading>

        <div className="grid">
          {data
            .filter((film: FilmData) => film.poster_path)
            .map((film: FilmData) => (
              <figure key={film.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                />
              </figure>
            ))}
        </div>
      </Container>
    </StyledFilms>
  );
};

export default Film;
