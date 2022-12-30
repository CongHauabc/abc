import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_RESET, PRODUCT_CREATE_SUCCESS, PRODUCT_DETELE_FAIL, PRODUCT_DETELE_REQUEST, PRODUCT_DETELE_SUCCESS, PRODUCT_EDIT_FAIL, PRODUCT_EDIT_REQUEST, PRODUCT_EDIT_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_RESET, PRODUCT_UPDATE_SUCCESS } from "../Constants/ProductConstant";

// ALL PRODUCT
export const productListReducer = (state = {products:[]}, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true ,products:[]};
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  // DELETE PRODUCT
export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PRODUCT_DETELE_REQUEST:
        return { loading: true};
      case PRODUCT_DETELE_SUCCESS:
        return { loading: false, success:true};
      case PRODUCT_DETELE_FAIL:
        return { loading: false, error: action.payload };
     
      default:
        return state;
    }
  };


    // create PRODUCT
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true};
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success:true,product:action.payload};
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
      case PRODUCT_CREATE_RESET:
        return {};
     
    default:
      return state;
  }
};


    // EDIT PRODUCT
// SINGLE PRODUCT
export const productEditReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_EDIT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_EDIT_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


    // update PRODUCT
    export const productUpdateReducer = (state = {product:{}}, action) => {
      switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
          return { loading: true};
        case PRODUCT_UPDATE_SUCCESS:
          return { loading: false, success:true,product:action.payload};
        case PRODUCT_UPDATE_FAIL:
          return { loading: false, error: action.payload };
          case PRODUCT_UPDATE_RESET:
            return {product:{}};
         
        default:
          return state;
      }
    };