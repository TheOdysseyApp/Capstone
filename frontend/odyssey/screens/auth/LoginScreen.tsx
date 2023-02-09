import {useState, useEffect} from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native"
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import ImageButton from '../../components/ImageButton';
import Header from '../../components/Header';
import Screen from "../../components/Screen"
import {Auth} from 'aws-amplify'
import Calendar from "../../components/Calendar";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    // DELETE THIS
    // const [showCalendar, setShowCalendar] = useState<boolean>(false)

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((user => {
                console.log("USER LOGGED IN")
                navigation.navigate("Home")
            }))
            .catch((error => {
                console.log("Not logged in")
            }))
    }, [])

    const signIn = async () => {
        try {
            await Auth.signIn(email, password)
            navigation.navigate("Home")
        }
        catch(error) {
            console.log("Error logging in: " + error)
            if(error.message.includes("User is not confirmed.")) {
                navigation.navigate("Confirm", {email: email})
            }
        }
    }

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
                <InputField title="Email" text={email} placeholder="Email" onChangeText={(text) => setEmail(text)} autoCap={'none'}/>
                <InputField title="Password" text={password} placeholder="Password" onChangeText={(text) => setPassword(text)} secure={true}/>
                <Text style={{ width: '80%', textDecorationLine: 'underline', color: '#194260', fontWeight: 'bold', textAlign: 'right', marginTop: "-2%"}} onPress={() => navigation.navigate("ForgotPassword")}>Forgot Password?</Text>

                <Button style={{marginTop: "5%"}} label="Login" onPress={signIn}/>
                
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