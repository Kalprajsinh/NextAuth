"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div className="flex gap-4">

    <button onClick={() => signIn("github")} className="text-green-600 ml-auto border-spacing-2">
      Sign In with Github
    </button>
    <button onClick={() => signIn("google")} className="text-green-600 ml-auto border-spacing-2">
      Sign In with Google
    </button>
    </div>
  );
};

export default SigninButton;
