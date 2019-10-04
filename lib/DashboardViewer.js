import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Viewer = props => {
  const { dashboardId, projectId, accessKey } = props;
  let container = React.createRef();
  useEffect(() => {
    const url = `https://keen.io/dashboard/${dashboardId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
      const masterKey = accessKey;
      const dashboardInfo = data;
      const myDashboardViewer = new DashboardViewer({
        container: `.${container.current.className}`,
        isDashboardPublic: true,
        dashboardInfo,
        keenAnalysis: {
          config: {
            projectId,
            masterKey,
          }
        }
      });
    })
    .catch(e => console.error(e))
  }, [])
  return (
    <>
      <div className="keen-dashboard-viewer" ref={container}></div>
    </>
  )
};

export default Viewer;

Viewer.propTypes = {
  dashboardId: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  accessKey: PropTypes.string.isRequired,
}
