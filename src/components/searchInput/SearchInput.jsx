import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
    console.log(searchValue);

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Cosa stai cercando?"
        className="me-2"
        aria-label="Search"
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </Form>
  );
};

export default SearchInput;
