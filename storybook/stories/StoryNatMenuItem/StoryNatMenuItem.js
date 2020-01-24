import React from 'react';
import { Text, ScrollView } from 'react-native';
import { NatContainer, NatMenuItem } from '../../../lib';

export const StoryNatMenuItem = () => {
  const menuList = [
    {
      id: 1,
      name: 'First menu',
      level: 1,
    },
    {
      id: 2,
      name: 'Second menu',
      level: 1,
    },
    {
      id: 3,
      name: 'Another sample menu',
      level: 1,
    },
    {
      id: 4,
      name: 'Another sample menu',
      level: 1,
    },
  ];
  const menuListSvg = [
    {
      id: 1,
      name: 'First menu',
      svg: {
        name: 'outlined-content-book',
        size: '24',
      },
      level: 1,
    },
    {
      id: 2,
      name: 'Second menu',
      svg: {
        name: 'filled-media-play',
        size: '24',
      },
      level: 1,
    },
  ];
  const menuListIconUri = [
    {
      name: 'Menu Food',
      icon: 'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/261/img_url_tmp_261_20180323135427.png',
      level: '1',
    },
    {
      name: 'Bus Information',
      icon: 'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/generic_menu/img_url_tmp_generic_menu_20170822160140.png',
      level: '1',
    },
  ];

  return (
    <NatContainer style={{ backgroundColor: '#FFF', width: 300 }}>
      <ScrollView>
        <Text>Without Icon</Text>
        {menuList.map(item => (
          <NatMenuItem
            title={item.name}
            key={item.id}
            level={item.levell}
            onPress={() => { alert('click event'); }}
          />
        ))}
        <Text>Use SVG</Text>
        {menuListSvg.map(item => (
          <NatMenuItem
            title={item.name}
            icon={{ svg: item.svg }}
            key={item.id}
            level={item.levell}
            onPress={() => { alert('click event'); }}
          />
        ))}
        <Text>With External Icon URL</Text>
        {menuListIconUri.map(item => (
          <NatMenuItem
            title={item.name}
            icon={{ uri: item.icon }}
            key={item.name}
            level={item.levell}
            onPress={() => { alert('click event'); }}
          />
        ))}
      </ScrollView>
    </NatContainer>
  );
};

StoryNatMenuItem.propTypes = {
};
