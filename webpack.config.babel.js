import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Convert the `import.meta.url` to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const include = join(__dirname, 'src');

export default {
  mode: 'development', // or 'production' based on your environment
  entry: './src/index.js', // Explicitly specify the file extension for clarity
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js', // Specify the output filename
    libraryTarget: 'umd',
    library: 'spiritistBooks',
    globalObject: 'this', // Ensure compatibility with both Node.js and browser environments
    clean: false, // Automatically clean the output directory before each build
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.json$/,
        type: 'json', // Webpack 5 has built-in support for JSON
        include,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'], // Automatically resolve these extensions
  },
};
