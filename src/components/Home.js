import React, { Component } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import banner from "../banner.jpg";
import Display from "./Display";
import data from "./data.json";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-image d-flex justify-content-center align-items-center vh-100">
          <img
            className="d-block"
            src={banner}
            alt="Content Generator"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <Container>
          <br />
          <br />

          <h1>Generative AI Content Generator Tool</h1>
          <p>Start generating content for any of the below use cases!</p>

          <br />
          <br />

          <Row>
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

          <br />
          <br />
        </Container>
      </div>
    );
  }
}

export default Home;
