import { ModelsStateType, ModelsAction } from '../../models/types';
import {
  FETCH_MODELS_SUCCESS,
  FETCH_MODELS,
  FETCH_MODELS_FAILED,
  FETCH_MODEL_ENGINE_SUCCESS,
  FETCH_MODEL_ENGINE,
  FETCH_MODEL_ENGINE_FAILED,
} from '../actionTypes';

const initialState: ModelsStateType = {
  models: [],
  fetchModelsLoading: true,
  fetchModelsError: false,
  fetchModelEnginesLoading: true,
  fetchModelEnginesError: false,
};

const reducer = (state = initialState, action: ModelsAction) => {
  switch (action.type) {
    case FETCH_MODELS:
      return {
        ...state,
        fetchModelsLoading: true,
        fetchModelsError: false,
      };
    case FETCH_MODELS_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        models: state.models.concat(payload),
        fetchModelsLoading: false,
        fetchModelsError: false,
      };
    case FETCH_MODELS_FAILED:
      return {
        ...state,
        fetchModelsLoading: false,
        fetchModelsError: true,
      };
    case FETCH_MODEL_ENGINE:
      return {
        ...state,
        fetchModelEnginesLoading: true,
        fetchModelEnginesError: false,
      };
    case FETCH_MODEL_ENGINE_SUCCESS:
      const model: any = action.payload;
      const { models } = state;
      models[models.findIndex((el) => el.id === model.id)] = model;
      return {
        ...state,
        models,
        fetchModelEnginesLoading: false,
        fetchModelEnginesError: false,
      };
    case FETCH_MODEL_ENGINE_FAILED:
      return {
        ...state,
        fetchModelEnginesLoading: false,
        fetchModelEnginesError: true,
      };
    default:
      return state;
  }
};

export default reducer;
