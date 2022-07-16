import React from "react";
import {Button,Card} from "react-bootstrap";

function CardData() {
  function AlertFun(){
    alert("We got your Intension thank you foe your interest")
  }
  return (
    <div>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row mt-5">
            <div className="col-md-4 col-10 ">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/technical-support-center-customer-service-internet-business-technology-concept-technical-support-center-customer-service-internet-102190919.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={AlertFun}>Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
            <div className="col-md-4 col-10 ">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/technical-support-center-customer-service-internet-business-technology-concept-technical-support-center-customer-service-internet-102190919.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={AlertFun}>Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
            <div className="col-md-4 col-10 ">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/technical-support-center-customer-service-internet-business-technology-concept-technical-support-center-customer-service-internet-102190919.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={AlertFun}>Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardData;
