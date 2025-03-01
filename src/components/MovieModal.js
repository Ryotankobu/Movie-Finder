import React from 'react'
import { useState, useEffect } from "react";

const MovieModal = ({
  eachMovieInfo,
  setModalOpen,
  modalClose,
  addToBookmark,
}) => {
  const [alertVisible, setAlertVisible] = useState(false)

  const handleAddToBookmark = () => {
    addToBookmark(eachMovieInfo)
    setAlertVisible(true)

    setTimeout(() => {
      setAlertVisible(false)
      modalClose()
    }, 1000)
  }

 

  return (
    <>
      <div className="modal_background" onClick={modalClose}>
        <div
          className="modal_white_section"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="modal_title">{eachMovieInfo.title}</p>

          <div className="modal_wrapper container">
            <div className="row">
              {/* Image - Centered */}
              <div className="col-md-12 text-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${eachMovieInfo.backdrop_path}`}
                  alt={eachMovieInfo.title}
                  className="modal_img img-fluid"
                />
              </div>
            </div>

            <div className="row mt-3">
              {/* Overview - Left */}
              <div className="col-md-6 modal_text">
                <p>
                  <strong>Overview:</strong> {eachMovieInfo.overview}
                </p>
              </div>

              {/* Other Details - Right */}
              <div className="col-md-6 modal_details">
                <p>
                  <strong>Release Date:</strong> {eachMovieInfo.release_date}
                </p>
                <p>
                  <strong>Runtime:</strong> {eachMovieInfo.runtime} mins
                </p>
                <p>
                  <strong>Rating:</strong> {eachMovieInfo.vote_average} / 10
                </p>
                <p>
                  <strong>Votes:</strong> {eachMovieInfo.vote_count}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="modal_buttons mt-3">
              <button
                className="btn btn-primary me-2"
                onClick={handleAddToBookmark}
              >
                Add to Bookmark
              </button>
              <button className="btn btn-secondary" onClick={modalClose}>
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Alert Message */}
        {alertVisible && (
          <div className="bookmark_alert">Movie added to bookmarks!</div>
        )}
      </div>
    </>
  );
};

export default MovieModal