import React from 'react';
import { ScrollView, Image } from 'react-native'

import { Carousel, Category, CategoryTitle } from './NatGridList.styles';
import { NatGridItem } from '../NatGridItem';

const source = 'https://picsum.photos/128/80';


export const NatGridList = () => {
  return (
    <Carousel>
      <Category>
          <CategoryTitle>DESTAQUES</CategoryTitle>
      </Category>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <NatGridItem square="false" source={source}></NatGridItem>
        <NatGridItem square="false" source={source}></NatGridItem>
        <NatGridItem square="false" source={source}></NatGridItem>
        <NatGridItem square="false" source={source}></NatGridItem>
        <NatGridItem square="false" source={source}></NatGridItem>
        <NatGridItem square="false" source={source}></NatGridItem>
        <NatGridItem square="false" source={source}></NatGridItem>
        </ScrollView>
    </Carousel>
  )
};
