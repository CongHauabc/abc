import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_DETELE_FAIL, PRODUCT_DETELE_REQUEST, PRODUCT_DETELE_SUCCESS, PRODUCT_EDIT_FAIL, PRODUCT_EDIT_REQUEST, PRODUCT_EDIT_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS } from "../Constants/ProductConstant";
import  axios  from 'axios';
import { logout } from "./userAction";

// list product
export const listProduct = () => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/products/all`, config);
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized,token fail") {
        dispatch(logout());
      }
  
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: message,
      });
    }
  };


  // delete product
export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_DETELE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
    await axios.delete(`/api/products/${id}`, config);
      dispatch({ type: PRODUCT_DETELE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized,token fail") {
        dispatch(logout());
      }
  
      dispatch({
        type: PRODUCT_DETELE_FAIL,
        payload: message,
      });
    }
  };


   // create product
export const createProduct = (name, price, description, image, countInStock,category) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

  const {data}= await axios.post(`/api/products/`,{name, price, description, image, countInStock,category}, config);
    dispatch({ type: PRODUCT_CREATE_SUCCESS,payload:data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized,token fail") {
      dispatch(logout());
    }

    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: message,
    });
  }
};


// EDIT PRODUCT
export const editProduct = (id)=> async(dispatch)=>{
  try {
      dispatch({type:PRODUCT_EDIT_REQUEST})
      const {data} = await axios.get(`/api/products/${id}`)
      dispatch({type:PRODUCT_EDIT_SUCCESS,payload:data})
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized,token fail") {
      dispatch(logout());
    }

    dispatch({
      type: PRODUCT_EDIT_FAIL,
      payload: message,
    });
  }
}


   // update product
   export const updateProduct = (product) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_UPDATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type":"application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
    const {data}= await axios.put(`/api/products/${product._id}`,product, config);
      dispatch({ type: PRODUCT_UPDATE_SUCCESS,payload:data });
      dispatch({ type: PRODUCT_EDIT_SUCCESS,payload:data });

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized,token fail") {
        dispatch(logout());
      }
  
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload: message,
      });
    }
  };