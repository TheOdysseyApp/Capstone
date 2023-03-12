
import * as React from 'react'
import {TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native'

type ButtonProps = {
    style?: ViewStyle
    textStyle?: TextStyle
    label: string
    onPress: () => void
    active: boolean
}

const MenuButton = ({style, textStyle, label, onPress, active}: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, style, active ? {backgroundColor:  'gray'} : null]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
        width: '24%',
        height: '90%',
        paddingTop: '2%',
        borderRadius: 8,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        margin: 5
        
    },
    text: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 11,
        fontWeight: '300'
    }
    
})

export default MenuButton;