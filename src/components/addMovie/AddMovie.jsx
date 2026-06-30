import "./addMovie.css";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";

function AddMovie({ addFilm }) {
  // --------------------Bootstrap-------------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // --------------------Bootstrap-------------------
  // state pour récupérer la saisie de l'utilisateur
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(1);
  const [posterUrl, setPosterUrl] = useState("");
  const [trailer, setTrailer] = useState("");
  //nouveau film
  // console.log({ title, description, rate, posterUrl, trailer})

  const handleSubmit = (e) => {
    e.preventDefault(); //pour arrêter le chargement du form: comportement par défaut
    // if(!title.trim()) return alert("veillez donner un titre valid!")
    addFilm({
      id: Math.random(),
      title,
      description,
      rate,
      posterUrl,
      trailer,
    });
    handleClose(); //fermer la boite modal
    setTitle("");
    setDescription("");
    setRate(1);
    setPosterUrl("");
    setTrailer("");
  };

  return (
    <div className="w-25 m-auto">
      <Button variant="outline-secondary" onClick={handleShow}>
        ➕Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Movie...</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {" "}
            {/* title */}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="movie's title ..."
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            {/* description */}
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="movie's description ..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            {/* rate */}
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="1-5"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>
            {/* posterUrl */}
            <Form.Group className="mb-3">
              <Form.Control
                type="url"
                placeholder="movie's PosterUrl  ..."
                value={posterUrl}
                onChange={(e) => setPosterUrl(e.target.value)}
              />
            </Form.Group>
            {/* trailer */}
            <Form.Group className="mb-3">
              <Form.Control
                type="url"
                placeholder="movie's trailer ..."
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button
              variant="primary"
              type="submit"
              disabled={
                !title.trim() ||
                !description.trim() ||
                !rate.toString().trim() ||
                !posterUrl ||
                !trailer
              }
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default AddMovie;
