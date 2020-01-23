import React from 'react';
import { Image, Platform, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import {
  HeaderWrapper,
  HeaderTitle,
  HeaderIcon,
  HeaderRight,
  AndroidStyle,
} from './NatHeader.styles';
import { icons } from '../../assets/theme/icons';

export const NatHeader = ({ title, icon, onPress, textRight, iconRight, onPressRight }) => {
  if (!title) {
    throw new Error('Title should not empty string');
  }

  return (
    <HeaderWrapper
      style={Platform.OS === 'android' && AndroidStyle.android}
      accessibilityRole="header"
    >
      {icon && (
          <HeaderIcon
            onPress={onPress}
            accessibilityRole="button"
          >
            <Image
              source={icons[icon]}
              accessibilityLabel="navegação para retornar a página anterior"
            />
          </HeaderIcon>
      )}

      <HeaderTitle
        icon={icon}
        accessibilityLabel={`${title}`}
      >
        {title}
      </HeaderTitle>
        <HeaderRight accessibilityRole="button">
          <TouchableOpacity onPress={onPressRight}>
            <Text accessibilityLabel={textRight} style={{ color: 'orange', fontSize:14 }} > {textRight} </Text>
              <Image 
                source={icons[iconRight]}
              />
          </TouchableOpacity>
        </HeaderRight>
    </HeaderWrapper>
  );
};

NatHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string,
  textRight: PropTypes.string,
  iconRight: PropTypes.string,
  onPressRight: PropTypes.func,
};

NatHeader.defaultProps = {
  icon: '',
};
