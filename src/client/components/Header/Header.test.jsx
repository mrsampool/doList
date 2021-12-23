// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import Header from './Header';

it('should render without crashing', () => {
  render(<Header />);
});
