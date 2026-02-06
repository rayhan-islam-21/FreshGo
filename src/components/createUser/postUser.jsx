"use client";

import createUser from "./createUser";



export default function PostUser() {
  return (
    <button
      onClick={async () => {
        await createUser();
        alert("User created");
      }}
    >
      Create User
    </button>
  );
}
