import * as actionTypes from 'redux/actionTypes';
import { Model } from 'models/types';
import { API_URL } from 'helpers/constants';
import { httpGet } from 'helpers/api';

// Action to show loader while fetching data
function fetchColorsLoading() {
  return {
    type: actionTypes.FETCH_COLORS,
  };
}

// Fetching actions
function fetchColors(onSuccess?: any) {
  return (dispatch: Function) => {
    dispatch(() => dispatch(fetchColorsLoading()));
    httpGet(`${API_URL}/colors`)
      .then((res: any) => {
        onSuccess(res.response);
        return dispatch(fetchColorsSuccess(res.response));
      })
      .catch(() => {
        return dispatch(fetchColorsFailed(true));
      });
  };
}

function fetchColorsFailed(failed: boolean) {
  return {
    type: actionTypes.FETCH_COLORS_FAILED,
    failed,
  };
}

function fetchColorsSuccess(payload: Model[]) {
  return {
    type: actionTypes.FETCH_COLORS_SUCCESS,
    payload,
  };
}

export { fetchColors };
