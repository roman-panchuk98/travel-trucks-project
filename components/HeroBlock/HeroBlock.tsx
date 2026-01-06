import Link from "next/link";
import css from "./HeroBlock.module.css";

const HeroBlock = () => {
  return (
    <section className={css.heroSection}>
      <div className={css.heroContainer}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <p className={css.heroDescription}>
          You can find everything you want in our catalog
        </p>
        <Link href="/catalog" className={css.navButton}>
          View Now
        </Link>
      </div>
    </section>
  );
};

export default HeroBlock;
