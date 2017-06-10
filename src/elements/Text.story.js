import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';

storiesOf('Text', module)
  .add('default', () => (
    <div>
      <Text><b>Fabulas adipisicing aut incididunt</b> <i>iis anim a doctrina non malis.</i> Ut laborum a
      cernantur, incididunt labore ne eiusmod adipisicing, ullamco velit in deserunt
      illustriora, nostrud anim ad occaecat efflorescere. O aliqua cillum summis
      laboris, ea et multos probant.</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
       anim id est laborum.</Text>
    </div>
  ));
