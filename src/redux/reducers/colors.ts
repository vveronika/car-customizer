import { ColorsStateType, ColorsAction } from '../../models/types';
import {
  FETCH_COLORS_SUCCESS,
  FETCH_COLORS,
  FETCH_COLORS_FAILED
} from '../actionTypes';

const initialState: ColorsStateType = {
  colors: [],
  fetchColorsLoading: true,
  fetchColorsError: false,
};

const reducer = (state = initialState, action: ColorsAction) => {
  switch (action.type) {
    case FETCH_COLORS:
      return {
        ...state,
        fetchColorsLoading: true,
        fetchColorsError: false,
      };
    case FETCH_COLORS_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        colors: state.colors.concat(payload),
        fetchColorsLoading: false,
        fetchColorsError: false,
      };
    case FETCH_COLORS_FAILED:
      return {
        ...state,
        fetchColorsLoading: false,
        fetchColorsError: true,
      };
    default:
      return state;
  }
};

export default reducer;
