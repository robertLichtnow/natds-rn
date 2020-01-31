import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { NatContainer, NatHeaderNew, NatLogoHorizontal } from '../../../lib';

export const StoryNatHeaderNew = () => {

  const logo = () => (<NatLogoHorizontal />);

  return (
    <View style={{ backgroundColor: '#AAA', width: 300 }}>
      <ScrollView>
        <NatHeaderNew
          title="Title Text"
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
          onPressLeft={() => alert('press')}
          onPressRight={() => alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatHeaderNew
          title="Title Text"
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          onPressLeft={() => alert('press')}
          onPress={() => alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatHeaderNew
          title="Title Text"
          onPress={() => alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatHeaderNew
          title={logo()}
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
          onPressLeft={() => alert('press')}
          onPressRight={() => alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatHeaderNew
          title={logo()}
          iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
          onPressLeft={() => alert('press')}
          onPress={() => alert('press')}
        />
        <View style={{ height: 10 }} />
        <NatHeaderNew
          title={logo()}
          onPress={() => alert('press')}
        />
      </ScrollView>
    </View>
  );
};

StoryNatHeaderNew.propTypes = {
};
