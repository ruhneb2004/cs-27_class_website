"use client";

import { signIn, useSession } from "next-auth/react";

export const NavBar = () => {
  const { data: session, status } = useSession();
  return (
    <div
      className={`navbar-center bg-rose-400 mx-10  mb-12 p-3 rounded-lg shadow-sm shadow-black  flex fixed top-7 left-0 right-0 z-50`}
    >
      <div className="flex-1">
        <a
          className="btn btn-ghost text-2xl text-rose-950 font-sans font-extrabold"
          href="/"
        >
          ceeyees '27
        </a>
      </div>
      <div className="flex-none text-rose-900 flex gap-6">
        <a className="btn btn-ghost" href="/achievements">
          Achievements
        </a>
        <a className="btn btn-ghost" href="currentTinkering">
          Current Tinkering
        </a>
        <a className="btn btn-ghost" href="events">
          Events
        </a>
        <a className="btn btn-ghost" href="/members">
          Members
        </a>
        {status === "authenticated" ? (
          <a className="btn btn-ghost" href="/profile">
            Profile
          </a>
        ) : (
          <button className="btn btn-ghost" onClick={() => signIn()}>
            Login 🔐
          </button>
        )}
      </div>
    </div>
  );
};
