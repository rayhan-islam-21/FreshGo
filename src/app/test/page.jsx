"use client";

import { signIn } from "next-auth/react";

export default function Test() {
  async function login() {
    const res = await signIn("credentials", {
      email: "admin@test.com", // change to real email
      password: "123456",
      redirect: false,
    });

    console.log(res);
  }

  return <button onClick={login}>Login Test</button>;
}
