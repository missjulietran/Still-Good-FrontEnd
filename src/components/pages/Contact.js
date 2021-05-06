import React from "react";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactUsForm from "../Footer/ContactUsForm";
import "../../App.css";

export const Contact = () => {
  return (
    <div>
       <Row>
          <Col><div><h3 className="text-center">Contact Us</h3></div></Col>
        </Row><div className="flex-container2">
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5 text-center">
        <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <h5>Hong Kong</h5>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <h5>+852 8888 8888</h5>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <h5>contact@ecostore.com</h5>
                </li>
            </ul>
        </div>
        <div className="col-md-5 my-auto">
            We'd love to hear from you, please drop us a line if you've any query.
          <ContactUsForm />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
