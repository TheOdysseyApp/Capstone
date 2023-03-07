import { useState } from 'react'
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import React from 'react';
import CheckBoxComponent from '../../components/CheckBox';
import planningHelp from '../../data/planningHelp.json'
import { useStores } from '../../mobx-models';

const bgImage = require("../../assets/what-interests-you-bg.png")

const PlanningHelpScreen = ({navigation}) => {
    const {questionnaireStore} = useStores()

    const handleSubmit = () => {
        const selectedItems = []
        planningHelp.map((item) => {
            if(item.checked) selectedItems.push(item.name)
        })

        if(selectedItems.length > 0) {
            questionnaireStore.setPlanningOptions(selectedItems)
            navigation.navigate("QuestionnaireHowLongWillYouBeThere")
        }
    }

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
                            {planningHelp.map((activity, index) => (
                                <CheckBoxComponent
                                    key={index}
                                    label={activity}
                                    initialState={activity.name}
                                    onChange={(result) => planningHelp[index].checked = result}
                                />
                            ))}
                        </View>
                        <View>
                            <Button 
                                style={{ marginTop: "30%", justifyContent: 'center', marginLeft:40}} 
                                label="Next" 
                                onPress={handleSubmit}
                            />
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
 
export default PlanningHelpScreen;