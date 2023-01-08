import { CATEGORY_CREATE_FAIL, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_RESET, CATEGORY_CREATE_SUCCESS, CATEGORY_DETELE_FAIL, CATEGORY_DETELE_REQUEST, CATEGORY_DETELE_SUCCESS, CATEGORY_EDIT_FAIL, CATEGORY_EDIT_REQUEST, CATEGORY_EDIT_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from "../Constants/categoryContant";



// ALL PRODUCT
export const categoryListReducer = (state = {category:[]}, action) => {
    switch (action.type) {
      case CATEGORY_LIST_REQUEST:
        return { loading: true ,category:[]};
      case CATEGORY_LIST_SUCCESS:
        return { loading: false, category: action.payload };
      case CATEGORY_LIST_FAIL:
        return { loading: false, error: action.payload };
     
      default:
        return state;
    }
  };


      // create CATEGORY
export const categoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_CREATE_REQUEST:
      return { loading: true};
    case CATEGORY_CREATE_SUCCESS:
      return { loading: false, success:true,category:action.payload};
    case CATEGORY_CREATE_FAIL:
      return { loading: false, error: action.payload };
      case CATEGORY_CREATE_RESET:
        return {};
     
    default:
      return state;
  }
};

  // DELETE CATEGORY
  export const categoryDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_DETELE_REQUEST:
        return { loading: true};
      case CATEGORY_DETELE_SUCCESS:
        return { loading: false, success:true};
      case CATEGORY_DETELE_FAIL:
        return { loading: false, error: action.payload };
     
      default:
        return state;
    }
  };

