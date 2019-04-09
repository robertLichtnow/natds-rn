/* eslint-disable */
import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { HeaderWrapper, HeaderTitle, HeaderIcon } from './NatHeader.styles';
import { icons } from '../../assets/theme/icons';

export const NatHeader = ({ title, icon }) => {
  return (
    <HeaderWrapper>
      <HeaderIcon>
        <Image source={ icons[icon] } />
      </HeaderIcon>
      <HeaderTitle>{ title }</HeaderTitle>
    </HeaderWrapper>
  )
};

NatHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
