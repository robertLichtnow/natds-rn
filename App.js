import React from 'react';
import { Text } from 'react-native';

import { NatContainer } from './lib/components/NatContainer';
import { NatHeader } from './lib/components/NatHeader';

export const App = () => (
  <NatContainer color="#afaeae">
    <Text>List of components</Text>
    <NatHeader title="Test title to header component" icon="iconRight" />

  </NatContainer>
);
