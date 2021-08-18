import React from 'react';
import Rating from './Rating';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
 const tree = renderer
  .create(<Rating starsNumber={2} />)
  .toJSON();
 expect(tree).toMatchSnapshot();
});