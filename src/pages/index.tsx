import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

const HomepageHeader = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>cmdswap</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>Decentralized trading protocol on Arbitrum</Translate>
        </p>
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <Layout
      title={translate({
        message: "Cmdswap Docs",
        description: "layout title",
      })}
      description={translate({
        message: "Decentralized trading protocol on Arbitrum Docs",
        description: "layout description",
      })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
