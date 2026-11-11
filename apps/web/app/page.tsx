"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../packages/backend/convex/_generated/api";
import { Button } from "@workspace/ui/components/button";
// import { add } from "@workspace/math/add";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add)
  console.log(addUser)

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello Apps/Web</h1>
        <p>{JSON.stringify(users, null, 2)}</p>
        <Button onClick={() => addUser()}>Add User</Button>
      </div>
    </div>
  );
}
