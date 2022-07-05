import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text , View, TouchableOpacity, TextInput} from 'react-native';
import { FText, InputContainer } from '../../../styles/globalTheme';
import { Ionicons } from "@expo/vector-icons";
import { useTogglePassword } from './hooks/useTogglePassword';

export default function FInputText({ onPress = ()=>{}, autoCapitalize, keyBoard = 'default', label, editable = true,onChange = ()=>{}, error=false, errorMsg = 'Error message', placeholder,value, type='primary', icon ={}}) {

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePassword();

   return (
    
    <View>   
          {   
              label ? 
              <View style={{padding:3}}>
                <FText bold left>{label}</FText>
              </View> : null
          }
        <InputContainer icon={icon}>

             {
               (type === 'password') ?
               <>
               <TextInput 
                  editable={editable}
                  keyboardType={keyBoard}
                  value={value} 
                  onChangeText={onChange}
                  placeholder={placeholder}
                  style={{width:'90%', padding:3}}
                  secureTextEntry={passwordVisibility}
                  enablesReturnKeyAutomatically
                  textContentType="newPassword"
                  autoCorrect={false}
                  error={error}
                  autoCapitalize={autoCapitalize}
              /> 
              <TouchableOpacity>
              <Ionicons
                  name={rightIcon}
                  size={28}
                  color="black"
                  style={{padding:3 }}
                  onPress={handlePasswordVisibility}
                  direction="right"
              /> 
              </TouchableOpacity>
              
              </>
              : 
              <>
                <TextInput 
                editable={editable}
                keyboardType={keyBoard}
                value={value} 
                onChangeText={onChange}
                placeholder={placeholder}
                style={icon.name  ? {width:'90%', padding:3} : {width:'100%', padding:3}}
                error={error}
                />

                {
                
                  icon.name ? 
                  <TouchableOpacity>
                  <Ionicons
                    name={icon.name ? icon.name : 'calendar-sharp'}
                    size={icon.size ? icon.size : 28}
                    color={icon.color ? icon.color  : "black"}
                    style={{padding:3}}
                    onPress={icon?.action}
                  /> 
                  </TouchableOpacity>
                  : null
                }
                </>
              
             }
   
        </InputContainer>
      
            {   
                error == true ? 
                <View style={{padding:3}}>
                    <FText bold error>{errorMsg}</FText>
                </View>
                 : null
            }
        
        
    </View>
    
   )

}

FInputText.defaultProps = {
  children: null,
  onPress: () => {}
};

FInputText.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.object,
};
