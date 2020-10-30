import Raven from "raven-js";

function init() {
  Raven.config(
    "https://8cebd70735774b5b9d3e498ad3e44df4@o468748.ingest.sentry.io/5497064",
    {
      release: "0-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
