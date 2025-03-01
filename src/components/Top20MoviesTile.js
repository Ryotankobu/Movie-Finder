import { useState, useEffect } from "react";
import koffing_img from "../assets/images/koffing.png";
import MovieModal from "./MovieModal";

const Top20MoviesTile = ({ eachMovie, index, addToBookmark }) => {
  const textClass = index < 9 ? "top10-text" : "top20-text";
  const [modalOpen, setModalOpen] = useState(false);

  const modalClose = () => {
    setModalOpen(false);
  };

  const handleModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      {/* modal */}
      {modalOpen && (
        <MovieModal
          eachMovieInfo={eachMovie}
          setModalOpen={setModalOpen}
          modalClose={modalClose}
          addToBookmark={addToBookmark}
        />
      )}

      <div className="top-20-movie-tile" onClick={() => handleModal()}>
        <span className={textClass}>{index + 1}</span>

        <img
          src={
            eachMovie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${eachMovie.backdrop_path}`
              : eachMovie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${eachMovie.poster_path}`
              : koffing_img
          }
          alt={eachMovie.title}
          loading="lazy"
        />
        <p className="card-title fw-bold text-center">{eachMovie.title}</p>
      </div>
    </>
  );
};

export default Top20MoviesTile;
