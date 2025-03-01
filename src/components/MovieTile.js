import React from 'react'
import { useState, useEffect } from "react";
import koffing_img from "../assets/images/koffing.png";
import MovieModal from './MovieModal';

const MovieTile = ({ eachMovie, addToBookmark }) => {

const [modalOpen, setModalOpen] = useState(false);
const eachMovieInfo = eachMovie;

const modalClose = () => {
  setModalOpen(false);
};

const handleModal = () => {
  setModalOpen(true);
};


  return (
    <>
      {modalOpen && (
        <MovieModal
          eachMovieInfo={eachMovieInfo}
          setModalOpen={setModalOpen}
          modalClose={modalClose}
          addToBookmark={addToBookmark}
        />
      )}

      <div onClick={() => handleModal()} className="genre-title-movie-tile">
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

export default MovieTile