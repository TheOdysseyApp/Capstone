import * as React from 'react'
import {TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle, ScrollView, View, Image, SafeAreaView, ImageBackground} from 'react-native'
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
        <View style={styles.rowContainer}>
            <Searchbar style={styles.searchBar}
                        placeholder="Search"
                                onChangeText={onChangeSearch}
                                value={searchQuery}
                            />
                            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                                <Text style={[styles.text, textStyle]}>{label}</Text>
                            </TouchableOpacity>
                            <AntDesign style={{marginLeft: "-11%"}} name="right" size={24} color="white" onPress={onPress}/>
                    </View>
    )
}

const styles = StyleSheet.create({
    button: {
        // flex: 2,
        backgroundColor: '#194260',
        width: '17%',
        marginLeft: '78%',
        height: '60%',
        borderRadius: 10,
        // marginRight: 50,
        // position: 'absolute'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    searchBar:{
        // flex: 1,
        marginLeft: 50,
        // marginRight: 100,
        width: '117%',
        height: '64%',
        marginTop: 30,
        color: '#929292',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 10,
        position: 'absolute'

    },
    rowContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        position: 'absolute',
        // backgroundColor:'#FFFFFF'
        
        
    }
    
})



export default SearchBar;