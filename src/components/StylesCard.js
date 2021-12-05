import { StyleSheet } from "react-native";

 const Styles = StyleSheet.create({
    image:{
        
        width: 120,
        height: 120,
        marginTop:5,
        marginBottom:20,
        borderRadius: 10,
        marginLeft: 10
        
    },
    TextoCard:{
        fontSize: 18, 
        fontFamily:'POPPINS-BLACK',
        paddingLeft: 10,
        color: 'black'
       
    },
    ViewCard:{
        textAlign: "right",
    },
    ViewRooms:{
        display: "flex",
        flexDirection: "row"
        
    },
    container:{
        display: "flex",
        flexDirection: 'row',
        borderColor: "black",
        borderBottomWidth: 1,
        backgroundColor: '#f5fdff',
        marginTop: 10

    }
})

export default Styles