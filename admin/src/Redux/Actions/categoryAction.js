import {
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DETELE_FAIL,
  CATEGORY_DETELE_REQUEST,
  CATEGORY_DETELE_SUCCESS,
  CATEGORY_EDIT_FAIL,
  CATEGORY_EDIT_REQUEST,
  CATEGORY_EDIT_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../Constants/categoryContant";
import axios from "axios";
import { logout } from "./userAction";
import { URL } from "../Url";

// list category
export const listCategory = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });

    const { data } = await axios.get(`${URL}/api/category/`);
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

   // create category
   export const createCategory = (name) => async (dispatch, getState) => {
    try {
      dispatch({ type: CATEGORY_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState(); 
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
    const {data}= await axios.post(`${URL}/api/category/`,{name}, config);
      dispatch({ type: CATEGORY_CREATE_SUCCESS,payload:data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized,token fail") {
        dispatch(logout());
      }
  
      dispatch({
        type: CATEGORY_CREATE_FAIL,
        payload: message,
      });
    }
  };

    // delete product
export const deleteCategory = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CATEGORY_DETELE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

  await axios.delete(`${URL}/api/category/${id}`, config);
    dispatch({ type: CATEGORY_DETELE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized,token fail") {
      dispatch(logout());
    }

    dispatch({
      type: CATEGORY_DETELE_FAIL,
      payload: message,
    });
  }
};


