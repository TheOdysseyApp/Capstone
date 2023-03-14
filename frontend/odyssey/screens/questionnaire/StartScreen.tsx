import { useState } from 'react'
import { ScrollView, Text, View, Image, StyleSheet, ImageBackground, Dimensions } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar} from 'react-native-paper';
import {Auth} from 'aws-amplify'

const bgImage = require("../../assets/questionnaire-start-screen-bg.png")

const StartScreen = ({navigation}) => {
    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            navigation.navigate("Login")
        }
        catch (error) {
            console.log("Error signing out" + error)
        }
    }
    
    return (
        <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: Dimensions.get('window').height}}>
            <Screen preset="scroll">
                <SafeAreaView>
                    <View>
                        <Header/>
                    </View>
                        <View>
                            <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                            <Text style={styles.secondary}>Where are you traveling to?</Text>
                            <Button style={{ marginTop: "17%", justifyContent: 'center', marginLeft:40}} label="I’m flexible, let’s explore!" onPress={() => navigation.navigate("QuestionaireTravelingFrom", {knowsDestination: false})}/>
                            <Button style={{marginTop: "5%", justifyContent: 'center', marginLeft:40}} label="I know where I’m traveling" onPress={() => navigation.navigate("QuestionaireTravelingFrom", {knowsDestination: true})}/>
                            <Button style={{marginTop: "5%", justifyContent: 'center', marginLeft:40}} label="Sign Out" onPress={handleSignOut}/>
                        </View>
                        <View>
                            <ProgressBar style={styles.progressBar}progress={0.05} color="#FFBC59" />
                        </View>
                </SafeAreaView>
            </Screen>
        </ImageBackground>    
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight:  '600',
        textAlign: "center",
        marginTop: "1%"
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'contain',
            height: 50,
            width: 50,

    },
    secondary:{
        textAlign: "center",
        fontStyle: 'italic',
        top: 27,
        fontSize: 20,
        fontWeight: '300'
    },
    button:{
        justifyContent: 'center',
        marginTop: "20%",
        width: '10%'
    },
    progressBar:{
        width: '90%',
        alignSelf: 'center', 
        height: 17,
        marginTop: '10%'
    },
})

export default StartScreen;