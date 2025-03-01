import { useState, useEffect } from "react";
import AvailableGenreFinder from "./AvailableGenreFinder";

const GenreSelector = ({
  setGenres,
  tmdbKey,
  tmdbBaseUrl,
  selectedGenreId,
  setSelectedGenreId,
  genres,
  handleChange,
}) => {


  return (
    <>
      <div class="d-flex justify-content-center mt-5 mb-3">
        <div className="col-md-6 col-sm-8 mb-8">
          <select
            onChange={handleChange}
            value={selectedGenreId}
            class="form-control input-lg"
          >
            {genres.map((eachGenre) => (
              <option key={eachGenre.id} value={eachGenre.id}>
                {eachGenre.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <AvailableGenreFinder
        setGenres={setGenres}
        tmdbKey={tmdbKey}
        tmdbBaseUrl={tmdbBaseUrl}
      />
    </>
  );
};

export default GenreSelector;
