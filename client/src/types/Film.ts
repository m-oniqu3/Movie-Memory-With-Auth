export type Film = {
  src: string;
  title: string;
  desc: string;
  genre: string[];
};

export type FilmData = {
  id: number;
  poster_path: string;
  title: string;
};

export type MediaType = "movie" | "tv";

export interface FilmDetails extends FilmData {
  genres: { id: number; name: string }[];
  overview: string;
  release_date: string;
}

export interface ExtendedFilmDetails extends FilmDetails {
  media_type: MediaType;
}
