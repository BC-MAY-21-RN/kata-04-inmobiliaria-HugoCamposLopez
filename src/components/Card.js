import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import RecipeInmuebles from '../models/RecipeInmuebles.js'
import StylesCard from './StylesCard'
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


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
            <Text style={StylesCard.TextoCard}><Ionicon name="home-outline" size={20}/> {name} </Text>
            <Text style={StylesCard.TextoCard}><Ionicon name="location-outline" size={20}/> {adress} </Text>
                <View style={StylesCard.ViewRooms}>
                    <Text style={StylesCard.TextoCard}><Ionicon name="bed-outline" size={20}/> {rooms} </Text>
                    <Text style={StylesCard.TextoCard}><Icon name="paper-roll-outline" size={20}/> {bathrooms} </Text>
                    <Text style={StylesCard.TextoCard}><Icon name="vector-rectangle" size={20}/> {surface}</Text>
                </View>
            <Text style={StylesCard.TextoCard}><Ionicon name="cash-outline" size={20}/> {cost} MXN</Text>
            <Text style={StylesCard.TextoCard}><Ionicon name="star-outline" size={20}/> {rating} </Text>
            </View>
        </TouchableOpacity>
    
    )
}

export default Card
