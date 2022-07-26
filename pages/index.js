import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import Center from "../components/Center";
import NotLoggedIn from "../components/NotLoggedIn";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="bg-black h-screen overflow-hidden">
        <Head>
          <title>Music App Clone</title>
        </Head>
        {session ? (
          <>
            <main className="flex">
              <Sidebar />
              <Center />
            </main>

            <div className="sticky bottom-0">
              <Player />
            </div>
          </>
        ) : (
          <NotLoggedIn />
        )}
      </div>
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
