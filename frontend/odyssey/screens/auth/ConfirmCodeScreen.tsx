import { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { Auth, Hub } from 'aws-amplify';
import QuestionnaireStartScreen from '../questionnaire/QuestionnaireStartScreen';

const ConfirmCodeScreen = ({route, navigation}) => {
    const {email} = route.params
    const [code, setCode] = useState("")

    useEffect(() => {
        Hub.listen('auth', ({payload}) => {
            const { event } = payload;
            if (event === 'autoSignIn') {
                const user = payload.data;
                // assign user, navigate to Home?
                console.log(user)
                navigation.navigate("QuestionnaireStart")
            } else if (event === 'autoSignIn_failure') {
                // redirect to sign in page
                console.log("Error with auto sign in ...")
                navigation.navigate("Login")
            }
        })
    }, [])

    const confirmCode = async () => {
        try {
            await Auth.confirmSignUp(email, code)
            console.log("Successfully accepted code!")
        }
        catch(error) {
            console.log("Error confirming code: " + error)
        }
    }

    const resendCode = async () => {
        try {
            await Auth.resendSignUp(email)
        }
        catch (error) {
            console.log("Error resending Auth code: " + error)
        }
    }

    return (
        <Screen preset="scroll">
        <SafeAreaView>
            <Header />
        </SafeAreaView>

        {/*  Lets Get to Planning your trip goes here*/}
        <View>
            <Image source={require("../../assets/login-register-backdrop.png")} style={{alignItems: 'center',width: '100%'}}/>
            <View style={styles.tagline}>
                <Text style={styles.taglineText}>Let's get to planning your next trip!</Text>
            </View>
        </View>

        {/* Text inputs and login info */}
        <View style={styles.inputContainer}>
            <Text style={styles.header}>Confirm Email</Text>
                <Text style={styles.confirmCode}>Enter the code sent to: <Text style={{fontWeight: 'bold'}}>{email}</Text></Text>
                <InputField title="Code" text={code} placeholder="" onChangeText={(text) => setCode(text)} keyboardType={'number-pad'}/>
                <Text style={styles.resendText}>Didn't get one? {<Text style={styles.resendLink} onPress={resendCode}>Resend code.</Text>}</Text>
                <Button style={{marginTop: "5%"}} label="Register" onPress={confirmCode}/>
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
        marginBottom: '10%',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: '8%',
        marginBottom: '5%'
    },
    confirmCode: {
        width: '80%',
        textAlign: 'left', 
        fontSize: 16,
        marginBottom: '5%'
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
    },
    resendText: {
        fontSize: 14,
    },
    resendLink: {
        color: "#194260",
        textDecorationLine: 'underline'
    }
})

export default ConfirmCodeScreen;