import { StyleSheet } from "react-native";

export const colors = {
    darkCyan: '#254e58',
    lightCyan: '#88BDBC',
};

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        padding: 10
    },
    h1: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10
    },
    welcome: {
        textShadowColor: 'rgb(166, 166, 166)',
        textShadowRadius: 3,
        textShadowOffset: {width: 3, height: 2},
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        backgroundColor: 'white',
        borderRadius: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    avatarWrapSm: {
        height: 170,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarWrapMd: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarSm: {
        height: 120,
        width: 120,
        marginBottom: 5
    },
    avatarMd: {
        height: 150,
        width: 150,
        marginBottom: 5
    }
});
