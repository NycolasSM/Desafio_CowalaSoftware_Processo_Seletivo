import { createGlobalStyle } from 'styled-components';

import RobotoThin from './fonts/Roboto-Thin.ttf';
import RobotoRegular from './fonts/Roboto-Regular.ttf';
import RobotoMedium from './fonts/Roboto-Medium.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'RobotoBold';
    src: local('RobotoBold'),
    url(${RobotoBold}) format('truetype');
  };

  @font-face {
    font-family: 'RobotoRegular';
    src: local('RobotoRegular'),
    url(${RobotoRegular}) format('truetype');
  };

  @font-face {
    font-family: 'RobotoThin';
    src: local('RobotoThin'),
    url(${RobotoThin}) format('truetype');
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: white;
    font-size: 14px;
    color: #333;
    /* font-family: 'RobotoBold'; */
  };
`