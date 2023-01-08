import {
  BANNER_CREATE_FAIL,
  BANNER_CREATE_REQUEST,
  BANNER_CREATE_RESET,
  BANNER_CREATE_SUCCESS,
  BANNER_DETELE_FAIL,
  BANNER_DETELE_REQUEST,
  BANNER_DETELE_SUCCESS,
  BANNER_EDIT_FAIL,
  BANNER_EDIT_REQUEST,
  BANNER_EDIT_SUCCESS,
  BANNER_SHOW_FAIL,
  BANNER_SHOW_REQUEST,
  BANNER_SHOW_SUCCESS,
  BANNER_UPDATE_FAIL,
  BANNER_UPDATE_REQUEST,
  BANNER_UPDATE_RESET,
  BANNER_UPDATE_SUCCESS,
} from "../Constants/bannerConstant";

// ALL PRODUCT
export const bannerShowReducer = (state = { banner: [] }, action) => {
  switch (action.type) {
    case BANNER_SHOW_REQUEST:
      return { loading: true, banner: [] };
    case BANNER_SHOW_SUCCESS:
      return { loading: false, banner: action.payload };
    case BANNER_SHOW_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// EDIT banner
export const bannerEditReducer = (
  state = { banner: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case BANNER_EDIT_REQUEST:
      return { ...state, loading: true };
    case BANNER_EDIT_SUCCESS:
      return { loading: false, banner: action.payload };
    case BANNER_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


// update BANNER
export const bannerUpdateReducer = (state = {banner:{}}, action) => {
  switch (action.type) {
    case BANNER_UPDATE_REQUEST:
      return { loading: true};
    case BANNER_UPDATE_SUCCESS:
      return { loading: false, success:true,banner:action.payload};
    case BANNER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
      case BANNER_UPDATE_RESET:
        return {banner:{}};
    default:
      return state;
  }
};

  // DELETE banner
  export const bannerDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case BANNER_DETELE_REQUEST:
        return { loading: true};
      case BANNER_DETELE_SUCCESS:
        return { loading: false, success:true};
      case BANNER_DETELE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

      // create PRODUCT
export const bannerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BANNER_CREATE_REQUEST:
      return { loading: true};
    case BANNER_CREATE_SUCCESS:
      return { loading: false, success:true,banner:action.payload};
    case BANNER_CREATE_FAIL:
      return { loading: false, error: action.payload };
      case BANNER_CREATE_RESET:
        return {};
     
    default:
      return state;
  }
};
