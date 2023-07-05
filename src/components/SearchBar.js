import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {Feather} from "@expo/vector-icons";

const SearchBar=({term,OnTermChange})=>{
    return(
        <View style={styles.background}>
            <Feather style={styles.iconStyle} name="search"/>
            <TextInput autoCapitalize="none" autoCorrect={false} value={term} onChangeText={OnTermChange} style={styles.inputStyle} placeholder="search"/>
            
        </View>
    );
}

const styles=StyleSheet.create({
    background:{
        marginTop:10,
        height:50,
        backgroundColor:"#FFFFFF",
        marginHorizontal:20,
        borderRadius:50,
        flexDirection:"row"
    },
    inputStyle:{
       
        flex:1
    },
    iconStyle:{
        fontSize:30,
        marginHorizontal:15,
        alignSelf:"center"
    }
})

export default SearchBar;