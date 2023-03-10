import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import {useRouter} from 'next/router';

type NavigationLinkType = {
  page: string;
  text: string;
};

const navigationLinks: NavigationLinkType[] = [
  {
    page: "/",
    text: "Home",
  },
  {
    page: "/bodies",
    text: "Bodies",
  },
  {
    page: "/shop",
    text: "Shop",
  },
  {
    page: "/financing",
    text: "Financing",
  },
  {
    page: "/about",
    text: "About",
  },
  {
    page: "/contact",
    text: "Contact",
  },
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [small, setSmall] = useState<boolean>(false);

  const dynamicRoute = useRouter().asPath;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [dynamicRoute])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.pageYOffset > 100);
      });
    }
  }, []);

  return (
    <header className={`${styles.header} ${small ? styles.small : ""}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            alt="QAS header logo"
            src="/logo_header.png"
            fill
            object-fit="contain"
          />
        </Link>
      </div>
      <nav>
        {!mobileMenuOpen ? (
          <svg
            onClick={() => {
              setMobileMenuOpen(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        ) : (
          <svg
            onClick={() => {
              setMobileMenuOpen(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        )}
        <ul data-visible={mobileMenuOpen}>
          {navigationLinks.map((link) => (
            <li key={link.text}>
              <Link href={`${link.page}`}>{link.text}</Link>
            </li>
          ))}
          {/* <li>
            <Button background={true}>
              <Link href="/cart">Cart</Link>
            </Button>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
