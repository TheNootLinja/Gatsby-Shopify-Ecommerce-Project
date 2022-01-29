import React from 'react';

function IndexPage() {
  return <div>
    <h1>Is this working???</h1>
    <h2>{process.env.GATSBY_MY_ENVIRONMENT}</h2>
  </div>;
  }

export default IndexPage;
