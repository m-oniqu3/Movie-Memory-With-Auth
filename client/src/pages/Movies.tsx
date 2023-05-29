import Film from "../components/film/Film";
import SlideShow from "../helpers/swiper/SlideShow";
import { movies } from "../helpers/swiper/movieImages";

const Movies = () => {
  return (
    <div>
      <SlideShow movies={movies} />
      <Film
        heading="Popular Movies"
        url="https://api.themoviedb.org/3/movie/popular"
        queryKey="popularMovies"
        mediaType="movie"
      />
    </div>
  );
};

export default Movies;
