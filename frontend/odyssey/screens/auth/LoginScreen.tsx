import {useState} from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native"
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import ImageButton from '../../components/ImageButton';
import Header from '../../components/Header';
import Screen from "../../components/Screen"
import Calendar from "../../components/Calendar";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    // DELETE THIS
    // const [showCalendar, setShowCalendar] = useState<boolean>(false)

    return (
        <Screen preset="scroll">
            <SafeAreaView>
                <Header />
            </SafeAreaView>

            {/*  Lets Get to Planning your trip goes here*/}
            <View>
                {/* Testing calendar component */}
                 <View>
                    <Calendar></Calendar>
                </View>

                <Image source={require("../../assets/login-register-backdrop.png")} style={{alignItems: 'center',width: '100%'}}/>
                <View style={styles.tagline}>
                    <Text style={styles.taglineText}>Let's get to planning your next trip!</Text>
                </View>
            </View>

            {/* Text inputs and login info */}
            <View style={styles.inputContainer}>
                <Text style={styles.header}>Login</Text>
                <InputField title="" text={email} placeholder="Email" onChangeText={(text) => setEmail(text)} />
                <InputField title="" text={password} placeholder="Password" onChangeText={(text) => setPassword(text)} secure={true}/>
                <Button style={{marginTop: "5%"}} label="Login" onPress={() => console.log("Trying to login")}/>
                
                <Text style={{marginVertical: "5%", color: '#999999'}}>Or log in with...</Text>
                <View style={styles.imageButtonContainer}>
                    <ImageButton source={require("../../assets/google-logo.png")} onPress={() => console.log("Google pressed")}/>
                    <ImageButton source={require("../../assets/facebook-logo.png")} onPress={() => console.log("Facebook pressed")}/>
                    <ImageButton source={require("../../assets/apple-logo.png")} onPress={() => console.log("Apple pressed")}/>
                </View>
            
                <Text style={styles.registerText}>New to Odyssey? {<Text onPress={() => navigation.navigate("Register")} style={{textDecorationLine: 'underline', color: '#194260', fontWeight: 'bold'}}>Register Here</Text>}</Text>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        alignItems: 'center'
    },
    inputContainer: {
        flex: 6,
        alignItems: "center",
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginVertical: '8%'
    },
    registerText: {
        marginTop: '2%',
        fontSize: 16
    },
    imageButtonContainer: {
        flexDirection: 'row',
        width: "80%",
        justifyContent: 'space-evenly',
        marginBottom: '4%'
    },
    tagline: {
        position: 'absolute',
        left: 0, 
        right: 0,
        bottom: 10,
        alignItems: 'center'
    },
    taglineText: {
        color: 'white',
        fontSize: 20
    }
})

export default LoginScreen;