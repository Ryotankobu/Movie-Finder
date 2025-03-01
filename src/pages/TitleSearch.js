import React from 'react'
import { useState, useEffect } from "react";
import SearchForm from '../components/SearchForm';
import TitleMovieList from '../components/TitleMovieList';

const TitleSearch = ({ tmdbKey, tmdbBaseUrl, addToBookmark }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = (e) => {
    setSearchWord(e);
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} searchWord={searchWord} />
      <TitleMovieList
        searchWord={searchWord}
        tmdbKey={tmdbKey}
        tmdbBaseUrl={tmdbBaseUrl}
        addToBookmark={addToBookmark}
      />
    </>
  );
};

export default TitleSearch