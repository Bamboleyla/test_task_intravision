import { App } from "./App"
import { getPriorities } from "./redux/applicationsPrioritiesReducer ";

export const AppContainer = () => {
  getPriorities();
  return <App />
};
