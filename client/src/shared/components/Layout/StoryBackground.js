import styled from '@emotion/styled';
import BackgroundPrimary from './BackgroundPrimary';

// This adds a bit more CSS for the background to be applied properly in Stroybook
const StoryBackground = styled(BackgroundPrimary)`
  height: 100vh;
  overflow: auto;
`;

export default StoryBackground;
