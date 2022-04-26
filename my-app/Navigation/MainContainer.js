import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Screens
import HomeScreen from './Screens/HomeScreen';
import OrganizationScreen from './Screens/OrganizationScreen';
import EventScreen from './Screens/EventScreen';
import ProfileScreen from './Screens/ProfileScreen';

//Screen Names
const homeName = 'Home';
const orgName = 'Organizations';
const eventName = 'Events';
const profileName = 'Profile';


const Tab = createBottomTabNavigator();

function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName)
                    {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === orgName) {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (rn === eventName) {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (rn === profileName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'white',
                tabBarActiveBackgroundColor: '#73AFD7',
                tabBarInactiveBackgroundColor: '#73AFD7',
                tabBarLabelStyle: { fontFamily: 'AppleSDGothicNeo-Regular'},
                headerTitleStyle: {fontFamily: 'Noteworthy-Bold', color: 'white', fontSize: 24},
                headerTitle: "Heel Hype",
                headerStyle: {backgroundColor: '#73AFD7'}
            })}>
            
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={eventName} component={EventScreen}/>
            <Tab.Screen name={orgName} component={OrganizationScreen}/>
            <Tab.Screen name={profileName} component={ProfileScreen}/>


            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;


//https://youtu.be/AnjyzruZ36E <- toolbar tutorial