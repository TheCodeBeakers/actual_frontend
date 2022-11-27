import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import styles from "../../styles/Blog.module.css";
import BlogTitleCard from "../Components/BlogTitleCard";
import BlogCards from "../Components/BlogCards";
import cards from "../../data/blogcards";
import Footer from "../Components/Footer";
import domains from "../../data/results.json";
import Domain from "../Components/Domain";
export default function Blog(props) {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Codebreakers Club</title>
        <meta name="description" content="Official SSN Coding Club Website" />
        <link rel="icon" href="/code-breakers-logo.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Navbar transfer={props.theme} setTheme={props.setTheme} />

      <main className={props.theme ? styles.blog_main_container_light : styles.blog_main_container}>
        {isAppleDevice ? (
          <div className={styles.appleHeader}>
            <h1>Results</h1>
          </div>
        ) : (
          <div className={props.theme ? styles.header_light : styles.header}>
            <h1>Results</h1>
          </div>
        )}
        <div className={styles.subcontainer}>
          <h2 className={styles.subheader}>
            {cards.length > 0 ? (
              <>
                <span style={{ color: "#63ADF2", fontSize:"36px" }}>while&nbsp;</span><span  style={props.theme ? {color:"black"}:{ color: "white" }}>(</span>
                <span style={props.theme? {color: "black",fontSize:"32px"}: { color: "#FFFBFE",fontSize:"32px" }}>user.status</span>{" "}
                <span style={{ color: "#63ADF2" }}>==</span>{" "}
                <span style={props.theme? {color: "#7fbef5"}:{ color: "#BDD5EA" }}>'selected'</span><span style={props.theme ? {color:"black"}:{ color: "white" }}>)</span><span style={props.theme ? {color:"black"}:{ color: "white" }} >:</span> &nbsp;
                <span style={{ color: "#63ADF2" }}>print</span><span  style={props.theme ? {color:"black"}:{ color: "white" }}>(</span>
                <span style={props.theme? {color: "#7fbef5"}:{ color: "#BDD5EA" }}>user.name</span><span  style={props.theme ? {color:"black"}:{ color: "white" }}>)</span>
              </>
            ) : (
              <h1 className={props.theme ? styles.coming_soon : " "}>Coming Soon! 😉</h1>
            )}
          </h2>
        </div>
        {/* {cards.length > 0 ? (
          <>
            <div className={styles.blog_container}>
              <BlogTitleCard cards={cards} id={0} transfer={props.theme}/>
            </div>

            <div className={styles.blog_container}>
              <BlogCards cards={cards} transfer={props.theme}/>
            </div>
          </>
        ) : (
          <></>
        )} */}
        {domains.map((domain, i) => {
            return <Domain key={i} domain={domain} theme={props.theme} />;
          })}
      </main>
      <div className={styles.placeholder}>
        <Footer theme={props.theme} />
      </div>
    </div>
  );
}
