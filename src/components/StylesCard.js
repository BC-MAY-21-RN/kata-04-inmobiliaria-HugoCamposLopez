import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
     container:{
         display: "flex",
         flexDirection: 'row',
         borderColor: "black",
         backgroundColor: '#f5fdff',
         marginTop: 18,
         borderRadius: 10,
         width: "98%",
         marginLeft: "1%",
     },

     ViewCard:{
         textAlign: "right",
     },

    image:{
        
        width: 120,
        height: 120,
        marginTop:5,
        marginBottom:20,
        borderRadius: 10,
        marginLeft: 10
        
    },

    NameCard:{
        fontSize: 22,
        letterSpacing: 1, 
        paddingLeft: 10,
        color: 'black',
        fontWeight: '500',
    },
    
    AdressCard:{
        fontSize: 15, 
        paddingLeft: 10,
        color: 'black',
        fontWeight: '300',
        paddingTop: 10,
    },

    ViewRooms:{
        display: "flex",
        flexDirection: "row"
    },
   
    bedCard:{
        fontSize: 20,
        paddingLeft: 12,
        color: 'black',
        fontWeight: '400',
        alignItems: "center",
        paddingTop: 10,
    },
    bathCard:{
        fontSize: 20,
        paddingLeft: 25,
        color: 'black',
        fontWeight: '400',
        alignItems: "center",
        paddingTop: 10,
    },
    surfCard:{
        fontSize: 20,
        paddingLeft: 25,
        color: 'black',
        fontWeight: '400',
        alignItems: "center",
        paddingTop: 10,
    },
    priceCard:{
        color: 'black',
        paddingTop: 10,
        paddingLeft: 12,
        fontWeight: '700',
        fontSize: 18
    },
    favCard:{
        paddingTop: 10,
        
    },
    pricefavContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default Styles