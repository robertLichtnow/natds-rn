import React from 'react';
import { View, Text } from 'react-native';
import { body } from './lib/assets/theme/typography/typography';

export const App = () => (
  <View>
    <Text style={[body.Small]}>You can test your component here</Text>
  </View>
);