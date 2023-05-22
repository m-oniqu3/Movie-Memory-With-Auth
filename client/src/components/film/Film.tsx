import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { styled } from "styled-components";
import Container from "../../helpers/ui/Container";
import Heading from "../../helpers/ui/Heading";
import Loading from "../../helpers/ui/Loading";

const StyledFilms = styled.div`
  background-color: var(--primary-dark);
  padding: 2rem 0;
  min-height: 100vh;
`;

type Props = {
  heading: string;
  url: string;
  queryKey: string;
};

const fetchFilms = async (url: string) => {
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
  const { isLoading, error, data } = useQuery({
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
      </Container>
    </StyledFilms>
  );
};

export default Film;
