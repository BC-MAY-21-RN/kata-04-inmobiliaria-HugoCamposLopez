import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Main from '../Screens/MainScreen.js'

const Stack = createNativeStackNavigator();



function NavigationStack(){
return(

    <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Main} />
    </Stack.Navigator>
)
};

export default NavigationStack;
