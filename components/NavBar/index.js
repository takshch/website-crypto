import Link from 'next/link';
import React, { useState, useRef } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import GenericClosePopUp from '../Close-popup/GenericClosePopUp';

const NavBar = ({ personData: { photo } }) => {
  const RDSLogo = '/assets/Real-Dev-Squad1x.png';
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef();
  GenericClosePopUp(navbarRef, () => {
    setToggle(false);
  });

  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <div className={styles.logo}>
            <Link href="https://realdevsquad.com">
              <Image src={RDSLogo} alt="Navbar Logo" width="50" height="50" />
            </Link>
          </div>
        </li>
        {/* <li>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </li> */}
        <li>
          <Link href="/auctions">
            <a>Auction</a>
          </Link>
        </li>
        <li>
          <Link href="/trading">
            <a>Stocks</a>
          </Link>
        </li>
      </ul>

      <div
        className={styles.profilePic}
        ref={navbarRef}
        onClick={() => setToggle(!toggle)}
      >
        <img src={photo} alt="Profile Image" height="70" width="70" />
        <div
          className={
            toggle ? styles.dropdownContent : styles.dropdownContentHide
          }
        >
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
