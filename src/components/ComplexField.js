// outsource dependencies
import React from 'react';
import { Text, View, TextInput } from 'react-native';

function ComplexField ({input, meta, ...props}) {
    return (
        <View style={{ width: 300 }}>
            <TextInput {...input} {...props} style={{borderBottomWidth: 1}}/>
            <View>{ meta.touched && meta.error && <Text style={{color: 'red'}}>{ meta.error }</Text> }</View>
        </View>
    )
}

export default ComplexField;
