import * as React from 'react'
import {TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native'

type TabProps = {
    style?: ViewStyle
    textStyle?: TextStyle
    label: string
    onPress: () => void
}

const Tabs = ({style, textStyle, label, onPress}: TabProps) => {
    return (
        <TouchableOpacity style={[styles.tab, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: '#194260',
        width: '80%',
        padding: 20,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    }
})

export default Tabs;
