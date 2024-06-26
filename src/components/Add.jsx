import React from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addVideoApi } from "../services/allApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// https://www.youtube.com/embed/

// https://youtu.be/i4H6OzfnBwI?si=hU17k4yXldI5sv3G

// https://www.youtube.com/watch?v=i4H6OzfnBwI   :top serachBar

// https://youtu.be/sbLciJnCm-E?si=95J2znvhmF-O4L-V share
// https://www.youtube.com/watch?v=sbLciJnCm-E      top serachbar

function Add({setAddStatus}) {
  // create a state to hold data from input

  const [video, setVideo] = useState({ caption: "", image: "", url: "" });
  console.log(video);

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setVideo({ caption: "", image: "", url: "" });
    
  };
  const handleShow = () => setShow(true);

  const validateLink = (e) => {
    console.log(e.target.value);
    const link = e.target.value;

    if (link.startsWith("https://www.youtube.com/watch?v=")) {
      const yTkey = link.slice(-11);
      console.log(yTkey);

      let embedLink = `https://www.youtube.com/embed/${yTkey}`;
      setVideo({ ...video, url: embedLink });
    } else if (link.startsWith("https://youtu.be")) {
      const yTkey = link.slice(17, 28);
      console.log(yTkey);

      let embedLink = `https://www.youtube.com/embed/${yTkey}`;
      setVideo({ ...video, url: embedLink });
    } else {
      const yTkey = link.slice(-11);
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`;
      setVideo({ ...video, url: embedLink });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const { caption, image, url } = video;

    if (!caption || !image || !url) {
      toast.info("FIll the form correctly");
    } else {

     const result =  await addVideoApi(video)
     console.log(result);


     if(result.status >=200 && result.status<300) {
      toast.success("Video uploaded successfully");
      setAddStatus(result.data)
      handleClose()

      
      
     }
     else{
      toast.error("Something went wrong..");
      handleClose()
     }
    }
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>
          Upload<span id="hide"> New Video</span>
        </h5>
        <button className="btn mb-3" onClick={handleShow}>
          <FontAwesomeIcon icon={faUpload} size="2xl" />
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill details</p>
          <form action="" className="p-3 border border-secondary rounded">
            {/* <input type="text" className='form-control mt-3' placeholder='Video id' name="" id="" /> */}
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Video Caption"
              name=""
              id=""
              onChange={(e) => {
                setVideo({ ...video, caption: e.target.value });
              }}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Video image"
              name=""
              id=""
              onChange={(e) => setVideo({ ...video, image: e.target.value })}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Video url"
              name=""
              id=""
              onChange={(e) => validateLink(e)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="button" variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme="colored" position="top-center" autoClose={2000}/>

    </>
  );
}

export default Add;
