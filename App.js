import React from 'react'
import { View, Text, SafeAreaView, ScrollView,Image } from 'react-native'
import RecipeInmuebles from './src/models/RecipeInmuebles'
import Card from './src/components/Card'
import data from './src/helpers/Inmuebles'




const App = (props: Props) => {
  const renderRecipe = data?.map((data, index)=>{
      return <Card key={`inmuebles-${index}`} inmueble={data}/>
    
  })

  return (
    
    <SafeAreaView>
      <ScrollView>{renderRecipe}</ScrollView>
    </SafeAreaView>
  )
}

export default App;
