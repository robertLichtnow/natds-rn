import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Modal } from 'react-native';

import { colors } from '../../assets/theme/colors/colors';

import { LoadingView, styles } from './NatLoading.styles';

export const NatLoading = ({ size, color, overlay }) => (
  overlay ? (
    <Modal
    transparent
    overFullScreen
    >
      <LoadingView overlay={overlay}>
      <ActivityIndicator
      style={[styles.container]}
      size={size}
      color={color} />
      </LoadingView>
    </Modal>
  )
  :
  (
    <Modal
    transparent
    overFullScreen
    >
    <ActivityIndicator
      style={[styles.container]}
      size={size}
      color={color} />
    </Modal>
  )
);

NatLoading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

NatLoading.defaultProps = {
  size: 'large',
  color: colors.primary.yellow,
};
