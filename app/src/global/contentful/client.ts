import * as contentful from "contentful";
export const contentfulClient = contentful.createClient({
  space: import.meta.env.VITE_CONTENT_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENT_DELIVERY_API_KEY,
});
