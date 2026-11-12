"use client";

import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { api } from "../../../packages/backend/convex/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
// import { add } from "@workspace/math/add";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add)

  return (<>
    <Authenticated>
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello Apps/Web</h1>
        <p>{JSON.stringify(users, null, 2)}</p>
        <Button onClick={() => addUser()}>Add User</Button>
        <UserButton />
      </div>
    </div>
    </Authenticated>
    <Unauthenticated>
      <p>Must be signed in!</p>
      <SignInButton>Sign in!</SignInButton>
    </Unauthenticated>
    </>
  );
}
