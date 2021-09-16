import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiAws,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiPhotoshop,
  DiIllustrator,
  DiReact,
  DiNodejs,
  DiMongodb
} from "react-icons/di";
import { SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h4>HTML5</h4>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4>Illustrator</h4>
        <DiIllustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4>CSS3</h4>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4>Photoshop</h4>
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4>AWS</h4>
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4>Javascript</h4>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4>NodeJS</h4>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4>ReactJS</h4>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4>MongoDB</h4>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4>Firebase</h4>
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
