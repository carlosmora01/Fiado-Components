import React from 'react';
import PropTypes from 'prop-types';
import {  View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input'
import { FText } from '../../../styles/globalTheme';

export default function FInputPhone({ onChangeText, value, defaultValue, onChangeFormattedText,  label = '', defaultCountry="MX", error=false, errorMsg = 'Error message', placeholder, disabled, countryPickerProps, textInputProps, codeTextStyle }) {

   return (
        <View>

        <View style={{padding:3}}>
          {   
              label != true ? 
              <FText bold left>{label}</FText> : null
          }
         </View>

          <PhoneInput
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          onChangeFormattedText={onChangeFormattedText}
          value={value}
          containerStyle={{backgroundColor:'#E4E4E4', width:'100%', height:65, borderRadius:13}}
          textContainerStyle={{borderBottomRightRadius:13, borderTopRightRadius:13}}
          placeholder={placeholder}
          defaultCode={defaultCountry}
          countryPickerProps={countryPickerProps}
          textInputProps={textInputProps}
          disabled={disabled}
          codeTextStyle={codeTextStyle}

          />


          <View style={{padding:3}}>
            {   
                error == true ? 
                <FText bold error>{errorMsg}</FText> : null
            }
          </View>

        </View>
   )

}

FInputPhone.defaultProps = {
  children: null,
  onPress: () => {}
};

FInputPhone.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.object,
};
