import { useState, useEffect } from "react";
import AvailableGenreFinder from "../components/AvailableGenreFinder";
import GenreSelector from "../components/GenreSelector";
import GenreMovieList from "../components/GenreMovieList";

const GenreSearch = ({ tmdbKey, tmdbBaseUrl, addToBookmark }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState(28);

  const handleChange = (e) => {
    const chosenGenreId = e.target.value;
    setSelectedGenreId(chosenGenreId);
  };

  return (
    <>
      <GenreSelector
        tmdbKey={tmdbKey}
        tmdbBaseUrl={tmdbBaseUrl}
        setGenres={setGenres}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
        genres={genres}
        handleChange={handleChange}
      />
      <br />

      <GenreMovieList
        tmdbKey={tmdbKey}
        tmdbBaseUrl={tmdbBaseUrl}
        selectedGenreId={selectedGenreId}
        addToBookmark={addToBookmark}
      />
    </>
  );
};

export default GenreSearch;
