import { useQuery } from "@tanstack/react-query";
import { RiCloseFill } from "react-icons/ri";
import { styled } from "styled-components";
import { fetchFilmDetails } from "../../helpers/api/api";
import Heading from "../../helpers/ui/Heading";
import { StyledText } from "../../styles/StyledText.styled";
import { devices } from "../../styles/breakpoint";
import { FilmData, MediaType } from "../../types/Film";
import Button from "../Button";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(9, 20, 14, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: end;

  @media (${devices.large}) {
    align-items: center;
  }

  .content {
    background-color: var(--primary-neutral);
    padding: 0.5rem;
    border-radius: 5px;
    width: 95%;

    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 8px;
    position: relative;

    @media (${devices.medium}) {
      grid-template-columns: 150px 1fr;
      width: 600px;
      padding: 0.8rem;
      grid-gap: 0.8rem;
    }

    .icon {
      position: absolute;
      top: 2px;
      right: 3px;
      font-size: 1.5rem;
    }

    figure {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }

    article {
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 5px;

      @media (${devices.medium}) {
        gap: 10px;
      }

      h1 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        width: 90%;
      }

      #genres {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      #overview {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;

        @media (${devices.medium}) {
          -webkit-line-clamp: 4;
          line-clamp: 4;
        }
      }

      a.primary--dark {
        margin-top: auto; // push button to bottom
      }
    }
  }
`;

type Props = {
  filmData: FilmData;
  closeModal: () => void;
  mediaType: MediaType;
};

const Modal = (props: Props) => {
  const { filmData, closeModal, mediaType } = props;

  const results = useQuery({
    queryKey: ["movieData"],
    queryFn: () => fetchFilmDetails(filmData.id, mediaType),
  });

  const { isLoading, error, data } = results;

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  const date = new Date(data.release_date)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  return (
    <StyledModal onClick={closeModal}>
      <section className="content" onClick={(e) => e.stopPropagation()}>
        <div className="icon">
          <RiCloseFill onClick={closeModal} />
        </div>

        <figure>
          <img src={data.poster_path} alt={data.title} />
        </figure>

        <article>
          <Heading className="small--dark">{data.title}</Heading>
          <StyledText>{date}</StyledText>

          <StyledText id="genres">
            {data.genres.map((genre) => genre.name).join(", ")}
          </StyledText>

          <StyledText id="overview">{data.overview}</StyledText>

          <Button className="primary--dark" onClick={() => console.log("hi")}>
            Add to memories
          </Button>
        </article>
      </section>
    </StyledModal>
  );
};

export default Modal;
