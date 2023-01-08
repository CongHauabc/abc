import { LOGO_EDIT_FAIL, LOGO_EDIT_REQUEST, LOGO_EDIT_SUCCESS, LOGO_SHOW_FAIL, LOGO_SHOW_REQUEST, LOGO_SHOW_SUCCESS, LOGO_UPDATE_FAIL, LOGO_UPDATE_REQUEST, LOGO_UPDATE_RESET, LOGO_UPDATE_SUCCESS } from "../Constants/logoCanstant";


// ALL PRODUCT
export const logoShowReducer = (state = {logo:[]}, action) => {
    switch (action.type) {
      case LOGO_SHOW_REQUEST:
        return { loading: true ,logo:[]};
      case LOGO_SHOW_SUCCESS:
        return { loading: false, logo: action.payload };
      case LOGO_SHOW_FAIL:
        return { loading: false, error: action.payload };
     
      default:
        return state;
    }
  };

      // EDIT Logo
export const logoEditReducer = (
  state = { logo: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case LOGO_EDIT_REQUEST:
      return { ...state, loading: true };
    case LOGO_EDIT_SUCCESS:
      return { loading: false, logo: action.payload };
    case LOGO_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


    // update Logo
    export const logoUpdateReducer = (state = {logo:{}}, action) => {
      switch (action.type) {
        case LOGO_UPDATE_REQUEST:
          return { loading: true};
        case LOGO_UPDATE_SUCCESS:
          return { loading: false, success:true,logo:action.payload};
        case LOGO_UPDATE_FAIL:
          return { loading: false, error: action.payload };
          case LOGO_UPDATE_RESET:
            return {logo:{}};
         
        default:
          return state;
      }
    };