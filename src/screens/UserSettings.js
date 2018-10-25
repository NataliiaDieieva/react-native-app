// outsource dependencies
import React from 'react';
import { Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import { reduxForm, Field } from "redux-form";
import Icon from 'react-native-vector-icons/FontAwesome5';
// local dependencies
import styles from '../styles';
import { connect } from "react-redux";
import { USER } from "../actions/types";
import ComplexField from "../components/ComplexField";

function UserSettings ( props ) {
    let { handleSubmit, expectAnswer, pristine } = props;
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.h1}>{('User Settings').toUpperCase() + ' '}</Text>
                    { expectAnswer && <Icon name="spinner" size={24}/>}
                </View>
                <View style={styles.avatarWrapMd}>
                    <Image
                        style={styles.avatarMd}
                        source={{uri: 'http://cengizodul35.futurenet.club/images/board/avatar_question_round.png'}}
                            />
                </View>
                <Field
                    name="firstName"
                    component={ComplexField}
                    placeholder="First Name"
                        />
                <Field
                    name="lastName"
                    component={ComplexField}
                    placeholder="Last Name"
                        />
                <Field
                    name="age"
                    component={ComplexField}
                    placeholder="Age"
                        />
                <TouchableHighlight onPress={handleSubmit} style={{marginTop: 25}} disabled={pristine}>
                    <View style={styles.button}>
                        <Text>{('Save').toUpperCase()}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    )
}

export default connect(
    ( state ) => ({ initialValues: state.user.settings, expectAnswer: state.user.expectAnswer })
)(reduxForm({
    form: 'user-settings',
    onSubmit
})(UserSettings));


function onSubmit ( values, dispatch ) {
    dispatch({type: USER.SAVE_CHANGES, ...values});
}
