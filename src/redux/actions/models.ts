import * as actionTypes from 'redux/actionTypes';
import { Model, Engine } from 'models/types';
import { API_URL } from 'helpers/constants';
import { httpGet } from 'helpers/api';

// Action to show loader while fetching data
function fetchModelsLoading() {
  return {
    type: actionTypes.FETCH_MODELS,
  };
}

// Fetching models actions
function fetchModels(onSuccess?: any) {
  return (dispatch: Function) => {
    dispatch(() => dispatch(fetchModelsLoading()));
    httpGet(`${API_URL}/models`)
      .then((res: any) => {
        onSuccess(res.response);
        return dispatch(fetchModelsSuccess(res.response));
      })
      .catch(() => {
        return dispatch(fetchModelsFailed(true));
      });
  };
}

function fetchModelsFailed(failed: boolean) {
  return {
    type: actionTypes.FETCH_MODELS_FAILED,
    failed,
  };
}

function fetchModelsSuccess(payload: Model[]) {
  return {
    type: actionTypes.FETCH_MODELS_SUCCESS,
    payload,
  };
}

// fetching model engines
function fetchModelEngines(modelId: any, onSuccess?: any, onFailure?: any) {
  return (dispatch: Function) => {
    httpGet(`${API_URL}/models/${modelId}/engines`)
      .then((res: any) => {
        onSuccess(res.response);
        return dispatch(fetchEnginesSuccess(res.response));
      })
      .catch(() => {
        return dispatch(fetchEnginesFailed(true));
      });
  };
}

function fetchEnginesFailed(failed: boolean) {
  return {
    type: actionTypes.FETCH_MODEL_ENGINE_FAILED,
    failed,
  };
}

function fetchEnginesSuccess(payload: Engine[]) {
  return {
    type: actionTypes.FETCH_MODEL_ENGINE_SUCCESS,
    payload,
  };
}

export { fetchModels, fetchModelEngines };
