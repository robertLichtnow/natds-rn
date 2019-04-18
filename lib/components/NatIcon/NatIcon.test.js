import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { NatIcon } from './NatIcon';
import { colors } from '../../assets/theme/NatColors';

describe('Icon component', () => {
  it('Should render icon component correctly', () => {
    const icon = renderer.create(
      <NatIcon name="info" />,
    ).toJSON();
    expect(icon).toMatchSnapshot();
  });

  it('Should render icon component with default styling', () => {
    const icon = renderer.create(
      <NatIcon name="info" />,
    ).toJSON();
    expect(icon).toHaveStyleRule('color', colors.bw.black);
    expect(icon).toHaveStyleRule('fontSize', 24);
    expect(icon).toHaveStyleRule('fontFamily', 'icomoon');
  });

  it('Should render icon component with custom styling', () => {
    const icon = renderer.create(
      <NatIcon name="info" color="red" size={100} />,
    ).toJSON();
    expect(icon).toHaveStyleRule('color', 'red');
    expect(icon).toHaveStyleRule('fontSize', 100);
    expect(icon).toHaveStyleRule('fontFamily', 'icomoon');
  });
});
