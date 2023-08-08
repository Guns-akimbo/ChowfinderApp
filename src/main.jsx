import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./Store/Store.jsx";
import { HashRouter as Router } from "react-router-dom";
let persistor = persistStore(store);
import Theme from "./Context/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Theme>
            <App />
          </Theme>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
