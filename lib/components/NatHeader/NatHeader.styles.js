import styled from 'styled-components/native';
import { colors } from '../../assets/theme/NatColors';

export const HeaderWrapper = styled.View`
  flex-wrap: wrap;
  width: 100%;
  height: 56px;
  background-color: ${colors.primary.white};
`;

export const HeaderIcon = styled.View`
  margin: 18px 0px 18px 18px;
  width: 18px;
`;

export const HeaderTitle = styled.Text`
  margin-left: 20px;
  margin-top: 16px;
  font-size: 18px;
  color: ${colors.bw.grayDarker};
`;
