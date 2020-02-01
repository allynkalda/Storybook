import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
    component: Button,
    title: 'Button1',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };

  export const titleData = 'Test';

  export const failData = 'fail';

  export const successData = 'success';
  
  export const actionsData = {
      onClick: action('click')
  }

  export const Success = () => {
    return <Button title={titleData} status={successData}
    {...actionsData} />;
  };

  export const Fail = () => {
    return <Button title={titleData} status={failData}
    {...actionsData} />;
  }