/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';

import { NatHeader } from './NatHeader';

describe('Header component', () => {
  it('Should render container component correctly', () => {
    const header = renderer.create(
      <NatHeader title='Title test'>
      </NatHeader>,
    ).toJSON();

    expect(header).toMatchSnapshot();
  });

  it('Should render header component with title', () => {
    const header = renderer.create(
      <NatHeader title='Title test'>
      </NatHeader>,
    ).toJSON();
    expect(header.children[1].children[0]).toBe('Title test');
  });
});
