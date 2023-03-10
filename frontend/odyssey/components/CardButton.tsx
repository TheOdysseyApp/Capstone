import * as React from 'react'
import { useState } from 'react'
import {TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle, View} from 'react-native'

type ButtonProps = {
    style?: ViewStyle
    textStyle?: TextStyle
    labelLeft: string
    labelRight: string
    onPressLeft: () => void
    onPressRight: () => void
}

const CardButton = ({style, textStyle, labelLeft, labelRight, onPressLeft, onPressRight}: ButtonProps) => {
    const [isLeftActive, setIsLeftActive] = useState<boolean>(true)
    
    return (
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
                style={[
                    isLeftActive ? styles.button : styles.buttonNotActive, 
                    {
                        borderTopLeftRadius: 10,
                        borderRightWidth: !isLeftActive ? 0.5 : 0,
                        borderBottomWidth: !isLeftActive ? 0.5 : 0,
                        borderBottomRightRadius: !isLeftActive ? 10 : 0,   
                    }, 
                    style]} 
                onPress={() => {
                    onPressLeft()
                    setIsLeftActive(true)
                }}
            >
                <Text style={[styles.text, textStyle]}>{labelLeft}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[
                    !isLeftActive ? styles.button : styles.buttonNotActive, 
                    {
                        borderTopRightRadius: 10,
                        borderLeftWidth: isLeftActive ? 0.5 : 0,
                        borderBottomWidth: isLeftActive ? 0.5 : 0,
                        borderBottomLeftRadius: isLeftActive ? 10 : 0,
                    }, 
                    style]} 
                onPress={() => {
                    onPressRight()
                    setIsLeftActive(false)
                }}
            >
                <Text style={[styles.text, textStyle]}>{labelRight}</Text>
            </TouchableOpacity>
        </View>
        
    )
}

//TODO use a different styling convention
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F4F4F4',
        width: '49.7%',
        padding: 20,
        // borderTopLeftRadius: 10,
    },
    buttonNotActive: {
        backgroundColor: '#D9D9D9',
        width: '50%',
        padding: 20,
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 11,
    }
})

export default CardButton;