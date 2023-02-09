import * as React from 'react'
import {TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native'

type ButtonProps = {
    style?: ViewStyle
    textStyle?: TextStyle
    label: string
    onPress: () => void
}

const CardButton = ({style, textStyle, label, onPress}: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

//TODO use a different styling convention
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#194260',
        width: '80%',
        padding: 20,
        borderRadius: 0
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 12,
    }
})

export default CardButton;