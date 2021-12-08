import axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getPerson = () => {
    return(dispatch)=> {
        dispatch({type: FETCH_START})
        axios.get('https://randomuser.me/api/')
      .then(res => {
        dispatch({type: FETCH_SUCCESS, payload: res.data.results[0]})
      })
      .catch(err => {
        dispatch({type: FETCH_FAIL, payload: err})
      })
    }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (person) => {
    return({type: FETCH_SUCCESS, payload: person});
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error});
}