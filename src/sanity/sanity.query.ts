import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function GetBlogData() {
    return sanityClient.fetch(
        groq`
        *[_type=="blog"]{
  name,
    description,
    "imageURL": thumbnail.asset->url
}
        `
    )
}