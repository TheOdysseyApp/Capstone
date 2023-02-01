import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

type ImageButtonProps = {
    source: any
    onPress: () => void
}

const ImageButton = ({source, onPress}: ImageButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image style={styles.image} source={source}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        paddingVertical: '2%',

        paddingHorizontal: '6%',
        borderRadius: 5
    }, 
    image: {
        height: 30, 
        width: 30, 
        resizeMode: "contain"
    }
})

export default ImageButton;