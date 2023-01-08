import axios from "axios";
import { LOGO_EDIT_FAIL, LOGO_EDIT_REQUEST, LOGO_EDIT_SUCCESS, LOGO_SHOW_FAIL, LOGO_SHOW_REQUEST, LOGO_SHOW_SUCCESS, LOGO_UPDATE_FAIL, LOGO_UPDATE_REQUEST, LOGO_UPDATE_SUCCESS } from "../Constants/logoCanstant";
import { URL } from "../Url";
import { logout } from "./userAction";



// show logo
export const showLogo = () => async (dispatch) => {
    try {
      dispatch({ type: LOGO_SHOW_REQUEST });
  
      const { data } = await axios.get(`${URL}/api/logo/`);
      dispatch({ type: LOGO_SHOW_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: LOGO_SHOW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  // EDIT logo
export const editLogo = (id)=> async(dispatch)=>{
  try {
      dispatch({type:LOGO_EDIT_REQUEST})
      const {data} = await axios.get(`${URL}/api/logo/${id}`)
      dispatch({type:LOGO_EDIT_SUCCESS,payload:data})
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized,token fail") {
      dispatch(logout());
    }

    dispatch({
      type: LOGO_EDIT_FAIL,
      payload: message,
    });
  }
}


 // update logo
 export const updateLogo = (logo) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGO_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

  const {data}= await axios.put(`${URL}/api/logo/${logo._id}`,logo, config);
    dispatch({ type: LOGO_UPDATE_SUCCESS,payload:data });
    dispatch({ type: LOGO_EDIT_SUCCESS,payload:data });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized,token fail") {
      dispatch(logout());
    }

    dispatch({
      type: LOGO_UPDATE_FAIL,
      payload: message,
    });
  }
};