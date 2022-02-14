const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["http2.mlstatic.com"]
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src", "styles"),
      path.join(__dirname, "node_modules", "bootstrap", "scss")
    ]
  }
};
