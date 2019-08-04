import React from 'react';
import styled from 'styled-components';

const GlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Roboto&display=swap');

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
`;

const index = (
  <GlobalStyles>
    <h1> BrickLX </h1>
    <p>Hello BrickLX </p>
  </GlobalStyles>
);

export default () => index;
