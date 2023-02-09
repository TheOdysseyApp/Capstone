import { useState } from 'react'
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import ImageButton from "../../components/ImageButton";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")


    return (
        <Screen preset="scroll">
            <SafeAreaView>
                {/* <TouchableOpacity  style={{position: 'absolute', top: 50, left: 10}}  onPress={() => console.log("Back")}>
                    <Ionicons name="chevron-back" size={24} color="#"/>
                </TouchableOpacity> */}

                {/* Odyssey Logo goes here */}
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
                    <Text style={styles.header}>Sign Up</Text>

                    <View style={styles.imageButtonContainer}>
                        <ImageButton source={require("../../assets/google-logo.png")} onPress={() => console.log("Google pressed")}/>
                        <ImageButton source={require("../../assets/facebook-logo.png")} onPress={() => console.log("Facebook pressed")}/>
                        <ImageButton source={require("../../assets/apple-logo.png")} onPress={() => console.log("Apple pressed")}/>
                    </View>

                    <Text style={{marginVertical: "5%", color: '#999999'}}>Or register with email...</Text>
                    <InputField title="" text={email} placeholder="Email" onChangeText={(text) => setEmail(text)} />
                    <InputField title="" text={firstName} placeholder="First Name" onChangeText={(text) => setFirstName(text)} />
                    {/* <InputField title="" text={lastName} placeholder="Last Name" onChangeText={(text) => setLastName(text)} /> */}
                    <InputField title="" text={password} placeholder="Password" onChangeText={(text) => setPassword(text)} secure={true}/>
                    <InputField title="" text={confirmPassword} placeholder="Verify Password" onChangeText={(text) => setConfirmPassword(text)} secure={true}/>
                    <Button style={{marginTop: "5%"}} label="Register" onPress={() => navigation.navigate("QuestionnaireStart")}/>
                    <Text style={styles.registerText}>Already have an account? {<Text onPress={() => navigation.navigate("Login")} style={{textDecorationLine: 'underline', color: '#194260', fontWeight: 'bold'}}>Go Here</Text>}</Text>                
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
        marginBottom: '10%'
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: '8%',
        marginBottom: '4%'
    },
    registerText: {
        marginTop: '2%',
        fontSize: 16
    },
    imageButtonContainer: {
        flexDirection: 'row',
        width: "80%",
        justifyContent: 'space-evenly',
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

export default RegisterScreen;