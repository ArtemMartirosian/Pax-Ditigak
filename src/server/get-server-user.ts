import "server-only";
import { auth } from "../auth";

export const getServerUser = async () => {
  const session = await auth();
  console.log(session);
  return session?.user ?? null;
};
