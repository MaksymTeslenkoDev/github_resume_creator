import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';
import Layout from '../Layout';

export function Route(props) {
  const { component, ...rest } = props;

  return (
    <Layout>
      <ReactRoute {...rest} element={component} />
    </Layout>
  );
}
