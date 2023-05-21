// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { styled } from "styled-components";
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledText } from "../../styles/StyledText.styled";
import { devices } from "../../styles/breakpoint";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import { Film } from "./browseImages";

SwiperCore.use([Autoplay]);

const StyledSlide = styled.div`
  .swiper {
    width: 100vw;
    height: 100vh;
  }
  .swiper-slide {
    .swiper-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .swiper-pagination-bullet {
    background-color: #fff;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--primary-light);
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
  }

  .overlay {
    background: linear-gradient(
      71.17deg,
      rgba(0, 0, 0, 0.6106) 16.95%,
      rgba(19, 19, 19, 0.1032) 99.64%
    );
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
  }

  .movie-container {
    position: absolute;
    left: 0;
    bottom: 30px;
    z-index: 100;
    width: 100%;

    @media (${devices.medium}) {
      bottom: 70px;
    }

    h1 {
      max-width: 570px;
    }

    p {
      margin-top: 0.5rem;
      color: var(--primary-neutral);
      max-width: 520px;
      font-size: clamp(1rem, 3vw, 1.1rem);

      @include m.breakpoint(medium) {
        margin-top: 1rem;
      }
    }

    .genres {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;

      @media (${devices.medium}) {
        gap: 1rem;
      }

      .genre {
        background-color: var(--primary-neutral);
        color: var(--primary);
        padding: 0.3rem 1rem;
        border-radius: 5px;
        font-size: 1rem;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: var(--primary-light);
        }

        @media (${devices.medium}) {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;

type Props = {
  movies: Film[];
};

const SlideShow = ({ movies }: Props) => {
  return (
    <StyledSlide>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay
        speed={1500}
        loop={true}
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.title} className="swiper-slide">
              <img src={movie.src} alt={movie.title} className="swiper-image" />
              <div className="overlay"></div>

              <article class="movie-container">
                <Container>
                  <Heading className="medium">{movie.title}</Heading>
                  <StyledText>{movie.desc}</StyledText>
                  <div class="genres">
                    {movie.genre.map((genre: string) => {
                      return <p class="genre">{genre}</p>;
                    })}
                  </div>
                </Container>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledSlide>
  );
};

export default SlideShow;
