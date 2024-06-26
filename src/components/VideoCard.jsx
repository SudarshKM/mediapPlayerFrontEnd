import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import Button from 'react-bootstrap/Button';
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";
import { addToHistoryApi, deleteVideoApi } from "../services/allApi";

function VideoCard({ diplayVideo, setDeleteVideoStatus , isPresent}) {
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    let caption = diplayVideo?.caption;
    let url = diplayVideo?.url;
    let time = new Date();
    let timestamp = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(time);

    // console.log(timestamp);

    const reqbody = {
      caption,
      url,
      timestamp,
    };

    const result = await addToHistoryApi(reqbody);
    // console.log(result);
  };

  // delete video

  const handelDelete = async (id) => {
    console.log(id);
    const result = await deleteVideoApi(id);
    setDeleteVideoStatus(result.data);
  };

  const videoDrag = (e, id) => {
    // console.log(id);
    e.dataTransfer.setData("videoId",id);
  };

  // console.log(diplayVideo);
  return (
    <>
      <Card
        style={{ width: "100%" }}
        className="mt-4"
        draggable
        onDragStart={(e) => {
          videoDrag(e, diplayVideo?.id);
        }}
      >
      {!isPresent && <Card.Img
          onClick={handleShow}
          variant="top"
          src={diplayVideo?.image}
          width={"100%"}
          height={"350px"}
        />}
        <Card.Body>
          <Card.Text>{diplayVideo?.caption}</Card.Text>
         {!isPresent && <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              handelDelete(diplayVideo?.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{diplayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`${diplayVideo?.url}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
