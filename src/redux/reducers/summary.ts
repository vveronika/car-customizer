import { SummaryStateType, SummaryAction } from '../../models/types';
import {
  FETCH_SUMMARY,
  FETCH_SUMMARY_SUCCESS,
  FETCH_SUMMARY_FAILED,
} from '../actionTypes';

const initialState: SummaryStateType = {
  summary: 0,
  fetchSummaryLoading: true,
  fetchSummaryError: false,
};

const reducer = (state = initialState, action: SummaryAction) => {
  switch (action.type) {
    case FETCH_SUMMARY:
      return {
        ...state,
        fetchSummaryLoading: true,
        fetchSummaryError: false,
      };
    case FETCH_SUMMARY_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        summary: payload,
        fetchSummaryLoading: false,
        fetchSummaryError: false,
      };
    case FETCH_SUMMARY_FAILED:
      return {
        ...state,
        fetchSummaryLoading: false,
        fetchSummaryError: true,
      };
    default:
      return state;
  }
};

export default reducer;
