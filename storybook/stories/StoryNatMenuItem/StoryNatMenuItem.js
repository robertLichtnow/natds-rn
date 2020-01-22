import React from 'react';
import { Text, ScrollView } from 'react-native';
import { NatContainer, NatMenuItem } from '../../../lib';

export const StoryNatMenuItem = () => {
  const list = [
    {
      name: 'icon_outlined_nat_ic_add_document',
      icon: 'icon_outlined_nat_ic_add_document',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_bus',
      icon: 'icon_outlined_nat_ic_bus',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_channel',
      icon: 'icon_outlined_nat_ic_channel',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_copy',
      icon: 'icon_outlined_nat_ic_copy',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_exit',
      icon: 'icon_outlined_nat_ic_exit',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_health',
      icon: 'icon_outlined_nat_ic_health',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_home',
      icon: 'icon_outlined_nat_ic_home',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_lock',
      icon: 'icon_outlined_nat_ic_lock',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_menu',
      icon: 'icon_outlined_nat_ic_menu',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_mic_rec',
      icon: 'icon_outlined_nat_ic_mic_rec',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_money_paper',
      icon: 'icon_outlined_nat_ic_money_paper',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_nat_ic_chat',
      icon: 'icon_outlined_nat_ic_nat_ic_chat',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_occurrence',
      icon: 'icon_outlined_nat_ic_occurrence',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_restaurant',
      icon: 'icon_outlined_nat_ic_restaurant',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_right',
      icon: 'icon_outlined_nat_ic_right',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_speaker',
      icon: 'icon_outlined_nat_ic_speaker',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_store',
      icon: 'icon_outlined_nat_ic_store',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_waze',
      icon: 'icon_outlined_nat_ic_waze',
      level: '1',
    },
    {
      name: 'icon_outlined_nat_ic_wifi',
      icon: 'icon_outlined_nat_ic_wifi',
      level: '1',
    },
  ];

  return (
    <NatContainer style={{ backgroundColor: '#FFF', width: 300 }}>
      <ScrollView>
        <Text>With Icon</Text>
        {list.map(item => (
          <NatMenuItem
            title={item.name}
            icon={{ name: item.icon }}
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
