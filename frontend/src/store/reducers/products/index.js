import { ActionTypes } from "../../actiontypes";

const INITIAL_STATE = {
  products: [],
  product: null,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ActionTypes.GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case ActionTypes.GET_PRODUCT_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
