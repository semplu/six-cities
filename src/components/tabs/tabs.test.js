import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs';

it(`Tabs correctly renders after launch`, () => {
  const tree = renderer.create(<Tabs/>).toJSON();
  expect(tree).toMatchSnapshot();
});
