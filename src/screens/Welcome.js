// outsource dependencies
import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
// local dependencies
import Login from './Login'
import styles from '../styles'

export default function Welcome( props ) {
    const { navigate } = props.navigation;
    return (
        <View style={styles.container}>
            <Text style={[styles.h1, styles.welcome]}>Welcome to React Native App!</Text>
            <Text style={styles.p}>PLease, login, to see more screens</Text>
            <TouchableHighlight onPress={()=> navigate('Login')} style={{marginTop: 15}}>
                <View style={styles.button}>
                    <Text>{('Go to login').toUpperCase()}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}
