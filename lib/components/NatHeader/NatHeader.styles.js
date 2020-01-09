import { Platform, StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';
import { colors } from '../../assets/theme/colors/colors';
import { natura } from '../../assets/theme/fonts/fonts';

export const AndroidStyle = StyleSheet.create({
  android: {
    marginTop: 4,
  },
});

export const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  width: 100%;
  height: 56;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${colors.primary.white};
`;

export const HeaderIcon = styled.TouchableOpacity`
  width: 24;
`;

export const HeaderTitle = styled.Text`
  font-size: 20;
  color: ${colors.bw.grayDarker};
  font-family: ${natura.regular};
  ${Platform.select({
    ios: css`
      padding-left:45px;
      padding-top: 8px;
    `,
    android: css`
      padding-left:16px;
    `,
  })
}
`;

export const HeaderRight = styled.View`
  width: 60;
  color:${colors.primary.yellow};
  ${Platform.select({
    ios: css`
      margin-top:4;
    `,
    android: css`
      flex:1;
      align-items: flex-end;
      margin-right:8;
    `,
  })
}
`;