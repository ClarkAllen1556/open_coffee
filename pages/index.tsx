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

      <main className="w-full p-8 max-w-5xl ml-auto mr-auto">
        <h1 className="whitespace-nowrap">Open Coffee</h1>
        <LocationList />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
