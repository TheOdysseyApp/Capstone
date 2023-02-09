import { useState } from 'react'
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import ImageButton from "../../components/ImageButton";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { Ionicons } from '@expo/vector-icons';
import {ProgressBar, Checkbox} from 'react-native-paper';
import {AntDesign } from '@expo/vector-icons'; 
import React from 'react';
import {Text, StyleSheet, View, ImageBackground,SafeAreaView} from 'react-native';
import CheckBoxComponent from '../../components/CheckBox';

const bgImage = require("../../assets/what-interests-you-bg.png")

const QuestionnaireWhatInterestsYou = ({navigation}) => {
    const [checked, setChecked] = React.useState(false);
    const info = ["Mountains", "Beach", "City","Rural/Countryside", "Lake"];
    return (
<Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '290%'}} >
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.navigate("QuestionnaireStart")}/>
                        <Header/>
                    </View>
                        <View>
                            <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                            <Text style={styles.secondary}>What interests you?</Text>
                            <Text style={styles.smallText}>Select all that apply.</Text>
                        </View>
                        <View style={{marginTop:"10%", alignItems: 'center'}}>
                            {info.map((destination) => (
                                <CheckBoxComponent
                                    label={destination}
                                />
                            ))}

                        </View>

                        <View>
                        <Button style={{ marginTop: "17%", justifyContent: 'center', marginLeft:40}} label="Next" onPress={() => navigation.navigate("QuestionnaireWhatBringsYouHere")}/>
                        </View>

                        <View>
                            <ProgressBar style={{marginTop: 100, marginLeft: 20, marginRight:20, height:17}}progress={0.1} color="#FFBC59" />
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

export default QuestionnaireWhatInterestsYou;
