import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import RecipeInmuebles from '../models/RecipeInmuebles.js'
import StylesCard from './StylesCard'


interface Props{
    inmueble: RecipeInmuebles,
    /* onClick: (inmueble: RecipeInmuebles) => void; */
  }

const Card = (props: Props) => {
    const {inmueble} = props
    const { name, adress, rooms, bathrooms, surface, cost, rating, imageURL } = inmueble;
  
    return (
        
        <TouchableOpacity style={StylesCard.container}>
            
            <View style={StylesCard.ViewCard}>
            <Image source={{uri: imageURL}} style={StylesCard.image}/>
            </View>
            <View>
            <Text style={StylesCard.TextoCard}>El nombre de la casa es {name} </Text>
            <Text style={StylesCard.TextoCard}>El domicilio {adress} </Text>
            <Text style={StylesCard.TextoCard}>{rooms} Habitaciones</Text>
            <Text style={StylesCard.TextoCard}>{bathrooms} Baños</Text>
            <Text style={StylesCard.TextoCard}>{surface}</Text>
            <Text style={StylesCard.TextoCard}>{cost} MXN</Text>
            <Text style={StylesCard.TextoCard}>{rating} </Text>
            </View>
            
            
            
            
            
            
        </TouchableOpacity>
    
    )
}

export default Card
