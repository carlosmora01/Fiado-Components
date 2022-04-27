import styled from "styled-components";
import {colors}from './globalTheme';

export const BaseButton = styled.TouchableOpacity`
  background-color: ${colors.colorPrimary};
  font-size: 16px;
  border-radius: 15px;
  padding: 12px 10px 12px 10px;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const FButtonPrimary = styled(BaseButton)`
    background-color: ${colors.colorPrimary};
`;

export const FButtonSecondary = styled(BaseButton)`
    background-color: ${colors.colorSecondary};
`;  

export const FButtonDisabled = styled(BaseButton)`
    background-color: ${colors.colorDisabled};
`;

export const FButtonError = styled(BaseButton)`
    background-color: ${colors.colorError};
`;

export const FButtonSuccess = styled(BaseButton)`
    background-color: ${colors.colorSuccess};
`;