// import { createMiddleware } from "@tanstack/react-start";
// import { useAppSession } from "./session";

// export const authMiddleware = createMiddleware({ type: "request" }).server(
//   async ({ next }) => {
//     const session = await useAppSession();

//     if (!session.data.accessToken) {
//       return next();
//     }

//     // check if the access token is expired or close to it, lets say 1 minute
//     const parts = session.data.accessToken.split(".");
//     const payloadEncoded = parts[1];

//     if (!payloadEncoded) {
//       return next();
//     }

//     const payload = JSON.parse(atob(payloadEncoded));
//   },
// );
