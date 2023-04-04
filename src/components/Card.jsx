import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const Card = ({ title, poster_path, vote_average, release_date, overview }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card text-center mb-3">
      <div className="card-body card-img">
        <img className="card-img-top" src={API_IMG + poster_path} alt="" />
      </div>
      <div className="card-body">
        <h5 class="title-card text-white text-center">{title}</h5>
        <p class="sorti text-white">
          <b>Sortie :</b> {release_date}
        </p>
        <p class="notemoy text-white">
          <span className="note">{vote_average}</span>
        </p>
        {/* <p class="resum text-white"><b>Résumé :</b> {overview.substring(0, 199) + "..."}</p> */}
        <button
          type="button"
          className="btn btn-dark"
          id="btn_card"
          onClick={handleShow}
        >
          Plus d'info <i class="bi bi-plus-circle"></i>
        </button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title centered>
              <h3 className="title_modal">{title}</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <img className="card-img-top" src={API_IMG + poster_path} alt="" />
            <h4 className="fst-italic mt-2">
              <b>Note moyenne :</b> {vote_average}
            </h4>
            <h5 className="fst-italic">
              <b>Sortie :</b> {release_date}
            </h5>
            <h6 className="fst-italic">
              <b>Résumé :</b>
            </h6>
            <p>{overview}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Card;
