import React from 'react';
import ReactDOM from 'react-dom';
import Viewer from '../../../lib/DashboardViewer';

/*
  Webpack users: to include CSS files in your project - install
  https://github.com/webpack-contrib/css-loader
  https://github.com/webpack-contrib/style-loader
  Here's an example: https://github.com/keen/keen-dataviz-webpack-boilerplate
*/

const App = props => {
  const { dashboardId, projectId, accessKey } = props;
  return (
    <Viewer
      dashboardId='5cf51f130d27b300169b7f27'
      projectId='5c87b64ec9e77c0001cf5b6e'
      accessKey='AB09386091AC7DE2B9E8354B6DD633442955A98B11A41FBD0AFF33A1CE1021A2'
    />
  )
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
