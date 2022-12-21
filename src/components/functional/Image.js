// import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
// import { GatsbyImage } from "gatsby-plugin-image";

// // Note: You can change "images" to whatever you'd like.

// const Image = (props) => (
//   <StaticQuery
//     query={graphql`{
//   images: allFile {
//     edges {
//       node {
//         relativePath
//         name
        
//           gatsbyImageData(width: 900, layout: CONSTRAINED)
        
//       }
//     }
//   }
// }`}
//     render={(data) => {
//       const image = data.images.edges.find((n) =>
//         n.node.relativePath.includes(props.filename)
//       );
//       if (!image) {
//         return null;
//       }

//       // const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
//       return (
//         <GatsbyImage
//           image={image.node.childImageSharp.gatsbyImageData}
//           alt={props.alt}
//           author={props.author}
//           source={props.source} />
//       );
//     }}
//   />
// );

// export default Image;
