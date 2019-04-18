import React from 'react';
import PropTypes from 'prop-types';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
import { colors } from '../../assets/theme/NatColors';

const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
);

export const NatIcon = ({ name, size, color }) => (
  <Icon
    name={name}
    size={size}
    color={color}
  />
);

NatIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

NatIcon.defaultProps = {
  size: 24,
  color: colors.bw.black,
};
