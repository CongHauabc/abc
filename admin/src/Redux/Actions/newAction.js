import axios from "axios";
import { NEWS_CREATE_FAIL, NEWS_CREATE_REQUEST, NEWS_CREATE_SUCCESS, NEWS_DETAILS_FAIL, NEWS_DETAILS_REQUEST, NEWS_DETAILS_SUCCESS, NEWS_DETELE_FAIL, NEWS_DETELE_REQUEST, NEWS_DETELE_SUCCESS, NEWS_SHOW_FAIL, NEWS_SHOW_REQUEST, NEWS_SHOW_SUCCESS, NEWS_UPDATE_FAIL, NEWS_UPDATE_REQUEST, NEWS_UPDATE_SUCCESS } from "../Constants/newConstant";
import { URL } from "../Url";
import { logout } from "./userAction";


// show logo
export const showNews = () => async (dispatch) => {
    try {
      dispatch({ type: NEWS_SHOW_REQUEST });
  
      const { data } = await axios.get(`${URL}/api/news/`);
      dispatch({ type: NEWS_SHOW_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: NEWS_SHOW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  // SINGLE PRODUCT
export const listNewsDetails = (id)=> async(dispatch)=>{
  try {
      dispatch({type:NEWS_DETAILS_REQUEST})
      const {data} = await axios.get(`${URL}/api/news/${id}`)
      dispatch({type:NEWS_DETAILS_SUCCESS,payload:data})
  } catch (error) {
      dispatch({
          type:NEWS_DETAILS_FAIL,
          payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
  }
}

   // update news
   export const updateNew = (news) => async (dispatch, getState) => {
    try {
      dispatch({ type: NEWS_UPDATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type":"application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
    const {data}= await axios.put(`${URL}/api/news/${news._id}`,news, config);
      dispatch({ type: NEWS_UPDATE_SUCCESS,payload:data });
      dispatch({ type: NEWS_DETAILS_SUCCESS,payload:data });

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized,token fail") {
        dispatch(logout());
      }
  
      dispatch({
        type: NEWS_UPDATE_FAIL,
        payload: message,
      });
    }
  };

  // delete product
 export const deleteNews = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: NEWS_DETELE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

  await axios.delete(`${URL}/api/news/${id}`, config);
    dispatch({ type: NEWS_DETELE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized,token fail") {
      dispatch(logout());
    }

    dispatch({
      type: NEWS_DETELE_FAIL,
      payload: message,
    });
  }
};


   // create product
   export const createNews = (name,image,description) => async (dispatch, getState) => {
    try {
      dispatch({ type: NEWS_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState(); 
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
    const {data}= await axios.post(`${URL}/api/news/`,{name,image,description}, config);
      dispatch({ type: NEWS_CREATE_SUCCESS,payload:data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized,token fail") {
        dispatch(logout());
      }
  
      dispatch({
        type: NEWS_CREATE_FAIL,
        payload: message,
      });
    }
  };