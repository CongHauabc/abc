import { NEWS_CREATE_FAIL, NEWS_CREATE_REQUEST, NEWS_CREATE_RESET, NEWS_CREATE_SUCCESS, NEWS_DETAILS_FAIL, NEWS_DETAILS_REQUEST, NEWS_DETAILS_SUCCESS, NEWS_DETELE_FAIL, NEWS_DETELE_REQUEST, NEWS_DETELE_SUCCESS, NEWS_SHOW_FAIL, NEWS_SHOW_REQUEST, NEWS_SHOW_SUCCESS, NEWS_UPDATE_FAIL, NEWS_UPDATE_REQUEST, NEWS_UPDATE_RESET, NEWS_UPDATE_SUCCESS } from "../Constants/newConstant";


// ALL PRODUCT
export const newsShowReducer = (state = {news:[]}, action) => {
    switch (action.type) {
      case NEWS_SHOW_REQUEST:
        return { loading: true ,news:[]};
      case NEWS_SHOW_SUCCESS:
        return { loading: false, news: action.payload };
      case NEWS_SHOW_FAIL:
        return { loading: false, error: action.payload };
     
      default:
        return state;
    }
  };


  // SINGLE PRODUCT
export const newsDetailsReducer = (
  state = { news: {} },
  action
) => {
  switch (action.type) {
    case NEWS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case NEWS_DETAILS_SUCCESS:
      return { loading: false, news: action.payload };
    case NEWS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

    // update PRODUCT
    export const newsUpdateReducer = (state = {news:{}}, action) => {
      switch (action.type) {
        case NEWS_UPDATE_REQUEST:
          return { loading: true};
        case NEWS_UPDATE_SUCCESS:
          return { loading: false, success:true,news:action.payload};
        case NEWS_UPDATE_FAIL:
          return { loading: false, error: action.payload };
          case NEWS_UPDATE_RESET:
            return {news:{}};
         
        default:
          return state;
      }
    };


     // DELETE banner
  export const newsDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case NEWS_DETELE_REQUEST:
        return { loading: true};
      case NEWS_DETELE_SUCCESS:
        return { loading: false, success:true};
      case NEWS_DETELE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

      // create PRODUCT
export const newsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWS_CREATE_REQUEST:
      return { loading: true};
    case NEWS_CREATE_SUCCESS:
      return { loading: false, success:true,news:action.payload};
    case NEWS_CREATE_FAIL:
      return { loading: false, error: action.payload };
      case NEWS_CREATE_RESET:
        return {};
     
    default:
      return state;
  }
};