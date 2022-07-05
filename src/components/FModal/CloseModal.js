import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

export const CloseModal = ({action}) => {
  return (
    <View style={{alignItems: 'center'}}>
        <View style={styles.header}>
                <TouchableOpacity onPress={action} >
                    <Image
                        source={require('./images/x.png')}
                        style={{height: 30, width: 30}}
                    />
                </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
})