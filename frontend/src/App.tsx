import { useState } from 'react';
import Home from './page/Home/Home';
import MovieDetail from './page/MovieDetail/MovieDetail';
import type { Movie } from './data/dummyMovies';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  if (selectedMovie) {
    return (
      <MovieDetail 
        movie={selectedMovie} 
        onClose={() => setSelectedMovie(null)} 
      />
    );
  }

  return <Home onMovieClick={setSelectedMovie} />;
}
export default App;