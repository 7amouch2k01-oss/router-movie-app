// Search input that filters the visible movies by title.
import "./filterByTitle.css";

import Form from "react-bootstrap/Form";
const FilterByTitle = ({ searchTitle, setSearchTitle }) => {
  return (
    <Form className="container mt-4 m-auto">
      <Form.Control
        type="text"
        placeholder="Enter email"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
    </Form>
  );
};

export default FilterByTitle;
