import React from 'react';
import MovieList from './components/MovieList';
import './App.css';
import Nav from './components/Nav';
import { MovieProvider } from './components/MovieContext'
import AddMovie from './components/AddMovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
