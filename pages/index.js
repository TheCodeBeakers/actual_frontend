/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import cardDetails from "../data/cardInfo.json";
import styles from "../styles/Home.module.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Tile from "./Components/Tile";
import ReactGA from "react-ga";

ReactGA.initialize("UA-217065873-1");

export default function Home(props) {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
    ReactGA.send("pageview");
  }, []);

  return (
    <div className={styles.parallax}>
      <div className={props.theme ? styles.container_light : styles.container}>
        <Head>
          <title>The Code Breakers</title>
          <meta name="description" content="Codebreakers RCOEM" />
          <link rel="icon" href="/code-breakers-logo.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <Navbar transfer={props.theme} setTheme={props.setTheme} />
        <main className={styles.main}>
          <div className={styles.headerSection}>
            {isAppleDevice ? (
              <div className={styles.header}>
              <h1 style={{fontSize:"42pt"}}>The Code Breakers</h1>
            </div>
            ) : (
              <div className={styles.header}>
                <h1 style={{fontSize:"54pt"}}>The Code Breakers</h1>
              </div>
            )}
            <h2 className={props.theme ? styles.h1Text_light : styles.h1Text} style={{fontSize:"20pt"}}>
              Breaking codes, Creating minds!
            </h2>
      
            <a href="#info">
            <br></br>
              {props.theme ? (
                
                <BsChevronDoubleDown
                  color="black"
                  size="45"
                ></BsChevronDoubleDown>
              ) : (
                <BsChevronDoubleDown
                  color="white"
                  size="45"
                ></BsChevronDoubleDown>
              )}
            </a>
          </div>
        </main>

        <div id="info">
          <Container className={styles.infoContainer}>
            <Row>
              {cardDetails.map((cardInfo, i) => {
                return (
                  <Col md="6" sm="12" lg="4">
                    <Card
                      className={
                        props.theme
                          ? styles.infoContainerCard_light
                          : styles.infoContainerCard
                      }
                    >
                      <Card.Img variant="top" src={cardInfo.img} />
                      <Card.Body>
                        <Card.Title
                          className={
                            props.theme
                              ? styles.infoContainerCardTitle_light
                              : styles.infoContainerCardTitle
                          }
                        >
                          {cardInfo.title}
                        </Card.Title>
                        <Card.Text> {cardInfo.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div>
          <div
            className={
              props.theme
                ? styles.thrivingCommunityHeaderContainer_light
                : styles.thrivingCommunityHeaderContainer
            }
          >
            {isAppleDevice ? (
              <>
                {/* <img src="./HomePage/TC_1.svg" alt="Title-part-1" />
                <img src="./HomePage/TC_2.svg" alt="Title-part-2" />{" "} */}
                  <div className={styles.thrivingCommunityHeader}>
                <div className={styles.thrivingCommunityHeader2}>OUR TEAM</div>
              </div>
              </>
            ) : (
              <div className={styles.thrivingCommunityHeader}>
                <div className={styles.thrivingCommunityHeader2}>OUR TEAM</div>
              </div>
            )}

            <p>
              We engage with everyone and the community chooses what we should
              focus on next. We are present on several platforms and we are
              looking forward to interact with you!{" "}
            </p>
          </div>
          <Container>
            {/* Request you not to change this screenshot :) */}
            <img
              src="./team.jpg"
              alt="Discord screenshot"
              className={styles.discordImage}
            />
          </Container>
        </div>
        <div className={styles.domainSection}>
          {/* lots of domains */}
          <Row>
            <Col sm="12" md={`${isAppleDevice ? 8 : 12}`}>
              {isAppleDevice ? (
                <img
                  src="./HomePage/LoD.png"
                  className={styles.domainHeaderApple}
                  alt="Title"
                />
              ) : (
                <div className={styles.domainHeader}>
                  <div className={styles.domainHeader1}>Invited Domains</div>
                </div>
              )}
            </Col>
          </Row>
          <Row className={styles.domainRow}>
            <Col sm="12" md="5" className={styles.domainImgContainer}>
              <img
                src="./HomePage/cp.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h4
                className={
                  props.theme ? styles.domainName_light : styles.domainName
                }
              >
                Competitive Programming
              </h4>
            </Col>
            <Col sm="12" md="7" className={styles.domainInfoContainer}>
              <p
                className={
                  props.theme ? styles.domainInfo_light : styles.domainInfo
                }
              >
                Join us on a journey to master the tricks of the trade - popular
                CP concepts, algorithms and stratagems, boosting your cognitive,
                logical reasoning and enhancing your coding interview skills
                along the way. We also hold contests where you can compete with
                your peers and challenge yourself. We are available 24/7 to
                clarify your doubts and for any other assistance you may need.
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "last" }}
              md={{ span: 7, order: "first" }}
              className={styles.domainInfoContainer}
            >
              <p
                className={
                  props.theme ? styles.domainInfo_light : styles.domainInfo
                }
              >
                Rome wasn't built in a day, and neither was our website. Learn
                state-of-the-art app building and end-to-end full-stack
                development with zero compromises. Do you have anything in
                particular you want to learn? No problem! Our team of developers
                have experience in various fields, and can help out whenever
                required.
              </p>
            </Col>
            <Col
              xs={{ order: "first" }}
              sm={{ order: "first" }}
              md={{ span: 5, order: "last" }}
              className={styles.domainImgContainer}
            >
              <img
                src="./HomePage/sd.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h4
                className={
                  props.theme ? styles.domainName_light : styles.domainName
                }
              >
                Full Stack Web Development
              </h4>
            </Col>
          </Row>
          <Row className={styles.domainRow}>
            <Col s m="12" md="5" className={styles.domainImgContainer}>
              <img
                src="./HomePage/ml.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h4
                className={
                  props.theme ? styles.domainName_light : styles.domainName
                }
              >
                Android Development
              </h4>
            </Col>
            <Col sm="12" md="7" className={styles.domainInfoContainer}>
              <p
                className={
                  props.theme ? styles.domainInfo_light : styles.domainInfo
                }
              >
                More than 78% of people in the world own a smartphone. What are
                people doing with these gadgets? They make use of apps. App
                development is similar to other types of software development,
                such as web apps. The ability of mobile apps to exploit native
                capabilities on a device is the most significant difference
                between app development and traditional software development. We
                have app development enthusiasts, and we aim to grow this
                community of enthusiastic app developers!
              </p>
            </Col>
          </Row>

          <Row>
            <Col
              xs={{ order: "last" }}
              sm={{ order: "last" }}
              md={{ span: 7, order: "first" }}
              className={styles.domainInfoContainer}
            >
              <p
                className={
                  props.theme ? styles.domainInfo_light : styles.domainInfo
                }
              >
                Web3 is a notion for a new version of the World Wide Web that
                integrates principles like decentralisation, blockchain
                technology, and token-based economy. Web3 development is a
                burgeoning new technology, and we have enthusiasts who have
                already begun working on blockchain, dapps, bitcoin, and so on.
                Join us in getting ready for the future!
              </p>
            </Col>
            <Col
              xs={{ order: "first" }}
              sm={{ order: "first" }}
              md={{ span: 5, order: "last" }}
              className={styles.domainImgContainer}
            >
              <img
                src="./greymenblockchain.png"
                className={styles.domainImages}
                alt="Title"
              />
              <h4
                className={
                  props.theme ? styles.domainName_light : styles.domainName
                }
              >
                Web 3 Development
              </h4>
            </Col>
          </Row>
        </div>

        <div className={styles.opensourceSection}>
          <div className={styles.gradientDiv}>
            <div className={styles.opensourceDiv}>
              <h1>We Develop and Conquer</h1>

              <button className={styles.openSourceButton}></button>

              <img
                src="./HomePage/guy1.png"
                alt="Title"
                className={styles.openSourceImg1}
              />
              <img
                src="./HomePage/guy2.png"
                alt="Title"
                className={styles.openSourceImg2}
              />
            </div>
          </div>
        </div>
        <div className={styles.tileSection}>
          <Container fluid>
            <Row className={styles.tileRow}>
              <Col xs="12" sm="6" md="3" className={styles.tileContainer}>
                <Tile tileColor="blueBG" tileImage="5.png" />
              </Col>
              <Col xs="12" sm="6" md="3" className={styles.tileContainer}>
                <Tile tileColor="greenBG" tileImage="1.jpeg" />
              </Col>
              <Col xs="12" sm="6" md="3" className={styles.tileContainer}>
                {/*TODO: Can pass required content for tiles as props */}
                <Tile tileColor="purpleBG" tileImage="2.jpeg" />
              </Col>
              <Col xs="12" sm="6" md="3" className={styles.tileContainer}>
                <Tile tileColor="redBG" tileImage="3.jpeg" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={styles.placeholder}>
        <Footer theme={props.theme} />
      </div>
    </div>
  );
}
