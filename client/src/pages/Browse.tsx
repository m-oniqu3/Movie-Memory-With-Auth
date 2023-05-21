import SlideShow from "../helpers/swiper/SlideShow";
import { browseMovies } from "../helpers/swiper/browseImages";

const Browse = () => {
  return (
    <div>
      <SlideShow movies={browseMovies} />
    </div>
  );
};

export default Browse;
