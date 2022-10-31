import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  //
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="Image of max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, im max</h1>
      <p>I blog about web-dev, especially front end frameworks like react</p>
    </section>
  );
}

export default Hero;
