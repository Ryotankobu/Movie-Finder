import { useState, useEffect } from "react";
import MovieModal from "./MovieModal";
import koffing_img from "../assets/images/koffing.png"

const HomeMovieTile = ({ genre, eachMovieInfo, addToBookmark }) => {
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
          eachMovieInfo={eachMovieInfo}
          setModalOpen={setModalOpen}
          modalClose={modalClose}
          addToBookmark={addToBookmark}
        />
      )}

      {/* each movie tile */}

      <div onClick={() => handleModal()} className="movie-tile">
        <img
          src={
            eachMovieInfo.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${eachMovieInfo.backdrop_path}`
              : eachMovieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w500/${eachMovieInfo.poster_path}`
              : koffing_img
          }
          alt={eachMovieInfo.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
            background: "#ddd",
          }}
        />
        <p className="card-title fw-bold text-center">{eachMovieInfo.title}</p>
      </div>
    </>
  );
};

export default HomeMovieTile;
