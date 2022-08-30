export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "630dc06e9f0bdf19ade85bf0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-e5bfmega",
                  apiId: "d854aa3c-653c-4c1d-8413-89fda923869f",
                },
                {
                  buildHookId: "630dc06e19b9ce12b6d20b8a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-syny3rk3",
                  apiId: "d5f42a00-4429-44cd-bcb5-3ee07a753f5c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/pavolhudran/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-syny3rk3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
