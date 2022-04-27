import React from 'react'
import styled from 'styled-components'
import {View} from 'react-native'
import { FText } from '../../styles/globalTheme';

export const HeaderLogin = ({text}) => {
  return (
    <View>
        <View style={{marginBottom: 25}}>
          <Imagen source={require("../../../assets/images/logo.png")} />
          <FText dark center large bold>{text}</FText>
        </View>
    </View>
  )
}

const Imagen = styled.Image`
  align-self: center;
  width: 80%;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
`;