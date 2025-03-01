import React from 'react'
import { useState, useEffect } from "react";
import BookmarkMovieTile from '../components/BookmarkMovieTile'

const Bookmark = ({ bookmarkArray, handleDelete}) => {
   
    
  return (
    <div className="container bookmark-page">
      <h1 className="text-center mt-4 mb-4">Bookmark</h1>

      {bookmarkArray.length === 0 ? (
        <p className="text-center fs-5">No bookmarks yet. Start adding some!</p>
      ) : (
        <div className="row">
          {bookmarkArray.map((eachMovie) => (
            <div key={eachMovie.id} className="col-md-4 col-sm-6 mb-4">
              <BookmarkMovieTile
                eachMovie={eachMovie}
                handleDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmark