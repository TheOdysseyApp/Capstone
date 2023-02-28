import * as React from 'react'
import {TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle, View} from 'react-native'

type ButtonProps = {
    style?: ViewStyle
    textStyle?: TextStyle
    label: string
    onPress: () => void
}

const CardButton = ({style, textStyle, label, onPress}: ButtonProps) => {
    return (
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <Text style={[styles.text, textStyle]}>Per Day</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonNotActive, style]} onPress={onPress}>
                <Text style={[styles.text, textStyle]}>Total</Text>
            </TouchableOpacity>
        </View>
        
    )
}

//TODO use a different styling convention
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F4F4F4',
        width: '50%',
        padding: 20,
    //    borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        // borderWidth: 0.5,
        
    },
    buttonNotActive: {
        backgroundColor: '#D9D9D9',
        width: '50%',
        padding: 20,
       borderTopRightRadius: 10,
       borderBottomLeftRadius: 10,
       borderRightWidth: 0.5,
       borderBottomWidth: 0.5,
       borderLeftWidth: 0.5,
       
        // borderTopLeftRadius: 10,
        
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 12,
    }
})

export default CardButton;