import './App.css';
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppRouter from './routes/AppRouter';

function App() {
  const [bookmarkArray, setBookmarkArray] = useState([]);

  const tmdbKey = "0bb246c8f0ddf272421f928af1cac30d";
  const tmdbBaseUrl = "https://api.themoviedb.org/3";

  // function to add movies to bookmark array
  const addToBookmark = (e) => {
    const isDuplicate = bookmarkArray.some(
      (eachMovie) => eachMovie.id === e.id
    );
    if (isDuplicate) {
      return;
    } else {
      setBookmarkArray((prev) => [e, ...prev]);
    }
  };

  // function to delete an item in bookmark array
  const handleDelete = (id) => {
    setBookmarkArray((prev) => {
      const newArray = prev.filter((item) => item.id !== id);
      return [...newArray]; // ✅ Ensures React detects a new reference
    });
  };


  return (
    <>
      <AppRouter
        tmdbKey={tmdbKey}
        tmdbBaseUrl={tmdbBaseUrl}
        addToBookmark={addToBookmark}
        bookmarkArray={bookmarkArray}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
