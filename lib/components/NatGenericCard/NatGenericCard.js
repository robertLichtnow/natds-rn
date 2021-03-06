import React from 'react';
import PropTypes from 'prop-types';
import { CustomView } from './NatGenericCard.styles';
import { colors } from '../../assets/theme/colors/colors';

export const NatGenericCard = ({
  children,
  height,
  width,
  bgColor,
}) => (
  <CustomView
    height={height}
    width={width}
    bgColor={bgColor}
  >
    {children}
  </CustomView>
);


NatGenericCard.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.element.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

NatGenericCard.defaultProps = {
  bgColor: colors.primary.white,
  height: 216,
  width: 363,
};
