import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
    }),
    defineField({
      name: "heroSubtextOne",
      title: "Hero Subtext (Line 1)",
      type: "text",
    }),
    defineField({
      name: "heroSubtextTwo",
      title: "Hero Subtext (Line 2)",
      type: "text",
    }),
    defineField({
      name: "heroButtonText",
      title: "Hero Button Text",
      type: "string",
    }),
    defineField({
      name: "videoFile",
      title: "Upload Video File",
      type: "file",
      options: {
        accept: "video/mp4",
      },
    }),
    // defineField({
    //   name: "heroVideoUrl",
    //   title: "Hero Video (YouTube/Vimeo URL)",
    //   type: "url",
    // }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              options: {
                list: ["Box", "BarChart2", "MonitorSmartphone", "Clock"], // icon options
              },
            },
            {
              name: "title",
              title: "Service Title",
              type: "string",
            },
            {
              name: "summary",
              title: "Short Summary",
              type: "text",
            },
            {
              name: "details",
              title: "Detailed Description",
              type: "text",
            },
          ],
        },
      ],
    }),
  ],
});
