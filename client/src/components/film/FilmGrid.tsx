import { useState } from "react";
import { ExtendedFilmDetails, FilmData } from "../../types/Film";
import Modal from "./Modal";

type Props = {
  film: ExtendedFilmDetails;
};

const FilmGrid = (props: Props) => {
  const { film } = props;

  const [openModal, setOpenModal] = useState(false);
  const [filmData, setFilmData] = useState<FilmData | null>(null);

  const handleClick = (film: FilmData) => {
    setOpenModal((state) => !state);
    setFilmData(film);
  };

  return (
    <>
      <figure key={film.id} onClick={() => handleClick(film)}>
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title}
        />
      </figure>

      {openModal && (
        <Modal
          closeModal={() => setOpenModal(false)}
          filmData={filmData as FilmData}
          mediaType={film.media_type}
        />
      )}
    </>
  );
};

export default FilmGrid;
