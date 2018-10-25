// outsource dependencies
import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
// local dependencies
import styles from '../styles';

function Home ( props ) {
    const { navigate } = props.navigation;
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Home Screen</Text>
            <TouchableHighlight onPress={()=> navigate('UserSettings')} style={{marginTop: 15}}>
                <View style={styles.button}>
                    <Text>{('Go to settings').toUpperCase()}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Home;
