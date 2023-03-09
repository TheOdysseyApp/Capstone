import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import Button from "../../components/Button";
import HomeImageButtons from "../../components/HomeImageButtons";
import TripSuggestion from "../../components/TripSuggestion";

const bgImage = require("../../assets/what-interests-you-bg.png")

const HomeScreen = ({navigation}) => {
    return (
        <Screen preset="scroll">
            <SafeAreaView>
                <Header/>
            </SafeAreaView>

            <View>
                <Button textStyle={{fontSize: 13}} style={{ paddingVertical: '2%', width: '45%', marginBottom: "5%", marginTop: "5%", marginLeft:'27%'}} label="Plan a Trip" onPress={() => navigation.navigate("QuestionnaireStartScreen")}/>
            </View>

            <View>
                <HomeImageButtons source={require("../../assets/book-a-stay.png")} onPress={() => console.log("Book a Stay pressed")}/>
                <HomeImageButtons source={require("../../assets/book-an-adventure.png")} onPress={() => console.log("Book an Adventure pressed")}/>
                <HomeImageButtons source={require("../../assets/find-a-coworking-space.png")} onPress={() => console.log("Find a Coworking Space pressed")}/>
            </View>

            <View>
                <Text style={styles.header}>Browse Suggested Remote Trips</Text>
            </View>

            <View style={styles.imageButtonContainer}>
                <TripSuggestion source={require("../../assets/monteverde-cr.png")} onPress={() => console.log("Monteverde Trip Suggestion pressed")}/>
                <TripSuggestion source={require("../../assets/tulum-mx.png")} onPress={() => console.log("Tulum Trip Suggestion pressed")}/>
                <TripSuggestion source={require("../../assets/sedona-az.png")} onPress={() => console.log("Sedona Trip Suggestion pressed")}/>
            </View>

            <View>
                <Text style={styles.header}>Not sure where? Let's explore!</Text>
                <Button textStyle={{fontSize: 13}} style={{ paddingVertical: '2%', width: '45%', marginBottom: "5%", marginTop: "3%", marginLeft:'27%'}} label="Plan a Trip" onPress={() => navigation.navigate("QuestionnaireStartScreen")}/>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: "center",
        marginVertical: '5%'
    },
    imageButtonContainer: {
        flexDirection: 'row',
        width: "80%",
        justifyContent: 'space-evenly',
        marginBottom: '4%',
        marginHorizontal: '10%'
    },
})

export default HomeScreen;