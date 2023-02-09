import * as React from 'react'
import {TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native'

type ButtonProps = {
    style?: ViewStyle
    textStyle?: TextStyle
    label: string
    onPress: () => void
}

const SearchButton = ({style, textStyle, label, onPress}: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#194260',
        width: '20%',
        marginTop: '12%',
        height: '50%',
        borderRadius: 4,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    }
})

export default SearchButton;