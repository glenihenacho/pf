import React from "react";
import { Container, Row } from "react-bootstrap";

function ResumeContent(props) {
  return (
    <div className={`resume-item${props.last ? ' no-line' : ''}`}>
      <Row>
        <h5 className={props.title ? "resume-title" : "resume-no-title"}>
          {props.title}
        </h5>
        <p>
          <em>{props.date}</em>
        </p>
      </Row>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
