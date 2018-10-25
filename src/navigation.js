// outsource dependencies
import React from 'react';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { reduxifyNavigator, createNavigationReducer, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
// local dependencies
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Home from './screens/Home';
import UserSettings from './screens/UserSettings';
import Sidebar from './components/Sidebar';
import { colors } from './styles';

/**
 * private routes
 */
const PrivateRoutes = createDrawerNavigator(
    {
        Home,
        UserSettings
    },
    {
        //custom view of DrawerNavigator component
        contentComponent: Sidebar,
        contentOptions: {
            activeTintColor: 'white',
            iconContainerStyle: { width: 25},
            inactiveTintColor: colors.darkCyan
        },
        drawerWidth: Dimensions.get('window').width
    }
);

/**
 * navigationOptions for DrawerNavigator child
 */
Home.navigationOptions = {
    drawerIcon: ({ tintColor }) => (
        <Icon name="home" color={ tintColor } size={24} />
    )
};

UserSettings.navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
        <Icon name="cog" color={ tintColor } size={24} />
    )
};

/**
 * added common header for all private routes
 */
const Private = createStackNavigator(
    {
        PrivateRoutes,
    },
    {
        navigationOptions: ({navigation}) => ({
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: colors.lightCyan
            },
            headerLeft: ({ tintColor }) => (
                <Icon
                    onPress={() => navigation.toggleDrawer()}
                    color={ tintColor }
                    name="bars"
                    size={25}
                        />
            ),
            headerRight:  (
                <Icon
                    onPress={() => navigation.navigate('Welcome')}
                    name="sign-out-alt"
                    size={25}
                    color="white"
                        />
            ),
            headerLeftContainerStyle: { padding: 15 },
            headerRightContainerStyle: { padding: 15 }
        })
    }
);

/**
 * public routes
 */
const Public = createBottomTabNavigator(
    {
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                tabBarLabel: 'Welcome',
                tabBarIcon: ({ tintColor }) => ( <Icon name="angellist" color={tintColor} size={24} /> )
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                tabBarLabel: 'Login',
                tabBarIcon: ({ tintColor }) => ( <Icon name="lock" color={tintColor} size={24} /> )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: colors.darkCyan,
            style: {
                backgroundColor: colors.lightCyan
            },
        }
    }
);

// root navigator
const Navigator =  createSwitchNavigator({
    Public,
    Private
});

// create React Navigation middleware
export const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
// create React Navigation reducer
export const navReducer = createNavigationReducer(Navigator);
// HOC with state and dispatch
const nav = reduxifyNavigator(Navigator, "root");
export default connect(
    (state) => ({state: state.nav})
)(nav);
