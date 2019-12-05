import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(3, 3, 3, 0.56);
`;
