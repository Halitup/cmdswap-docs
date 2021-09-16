import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Exchange",
    Svg: require("../../static/img/swap_horiz_black.svg").default,
    description: (
      <>
        Token swaps on Cmdswap are a simple way to trade on the Arbitrum network
        for another via automated liquidity pools.
      </>
    ),
  },
  {
    title: "Farms",
    Svg: require("../../static/img/grass_black.svg").default,
    description: (
      <>
        Yield Farms allow users to earn CMDS while supporting PancakeSwap by
        staking LP Tokens.
      </>
    ),
  },
  {
    title: "Liquidity Pool",
    Svg: require("../../static/img/hourglass_top_black.svg").default,
    description: (
      <>
        When you add your token to a Liquidity Pool you will receive Liquidity
        Provider (LP) tokens and share in the fees.
      </>
    ),
  },
];

const Feature = ({ Svg, title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomepageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
