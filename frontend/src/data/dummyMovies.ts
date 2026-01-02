import poster1 from '../image/poster1.jpg';
import poster2 from '../image/poster2.jpg';
import poster3 from '../image/poster3.jpg';
import poster4 from '../image/poster4.jpg';
import poster5 from '../image/poster5.jpg';
import poster6 from '../image/poster6.jpg';
import poster7 from '../image/poster7.jpg';

export type OTTPlatform = {
    name: string;
    type: 'subscription' | 'rent' | 'buy';
    price?: string;
    logo?: string;
};

export type Cast = {
    name: string;
    role: string;
    profileUrl?: string;
};

export type Movie = {
    id: number;
    title: string;
    releaseYear: string;
    posterUrl: string;
    category?: 'domestic' | 'foreign' | 'animation';
    runtime?: string;
    genres?: string[];
    director?: string;
    rating?: string;
    synopsis?: string;
    ottPlatforms?: OTTPlatform[];
    cast?: Cast[];
};

export const dummyMovies: Movie[] = [
    {
        id: 1,
        title: '더 러닝 맨',
        releaseYear: '2025',
        posterUrl: poster1,
        category: 'domestic',
        runtime: '2h 15m',
        genres: ['액션', '스릴러'],
        director: '김성훈',
        rating: '15세 관람가',
        synopsis: '전 세계가 노리는 단 하나의 사냥감. 생존을 위한 치열한 추격전이 시작된다.',
        ottPlatforms: [
            { name: 'Watcha', type: 'subscription' },
            { name: 'WoW', type: 'subscription' },
            { name: 'Apple TV', type: 'buy', price: '₩7,000' },
            { name: 'KT', type: 'rent', price: '₩7,150' },
        ],
        cast: [
            { name: '유해진', role: '김민수' },
            { name: '이동휘', role: '박준호' },
            { name: '김태리', role: '이수진' },
            { name: '조진웅', role: '최동욱' },
        ],
      },
      {
        id: 2,
        title: '아바타: 불과 재',
        releaseYear: '2025',
        posterUrl: poster2,
        category: 'foreign',
        runtime: '3h 12m',
        genres: ['SF', '액션', '모험'],
        director: 'James Cameron',
        rating: '12세 관람가',
        synopsis: '판도라 행성에서 벌어지는 새로운 모험이 시작된다.',
        ottPlatforms: [
            { name: 'Netflix', type: 'subscription' },
            { name: 'Disney+', type: 'subscription' },
            { name: 'Apple TV', type: 'buy', price: '₩12,000' },
        ],
        cast: [
            { name: 'Sam Worthington', role: 'Jake Sully' },
            { name: 'Zoe Saldana', role: 'Neytiri' },
            { name: 'Sigourney Weaver', role: 'Dr. Grace Augustine' },
        ],
      },
      {
        id: 3,
        title: '오늘 밤, 이 세계에서 이 사랑이 사라진다 해도',
        releaseYear: '2025',
        posterUrl: poster3,
        category: 'domestic',
        runtime: '1h 58m',
        genres: ['로맨스', '드라마'],
        director: '미야지마 아키히코',
        rating: '12세 관람가',
        synopsis: '기억이 사라지는 마법의 세계에서 펼쳐지는 감동적인 사랑 이야기.',
        ottPlatforms: [
            { name: 'Watcha', type: 'subscription' },
            { name: 'Netflix', type: 'subscription' },
        ],
        cast: [
            { name: '도쿠야마 에이사', role: '카즈노' },
            { name: '하시모토 카나', role: '시오리' },
        ],
      },
      {
        id: 4,
        title: '극장판 주술회전: 시부야사변 X 사멸회유',
        releaseYear: '2025',
        posterUrl: poster4,
        category: 'animation',
        runtime: '2h 5m',
        genres: ['애니메이션', '액션', '판타지'],
        director: '박성후',
        rating: '15세 관람가',
        synopsis: '주술사들의 치열한 전투가 펼쳐지는 새로운 이야기.',
        ottPlatforms: [
            { name: 'Watcha', type: 'subscription' },
            { name: 'Crunchyroll', type: 'subscription' },
        ],
        cast: [
            { name: '준페이', role: '이타도리 유지' },
            { name: '나카무라 유이치', role: '고죠 사토루' },
        ],
      },
      {
        id: 5,
        title: '윗집 사람들',
        releaseYear: '2025',
        posterUrl: poster5,
        category: 'domestic',
        runtime: '1h 45m',
        genres: ['스릴러', '공포'],
        director: '장규성',
        rating: '15세 관람가',
        synopsis: '윗집에서 들려오는 이상한 소리. 과연 그곳에는 무엇이 있을까?',
        ottPlatforms: [
            { name: 'Watcha', type: 'subscription' },
            { name: 'WoW', type: 'subscription' },
        ],
        cast: [
            { name: '김혜수', role: '이수진' },
            { name: '이동휘', role: '박민수' },
        ],
      },
      {
        id: 6,
        title: '프레디의 피자가게 2',
        releaseYear: '2025',
        posterUrl: poster6,
        category: 'foreign',
        runtime: '1h 50m',
        genres: ['공포', '스릴러'],
        director: 'Emma Tammi',
        rating: '15세 관람가',
        synopsis: '프레디의 피자가게로 돌아온 새로운 공포.',
        ottPlatforms: [
            { name: 'Netflix', type: 'subscription' },
            { name: 'Apple TV', type: 'buy', price: '₩8,000' },
        ],
        cast: [
            { name: 'Josh Hutcherson', role: 'Mike Schmidt' },
            { name: 'Elizabeth Lail', role: 'Vanessa' },
        ],
      },
      {
        id: 7,
        title: '극장판 짱구는 못말려: 초화려! 작열하는 떡잎마을 댄서즈',
        releaseYear: '2025',
        posterUrl: poster7,
        category: 'animation',
        runtime: '1h 40m',
        genres: ['애니메이션', '코미디', '가족'],
        director: '하시구치 마사카즈',
        rating: '전체 관람가',
        synopsis: '떡잎마을이 춤으로 들썩이는 화려한 모험이 시작된다!',
        ottPlatforms: [
            { name: 'Watcha', type: 'subscription' },
            { name: 'Netflix', type: 'subscription' },
        ],
        cast: [
            { name: '야지마 아키코', role: '노하라 신노스케' },
            { name: '나라하시 미키', role: '노하라 미사에' },
        ],
      },
]