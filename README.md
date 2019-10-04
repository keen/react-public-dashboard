# React component for Keen Dashboard Viewer

## Install with NPM

```ssh
npm install keen-react-public-dashboard --save
```

## Usage

Use this component to create Viewer based on the data received from the Keen's API. All the configuration properties should be passed in props.
Access key is generated once you make your dashboard public (check Share Your Dashboard tab).

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Viewer from 'keen-react-dashboard-viewer';

const App = props => {
  const { dashboardId, projectId, accessKey } = props;
  return (
    <Viewer
      dashboardId={dashboardId}
      projectId={projectId}
      accessKey={accessKey}
    />
  )
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
```
