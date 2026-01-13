"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import FavoriteListModal from "../FavoriteListModal/FavoriteListModal";
import { useState } from "react";
const Header = () => {
  const pathName = usePathname();

  const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false);

  return (
    <>
      <header className={css.header}>
        <div className={css.headerContainer}>
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
          <button
            className={css.favoriteListBtn}
            type="button"
            onClick={() => setIsFavoriteModalOpen(true)}
          >
            <svg width={24} height={24} className={css.favoriteListIcon}>
              <use href="/sprite/sprite.svg#icon-heart" />
            </svg>
          </button>
        </div>
      </header>
      {isFavoriteModalOpen && (
        <FavoriteListModal onClose={() => setIsFavoriteModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
