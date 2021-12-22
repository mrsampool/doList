// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import GroupItem from './GroupItem';

it('should render without crashing', () => {
  render(<GroupItem />);
});
