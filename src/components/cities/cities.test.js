import React from 'react';
import renderer from 'react-test-renderer';
import Cities from './cities';
import offers from '../../mocks/offers';

it(`Cities correctly renders after launch`, () => {
  const tree = renderer.create(<Cities
    hotels={offers}
    goToHotel={jest.fn()}
    addActiveHotel={jest.fn()}
    removeActiveHotel={jest.fn()}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
