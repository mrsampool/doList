// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import CurrentItems from './CurrentItems';

it('should render without crashing', () => {
  render(<CurrentItems />);
});
