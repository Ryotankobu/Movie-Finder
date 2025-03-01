import { useState, useEffect } from "react";
import Top20MoviesTile from "./Top20MoviesTile";

const Top20MoviesList = ({top20Movies, addToBookmark}) => {
  return (
    <>
      <h1 style={{ paddingLeft: "20px", marginTop: "20px" }}>Top 20 movies</h1>
      <div className="top20-movies-container">
        {top20Movies.map((eachMovie, index) => (
          <Top20MoviesTile
            eachMovie={eachMovie}
            index={index}
            addToBookmark={addToBookmark}
          />
        ))}
      </div>
    </>
  );
};

export default Top20MoviesList;
