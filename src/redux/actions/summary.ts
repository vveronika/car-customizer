import * as actionTypes from 'redux/actionTypes';
import { Summary } from 'models/types';
import { API_URL } from 'helpers/constants';
import { httpPost } from 'helpers/api';

// Action to show loader while fetching data
function fetchSummaryLoading() {
  return {
    type: actionTypes.FETCH_SUMMARY,
  };
}

// Fetching summary actions
function fetchSummary(data: any, onSuccess?: any, onFailure?: any) {
  return (dispatch: Function) => {
    dispatch(() => dispatch(fetchSummaryLoading()));
    httpPost(`${API_URL}/calculation-summary`, data)
      .then((res: any) => {
        onSuccess(res.response);
        return dispatch(fetchSummarySuccess(res.response));
      })
      .catch(() => {
        return dispatch(fetchSummaryFailed(true));
      });
  };
}

function fetchSummaryFailed(failed: boolean) {
  return {
    type: actionTypes.FETCH_SUMMARY_FAILED,
    failed,
  };
}

function fetchSummarySuccess(payload: Summary) {
  return {
    type: actionTypes.FETCH_SUMMARY_SUCCESS,
    payload,
  };
}

export { fetchSummary };
