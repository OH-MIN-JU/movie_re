import { useRef } from 'react';
import styles from './RecentReleaseRow.module.css';
import type { Movie } from '../../../data/dummyMovies';

interface RecentReleaseRowProps {
    movies: Movie[];
    title?: string;
    onMovieClick?: (movie: Movie) => void;
}

export default function RecentReleaseRow({ movies, title = '최근 개봉작', onMovieClick }: RecentReleaseRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (rowRef.current) {
            rowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (rowRef.current) {
            rowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                {movies.length >= 6 && (
                    <button className={styles.moreButton}>더보기</button>
                )}
            </div>

            <div className={styles.rowContainer}>
                {movies.length >= 6 && (
                    <button className={styles.scrollButton} onClick={scrollLeft} aria-label="왼쪽으로 스크롤">
                        &lt;
                    </button>
                )}
                <div className={styles.row} ref={rowRef}>
                    {movies.map((movie) => (
                        <div 
                            key={movie.id} 
                            className={styles.card}
                            onClick={() => onMovieClick?.(movie)}
                        >
                            <img src={movie.posterUrl} alt="movie poster" className={styles.poster} />
                            <div className={styles.overlay}>
                                <span className={styles.year}>{movie.releaseYear}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {movies.length >= 6 && (
                    <button className={styles.scrollButton} onClick={scrollRight} aria-label="오른쪽으로 스크롤">
                        &gt;
                    </button>
                )}
            </div>
        </section>
    );
}