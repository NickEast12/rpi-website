const path = require('path');

export async function BlogPages({ graphql, actions }) {
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
}

export async function createPages(params) {
  //* Create page functions will go here
  await Promise.all([BlogPages(params)]);
}
