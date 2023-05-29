import axios, { AxiosResponse } from "axios";
import { ExtendedFilmDetails, MediaType } from "../../types/Film";

const APIKEY = import.meta.env.VITE_API_KEY;

export const fetchFilmDetails = async (
  id: number,
  mediaType: MediaType
): Promise<ExtendedFilmDetails> => {
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
        poster_path: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        genres: data.genres,
        release_date: data.release_date,
        media_type: mediaType,
      };
    } else {
      return {
        id: data.id,
        title: data.name,
        overview: data.overview,
        poster_path: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        genres: data.genres,
        release_date: data.first_air_date,
        media_type: mediaType,
      };
    }
  } catch (error) {
    throw new Error("Error fetching movie");
  }
};

export const fetchFrequentlySearched = async () => {
  const url = `https://api.themoviedb.org/3/trending/all/day`;

  try {
    const response: AxiosResponse = await axios.get(`${url}`, {
      params: { api_key: APIKEY },
    });

    const data = response.data.results;

    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error fetching frequently searched");
  }
};
