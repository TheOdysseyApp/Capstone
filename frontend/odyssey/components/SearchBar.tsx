import * as React from 'react'
import {TouchableOpacity, TextInput, StyleSheet, Dimensions, Text, ViewStyle, TextStyle, ScrollView, View, Image, SafeAreaView, ImageBackground} from 'react-native'
import { ProgressBar, Searchbar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 

type ButtonProps = {
    style?: ViewStyle
    textStyle?: TextStyle
    label: string
    onPress: () => void
    value: string
    onChangeText: (string) => void
}

const SearchBar = ({style, textStyle, label, onPress, value, onChangeText}: ButtonProps) => {
    return (
        <View style={styles.inputContainer}>
            <Searchbar style={styles.searchBar}
                placeholder="Search"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: { 
        // flexDirection: 'row', 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',
        // backgroundColor: "#f4f4f4",
        width:  "130%",
        height: '23%',
        marginTop: "5%",
        borderRadius:10,
      },
    // icon: {
    //     alignSelf: 'flex-end',
    //     color: '194260',
    //     backgroundColor: "#194260",
    //     paddingLeft: '10%'
    // },
    searchBar: {
        width: "100%",
        fontSize: 20,
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',
        // color: '#FFFFFF',
        borderRadius:10,
    }
})



export default SearchBar;