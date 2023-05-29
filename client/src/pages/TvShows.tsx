import Film from "../components/film/Film";
import SlideShow from "../helpers/swiper/SlideShow";
import { tvShows } from "../helpers/swiper/tvshowImages";

const TvShows = () => {
  return (
    <div>
      <SlideShow movies={tvShows} />
      <Film
        heading="Popular TV Shows"
        url="https://api.themoviedb.org/3/tv/top_rated"
        queryKey="popularTvShows"
        mediaType="tv"
      />
    </div>
  );
};

export default TvShows;
