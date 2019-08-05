import React from 'react';
import styled from 'styled-components';

const globalStyles = styled.div`
  @fontface {
    font-family: 'Amatic SC', cursive;
    src: url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');
  }
  @fontface {
    font-family: 'Open Sans Condensed', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Roboto&display=swap');
  }

  .globalStyles {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: green;
      font-family: 'Amatic SC', cursive;
    }
    p {
      color: red;
      font-family: 'Open Sans Condensed', sans-serif;
    }
  }
`;

export default function Template({data}){
  const {markdownRemark:post} = data;
  return(
    <div>
      <globalStyles>
        <h1> BrickLX </h1>
        <p> Hello BrickLX </p>
        {post.frontmatter['proj-title']}
      </globalStyles>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }){
      html
      frontmatter{
        path
        title
      }
    }
  }
`
export default () => (
  <div>
    <globalStyles>
      <h1> BrickLX </h1>
      <p> Hello BrickLX </p>
    </globalStyles>
  </div>
);
