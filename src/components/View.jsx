import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { allCategoryApi, getVideoApi, updateCategoryApi } from "../services/allApi";

function View({addStatus , setDragStatus}) {

  const [videoDetails, setVideoDetails] = useState([]);
  const [deleteVideoStatus , setDeleteVideoStatus] = useState({})
  // console.log(addStatus);
  const getVideo = async () => {
    const result = await getVideoApi();

     console.log(result.data);

    // if(result.status>=200 && result.status<300) {
      setVideoDetails(result.data);
    // }
  };

  const DragOver = (e) => {
    e.preventDefault()
  }

  const videoDrop =async (e) =>{
    const {videoId , categoryId} = JSON.parse(e.dataTransfer.getData("dataShared"))
    console.log(videoId , categoryId);

    //Get all Category
    const {data} = await allCategoryApi()

    console.log(data);
    

  // Step 2, Get selected category

  const selectedCategory = data.find((item)=>item.id==categoryId)

    const result = selectedCategory.allVideo.filter((item)=>item.id != videoId);

    // console.log(result);

    const reqbody = {
      categoryName : selectedCategory.categoryName,
      allVideo : result,
      id : selectedCategory.id
    }
    
    // Step 3, remove video from
    await updateCategoryApi(categoryId, reqbody);
    setDragStatus(true)

  }

  useEffect(() => {
    getVideo();
  },[addStatus , deleteVideoStatus]);

  // console.log(videoDetails);

  return (
    <>
      <Row className="w-100 ms-3 ms-md-0" droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e)}>
        {videoDetails?.length > 0 ? (
          videoDetails.map((item) => (
            <Col
              xs={12}
              md={6}
              lg={3}
              xl={3}
              className="d-flex justify-content-center align-items-center"
            >
              <VideoCard diplayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col>
          ))
        ) : (
          <p className="text-warning">No video yet uploaded..</p>
        )}
      </Row>
    </>
  );
}

export default View;
