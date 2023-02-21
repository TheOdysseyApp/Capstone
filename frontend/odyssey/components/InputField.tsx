import { useEffect, useState } from 'react';
import {Text, TextInput, View, StyleSheet, ViewStyle, TextStyle} from 'react-native'

type InputFieldProps = {
    er?: any
    style?: ViewStyle;
    titleStyle?: TextStyle;
    placeholder: string;
    text: string;
    title: string;
    onChangeText: (a: string) => void;
    secure?: boolean
    keyboardType?: any
    autoCap?: any
}

const InputField = ({style, titleStyle, placeholder, title, text, secure, onChangeText, er, keyboardType, autoCap}: InputFieldProps) => {
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setError(er)
    }, [er])

    return (
        <View style={styles.container}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <TextInput secureTextEntry={secure} keyboardType={keyboardType} style={[styles.inputContainer, style, {borderWidth: error ? 1 : 0, borderColor: error && 'red'}]} placeholder={placeholder} value={text} onChangeText={onChangeText} autoCapitalize={autoCap}/>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginBottom: '3%',
    },
    inputContainer: {
        height: 50,
        padding: '2%',
        width: '100%',
        backgroundColor: '#D3D3D3',
        fontSize: 16, 
        borderRadius: 5
    },
    title: {
        fontSize: 20,
        marginBottom: "2%"
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    }
})

export default InputField;