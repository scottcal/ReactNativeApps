import React from 'react';
import { View, Text } from 'react-native';
import PhoneInput from 'react-phone-number-input/react-responsive-ui'
//Only css for webpack 
//import 'react-phone-number-input/style.css'
//import 'react-responsive-ui/style.css'

const Phone = ({ label, value, onChange, placeholder }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    
    return (
        <View style={containerStyle}>
              <Text style={labelStyle}>{label}</Text>
              <PhoneInput
                    placeholder={placeholder}
                    value={value}
                    onChange={onChangeText} 
                    />
        </View>
    );
};


const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2 
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }  
};

export { PhoneInput };
