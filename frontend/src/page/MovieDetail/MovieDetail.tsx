import { useEffect, useState } from 'react';
import styles from './MovieDetail.module.css';
import type { Movie } from '../../data/dummyMovies';
import { Vibrant } from 'node-vibrant/worker';

interface MovieDetailProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieDetail({ movie, onClose }: MovieDetailProps) {
  const [heroGradient, setHeroGradient] = useState(
    'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
  );

  useEffect(() => {
    if (!movie.posterUrl) return;

    Vibrant.from(movie.posterUrl)
      .getPalette()
      .then((palette) => {
        if (!palette) return;

        const dark = palette.DarkVibrant?.hex;
        const muted = palette.Muted?.hex;

        if (dark && muted) {
          setHeroGradient(
            `linear-gradient(135deg, ${dark} 0%, ${muted} 100%)`
          );
        }
      })
      .catch(() => {});
  }, [movie.posterUrl]);

  return (
    <div className={styles.container}>
      {/* 상단 Hero 영역 */}
      <section
        className={styles.hero}
        style={{ background: heroGradient }}
      >
        {/* 배경 이미지 */}
        <div
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${movie.posterUrl})` }}
        />

        <div className={styles.content}>
          {/* 좌측 패널 */}
          <div className={styles.leftPanel}>
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className={styles.poster}
            />

            <div className={styles.movieInfo}>
              <h1 className={styles.title}>{movie.title}</h1>

              {movie.director && (
                <p className={styles.director}>
                  Directed by {movie.director}
                </p>
              )}

              <div className={styles.metaInfo}>
                {movie.rating && <span>{movie.rating}</span>}
                {movie.releaseYear && <span>{movie.releaseYear}</span>}
                {movie.runtime && <span>{movie.runtime}</span>}
                {movie.genres && movie.genres.length > 0 && (<span>{movie.genres.join(', ')}</span>)}
              </div>

              {movie.synopsis && (
                <p className={styles.synopsis}>{movie.synopsis}</p>
              )}
            </div>
          </div>

          {/* 우측 패널: 예고편 */}
          <div className={styles.rightPanel}>
            <div className={styles.trailerWrapper}>
              <iframe
                src="https://www.youtube.com/embed/VIDEO_KEY"
                title="Movie Trailer"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* 하단 섹션 */}
      <div className={styles.bottomSection}>
        {/* OTT / Cast 그대로 유지 */}
      </div>

      {/* 닫기 버튼 */}
      <button className={styles.closeButton} onClick={onClose}>
        ✕
      </button>
    </div>
  );
}
