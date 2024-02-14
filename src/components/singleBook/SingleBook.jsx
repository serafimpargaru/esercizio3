import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./SingleBook.css";
import { nanoid } from "nanoid";
import { useState } from "react";

const CardItem = ({ title, img, price, category }) => {
  const [isSelected, setIsSelected] = useState(false);
  const cardSelection = () => setIsSelected(!isSelected);

  return (
    <Col className="flip-card" key={nanoid()}>
      <Card
        className={
          "flip-card-inner h-100 shadow mb-5 bg-body-tertiary rounded-3 border-3 border-white" +
          (isSelected
            ? "flip-card-inner h-100 shadow mb-5 bg-body-tertiary rounded-3 border-4 border-danger"
            : "")
        }
        onClick={cardSelection}
      >
        <div className="flip-card-front overflow-hidden rounded-2">
          <Card.Img className="image-custom rounded-0" variant="top" src={img} />
        </div>
        <Card.Body className="flip-card-back p-0 d-flex flex-column align-items-center rounded-3">
          <div>
            <Card.Text className="fst-italic text-secondary mt-2">
              {category}
            </Card.Text>
            <div className="d-flex flex-column align-items-center gap-2">
              <div className="text-success fw-semibold rounded-pill bg-success-subtle ps-2 pe-2">
                TITOLO
              </div>
              <Card.Title className="fw-semibold ps-3 pe-3">{title}</Card.Title>
            </div>
          </div>
          <div className="rounded-pill bg-dark text-white position-absolute bottom-0 end-25 mb-3">
            <Card.Text className="fs-4 fw-bold ps-3 pe-3 pt-1 pb-1">
              {price} $
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;
