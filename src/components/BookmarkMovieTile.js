import React from 'react'
import { useState, useEffect } from "react";
import BookmarkMovieModal from './BookmarkMovieModal';

const BookmarkMovieTile = ({ eachMovie, handleDelete }) => {


     const [modalOpen, setModalOpen] = useState(false);

     const handleModal = () => {
       setModalOpen(true);
     };

     const modalClose = () => {
       setModalOpen(false);
     };


  return (
    <>
      {modalOpen && (
        <BookmarkMovieModal
          eachMovieInfo={eachMovie}
          setModalOpen={setModalOpen}
          modalClose={modalClose}
          handleDelete={handleDelete}
        />
      )}

      <div onClick={() => handleModal()}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${eachMovie.backdrop_path}`}
          alt={eachMovie.title}
          loading="lazy"
          style={{
            width: "90%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
        <p>{eachMovie.title}</p>
      </div>
    </>
  );
};

export default BookmarkMovieTile