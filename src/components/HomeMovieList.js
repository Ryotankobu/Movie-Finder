import { useState, useEffect } from "react";
import HomeMovieTile from "./HomeMovieTile";


const HomeMovieList = ({
  eachGenre,
  index,
  tmdbKey,
  tmdbBaseUrl,
  addToBookmark,
}) => {
  const [eachGenreMovies, setEachGenreMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const genre = eachGenre.name;
  const genreId = eachGenre.id;
  const endPointForGenreMovies = "/discover/movie";

  const getMoviesWithGenre = async () => {
    try {
      setLoading(true);
      const requestParamsForMovies = `?api_key=${tmdbKey}&with_genres=${genreId}`;
      const response = await fetch(
        tmdbBaseUrl + endPointForGenreMovies + requestParamsForMovies
      );

      if (response.ok) {
        const jsonResponse = await response.json();
        setEachGenreMovies(jsonResponse.results || []);
      }
    } catch (error) {
      console.error("Error fetching movies with genre", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMoviesWithGenre();
  }, []);

  // useEffect(() => {
  //   console.log(eachGenreMovies);
  // }, [eachGenreMovies]);

  return (
    <>
      {!loading && (
        <>
          <div className="genre-section">
            <h2 className="genre-title">{genre}</h2>
            <div className="movies-container">
              {eachGenreMovies.map((eachMovie) => (
                <HomeMovieTile
                  key={eachMovie.id}
                  genre={genre}
                  eachMovieInfo={eachMovie}
                  addToBookmark={addToBookmark}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeMovieList;
