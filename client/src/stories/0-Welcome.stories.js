import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome'
};

export const toStorybook = () => (
  <div>Hello, welcome to the Notespacer Storybook.</div>
);

toStorybook.story = {
  name: 'to Storybook'
};
