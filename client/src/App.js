import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App(){
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>

      <Router>

        <SavedList list={savedList} />

        <div>

          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={Movie} />

        </div>

      </Router>

    </div>
  );
};