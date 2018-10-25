// outsource dependencies
import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
// local dependencies
import styles from '../styles';
import { colors } from '../styles';

function Sidebar ( props ) {
    const { navigation } = props;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'flex-end', padding: 10 }}>
                    <Icon name="times" size={20} onPress={()=> navigation.closeDrawer()}/>
            </View>
            <View style={styles.avatarWrapSm}>
                <Image
                    style={styles.avatarSm}
                    source={{uri: 'http://cengizodul35.futurenet.club/images/board/avatar_question_round.png'}}
                        />
                <Text style={styles.h1}>User</Text>
            </View>
            <ScrollView style={{ backgroundColor: colors.lightCyan }}>
                <DrawerItems { ...props } />
            </ScrollView>
        </View>
    )
}

export default Sidebar;
