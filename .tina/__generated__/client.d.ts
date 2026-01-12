import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5931c228a5a6d5ebb0588ddf79348748c8b09d21', queries,  });
export default client;
  