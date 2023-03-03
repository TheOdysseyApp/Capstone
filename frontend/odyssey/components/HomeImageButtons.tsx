import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

type ImageButtonProps = {
    source: any
    onPress: () => void
}

const HomeImageButtons = ({source, onPress}: ImageButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image style={styles.image} source={source}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: '4%',
        paddingHorizontal: '12%',
        borderRadius: 5,
        justifyContent: 'center'
    }, 
    image: {
        height: 150, 
        width: 328, 
        resizeMode: "contain"
    }
})

export default HomeImageButtons;