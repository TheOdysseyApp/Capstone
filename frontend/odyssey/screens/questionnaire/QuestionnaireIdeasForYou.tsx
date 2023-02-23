import { useState } from 'react'
import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import ProgressBar from 'react-native-paper';
import Button from '../../components/Button';
import { AntDesign } from '@expo/vector-icons'; 
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const bgImage = require("../../assets/ideas-for-you-bg.png")

const QuestionnaireIdeasForYou = ({navigation}) => {
    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '290%'}}>
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.navigate("QuestionnaireWhatsYourBudget")}/>
                        <Header/>
                    </View>
                    <View>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.mainText}>{`
                        The Odyssey app is still in beta testing.
                        Soon we'll have instant results consisting of
                        detailed itineraries with suggested locations
                        to visit, where to book, what to do, and
                        available coworking spaces.
                        `}</Text>
                        <Text style={styles.bottomText}>{`
                        Until then, please give us 24 hours to
                        complete your itinerary. Be sure to check
                        your email!
                        `}
                        </Text>
                    </View>

                </SafeAreaView>
            </ImageBackground>
        </Screen>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight:  '600',
        textAlign: "center",
        marginTop: "1%",
        color: 'white'
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
        marginTop: 27,
        fontSize: 20,
        fontWeight: '300'
    },
    mainText:{
        textAlign: "center",
        marginTop: 35,
        fontSize: 16,
        fontWeight: '300',
        color: 'white'
    },
    bottomText:{
        textAlign: "center",
        marginTop: 65,
        fontSize: 16,
        fontWeight: '400',
        color: 'white'
    },
    button:{
        justifyContent: 'center',
        marginTop: "20%",
        width: '10%'
    }
})

export default QuestionnaireIdeasForYou;
