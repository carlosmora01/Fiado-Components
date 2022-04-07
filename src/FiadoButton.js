import React from 'react';
import { StyleSheet, Button, View, Alert } from 'react-native';

export const FiadoButton = () => {
  return (
    /* Button color Red React Native */
    <View style={styles.container}>
        <Button title="Fiado" color="#FF0000" onPress={() => Alert.alert('Fiado')} />
    </View>
    
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});