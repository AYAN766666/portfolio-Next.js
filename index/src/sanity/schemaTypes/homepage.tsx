


export default {
  name: "homePage",
  type: "document",
  title: "Home Page",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "description1",
      type: "text",
      title: "Description 1",
    },
    {
      name: "description2",
      type: "text",
      title: "Description 2",
    },
    {
      name: "image1",
      type: "object",
      title: "Image 1",
      fields: [
        { name: "image", type: "image", title: "Image", options: { hotspot: true } },
        { name: "link", type: "url", title: "Image Link" },
      ],
    },
    {
      name: "image2",
      type: "object",
      title: "Image 2",
      fields: [
        { name: "image", type: "image", title: "Image", options: { hotspot: true } },
        { name: "link", type: "url", title: "Image Link" },
      ],
    },
    {
      name: "image3",
      type: "object",
      title: "Image 3",
      fields: [
        { name: "image", type: "image", title: "Image", options: { hotspot: true } },
        { name: "link", type: "url", title: "Image Link" },
      ],
    },
    {
      name: "button1",
      type: "object",
      title: "Button 1",
      fields: [
        { name: "text", type: "string", title: "Button Text" },
        { name: "link", type: "url", title: "Button Link" },
      ],
    },
    {
      name: "button2",
      type: "object",
      title: "Button 2",
      fields: [
        { name: "text", type: "string", title: "Button Text" },
        { name: "link", type: "url", title: "Button Link" },
      ],
    },
    {
      name: "button3",
      type: "object",
      title: "Button 3",
      fields: [
        { name: "text", type: "string", title: "Button Text" },
        { name: "link", type: "url", title: "Button Link" },
      ],
    },
    {
      name: "button4",
      type: "object",
      title: "Button 4",
      fields: [
        { name: "text", type: "string", title: "Button Text" },
        { name: "link", type: "url", title: "Button Link" },
      ],
    },
  ],
};

