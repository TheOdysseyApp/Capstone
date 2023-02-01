import {SafeAreaView, Image} from 'react-native'

const Header = () => {
    return (
        <SafeAreaView style={{alignItems: 'center'}}>
                <Image style={{height: 100,resizeMode: "contain"}} source={require("../assets/odyssey-logo-1.png")}/>
        </SafeAreaView>
    )
}

export default Header;