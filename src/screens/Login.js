// outsource dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// local dependencies
import styles from '../styles';
import {AUTH} from '../actions/types';
import ComplexField from '../components/ComplexField';

function Login ( props ) {
    let { invalid, submitted, handleSubmit, navigation, expectAnswer } = props;
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.h1}>{('Login').toUpperCase() + ' '}</Text>
                { expectAnswer && <Icon name="spinner" size={24}/>}
            </View>
            <Field
                name="email"
                component={ComplexField}
                placeholder="Email"
                    />
            <Field
                name="password"
                component={ComplexField}
                secureTextEntry={true}
                placeholder="Password"
                    />
            <TouchableHighlight
                onPress={handleSubmit}
                disabled={invalid || submitted}
                style={{marginTop: 15}}
                    >
                <View style={styles.button}>
                    <Text>{('Login').toUpperCase()}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default connect(
    ( state ) => ({ expectAnswer: state.auth.expectAnswer })
)(reduxForm({
    form: 'login',
    validate,
    onSubmit
})(Login));


function onSubmit ( values, dispatch ) {
    dispatch({type: AUTH.MAKE_LOGIN, ...values});
}

function validate( values ) {
    const errors = {};
    const pattern=/^.{2,}[@]{1}[\w\\.\S]{2,}[\\.]{1}[A-Za-z]{2,}$/;
    if ( !values.email ) {
        errors.email = 'Required field';
    } else if ( !pattern.test( values.email ) ) {
        errors.email = 'Your email address is invalid. Email example: example@some.com';
    }
    if ( !values.password ) {
        errors.password = 'Required field';
    } else if ( values.password.length < 6 ) {
        errors.password = 'Password must be at least 6 characters long';
    }
    if ( !values.test ) {
        errors.test = 'Required field';
    }
    return errors;
}

