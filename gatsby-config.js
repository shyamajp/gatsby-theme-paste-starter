module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-paste",
      options: {
        contentPath: "content",
        postsPerPage: 10,
      },
    },
  ],
  siteMetadata: {
    title: "Paste",
    description: "Blog with High Accecibility. This is an example description for the site.",
    author: {
      name: "John Doe",
      description: "Nature is my passion. I love traveling!",
    },
    siteUrl: "https://example.com",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
    ],
    quickLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Tags",
        link: "/tags",
      },
      {
        name: "Categories",
        link: "/about",
      },
    ],
    social: [
      {
        name: "Twitter",
        url: "https://twitter.com",
      },
      {
        name: "GitHub",
        url: "https://github.com",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
      },
    ],
  },
};
