import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import StylesCard from './StylesCard'
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Card = (props) => {
    const {inmueble} = props
    const { name, adress, rooms, bathrooms, surface, cost, rating, imageURL } = inmueble;
    return (
        
        <TouchableOpacity style={StylesCard.container}>
            <View style={StylesCard.ViewCard}>
            <Image source={{uri: imageURL}} style={StylesCard.image}/>
            </View>
            <View>
            <Text style={StylesCard.NameCard}><Ionicon name="home-outline" size={20}  /> {name} </Text>
            <Text style={StylesCard.AdressCard}><Ionicon name="location-outline" size={23}/> {adress} </Text>
                <View style={StylesCard.ViewRooms}>
                        <Text style={StylesCard.bedCard}><Ionicon name="bed-outline" size={20}  color="gray"/> {rooms} </Text>
                        <Text style={StylesCard.bathCard}><Icon name="paper-roll-outline" size={20}  color="gray"/> {bathrooms} </Text>            
                        <Text style={StylesCard.surfCard}><Icon name="vector-rectangle" size={20}  color="gray"/> {surface}</Text>    
                </View>
                <View style={StylesCard.pricefavContainer}>

            <Text style={StylesCard.priceCard}><Ionicon name="cash-outline" size={20}/> {cost} MXN</Text>
            <Text style={StylesCard.favCard}><Ionicon name="heart" size={22} color="green"/> {rating} </Text>
                </View>
            </View>
        </TouchableOpacity>
    
    )
}

export default Card
