import type { NextPage } from 'next';
import Head from 'next/head';
import LocationList from '../components/location/LocationList';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Open Coffee</title>
        <meta name="description" content="Open platform to discover new cafes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-center md:justify-between">
        <h1 className="whitespace-nowrap">Open Coffee</h1>
      </header>

      <main className="w-full p-4 max-w-5xl ml-auto mr-auto">
        <LocationList />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
