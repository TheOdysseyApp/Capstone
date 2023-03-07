import { useEffect, useState } from 'react'
import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import ProgressBar from 'react-native-paper';
import Button from '../../components/Button';
import { AntDesign } from '@expo/vector-icons'; 
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useStores } from '../../mobx-models';

const bgImage = require("../../assets/ideas-for-you-bg.png")

const EndScreen = ({navigation}) => {
    const {questionnaireStore} = useStores()

    useEffect(() => {
        console.log(questionnaireStore)
    }, [])
    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '185%'}}>
                <SafeAreaView>
                    <View style={{}}>
                        <Header/>
                    </View>
                    
                        <Text style={styles.header}>We’ve got some great{"\n"}ideas for you!</Text>
                    <View style={styles.textcontainer}>
                        <Text style={styles.mainText}>
                        The Odyssey app is still in beta testing.
                        Soon we'll have instant results consisting of
                        detailed itineraries with suggested locations
                        to visit, where to book, what to do, and
                        available coworking spaces.
                        </Text>
                        <Text style={styles.bottomText}>
                        Until then, please give us 24 hours to
                        complete your itinerary. Be sure to check
                        your email!
                        </Text>
                    </View>

                </SafeAreaView>
            </ImageBackground>
        </Screen>
    )
}

const styles = StyleSheet.create({
    textcontainer:{
        alignContent: "center",
        // marginRight:'19%'
        paddingRight:'13%',
        paddingLeft:'13%'
    },
    header: {
        fontSize: 24,
        fontWeight:  '600',
        textAlign: "center",
        marginTop: "3%",
        color: 'white'
    },
    mainText:{
        textAlignVertical: "center",
        textAlign: "center",
        marginTop: '20%',
        fontSize: 16,
        fontWeight: '300',
        color: 'white'
    },
    bottomText:{
        textAlignVertical: "center",
        textAlign: "center",
        marginTop: '7%',
        fontSize: 16,
        fontWeight: '600',
        color: 'white'
        
    }
})

export default EndScreen;
