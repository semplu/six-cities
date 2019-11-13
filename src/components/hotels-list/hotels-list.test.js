import React from 'react';
import renderer from 'react-test-renderer';
import HotelsList from './hotels-list';
import offers from '../../mocks/offers';

it(`HotelsList correctly renders after launch`, () => {
  const tree = renderer.create(<HotelsList
    hotels={offers}
    goToHotel={jest.fn()}
    addActiveHotel={jest.fn()}
    removeActiveHotel={jest.fn()}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
