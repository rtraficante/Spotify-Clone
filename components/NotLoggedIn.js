import Link from "next/link";
import React from "react";

function NotLoggedIn() {
  return (
    <div className="mt-24 flex flex-col items-center">
      <h1 className="mb-12 text-2xl text-center">
        You Must Be Logged In To Access This Application
      </h1>
      <div className="border p-4 flex flex-col mb-8 w-[400px] min-w-[320px] rounded-md">
        <h2 className="font-bold mb-4 text-xl self-center">Instructions</h2>
        <p>
          Please visit{" "}
          <a
            className="hover:underline text-green-500"
            href="https://open.spotify.com/"
            rel="noreferrer"
            target="_blank"
          >
            Spotify
          </a>{" "}
          and log in using the account details below. Play one of the songs from
          the demo account, then go to the Login page via the button below and
          click Login. You will then have access to demo the app.
        </p>
      </div>

      <div className="border p-4 flex flex-col mb-12 w-[400px] min-w-[320px] rounded-md">
        <p className="self-center text-xl mb-4 font-bold">Demo Login Details</p>
        <p className="mb-2">Email: musicappclonedemo@gmail.com</p>
        <p className="">Password: clonedemo123</p>
      </div>
      <Link href="/login">
        <button className="rounded-lg bg-green-500 p-4 w-full max-w-[400px]">
          Go To Login Page
        </button>
      </Link>
    </div>
  );
}

export default NotLoggedIn;
