import { useState } from 'react'
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import React from 'react';
import CheckBoxComponent from '../../components/CheckBox';
import QuestionaireWhereAreYouTravelingTo from './QuestionaireWhereAreYouTravelingTo';

const bgImage = require("../../assets/what-interests-you-bg.png")

const QuestionnaireHelpPlanning = ({navigation}) => {
    const [checked, setChecked] = React.useState(false);
    const info = ["Where to stay", "What to do", "Where to work", "How to get there"];

    return (
<Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '118%'}}>
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.navigate("QuestionaireWhereAreYouTravelingTo")}/>
                        <Header/>
                    </View>
                        <View>
                            <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                            <Text style={styles.secondary}>What would you like help planning?</Text>
                            <Text style={styles.italics}>Select all that apply.</Text>
                        </View>
                        <View style={{marginTop:"10%", alignItems: 'center'}}>
                            {info.map((activity) => (
                                <CheckBoxComponent
                                    label={activity}
                                />
                            ))}
                        </View>
                        <View>
                            <Button style={{ marginTop: "30%", justifyContent: 'center', marginLeft:40}} label="Next" onPress={() => navigation.navigate("QuestionnaireHowLongWillYouBeThere")}/>
                        </View>
                        <View>
                            <ProgressBar style={{marginTop: 100, marginLeft: 20, marginRight:20, height:17, }}progress={0.3} color="#FFBC59" />
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
        marginTop: 27,
        fontSize: 20,
        fontWeight: '300'
    },
    button:{
        justifyContent: 'center',
        marginTop: "20%",
        width: '10%'
    },
    smallText:{
        textAlign: "center",
        fontStyle: 'italic',
        marginTop: 35,
        fontSize: 13,
        fontWeight: '300'
    },
    checkbox:{
        textAlign: "center",
        fontStyle: 'italic',
        top: 35,
        fontSize: 13,
        fontWeight: '300'
    },
    italics:{
        textAlign: "center",
        fontStyle: 'italic',
        marginTop: 27,
        fontSize: 18,
        fontWeight: '300',
        fontFamily: 'Cochin'
    }
})
 
export default QuestionnaireHelpPlanning;