import { useState } from "react"
import {SafeAreaView, View, Image, Text, StyleSheet} from 'react-native'
import Screen from "../components/Screen"
import InputField from "../components/InputField"
import Button from "../components/Button"
import Header from "../components/Header"
import {Auth} from 'aws-amplify'


const ResetPassword = ({route, navigation}) => {
    const {email} = route.params
    const [code, setCode] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const resetPassword = async () => {
        try {
            await Auth.forgotPasswordSubmit(email, code, password)
            navigation.navigate("Login")
        }
        catch(error) {
            console.log("Error setting new password: " + error)
        }
    }


    return (
        <Screen preset="scroll">
            <SafeAreaView>
                <Header />
            </SafeAreaView>

            {/*  Lets Get to Planning your trip goes here*/}
            <View>
                <Image source={require("../assets/login-register-backdrop.png")} style={{alignItems: 'center',width: '100%'}}/>
                <View style={styles.tagline}>
                    <Text style={styles.taglineText}>Let's get to planning your next trip!</Text>
                </View>
            </View>

            {/* Text inputs and login info */}
            <View style={styles.inputContainer}>
                <Text style={styles.header}>Reset Password</Text>
                <InputField title="Code" text={code} placeholder="000111" onChangeText={(text) => setCode(text)} />
                <InputField title="New Password" text={password} placeholder="Password" onChangeText={(text) => setPassword(text)} secure/>
                <InputField title="Confirm New Password" text={confirmPassword} placeholder="Confirm Password" onChangeText={(text) => setConfirmPassword(text)} secure/>
                <Button style={{marginTop: "5%"}} label="Reset Password" onPress={resetPassword}/>
 
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
    directions: {
        width: '80%',
        fontSize: 16,
        marginBottom: '8%',
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

export default ResetPassword