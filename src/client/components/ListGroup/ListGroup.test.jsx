// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import ListGroup from './ListGroup';

it('should render without crashing', () => {
  render(<ListGroup />);
});
