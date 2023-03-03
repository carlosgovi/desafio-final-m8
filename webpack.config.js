const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveServer = require("live-server");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin"); // Para que Webpack entienda imports con baseUrl

if (dev) {
  liveServer.start({
    root: __dirname,
    file: "index.html",
    wait: 2000,
  });
}
module.exports = {
  watch: dev,
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        /* options: see below */
      }),
    ], // Para que Webpack entienda imports con baseUrl
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
