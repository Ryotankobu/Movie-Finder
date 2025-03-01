import React from 'react'
import koffing_img from "../assets/images/koffing.png"

const BookmarkMovieModal = ({ eachMovieInfo, setModalOpen, modalClose, handleDelete}) => {

    const handleDeleteClick = () => {
      handleDelete(eachMovieInfo.id);
      modalClose();
    };

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
              {/* Image (Full Width on Small Screens, Half on Medium+) */}
              <div className="col-md-12 text-center">
                <img
                  src={
                    eachMovieInfo.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${eachMovieInfo.backdrop_path}`
                      : eachMovieInfo.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${eachMovieInfo.poster_path}`
                      : koffing_img
                  }
                  alt={eachMovieInfo.title}
                  className="modal_img img-fluid"
                />
              </div>
            </div>

            <div className="row mt-3">
              {/* Overview Section - Left Side */}
              <div className="col-md-6 modal_text">
                <p>
                  <strong>Overview:</strong> {eachMovieInfo.overview}
                </p>
              </div>

              {/* Other Details - Right Side */}
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
                <p>
                  <strong>Homepage:</strong>{" "}
                  {eachMovieInfo.homepage ? (
                    <a
                      href={eachMovieInfo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Official Site
                    </a>
                  ) : (
                    "N/A"
                  )}
                </p>
              </div>
            </div>

            <div className="modal_buttons mt-3">
              <button className="btn btn-secondary me-2" onClick={modalClose}>
                Close
              </button>
              <button className="btn btn-danger" onClick={handleDeleteClick}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default BookmarkMovieModal