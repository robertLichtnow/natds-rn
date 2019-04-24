import React from 'react';
import { View, Text } from 'react-native';
import { NatIcon } from './lib/components/NatIcon/NatIcon';
import { colors } from './lib/assets/theme/colors';

export const App = () => (
  <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
    <Text>You can test your component here</Text>
    <NatIcon name="nat_ic_info" size={48} color={colors.primary.yellow} />
  </View>
);
