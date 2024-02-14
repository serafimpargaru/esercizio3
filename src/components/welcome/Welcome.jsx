import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Welcome = () => {
  const [show, setShow] = useState(true);

  return (
    <Container className="mb-5 ">
      <Alert show={show} variant="success" className="rounded-3 shadow">
        <Alert.Heading>Benvenuto su EPIBOOKS</Alert.Heading>
        <p>
          Benvenuto sul nostro sito, scorri più giù per vedere la nostra
          raccolta. Speriamo che i titoli proposti siano di tuo gradimento.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
          Chiudi avviso
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)} variant="outline-success">Apri avviso</Button>}
    </Container>
  );
};

export default Welcome;