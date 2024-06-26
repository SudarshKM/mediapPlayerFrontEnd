import { commonApi } from "./commonApi";
import {serverUrl} from './serverUrl'


 // api to add video
export const addVideoApi = async (reqbody) =>{
  return await commonApi("POST" , `${serverUrl}/videos`,reqbody)
}


// api to get video 

export const getVideoApi = async () =>{
  return await commonApi("GET" , `${serverUrl}/videos`,"")
}

// api to delete a video

export const deleteVideoApi = async (id)=>{
  return await commonApi("DELETE" , `${serverUrl}/videos/${id}`,{})
}


// api to addToHistory

export const addToHistoryApi = async (reqbody)=>{
  return await commonApi("POST",`${serverUrl}/history`,reqbody)
}


// api to get video from watch history

export const getVideoFromHistoryApi = async ()=>{
  return await commonApi("GET",`${serverUrl}/history`,"")
}


// api to delete a video from watch history

export const deleteVideoFromHistoryApi = async (id)=>{
  return await commonApi("DELETE",`${serverUrl}/history/${id}`,{})
}


// api to add category

export const addCategoryApi = async (reqbody) =>{
  return await commonApi("POST",`${serverUrl}/category` , reqbody)
}

// api to get all category

export const allCategoryApi = async ()=>{
  return await commonApi("GET",`${serverUrl}/category`,"")
}



// api to delete a video category

export const deleteVideoCategoryApi = async (id)=>{
  return await commonApi("DELETE" , `${serverUrl}/category/${id}`,{})
}


// api to get a video (to category)

export const AvideoApi = async (id) =>{
  return await commonApi("GET" ,`${serverUrl}/videos/${id}` ,"")
}

//api to update category

export const updateCategoryApi = async (id ,reqbody) =>{
  return await commonApi("PUT",`${serverUrl}/category/${id}`,reqbody)
}