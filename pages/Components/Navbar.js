/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from "../../styles/navbar.module.css";
import { FiSun, FiMoon } from "react-icons/fi";

function NavBar(props) {
  const [expand, setExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);
  const router = useRouter();

  function scrollHandler() {
    if (window.scrollY >= 40) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const handleScroll = () => {};
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={
        props.transfer
          ? styles.navbar_light + " " + (navColor ? styles.sticky_light : "")
          : styles.navbar + " " + (navColor ? styles.sticky : "")
      }
    >
      <Container>
        <Navbar.Brand href="/">
          <Nav.Item
            className={props.transfer ? styles.logotext_light : styles.logotext}
          >
            <img width="50" src="./code-breakers-logo.ico" alt="logo"></img>
            <h4 style={{}}>TCB</h4>
          </Nav.Item>
        </Navbar.Brand>
        <Navbar>
          <Nav className={styles.navbar_nav} defaultActiveKey="#home">
            <Link
              href="/"
              onClick={() => {
                setExpanded(false);
              }}
              passHref
            >
              <Nav.Item className={styles.nav_item}>Home</Nav.Item>
            </Link>
            <Link
              href="/about"
              onClick={() => {
                setExpanded(false);
              }}
              passHref
            >
              <Nav.Item className={styles.nav_item}>About</Nav.Item>
            </Link>
            <Link
              href="/achievements"
              onClick={() => {
                setExpanded(false);
              }}
              passHref
            >
              <Nav.Item className={styles.nav_item}>Achievements</Nav.Item>
            </Link>
            {/* <Link
              href="/result"
              onClick={() => {
                setExpanded(false);
              }}
              passHref
            >
              <Nav.Item className={styles.nav_item}>Results</Nav.Item>
            </Link> */}

            <Nav.Item
              className={styles.nav_toggle_icons}
              onClick={() => props.setTheme(!props.transfer)}
            >
              {props.transfer ? (
                <div className={styles.toggle_icons_light}>
                  <FiMoon size={20} />
                </div>
              ) : (
                <div className={styles.toggle_icons}>
                  <FiSun size={20} />
                </div>
              )}
            </Nav.Item>

            <div className={styles.menuToggle}>
              <input type="checkbox" />
              <span
                className={props.transfer ? styles.menuSpan_light : ""}
              ></span>
              <span
                className={props.transfer ? styles.menuSpan_light : ""}
              ></span>
              <span
                className={props.transfer ? styles.menuSpan_light : ""}
              ></span>
              <ul className={styles.mobilenavul + " " + styles.menu}>
                <li>
                  <Link
                    href="/"
                    onClick={() => {
                      setExpanded(false);
                    }}
                    passHref
                  >
                    <Nav.Item style={{ cursor: "pointer" }}>Home</Nav.Item>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => {
                      setExpanded(false);
                    }}
                    passHref
                  >
                    <Nav.Item style={{ cursor: "pointer" }}>About</Nav.Item>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/achievements"
                    onClick={() => {
                      setExpanded(false);
                    }}
                    passHref
                  >
                    <Nav.Item style={{ cursor: "pointer" }}>Achievements</Nav.Item>
                  </Link>
                </li>
                <li>
                 <Link
                    href="/result"
                    onClick={() => {
                      setExpanded(false);
                    }}
                    passHref
                >
                    <Nav.Item style={{ cursor: "pointer" }}>Results</Nav.Item>
                  </Link>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}
export default NavBar;
