import * as React from 'react'
import {TouchableOpacity, TextInput, StyleSheet, Dimensions, Text, ViewStyle, TextStyle, ScrollView, View, Image, SafeAreaView, ImageBackground} from 'react-native'
import { ProgressBar, Searchbar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 

type ButtonProps = {
    style?: ViewStyle
    textStyle?: TextStyle
    label: string
    onPress: () => void
}

const SearchBar = ({style, textStyle, label, onPress}: ButtonProps) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.inputContainer}>
            <AntDesign name="search1" size={24}/>
            <TextInput style={styles.searchBar}/>
            <TouchableOpacity onPress={onPress} style={styles.icon}>
                <AntDesign name="right" size={24} color="white"/>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
    inputContainer: { 
        flexDirection: 'row', 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#f4f4f4",
        width:  "80%",
        marginTop: "5%",
      },
    icon: {
        alignSelf: 'flex-end',
        color: '194260',
        backgroundColor: "#194260",
    },
    searchBar: {
        width: "90%",
        fontSize: 20,
        color: '#FFFFFF',
    }
})



export default SearchBar;