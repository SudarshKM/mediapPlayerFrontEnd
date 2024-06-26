import {
  faArrowLeft,
  faHouse,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteVideoFromHistoryApi, getVideoFromHistoryApi } from "../services/allApi";

function WatchHistory() {
  const [videoHistory, setVideoHistory] = useState([]);
  const [deleteStatus , setDeleteStatus] = useState([]);

  const getHistory = async () => {
    const result = await getVideoFromHistoryApi();

    // if (result.satus >= 200 && result.satus < 300) {
      setVideoHistory(result.data);
      // console.log(result.status);
    // }
  };
  // console.log(videoHistory);



  useEffect(() => {
    getHistory();
  },[deleteStatus]);

  const deleteHistory = async (id) =>{
    const result = await deleteVideoFromHistoryApi(id);
    setDeleteStatus(result.data);
    console.log(result.status);
  }
  return (
    <>
      <div className="d-flex p-3 mt-5 w-100 mb-5">
        <h4 className="ms-md-5">Watch History</h4>
        <h5 className="ms-auto me-md-5">
          <Link to={"/home"} style={{ color: "white", textDecoration: "none" }}>
            <span id="hide">
              <FontAwesomeIcon icon={faArrowLeft} fade className="me-2" />
              Back to Home
            </span>{" "}
            <FontAwesomeIcon icon={faHouse} className="ms-2" />
          </Link>
        </h5>
      </div>

      <div className="row w-100 mt-5 ">
        <div className="col-md-2"></div>
        <div className="col-md-8" style={{ overflowX: "auto" }}>
          {videoHistory?.length >0 ? (
            <table className="table table-borderd table-light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Caption</th>
                  <th>Url</th>
                  <th>Time Stamp</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {videoHistory.map((item , index) => (
                  <tr>
                    <td>{index+1}</td>
                    <td>{item?.caption}</td>
                    <td><Link to={item?.url} target="_blank">{item?.url}</Link></td>
                    <td>{item?.timestamp}</td>
                    <td className="">
                      <button className="btn btn-danger text-center" onClick={()=>{deleteHistory(item.id)}}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-warning fs-4 text-center">No Watch History</p>
          )}
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
}

export default WatchHistory;
