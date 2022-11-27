import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import Domain from "./Components/Domain";
import Department from "./Components/Department";
import domains from "../data/domains.json";
import Faq from "./Components/Faq";
import departments from "../data/departments.json";
import { Container, Row } from "react-bootstrap";
import Footer from "./Components/Footer";
import OffBearSec from "./Components/OffBearSec";
import exofficebearers_18_22 from "../data/exofficebearers_18-22.json"
import styles from "../styles/about.module.css"

export default function About(props) {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  function handle(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>SSN Coding Club</title>
        <meta name="description" content="Official SSN Coding Club Website" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </Head>
      <Navbar transfer={props.theme} setTheme={props.setTheme} />

      <main
        className={props.theme ? styles.about_main_container_light : styles.about_main_container}
      >
        {isAppleDevice ? (
          <div className={styles.appleHeader}>
            <h1>About Us</h1>
          </div>
        ) : (
          <div className={styles.header}>
            <h1>About Us</h1>
          </div>
        )}
        <div className={styles.subcontainer}>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            What is The CodeBreakers Club?
          </h2>
          <p className={props.theme ? styles.para_light : styles.para}>
          The CodeBreakers Club is a club of Shri Ramdeobaba
            College Of Engineering And Management, Nagpur,
            Maharashtra-440013. The CodeBreakers Club comes
            under the Technical Club and has a speciality of
            Programming languages, Competitive coding, Web
            Developemnt, IOT, AIML, Open Source Intelligence and
            many more. The club is a SRC (Student's Representative
            Counsil) which is a student body ran by the cuurent
            students studying in the college. The club organises many
            events for the college and represents RCOEM in different
            events held over All over India.

          </p>
        </div>
        <div>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            What do we do?
          </h2>
          <Container className={`mt-10` + " " + styles.departmentContainer}>
            <Row>
              {departments.map((department, index) => {
                return <Department key={index} department={department} theme={props.theme} />;
              })}
            </Row>
          </Container>
        </div>
        <div className={styles.content}>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            Meet the team!
          </h2>
          {domains.map((domain, i) => {
            return <Domain key={i} domain={domain} theme={props.theme} />;
          })}
        </div>

        {/*  Alumni Section */}
        {/* <h2 className={props.theme ? styles.subheader_light : styles.subheader} style={{ "fontSize": "30px" }}>
          Ex-Office Bearers
        </h2>
        <OffBearSec year="2018-22" theme={props.theme} file={exofficebearers_18_22} /> */}
        {/* */}

        <div className={styles.faq}>
          <h2 className={props.theme ? styles.subheader_light : styles.subheader}>
            Frequently Asked Questions
          </h2>
          <Container className={styles.faqContainer}>
            <Faq theme={props.theme} />
          </Container>
        </div>
      </main>
      <div className={styles.placeholder}>
        <Footer theme={props.theme} about={true} />
      </div>
    </div>
  );
}
