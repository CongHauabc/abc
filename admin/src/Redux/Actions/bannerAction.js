import { BANNER_CREATE_FAIL, BANNER_CREATE_REQUEST, BANNER_CREATE_SUCCESS, BANNER_DETELE_FAIL, BANNER_DETELE_REQUEST, BANNER_DETELE_SUCCESS, BANNER_EDIT_FAIL, BANNER_EDIT_REQUEST, BANNER_EDIT_SUCCESS, BANNER_SHOW_FAIL, BANNER_SHOW_REQUEST, BANNER_SHOW_SUCCESS, BANNER_UPDATE_FAIL, BANNER_UPDATE_REQUEST, BANNER_UPDATE_SUCCESS } from "../Constants/bannerConstant";
import axios from "axios";
import { logout } from "./userAction";
import { URL } from './../Url';



// show logo
export const bannerLogo = () => async (dispatch) => {
    try {
      dispatch({ type: BANNER_SHOW_REQUEST });
  
      const { data } = await axios.get(`${URL}/api/banner/`);
      dispatch({ type: BANNER_SHOW_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: BANNER_SHOW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

    // EDIT logo
export const editBanner = (id)=> async(dispatch)=>{
  try {
      dispatch({type:BANNER_EDIT_REQUEST})
      const {data} = await axios.get(`${URL}/api/banner/${id}`)
      dispatch({type:BANNER_EDIT_SUCCESS,payload:data})
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized,token fail") {
      dispatch(logout());
    }
    dispatch({
      type: BANNER_EDIT_FAIL,
      payload: message,
    });
  }
}

 // update logo
 export const updateBanner = (banner) => async (dispatch, getState) => {
  try {
    dispatch({ type: BANNER_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

  const {data}= await axios.put(`${URL}/api/banner/${banner._id}`,banner, config);
    dispatch({ type: BANNER_UPDATE_SUCCESS,payload:data });
    dispatch({ type: BANNER_EDIT_SUCCESS,payload:data });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized,token fail") {
      dispatch(logout());
    }

    dispatch({
      type: BANNER_UPDATE_FAIL,
      payload: message,
    });
  }
};

 // delete product
 export const deleteBanner = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BANNER_DETELE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

  await axios.delete(`${URL}/api/banner/${id}`, config);
    dispatch({ type: BANNER_DETELE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized,token fail") {
      dispatch(logout());
    }

    dispatch({
      type: BANNER_DETELE_FAIL,
      payload: message,
    });
  }
};


   // create product
   export const createBanner = (image) => async (dispatch, getState) => {
    try {
      dispatch({ type: BANNER_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState(); 
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
    const {data}= await axios.post(`${URL}/api/banner/`,{image}, config);
      dispatch({ type: BANNER_CREATE_SUCCESS,payload:data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized,token fail") {
        dispatch(logout());
      }
  
      dispatch({
        type: BANNER_CREATE_FAIL,
        payload: message,
      });
    }
  };