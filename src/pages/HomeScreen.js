import { useState, useEffect } from "react";
import React from "react";
import AvailableGenreFinder from "../components/AvailableGenreFinder";
import HomeMovieList from "../components/HomeMovieList";
import FetchTop20Movies from "../components/FetchTop20Movies";
import Top20MoviesList from "../components/Top20MoviesList";

const HomeScreen = ({ tmdbKey, tmdbBaseUrl, addToBookmark }) => {
  const [genres, setGenres] = useState([]);
  const [top20Movies, setTop20Movies] = useState([]);

  // array shuffle function
  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

 

  return (
    <>
      <div>
        <Top20MoviesList
          top20Movies={top20Movies}
          addToBookmark={addToBookmark}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        {shuffleArray(genres).map((eachGenre, index) => (
          <HomeMovieList
            eachGenre={eachGenre}
            index={index}
            tmdbKey={tmdbKey}
            tmdbBaseUrl={tmdbBaseUrl}
            addToBookmark={addToBookmark}
          />
        ))}

        <AvailableGenreFinder
          setGenres={setGenres}
          tmdbKey={tmdbKey}
          tmdbBaseUrl={tmdbBaseUrl}
        />
        <FetchTop20Movies
          setTop20Movies={setTop20Movies}
          tmdbKey={tmdbKey}
          tmdbBaseUrl={tmdbBaseUrl}
        />
      </div>
    </>
  );
};

export default HomeScreen;
