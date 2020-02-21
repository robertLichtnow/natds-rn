import React, { useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatText,
  NatAppBarSearch,
} from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FAFAFA',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatAppBarSearch = () => {
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  const [search3, setSearch3] = useState('');
  const [search4, setSearch4] = useState('');

  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
        <ScrollView>
          <NatAppBarSearch
            title="Search1"
            value={search1}
            onSubmit={text => setSearch1(text)}
            onPressLeft={() => alert('press left icon')}
          />
          <NatText value={`Search value: ${search1}`} />
          <NatAppBarSearch
            title="Search2"
            value={search2}
            onSubmit={text => setSearch2(text)}
            onPressLeft={() => alert('press left icon')}
            onPressRight={() => alert('press right icon')}
            iconRight={{ svg: { name: 'outlined-action-mic' } }}
          />
          <NatText value={`Search value: ${search2}`} />
          <NatAppBarSearch
            title="Search3"
            value={search3}
            onSubmit={text => setSearch3(text)}
            showIconLeft={false}
            onPressLeft={() => alert('press left icon')}
            onPressRight={() => alert('press right icon')}
            iconRight={{ svg: { name: 'outlined-action-mic' } }}
          />
          <NatText value={`Search value: ${search3}`} />
          <NatAppBarSearch
            title="Search4"
            value={search4}
            onSubmit={text => setSearch4(text)}
            showIconLeft={false}
            onPressLeft={() => alert('press left icon')}
            onPressRight={() => alert('press right icon')}
          />
          <NatText value={`Search value: ${search4}`} />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatAppBarSearch.propTypes = {
};
