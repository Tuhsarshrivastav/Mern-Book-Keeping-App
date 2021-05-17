import {
  CREATE_BOOK_FAIL,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
} from "../actionTypes";
import axios from "axios";
export const createBookAction = (bookData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BOOK_REQUEST });
    const config = {
      "Content-type": "application/json",
    };
    const { data } = await axios.post("/api", bookData, config);

    dispatch({
      type: CREATE_BOOK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_BOOK_FAIL,
      payload: error.response && error.response.data.message,
    });
    
  
  
  }
  
};
