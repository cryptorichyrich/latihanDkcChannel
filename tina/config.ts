import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "/_posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            isTitle: false,
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            isTitle: false,
            required: true,
          },      
          {
            type: "string",
            name: "cover_img",
            nameOverride: "cover-img",
            label: "Cover Image",
            isTitle: false,
            required: true,
          }, 
          {
            type: "string",
            name: "thumbnail_img",
            nameOverride: "thumbnail-img",
            label: "Thumbnail Image",
            isTitle: false,
            required: true,
          },        
          {
            type: "string",
            name: "author",
            label: "Author",
            isTitle: false,
            required: true,
          },                            
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
