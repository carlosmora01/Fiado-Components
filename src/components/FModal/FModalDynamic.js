import React from 'react'
import { FModal } from './FModal'
import { View, Image, StyleSheet } from 'react-native'
import { FText } from '../../styles/globalTheme'
import { FButton } from '../FButton/FButton'

export const FModalDynamic = ({image, title, message, active, action}) => {
   
  return (
    <FModal visible={active} >
        <View style={{alignItems: 'center'}}>
            <Image
            source={image}
            style={{height: 150, width: 150, marginVertical: 10}}
            />
        </View>

        <FText title center bold style={style.title}>{title}</FText>  
        <FText center>{message}</FText> 

        <View style={style.buttonContainer}>
          <FButton type='error' title="Ok" action={action} />  
        </View>         
    </FModal>
  )
}

const style = StyleSheet.create({
  buttonContainer: {
    width: '70%',
    marginTop: 20,
    alignSelf: 'center'
  },
  title: {
    marginVertical: 15
  }
})
