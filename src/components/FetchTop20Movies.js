import { useState, useEffect } from "react";

const FetchTop20Movies = ({ tmdbKey, tmdbBaseUrl, setTop20Movies }) => {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
     const endPointForPopularMovies = "/discover/movie";

     const getPopularMovies = async () => {
       try {
         setLoading(true);
         const requestParamsForMovies = `?api_key=${tmdbKey}`;
         const response = await fetch(
           tmdbBaseUrl + endPointForPopularMovies + requestParamsForMovies
         );

         if (response.ok) {
           const jsonResponse = await response.json();
           setTop20Movies(jsonResponse.results || []);

         }
       } catch (error) {
         console.error("Error fetching popular movies", error);
       } finally {
         setLoading(false);
       }

      
     };
      getPopularMovies();



  }, [])
 

  return <div></div>;
};

export default FetchTop20Movies;
