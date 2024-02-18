import { useEffect, useState } from 'react';
import { HeroProps } from './hero.props';
import { IMovie } from 'src/interfaces/app.interface';
import Image from 'next/image';
import { image_base } from 'src/helpers/constants';

const Hero = ({ trending }: HeroProps): JSX.Element => {
    // console.log(trending);
    const [movie, setMovie] = useState<IMovie>({} as IMovie);

    console.log(movie);

    useEffect(() => {
        const randomMovie =
            trending[Math.floor(Math.random() * trending.length)];
        setMovie(randomMovie);
    }, [trending]);

    return (
        <div>
            <div className='absolute top-0 -z-10 left-0 h-[95vh] w-full'>
                <Image src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} alt={movie.title} fill className='object-cover' />
            </div>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
                {' '}
                {movie?.title || movie?.name || movie?.original_name}{' '}
            </h1>
        </div>
    );
};
export default Hero;
