import React from 'react';
import renderer from 'react-test-renderer';
import FormSorting from './form-sorting';

it(`FormSorting correctly renders after launch`, () => {
  const tree = renderer.create(<FormSorting/>).toJSON();
  expect(tree).toMatchSnapshot();
});
