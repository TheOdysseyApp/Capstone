import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

type ImageButtonProps = {
    source: any
    onPress: () => void
}

const TripSuggestion = ({source, onPress}: ImageButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image style={styles.image} source={source}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: '4%',
        paddingHorizontal: '8%',
        borderRadius: 5,
        justifyContent: 'center'
    }, 
    image: {
        height: 193, 
        width: 120, 
        resizeMode: "contain"
    }
})

export default TripSuggestion;