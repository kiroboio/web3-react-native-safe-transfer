import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
    <script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Redirect to="/docs/intro" />;
    </Layout>
    </>
  );
}
