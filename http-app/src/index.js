import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Raven from "raven-js";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Raven.config(
  "https://8cebd70735774b5b9d3e498ad3e44df4@o468748.ingest.sentry.io/5497064",
  {
    release: "0-0-0",
    environment: "development-test",
  }
).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
