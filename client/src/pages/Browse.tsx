import Film from "../components/film/Film";
import SlideShow from "../helpers/swiper/SlideShow";
import { browseMovies } from "../helpers/swiper/browseImages";

const Browse = () => {
  return (
    <div>
      <SlideShow movies={browseMovies} />
      <Film
        heading="Upcoming Movies"
        url="https://api.themoviedb.org/3/movie/upcoming"
        queryKey="upcomingMovies"
        mediaType="movie"
      />
    </div>
  );
};

export default Browse;
