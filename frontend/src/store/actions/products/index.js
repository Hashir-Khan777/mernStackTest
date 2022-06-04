import Axios from "axios";
import { ActionTypes } from "../../actiontypes";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_ALL_PRODUCTS_REQUEST });
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_BASE_URL}/products`
    );
    dispatch({ type: ActionTypes.GET_ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ActionTypes.GET_ALL_PRODUCTS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getProductById = (_id) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_PRODUCT_BY_ID_REQUEST });
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_BASE_URL}/products/${_id}`
    );
    dispatch({ type: ActionTypes.GET_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ActionTypes.GET_PRODUCT_BY_ID_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
