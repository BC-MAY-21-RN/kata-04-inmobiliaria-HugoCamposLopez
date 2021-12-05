import React from 'react'
import { SafeAreaView, ScrollView} from 'react-native'
import Card from '../components/Card'
import data from '../helpers/Inmuebles.json'
import Styles from './StylesMainScreen'


const MainScreen = (props: Props) => {
    const renderRecipe = data?.map((data, index)=>{
        return <Card key={`inmuebles-${index}`} inmueble={data}/>
      
    })
    return (
        <SafeAreaView style={Styles.ContainerSafe} >
            <ScrollView>
                {renderRecipe}
            </ScrollView>
        </SafeAreaView>
    )
}

export default MainScreen
