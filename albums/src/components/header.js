//Import Libraries for making a componet
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        marginTop: 30,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#555',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        eleveation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//Make the component avaiable to other parts of the app
export default Header;
