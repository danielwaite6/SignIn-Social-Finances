import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard';
const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator headerMode="none" /**initialRouteName="Splash" */>
            <Screen name="Dashboard" component={Dashboard} />
        </Navigator>
    )
}