import React from 'react';
import { ScrollView, Image } from 'react-native'

import { Carousel, Category, CategoryTitle } from './NatGridList.styles';

export const NatGridList = () => {
  return (
    <Carousel>
      <Category>
          <CategoryTitle>DESTAQUES</CategoryTitle>
      </Category>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image 
          source={ { uri: 'https://picsum.photos/128/80' } }
          style={{width: 128, height: 80, marginRight: 8}} />
        <Image 
          source={ { uri: 'https://picsum.photos/128/80' } }
          style={{width: 128, height: 80, marginRight: 8}} />
        <Image 
          source={ { uri: 'https://picsum.photos/128/80' } }
          style={{width: 128, height: 80, marginRight: 8}} />
        <Image 
          source={ { uri: 'https://picsum.photos/128/80' } }
          style={{width: 128, height: 80, marginRight: 8}} />
        <Image 
          source={ { uri: 'https://picsum.photos/128/80' } }
          style={{width: 128, height: 80, marginRight: 8}} />
        <Image 
          source={ { uri: 'https://picsum.photos/128/80' } }
          style={{width: 128, height: 80, marginRight: 8}} />
        </ScrollView>
    </Carousel>
  )
};
