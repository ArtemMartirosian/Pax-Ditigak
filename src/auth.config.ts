import bcryptjs from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { loginSchema } from "./features/dashboard/auth/login/schemas/login-schema";
import { db } from "./lib/db";

export default {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const validatedFields = loginSchema.safeParse(credentials);

          if (validatedFields.success) {
            const { password, username } = validatedFields.data;

            const user = await db.user.findUnique({
              where: { username },
            });

            if (!user || !user.password) return null;

            const passwordMatch = await bcryptjs.compare(password, user.password);

            if (passwordMatch) return user;
          }

          return null;
        } catch (err) {
          console.log("Authorize error: ", err);
          if (err instanceof ZodError) {
            throw new Error("Zod error: ", err);
          }
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
