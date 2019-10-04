import React from 'react'
import { shallow } from 'enzyme';
import Viewer from '../../lib/DashboardViewer';

it('Viewer component renders correctly', () => {
  const props = {
    dashboardId: '5cf51f130d27b300169b7f27',
    projectId: '5c87b64ec9e77c0001cf5b6e',
    accessKey: 'AB09386091AC7DE2B9E8354B6DD633442955A98B11A41FBD0AFF33A1CE1021A2'
  };
  const wrapper = shallow(<Viewer {...props} />);
  expect(wrapper).toMatchSnapshot();
});