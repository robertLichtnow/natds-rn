import React from 'react';
import { Image } from 'react-native';
import { load as loadSvg } from '../assets/icons/svg';

export const loadIcon = (icon, attributes) => {
  if (icon && icon.svg) {
    const IconComponent = loadSvg(icon.svg.name);
    const iconSize = (icon.svg.size) ? icon.svg.size : attributes.size;
    const iconColor = (icon.svg.color) ? icon.svg.color : attributes.color;

    return (
      <IconComponent width={iconSize} height={iconSize} style={{ fill: iconColor }} />
    );
  }
  if (icon && icon.content) {
    return (
      <Image style={{ width: attributes.size, height: attributes.size, tintColor: attributes.color }} source={icon.content} />
    );
  }
  if (icon && icon.uri) {
    return (
      <Image style={{ width: attributes.size, height: attributes.size }} source={icon} />
    );
  }
  return null;
};
