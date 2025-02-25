// import { AuthOptions, CallbacksOptions, getServerSession } from "next-auth";
// import { authOptions } from "./auth/[...nextauth]";
// import { IncomingMessage } from "http";
// import { NextApiRequest } from "next";
// import { NextApiRequestCookies } from "next/dist/server/api-utils";

// export async function GET(req: NextApiRequest | (IncomingMessage & { cookies: NextApiRequestCookies; }) | (Partial<Omit<AuthOptions, "callbacks">> & { callbacks?: Omit<AuthOptions["callbacks"], "session"> & { session?: (...args: Parameters<CallbacksOptions["session"]>) => any; }; })) {
//   const session = await getServerSession(req, authOptions);
//   if (!session) {
//     return new Response("Unauthorized", { status: 401 });
//   }
//   return new Response(JSON.stringify({ message: "Authorized", user: session.user }), {
//     status: 200,
//   });
// }
