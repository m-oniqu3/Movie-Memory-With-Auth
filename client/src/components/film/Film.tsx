import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { styled } from "styled-components";
import Container from "../../helpers/ui/Container";
import Heading from "../../helpers/ui/Heading";

const StyledFilms = styled.div`
  background-color: var(--primary-dark);
  padding: 2rem 0;
`;

type Props = {
  heading: string;
};

const Film = ({ heading }: Props) => {
  const APIKEY = import.meta.env.VITE_API_KEY;

  const fetchFilms = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming",
        { params: { api_key: APIKEY } }
      );
      return response.data.results;
    } catch (error) {
      throw new Error("Error fetching movies");
    }
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["films"],
    queryFn: fetchFilms,
  });

  if (isLoading) {
    return <div>Loading...</div>;
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
