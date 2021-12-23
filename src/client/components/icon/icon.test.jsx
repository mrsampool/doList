// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import icon from './icon';

it('should render without crashing', () => {
  render(<icon />);
});
