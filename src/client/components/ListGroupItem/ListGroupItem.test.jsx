// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import ListGroupItem from './ListGroupItem';

it('should render without crashing', () => {
  render(<ListGroupItem />);
});
