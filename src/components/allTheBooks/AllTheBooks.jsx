import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import SingleBook from "../singleBook/SingleBook";
import { nanoid } from "nanoid";
import BooksLoader from "../loader/BooksLoader";

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);

      try {
        const response = await fetch("https://epibooks.onrender.com/");
        const data = await response.json();
        const randomizeBooks = data.sort(() => Math.random() - 0.5);

        setLoading(false);
        setBooks(randomizeBooks);
      } catch (error) {
        setError(error.message);
      }
    };
    getBooks();
  }, []);

  return (
    <Container className="mt-4">
      {loading && error === "" && (
        <div className="fs-3 d-flex align-items-center gap-3">
          <BooksLoader />
          <div>Sto cercando...</div>
        </div>
      )}
      {error.length > 0 && (
        <div className="d-flex justify-content-center fs-3">
          <div className="text-danger fw-semibold">
            {"Attenzione!! " + error}
          </div>
        </div>
      )}
      {!loading && error === "" && (
        <div className="d-flex flex-column gap-4">
          <div className="d-flex justify-content-center fs-5 fw-semibold rounded-3 border border-3 border-white shadow bg-success">
            <div className="text-white p-3">
              Ho trovato {books.length} titoli che ti possono interessare
            </div>
          </div>
          <Row xs={1} md={2} lg={4} className="g-4">
            {books.map((book) => (
              <SingleBook
                key={nanoid()}
                img={book.img}
                title={book.title}
                price={book.price}
                category={book.category}
              />
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default AllTheBooks;
