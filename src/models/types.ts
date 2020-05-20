export interface Model {
  id: number;
  name: string;
  size: string;
  maxDisplacement: number;
  compatibleEngines?: Engine[];
}

export interface Engine {
  id: number;
  name: string;
  displacement: number;
  gearbox: Gearbox[];
  price: number;
}

export interface Gearbox {
  id: number;
  name: string;
  price: number;
}

export interface Color {
  id: number;
  name: string;
}

export interface RootState {
  models: ModelsStateType;
  colors: ColorsStateType;
  summary: SummaryStateType;
}

export interface ModelsStateType {
  models: Model[];
  fetchModelsLoading: boolean;
  fetchModelsError: boolean;
  fetchModelEnginesLoading: boolean;
  fetchModelEnginesError: boolean;
}

export interface ColorsStateType {
  colors: Color[];
  fetchColorsLoading: boolean;
  fetchColorsError: boolean;
}

export interface SummaryStateType {
  summary: number;
  fetchSummaryLoading: boolean;
  fetchSummaryError: boolean;
}

export interface Summary {
  summary: number;
}

export interface fetchColorsAction {
  type: 'FETCH_COLORS';
  fetchColorsLoading: boolean;
  fetchColorsError: boolean;
}

export interface fetchColorsSuccessAction {
  type: 'FETCH_COLORS_SUCCESS';
  payload: Color[];
  fetchColorsLoading: boolean;
  fetchColorsError: boolean;
}

export interface fetchColorsFailedAction {
  type: 'FETCH_COLORS_FAILED';
  fetchColorsLoading: boolean;
  fetchColorsError: boolean;
}

export type ColorsAction =
  | fetchColorsAction
  | fetchColorsSuccessAction
  | fetchColorsFailedAction;

export interface fetchModelsAction {
  type: 'FETCH_MODELS';
  fetchModelsLoading: boolean;
  fetchModelsError: boolean;
}

export interface fetchModelsSuccessAction {
  type: 'FETCH_MODELS_SUCCESS';
  payload: Model[];
  fetchModelsLoading: boolean;
  fetchModelsError: boolean;
}

export interface fetchModelsFailedAction {
  type: 'FETCH_MODELS_FAILED';
  fetchModesLoading: boolean;
  fetchModesError: boolean;
}

export interface fetchModelEngineAction {
  type: 'FETCH_MODEL_ENGINE';
  fetchModelEngineLoading: boolean;
  fetchModelEngineError: boolean;
}

export interface fetchModelEngineSuccessAction {
  type: 'FETCH_MODEL_ENGINE_SUCCESS';
  payload: Model[];
  fetchModelEngineLoading: boolean;
  fetchModelEngineError: boolean;
}

export interface fetchModelEngineFailedAction {
  type: 'FETCH_MODEL_ENGINE_FAILED';
  fetchModelEngineLoading: boolean;
  fetchModelEngineError: boolean;
}

export type ModelsAction =
  | fetchModelsAction
  | fetchModelsSuccessAction
  | fetchModelsFailedAction
  | fetchModelEngineAction
  | fetchModelEngineSuccessAction
  | fetchModelEngineFailedAction;

export interface fetchSummaryAction {
  type: 'FETCH_SUMMARY';
  fetchSummaryLoading: boolean;
  fetchSummaryError: boolean;
}

export interface fetchSummarySuccessAction {
  type: 'FETCH_SUMMARY_SUCCESS';
  payload: Summary;
  fetchSummaryLoading: boolean;
  fetchSummaryError: boolean;
}

export interface fetchSummaryFailedAction {
  type: 'FETCH_SUMMARY_FAILED';
  fetchSummaryLoading: boolean;
  fetchSummaryError: boolean;
}

export type SummaryAction =
  | fetchSummaryAction
  | fetchSummarySuccessAction
  | fetchSummaryFailedAction;
