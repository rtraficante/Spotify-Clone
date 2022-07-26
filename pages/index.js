import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="bg-black h-screen overflow-hidden">
          <Head>
            <title>Spotify 2.0</title>
          </Head>

          <main className="flex">
            <Sidebar />
            <Center />
          </main>

          <div className="sticky bottom-0">
            <Player />
          </div>
        </div>
      ) : (
        <div className="mt-24 flex flex-col items-center">
          <h1 className="mb-12 text-2xl text-center">
            You Must Be Logged In To Access This Application
          </h1>
          <div className="border p-4 flex flex-col mb-12">
            <p className="self-center text-xl mb-4 font-bold">
              Demo Login Details
            </p>
            <p className="mb-2">Email: musicappclonedemo@gmail.com</p>
            <p className="">Password: clonedemo123</p>
          </div>
          <Link href="/login">
            <button className="rounded-lg bg-green-500 p-4">
              Go To Login Page
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Home;
