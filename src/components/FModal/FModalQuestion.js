import React from 'react'
import { FModal } from './FModal'
import { View, Image, Text, Button, StyleSheet } from 'react-native'
import { FText } from '../../styles/globalTheme'
import { FButton } from '../FButton/FButton'


export const FModalQuestion = ({title, message, active, cancelAction, confirmAction}) => {
   
  return (
    <FModal visible={active} >
        <View style={{alignItems: 'center'}}>
            <Image
            source={require('./images/question.png')}
            style={{height: 150, width: 150, marginVertical: 10}}
            />
        </View>

        <FText title center bold style={style.title}>{title}</FText>  
        <FText center>{message}</FText> 

        <View style={style.buttonContainer}>
          <FButton type='error' title="Cancelar" action={cancelAction} />  
          <FButton type="success" title="Aceptar" action={confirmAction} />
        </View>         
    </FModal>
  )
}

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    marginTop: 20,
    alignSelf: 'center'
  },
  title: {
    marginVertical: 15
  }
})
