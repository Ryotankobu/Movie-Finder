import { useState, useEffect } from "react";
import MovieTile from "./MovieTile";

const GenreMovieList = ({
  tmdbKey,
  tmdbBaseUrl,
  selectedGenreId,
  addToBookmark,
}) => {
  const endPointForGenreMovies = "/discover/movie";

  const [genreMovieList, setGenreMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMoviesWithGenre = async () => {
    let allMovies = [];
    const pageLoading = 5;

    try {
      setLoading(true);
      for (let i = 1; i <= pageLoading; i++) {

         const requestParamsForMovies = `?api_key=${tmdbKey}&with_genres=${selectedGenreId}&page=${i}`;
         const response = await fetch(
           tmdbBaseUrl + endPointForGenreMovies + requestParamsForMovies
         );

         if (response.ok) {
           const jsonResponse = await response.json();
           allMovies = [...allMovies, ...jsonResponse.results]
         }

      }
      setGenreMovieList(allMovies);

     
    } catch (error) {
      console.error("Error fetching movies with genre", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedGenreId) {
      getMoviesWithGenre();
    }
  }, [selectedGenreId]);

  return (
    <>
      {!loading && (
        <>
          <div className="container d-flex justify-content-center">
            <div className="row">
              {genreMovieList.map((eachMovie) => (
                <div key={eachMovie.id} className="col-md-4 col-sm-6 mb-4">
                  <MovieTile
                    eachMovie={eachMovie}
                    addToBookmark={addToBookmark}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GenreMovieList;
