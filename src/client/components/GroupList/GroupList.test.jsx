// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import GroupList from './GroupList';

it('should render without crashing', () => {
  render(<GroupList list={[]} />);
});
