import { useState, useEffect } from "react";

const AvailableGenreFinder = ({ setGenres, tmdbKey, tmdbBaseUrl }) => {
  useEffect(() => {
    const endPointForGenre = "/genre/movie/list";
    const requestParamsForGenre = `?api_key=${tmdbKey}`;

    // fetching available genres
    const getGenres = async () => {
      try {
        const response = await fetch(
          tmdbBaseUrl + endPointForGenre + requestParamsForGenre
        );
        if (response.ok) {
          const jsonResponse = await response.json();
          const availableGenres = jsonResponse.genres;
          setGenres(availableGenres);
        } else {
          throw new Error("getGenres failed");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getGenres();
  }, []);

  return <></>;
};

export default AvailableGenreFinder;
