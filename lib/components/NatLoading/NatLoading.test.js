import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { NatLoading } from './NatLoading';
import { LoadingView } from './NatLoading.styles';


describe('Container component', () => {
  it('Should render loading component correctly', () => {
    const container = renderer.create(
      <NatLoading/>,
    ).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('Should render LoadingView style', () => {
    const style = renderer.create(
      <LoadingView overlay/>
    ).toJSON();
    expect(style).toHaveStyleRule('flex');
    expect(style).toHaveStyleRule('justify-content', 'center');
    expect(style).toHaveStyleRule('align-items', 'center');
    expect(style).toHaveStyleRule('background-color', 'rgba(3, 3, 3, 0.56)');
  });
});
