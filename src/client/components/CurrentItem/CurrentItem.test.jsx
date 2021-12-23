// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import CurrentItem from './CurrentItem';

it('should render without crashing', () => {
  render(<CurrentItem />);
});
