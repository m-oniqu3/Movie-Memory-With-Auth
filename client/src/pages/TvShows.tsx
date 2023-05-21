import SlideShow from "../helpers/swiper/SlideShow";
import { tvShows } from "../helpers/swiper/tvshowImages";

const TvShows = () => {
  return (
    <div>
      <SlideShow movies={tvShows} />
    </div>
  );
};

export default TvShows;
