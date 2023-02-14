import { useState } from 'react'
import React from 'react';
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import {AntDesign } from '@expo/vector-icons';
import {ProgressBar, Checkbox} from 'react-native-paper';
import {Text, View, StyleSheet, SafeAreaView, ImageBackground} from "react-native";
import CheckBoxComponent from '../../components/CheckBox';

const bgImage = require("../../assets/what-interests-you-bg.png") // change

const QuestionnaireWhatDoYouWantToDo = ({navigation}) => {
    const [checked, setChecked] = React.useState(false);
    const info = ["Explore the cuisine", "Mellow outdoor activities", "Challenging outdoor activities", 
    "Inner work", "Work at coworking spaces", "Meet others", "Shopping", "Go off-grid/unplug"];

    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '100%'}}>
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.navigate("QuestionnaireHowLongWillYouBeThere")}/>
                        <Header/>
                    </View>
                    <View>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>What do you want to do while you're there?</Text>
                    </View>
                    <View style={{marginTop:"10%", alignItems: 'center'}}>
                        {info.map((activity) => (
                            <CheckBoxComponent
                                label={activity}
                            />
                        ))}
                    </View>

                    <View>
                        <Button style={{ marginTop: "8%", justifyContent: 'center', marginLeft:40}} label="Next" onPress={() => navigation.navigate("QuestionnaireWhatsYourBudget")}/>
                    </View>

                    <View>
                        <ProgressBar style={{marginTop: 50, marginLeft: 20, marginRight:20, height:17}}progress={0.6} color="#FFBC59" />
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
    }
})

export default QuestionnaireWhatDoYouWantToDo;
