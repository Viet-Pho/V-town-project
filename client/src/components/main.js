import React from "react";
import { Row, Col, Button } from "reactstrap";

export default (props) => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center icon">
        <Col>
          <p className="welcoming">
            If you're looking for great Place to dine-in
            <i className="fas fa-booking-icon booking-icon"></i>
          </p>
          <Button
            color="none"
            className="book-table-btn"
            onClick={(_) => {
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../images/cafe.jpg")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
    </div>
  );
};
