const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    env: process.env.NODE_ENV,
    appName: process.env.APP_NAME,
    api: {
        url: process.env.LOGGER_URL,
        token: process.env.LOGGER_TOKEN
    }
}