import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen=()=>{
    const [term,setTerm]=useState("");
    return(
        <View>
            <SearchBar term={term} OnTermChange={(newTerm)=>setTerm(newTerm)}/>
            <Text>{term}</Text>
        </View>
    );
}

export default SearchScreen;