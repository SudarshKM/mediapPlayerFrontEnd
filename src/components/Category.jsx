import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  AvideoApi,
  addCategoryApi,
  allCategoryApi,
  deleteVideoCategoryApi,
  updateCategoryApi,
} from "../services/allApi";
import { ToastContainer, toast } from "react-toastify";

function Category({setDragStatus , dragStatus}) {
  const [show, setShow] = useState(false);

  const [categoryName, setCategoryName] = useState("");

  const [allCategory, setAllCategory] = useState([]);

  const [addCategoryStatus, setAddCategoryStatus] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName("");
  };
  const handleShow = () => setShow(true);

  const addCategory = async () => {
    if (categoryName) {
      const reqbody = {
        categoryName,
        allVideo: [],
      };
      const result = await addCategoryApi(reqbody);
      // console.log(result);
      handleClose();
      toast.success("Category added successfully");
      setAddCategoryStatus(true);
    } else {
      toast.info("Please add the category name");
    }
  };

  const getCategory = async () => {
    const result = await allCategoryApi();
    console.log(result.data);
    setAllCategory(result.data);
  };

  const delCategory = async (id) => {
    const result = await deleteVideoCategoryApi(id);
    getCategory();

    // console.log(result);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    // console.log(categoryId);
    //accessing videoc id from videoCard component
    var videoId = e.dataTransfer.getData("videoId");
    // console.log(videoId);

    //gets videoDetails from server
    const { data } = await AvideoApi(videoId);

    // console.log(data);

    const selectedCategory = allCategory.find((item) => item.id == categoryId);

    if (selectedCategory.allVideo.find((item) => item.id == data.id)) {
      toast.warning("Video already exist in category");
    } else {
      selectedCategory.allVideo.push(data);
    }

    await updateCategoryApi(categoryId, selectedCategory);
    setAddCategoryStatus(true);

    // getCategory();
  };

  const DragStart=(e,videoId , categoryId)=>{
    console.log(videoId , categoryId);
    let dataShare = {
      videoId ,
      categoryId
    }

    e.dataTransfer.setData("dataShared", JSON.stringify(dataShare))
  }

  useEffect(() => {
    setAddCategoryStatus(false);
    setDragStatus(false);
    getCategory();
  }, [addCategoryStatus , dragStatus]);

  return (
    <>
      <div>
        <button
          className="btn btn-warning w-100 mt-5 mt-md-1 p-4 "
          onClick={handleShow}
          videoId
        >
          Add new Category <FontAwesomeIcon className="ms-1" icon={faPlus} />
        </button>
      </div>
      {allCategory?.length > 0 ? (
        allCategory.map((item) => (
          <div
            className="mt-md-5 mt-2"
            droppable
            onDragOver={(e) => {
              dragOver(e);
            }}
            onDrop={(e) => {
              videoDrop(e, item.id);
            }}
          >
            <div className="border border-secondary mt-2 rounded p-3 ms-4 ms-md-0">
              <div className="d-flex">
                <p>{item?.categoryName}</p>
                <button
                  onClick={() => {
                    delCategory(item.id);
                  }}
                  className="btn btn-danger ms-auto"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
              <Row>
               {item?.allVideo.length > 0 ?  item?.allVideo?.map((videoItem)=><Col sm={12} draggable onDragStart={(e)=>DragStart(e,videoItem.id,item.id)}>
                  <VideoCard diplayVideo={videoItem} isPresent={true}/>
                </Col>)
                :
                null
                }
              </Row>
            </div>
          </div>
        ))
      ) : (
        <h5 className="text-warning">No category added</h5>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="rounded border p-3 border-secondary">
            <input
              type="text"
              className="form-control"
              placeholder="Category Name"
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  );
}

export default Category;
