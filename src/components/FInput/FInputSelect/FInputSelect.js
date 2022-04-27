import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { Text , View} from 'react-native';
import { InputContainer } from '../../../styles/globalTheme';
import { Ionicons } from "@expo/vector-icons";

export default function FInputSelect({ onPress, keyBoard = 'default', label = '', onChange, error=false, errorMsg = 'Error message', placeholder,value, type='primary', icon ={}}) {


   return (
    
    <View>  

        <View style={{padding:3}}>
          {   
              label != true ? 
              <Text style={{textAlign:'left', fontWeight:'bold'}}>{label}</Text> : <Text/>
          }
         </View>
        

        <InputContainer  error={error}  icon={icon}>

          
              <TextInput 
                  
                  keyboardType={keyBoard}
                  value={value} 
                  onChangeText={onChange}
                  placeholder={placeholder}
                  style={icon.name  ? {width:'90%', padding:3} : {width:'100%', padding:3}}
      
              />


              {
                
                icon.name ? 
             
                <Ionicons
                  name={icon.name ? icon.name : 'calendar-sharp'}
                  size={icon.size ? icon.size : 28}
                  color={icon.color ? icon.color  : "black"}
                  style={{padding:3}}
                  onPress={icon?.action}
                /> : null
              }

      
        </InputContainer>



        <View style={{padding:3}}>
          {   
              error == true ? 
              <Text style={{color:'red'}}>{errorMsg}</Text> : <Text/>
          }
         </View>
        
    </View>


    
   )

}

FInputSelect.defaultProps = {
  children: null,
  onPress: () => {}
};

FInputSelect.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.object,
};
