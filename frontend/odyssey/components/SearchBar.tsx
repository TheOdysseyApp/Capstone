import {useEffect, useState} from 'react'
import {TouchableOpacity, TextInput, StyleSheet, Dimensions, Text, ViewStyle, TextStyle, ScrollView, View, Image, SafeAreaView, ImageBackground} from 'react-native'
import { ProgressBar, Searchbar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { orange100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

type ButtonProps = {
    style?: ViewStyle
    textStyle?: TextStyle
    label: string
    onPress: () => void
    value: string
    onChangeText: (string) => void
    er: string
}

const SearchBar = ({style, textStyle, label, onPress, value, onChangeText, er}: ButtonProps) => {
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setError(er)
    }, [er])

    return (
        <View style={styles.inputContainer}>
            <Searchbar 
            style={[styles.searchBar, style, {borderWidth: error ? 1: 0, borderColor: error && 'red'}]}
                placeholder="Search"
                value={value}
                onChangeText={onChangeText}
            />
                {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: { 
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',
        width:  "130%",
      },
    searchBar: {
        width: "100%",
        fontSize: 20,
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center',
        // color: '#FFFFFF',
        borderRadius:10,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        maxWidth: '50%',
    }
})



export default SearchBar;