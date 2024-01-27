import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "4fxtm919",
    dataset: "production",
    apiVersion: "2021-08-31",
    useCdn: true,
});