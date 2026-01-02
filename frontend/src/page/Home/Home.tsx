import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { dummyMovies, type Movie } from '../../data/dummyMovies';   
import RecentReleaseRow from './components/RecentReleaseRow';

interface HomeProps {
    onMovieClick?: (movie: Movie) => void;
}

function Home({ onMovieClick }: HomeProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Movie[]>([]);
    const [showAutoComplete, setShowAutoComplete] = useState(false);

    useEffect(() => {
        if (query.trim().length >= 2) {
          const filtered = dummyMovies
            .filter((movie) =>
              movie.title.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 10);
    
          setResults(filtered);
          setShowAutoComplete(true);
        } else {
          setShowAutoComplete(false);
          setResults([]);
        }
      }, [query]);

    return (
        <main className={styles.container}>
            {/* 타이틀 영역 */}
            <section className={styles.hero}>
                <h1>Movie Recommendation</h1>
                <p>좋아하는 영화를 입력하고<br />비슷한 영화를 추천받아 보세요.</p>

                {/* 검색 UI */}
                <div className={styles.searchBox}>
                    <div className={styles.searchInputWrapper}>
                        <input type="text" placeholder='영화를 입력하세요' className={styles.searchInput} value={query} onChange={(e) => setQuery(e.target.value)} />
                        {/* 자동완성*/}
                        {showAutoComplete && (
                            <div className={styles.showAutoComplete}>
                                {results.length === 0 && (
                                    <div className={styles.empty}>검색 결과가 없습니다</div>
                                )}

                                {results.map((movie) => (
                                    <div key={movie.id} className={styles.autoCompleteItem}>
                                        <img src={movie.posterUrl} alt={movie.title} className={styles.autoPoster} />
                                        <div className={styles.autoCompleteItemContent}>
                                            <div className={styles.autoTitle}>{movie.title}</div>
                                            <div className={styles.autoYear}>Movie • {movie.releaseYear}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button className={styles.searchButton}>검색</button>
                </div>
            </section>

            {/* 최근 개봉작 */}
            <RecentReleaseRow movies={dummyMovies} title="최근 개봉작" onMovieClick={onMovieClick} />

            {/* 국내 영화 */}
            <RecentReleaseRow 
                movies={dummyMovies.filter(movie => movie.category === 'domestic')} 
                title="국내 영화"
                onMovieClick={onMovieClick}
            />

            {/* 해외 영화 */}
            <RecentReleaseRow 
                movies={dummyMovies.filter(movie => movie.category === 'foreign')} 
                title="해외 영화"
                onMovieClick={onMovieClick}
            />

            {/* 애니메이션 */}
            <RecentReleaseRow 
                movies={dummyMovies.filter(movie => movie.category === 'animation')} 
                title="애니메이션"
                onMovieClick={onMovieClick}
            />
        </main>
    )
}

export default Home;