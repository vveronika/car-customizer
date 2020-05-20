import React from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  ContentWrapper,
  ConfigurationWrapper,
  SummaryWrapper,
} from './home.styled';
import CarComponentsConfig from 'components/CarComponentsConfig';
import { Model, RootState, Engine, Gearbox, Color } from 'models/types';
import {
  fetchModels,
  fetchModelEngines,
  fetchColors,
  fetchSummary,
} from 'redux/actions';
import CarCustomizationSummary from 'components/CarCustomizationSummary';
import PageTitle from 'components/ui/PageTitle';
import Loader from 'components/ui/Loader';

interface Props {
  models: Model[];
  fetchModels: (onSuccess: any) => void;
  fetchModelsLoading: boolean;
  fetchModelEngines: (id: string, onSuccess?: any) => void;
  colors: Color[];
  fetchColors: (onSuccess: any) => void;
  fetchSummary: (data: any, onSuccess?: any) => void;
  summary: number;
}

interface State {
  activeModel: Model;
  activeModelEngine: Engine | undefined;
  activeGearbox: Gearbox | undefined;
  activeColor: Color | undefined;
  summary: number;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeModel: props.models[0],
      activeModelEngine: undefined,
      activeGearbox: undefined,
      activeColor: undefined,
      summary: 0,
    };
  }

  componentDidMount() {
    this.props.fetchModels((models: Model[]) => {
      this.props.fetchModelEngines(
        models[0].id.toString(),
        (modelWithEngine: Model) => {
          if (modelWithEngine && modelWithEngine.compatibleEngines) {
            this.setState(
              {
                activeModel: modelWithEngine,
                activeModelEngine: modelWithEngine.compatibleEngines[0],
                activeGearbox: modelWithEngine.compatibleEngines[0].gearbox[0],
              },
              () => this.fetchSummary(),
            );
          }
        },
      );
    });
    this.props.fetchColors((colors: Color[]) =>
      this.setState({ activeColor: colors[0] }),
    );
  }

  fetchSummary = () => {
    this.props.fetchSummary(
      {
        modelId: this.state.activeModel?.id,
        engineId: this.state.activeModelEngine?.id,
        gearboxId: this.state.activeGearbox?.id,
      },
      (res: any) => {
        this.setState({ summary: res });
      },
    );
  };

  setModelActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    const model = this.props.models.find(
      (model) => model.name === e.target.value,
    );
    if (model && model.compatibleEngines) {
      this.setState(
        {
          activeModel: model,
          activeModelEngine: model.compatibleEngines[0],
          activeGearbox: model.compatibleEngines[0].gearbox[0],
        },
        () => this.fetchSummary(),
      );
    } else if (model) {
      this.props.fetchModelEngines(
        model.id.toString(),
        (modelWithEngine: Model) => {
          if (modelWithEngine && modelWithEngine.compatibleEngines) {
            this.setState(
              {
                activeModel: modelWithEngine,
                activeModelEngine: modelWithEngine.compatibleEngines[0],
                activeGearbox: modelWithEngine.compatibleEngines[0].gearbox[0],
              },
              () => this.fetchSummary(),
            );
          }
        },
      );
    }
  };

  setModelEngineActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    const activeModelEngine = this.state.activeModel.compatibleEngines?.find(
      (engine) => engine.name === e.target.value,
    );
    this.setState(
      {
        activeModelEngine,
        activeGearbox: activeModelEngine?.gearbox[0],
      },
      () => this.fetchSummary(),
    );
  };

  setGearboxActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    const activeGearbox = this.state.activeModelEngine?.gearbox.find(
      (g) => g.name === e.target.value,
    );
    this.setState({ activeGearbox }, () => this.fetchSummary());
  };

  setColorActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    const activeColor = this.props.colors.find(
      (c) => c.name === e.target.value,
    );
    this.setState({ activeColor });
  };

  render() {
    const { models, fetchModelsLoading, colors } = this.props;
    const {
      activeModel,
      activeModelEngine,
      activeGearbox,
      activeColor,
      summary,
    } = this.state;
    if (fetchModelsLoading) {
      return <Loader size={40} color="#faeb0f" />;
    }
    return (
      <HomeWrapper>
        <PageTitle title="Choose your car" size="large" />
        <ContentWrapper>
          <ConfigurationWrapper>
            <CarComponentsConfig
              configTitle="Models: "
              components={models}
              chosenElementName={
                activeModel ? activeModel.name : models[0].name
              }
              chooseElement={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.setModelActive(e)
              }
              inputsGroupName="models"
            />
            {activeModel &&
              activeModelEngine &&
              activeModel.compatibleEngines && (
                <CarComponentsConfig
                  configTitle="Engines: "
                  components={activeModel.compatibleEngines}
                  chosenElementName={activeModelEngine.name}
                  chooseElement={(e: React.ChangeEvent<HTMLInputElement>) =>
                    this.setModelEngineActive(e)
                  }
                  inputsGroupName="engines"
                />
              )}
            {activeModelEngine && activeGearbox && (
              <CarComponentsConfig
                configTitle="Gearbox: "
                components={activeModelEngine.gearbox}
                chosenElementName={activeGearbox.name}
                chooseElement={(e: React.ChangeEvent<HTMLInputElement>) =>
                  this.setGearboxActive(e)
                }
                inputsGroupName="gearboxes"
              />
            )}
            {activeColor && (
              <CarComponentsConfig
                configTitle="Color: "
                colors={colors}
                chosenElementName={activeColor.name}
                chooseElement={(e: React.ChangeEvent<HTMLInputElement>) =>
                  this.setColorActive(e)
                }
                inputsGroupName="colors"
              />
            )}
          </ConfigurationWrapper>
          <SummaryWrapper>
            {summary &&
              activeModel &&
              activeModelEngine &&
              activeGearbox &&
              activeColor && (
                <CarCustomizationSummary
                  summary={summary}
                  model={activeModel.name}
                  engine={activeModelEngine?.name}
                  gearbox={activeGearbox?.name}
                  color={activeColor?.name}
                />
              )}
          </SummaryWrapper>
        </ContentWrapper>
      </HomeWrapper>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  const models = state.models.models;
  const fetchModelsLoading = state.models.fetchModelsLoading;
  const colors = state.colors.colors;
  const summary = state.summary.summary;
  return {
    models,
    fetchModelsLoading,
    colors,
    summary,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchModels: (onSuccess: any) => dispatch(fetchModels(onSuccess)),
    fetchModelEngines: (id: string, onSuccess: any) =>
      dispatch(fetchModelEngines(id, onSuccess)),
    fetchColors: (onSuccess: any) => dispatch(fetchColors(onSuccess)),
    fetchSummary: (data: any, onSuccess: any) =>
      dispatch(fetchSummary(data, onSuccess)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
