import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import TechStack from "./TechStack";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Glen-Ihenacho.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>
        <Row className="resume">
          <h3 style={{ marginTop: '35px', textAlign: 'center' }}>
            Certified React Developer offering 5 years of diversified experience.
            Former Division I athlete with a driving mentality of execution and improvement.
          </h3>
        </Row>
        <Row className="resume">
          <h3 className="resume-title">Experience</h3>
        </Row>
        <Resumecontent
          title="Full Stack Developer, Life, LLC."
          date="July 2018 - January 2021"
          content={[
            "Created a unified brand of vector icons.",
            "Developed front-end.",
            " Implemented UI/UX improvements based on consumer feedback.",
            "Integrated back-end services such as AWS."
          ]}
          last
        />
        <Row className="resume">
          <h3 className="resume-title">Education</h3>
        </Row>
          <Resumecontent
            title="Philosophy, University of Oregon"
            date="July 2014 - June 2016"
            content={['Participated as an integral member of the starting football roster.']}
          />
          <Resumecontent
            title="Computer Science, Self-taught"
            date="May 2016 - Present"
            content={["+5 Udemy courses completed", "+3 Codecademy courses", "Crash course enthusiast"]}
            last
          />
        <Row className="resume">
          <h3 className="resume-title">Skills</h3>
        </Row>
        <TechStack />
      </Container>
    </Container>
  );
}

export default Resume;
