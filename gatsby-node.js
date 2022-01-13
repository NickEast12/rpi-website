const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve('./src/templates/blog.js');
  const { data } = await graphql(`
    query {
      blogs: allSanityPost {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  const Blogs = data.blogs.nodes;
  Blogs.forEach((blog) => {
    console.log(`Creating pages for ${blog.title}`);
    actions.createPage({
      path: `/blog/${blog.slug.current}`,
      component: template,
      context: {
        title: blog.title,
        slug: blog.slug.current,
      },
    });
  });
};
