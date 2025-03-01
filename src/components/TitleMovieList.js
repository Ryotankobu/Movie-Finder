import React from 'react'
import { useState, useEffect } from "react";
import MovieTile from './MovieTile';

const TitleMovieList = ( {searchWord,
  tmdbKey,
  tmdbBaseUrl,
  addToBookmark,
}) => {



    const endPointForTitleSearch = "/search/movie";

    const [titleMovieList, setTitleMovieList] = useState([]);
    //   const [searchingMovieIds, setSearchingMovieIds] = useState([])
    const [loading, setLoading] = useState(false);

    const getMoviesWithTitle = async () => {
      if (!searchWord) return;

      try {
        setLoading(true);
        const requestParamsForMovies = `?api_key=${tmdbKey}&query=${searchWord}`;
        const response = await fetch(
          tmdbBaseUrl + endPointForTitleSearch + requestParamsForMovies
        );

        if (response.ok) {
          const jsonResponse = await response.json();
          setTitleMovieList(jsonResponse.results);

          // const movieIds = jsonResponse.results.map((eachMovie) => eachMovie.id);
          // setSearchingMovieIds(movieIds)
        }
      } catch (error) {
        console.error("Error fetching movies with title", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      getMoviesWithTitle();
    }, [searchWord]);





  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="row">
          {titleMovieList.length > 0 ? (
            titleMovieList.map((eachMovie) => (
              <div className="col-md-4 col-sm-6 mb-4">
                <MovieTile
                  key={eachMovie.id}
                  eachMovie={eachMovie}
                  addToBookmark={addToBookmark}
                />
              </div>
            ))
          ) : (
            <p className="text-center fs-5">
              No titles added yet. Start adding some!
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default TitleMovieList