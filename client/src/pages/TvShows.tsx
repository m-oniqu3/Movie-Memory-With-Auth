import SlideShow from "../helpers/swiper/SlideShow";
import { tvShows } from "../helpers/swiper/browseImages";

const TvShows = () => {
  return (
    <div>
      <SlideShow movies={tvShows} />
    </div>
  );
};

export default TvShows;
