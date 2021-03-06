import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = (props) =>{
    
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{props.label}</Text>
            <TextInput style={styles.inputStyle}
                secureTextEntry = {props.secureTextEntry}
                placeholder={props.placeholder}
                autoCorrect={false}
                value = {props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle : {
        color: '#000',
        paddigLeft : 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle : {
        fontSize: 18,
        paddigLeft : 20,
        flex: 1
    },
    containerStyle : {
        height : 40,
        flex: 1,
        flexDirection = 'row',
        alignItems: 'center'
    }
};

export default {Input};