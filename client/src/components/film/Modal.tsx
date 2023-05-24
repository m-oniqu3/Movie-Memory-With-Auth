import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { FilmData, FilmDetails, MediaType } from "../../types/Film";

type Props = {
  filmData: FilmData;
  closeModal: () => void;
  mediaType: MediaType;
};

const fetchFilmDetails = async (
  id: number,
  mediaType: MediaType
): Promise<FilmDetails> => {
  const APIKEY = import.meta.env.VITE_API_KEY;

  const url =
    mediaType === "movie"
      ? `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`
      : `https://api.themoviedb.org/3/tv/${id}?api_key=${APIKEY}&language=en-US`;

  try {
    const response: AxiosResponse = await axios.get(`${url}`, {
      params: { api_key: APIKEY },
    });
    const data = response.data;

    if (mediaType === "movie") {
      return {
        id: data.id,
        title: data.title,
        overview: data.overview,
        poster_path: data.poster_path,
        genres: data.genres,
        release_date: data.release_date,
      };
    } else {
      return {
        id: data.id,
        title: data.name,
        overview: data.overview,
        poster_path: data.poster_path,
        genres: data.genres,
        release_date: data.first_air_date,
      };
    }
  } catch (error) {
    throw new Error("Error fetching movie");
  }
};

const Modal = (props: Props) => {
  const { filmData, closeModal, mediaType } = props;
  const results = useQuery({
    queryKey: ["movieData"],
    queryFn: () => fetchFilmDetails(filmData.id, mediaType),
  });

  const { isLoading, error, data = [] } = results;

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(data);

  return <div>Modal</div>;
};

export default Modal;
