import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { NatContainer, NatHeader } from '../../../lib';

export const StoryNatHeader = () => {
  return (
    <NatContainer style={{ backgroundColor: '#FFF', width: 300, paddingTop: 20 }}>
      <ScrollView>
        <NatHeader
          title="Title Text"
          icon="iconRight"
          onPress={() => alert('press')}
          onPressRight={() => alert('press')}
          textRight="Text Right"
        />
      </ScrollView>
    </NatContainer>
  );
};

StoryNatHeader.propTypes = {
};
