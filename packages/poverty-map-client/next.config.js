/** @type {import('next').NextConfig} */
const path = require("path");
const dotenv = require("dotenv");
const env = dotenv.config()["parsed"];

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    PUBLIC_SAFE__MAPBOX_TOKEN: env.PUBLIC_SAFE__MAPBOX_TOKEN,
  },
};
