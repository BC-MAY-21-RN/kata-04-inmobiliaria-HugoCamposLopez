import React from 'react'
import MainNavigator from './src/Navigation/Navigation.js'
import {NavigationContainer} from '@react-navigation/native'



const App = () => {

  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  )
}

export default App;
