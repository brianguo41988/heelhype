import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import { StackActions } from "@react-navigation/native";

//Event Screens
import LunchScreen from "./event_screens/LunchScreen";
import TieScreen from "./event_screens/TieScreen";
import SpikeScreen from "./event_screens/SpikeScreen";
import BattleScreen from "./event_screens/BattleScreen";
import ShabScreen from "./event_screens/ShabScreen";
import HumanScreen from "./event_screens/HumanScreen";
import XalScreen from "./event_screens/XalScreen";
import FullMoonScreen from "./event_screens/FullMoonScreen";
import MentalScreen from "./event_screens/MentalScreen";
import MovieScreen from "./event_screens/MovieScreen";

const stack = createStackNavigator();

const HomeScreenNavigator = () => {
    return(
        <stack.Navigator 
        screenOptions={{
            headerShown: false
          }}>
            <stack.Screen name= "HomeScreen" component={HomeScreen}/>
            <stack.Screen name="LunchScreen" component={LunchScreen}/>
            <stack.Screen name="TieScreen" component={TieScreen}/>
            <stack.Screen name="SpikeScreen" component={SpikeScreen}/>
            <stack.Screen name="BattleScreen" component={BattleScreen}/>
            <stack.Screen name="ShabScreen" component={ShabScreen}/>
            <stack.Screen name="HumanScreen" component={HumanScreen}/>
            <stack.Screen name="XalScreen" component={XalScreen}/>
            <stack.Screen name="FullMoonScreen" component={FullMoonScreen}/>
            <stack.Screen name="MentalScreen" component={MentalScreen}/>
            <stack.Screen name="MovieScreen" component={MovieScreen}/>
        </stack.Navigator>
    );
}

export {HomeScreenNavigator};