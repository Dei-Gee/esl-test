import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import logo from "./logo.svg";
import AppRouter from "./router";
import { store } from "./store/configureStore";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
