import SlideShow from "../helpers/swiper/SlideShow";
import { movies } from "../helpers/swiper/movieImages";

const Movies = () => {
  return (
    <div>
      <SlideShow movies={movies} />
    </div>
  );
};

export default Movies;
