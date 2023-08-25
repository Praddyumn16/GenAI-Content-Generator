import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner from "../banner.jpg";
import Display from "./Display";
import data from "./data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  scrollToCards = () => {
    const cardsSection = document.getElementById("cards-section");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <div>
        <div className="bg-image d-flex justify-content-center align-items-center vh-100 position-relative">
          <img
            className="d-block"
            src={banner}
            alt="Content Generator"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <div className="overlay">
            <Container>
              <h1 className="mt-4 mb-4 display-4 fw-bold overlay-text">
                Gen-AI Content Generator Tool
              </h1>
              <button
                className="arrow-button blinking"
                onClick={this.scrollToCards}
              >
                <FontAwesomeIcon icon={faArrowDown} size="2x" />
              </button>
            </Container>
          </div>
        </div>

        <Container>
          <h1 className="mt-5 mb-5 fw-bolder">
            <span className="text-shadow text-primary">
              Start generating content for the below use cases!
            </span>
          </h1>
          <div id="cards-section">
            <Row className="mt-5 mb-4">
              {data.map((item, index) => (
                <Col key={index}>
                  <Display
                    header={item.header}
                    title={item.title}
                    text={item.text}
                    theLink={item.theLink}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
