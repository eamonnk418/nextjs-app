"use server";

import { z } from "zod";
import { actionClient } from "@/lib/safe-action";

const schema = z.object({
  username: z.string().min(3).max(10),
  password: z.string().min(8).max(1000),
});

export const loginUser = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { username, password } }) => {
    if (username === "johndoe" && password === "123456") {
      return {
        success: "Successfully logged in",
      };
    }

    return { failure: "Incorrect credentials" };
  });
