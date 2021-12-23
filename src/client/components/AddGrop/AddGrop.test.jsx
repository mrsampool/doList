// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import AddGroup from './AddGroup';

it('should render without crashing', () => {
  render(<AddGroup />);
});
