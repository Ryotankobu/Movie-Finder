import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import TitleSearch from '../pages/TitleSearch';
import Bookmark from '../pages/Bookmark';
import HomeScreen from '../pages/HomeScreen';
import GenreSearch from '../pages/GenreSearch';

const AppRouter = ({
  tmdbKey,
  tmdbBaseUrl,
  addToBookmark,
  bookmarkArray,
  handleDelete
}) => {
  return (
    <Router>
      <Navbar /> {/* Navbar is always visible */}
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              tmdbKey={tmdbKey}
              tmdbBaseUrl={tmdbBaseUrl}
              addToBookmark={addToBookmark}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HomeScreen
              tmdbKey={tmdbKey}
              tmdbBaseUrl={tmdbBaseUrl}
              addToBookmark={addToBookmark}
            />
          }
        />
        <Route
          path="/genre_search"
          element={
            <GenreSearch
              tmdbKey={tmdbKey}
              tmdbBaseUrl={tmdbBaseUrl}
              addToBookmark={addToBookmark}
            />
          }
        />

        <Route
          path="/title_search"
          element={
            <TitleSearch
              tmdbKey={tmdbKey}
              tmdbBaseUrl={tmdbBaseUrl}
              addToBookmark={addToBookmark}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <Bookmark
              bookmarkArray={bookmarkArray}
              handleDelete={handleDelete}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter