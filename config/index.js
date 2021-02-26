const env = process.env.NODE_ENV || "development";
let localConfig;
try {
  // eslint-disable-next-line global-require
  localConfig = require("./config.json");
  console.log(
    `>>> \u001b[32mConfig loaded from config.json for '${env}' environment\u001b[39m`
  );
} catch (err) {
  console.error(`>>> \u001b[32m${"Local config not found"}\u001b[39m`, err);
}

module.exports = localConfig;
