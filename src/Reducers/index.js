import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "../Actions";




const initialState = {
    person: {
      name: {
        title: "",
        first: "",
        last: ""
      },
      picture: {
        large: "",
        medium: "",
        thumbnail: ""
      }
    },
    isFetching: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case(FETCH_START):
        return({
          ...state,
          person: action.payload,
          isFetching: true,
          error: ''
        })
      case(FETCH_SUCCESS):
        return({
          ...state,
          isFetching: false,
          person: action.payload,
          error: ''
        })
      case(FETCH_FAIL):
        return({
          ...state,
          person: {},
          isFetching: false,
          error: action.payload
        })
      default:
        return state;
    }
  };