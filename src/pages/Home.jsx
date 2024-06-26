import React, { useState } from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import View from "../components/View";
import Category from "../components/Category";


function Home() {

const [ addStatus , setAddStatus] = useState([])

const [dragStatus , setDragStatus] = useState(false)

// console.log(addStatus);

  return (
    <>
      <div className="d-flex mt-5 p-5">
        <Add setAddStatus={setAddStatus}/>

        <h5 className="ms-auto">
          <Link
            to={"/watch-history"}
            style={{ textDecoration: "none ", color: "white" }}
          >
            <span id="hide">Watch History</span>
            <FontAwesomeIcon className="ms-1 " icon={faClockRotateLeft} />
          </Link>
        </h5>
      </div>

      <div className="row w-100 p-4">
        <div className="col-md-9">
          <h4>All Videos</h4>
          <View addStatus={addStatus} setDragStatus={setDragStatus}/>
        </div>
        <div className="col-md-3">
          <Category dragStatus={dragStatus} setDragStatus={setDragStatus}/>
        </div>
      </div>
    </>
  );
}

export default Home;
