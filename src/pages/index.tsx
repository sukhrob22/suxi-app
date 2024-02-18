import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { Header, Hero } from 'src/components';
import { IMovie } from 'src/interfaces/app.interface';
import { API_REQUEST } from 'src/services/api.service';

export default function Home({ trending }: HomeProps): JSX.Element {
    // console.log(trending[0].title );

    // useEffect(() => {
    //     fetch(API_REQUEST.trending)
    //         .then((res) => res.json())
    //         .then((data) => console.log(data));
    // }, []);

    return (
        <div className='relative h-[200vh]'>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/logo.svg ' />
            </Head>
            <Header />
            <main>
                <Hero trending={trending} />
            </main>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
    const trending = await fetch(API_REQUEST.trending).then((res) => res.json());

    return {
        props: {
            trending: trending.results,
        },
    };
};

interface HomeProps {
    trending: IMovie[];
}
