import React from "react";
import StackNavigator from "./src/navigator/StackNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
