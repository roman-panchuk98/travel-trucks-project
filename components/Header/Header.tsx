"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathName = usePathname();
  return (
    <header className={css.header}>
      <Link href="/" className={css.logoContainer} aria-label="Home">
        <svg width="136" height="16">
          <use href="/sprite/sprite.svg#icon-logo" />
        </svg>
      </Link>
      <nav className={css.headerNavigation}>
        <ul>
          <li>
            <Link
              href="/"
              className={`${css.navButton} ${pathName === "/" ? css.navButtonActive : ""}`}
              aria-label="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              className={`${css.navButton} ${
                pathName === "/catalog" ? css.navButtonActive : ""
              }`}
              aria-label="Catalog"
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
