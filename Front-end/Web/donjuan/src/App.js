import React from "react";
import "./config/ReactotronConfig";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
