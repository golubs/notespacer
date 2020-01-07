import React from 'react';

export default {
  title: 'Welcome'
};

export const toStorybook = () => (
  <div>Hello, welcome to the Notespacer Storybook.</div>
);

toStorybook.story = {
  name: 'to Storybook'
};
