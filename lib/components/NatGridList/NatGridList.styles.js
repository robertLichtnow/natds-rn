import styled from 'styled-components/native';
import { colors } from '../../assets/theme/colors';
import { robotoBold } from '../../assets/theme/fonts';

export const Category = styled.View`
    margin-bottom: 16
    width: 328;
    height: 16;
`

export const CategoryTitle = styled.Text`
    font-size: 14;
    font-style: normal;
    text-align: left;
    color: ${colors.bw.grayDark}
    ${robotoBold}
`

export const Carousel = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin-left: 16;
`

