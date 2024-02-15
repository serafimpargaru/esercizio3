import Form from "react-bootstrap/Form";

const SearchInput = ({ onSearch }) => {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Cosa stai cercando?"
        className="me-2"
        aria-label="Search"
        onChange={(event) => onSearch(event.target.value)}
      />
    </Form>
  );
};

export default SearchInput;
