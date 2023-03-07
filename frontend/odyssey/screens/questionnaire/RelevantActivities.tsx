import { useState } from 'react'
import React from 'react';
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import {AntDesign } from '@expo/vector-icons';
import {ProgressBar} from 'react-native-paper';
import {Text, View, StyleSheet, ImageBackground} from "react-native";
import CheckBoxComponent from '../../components/CheckBox';
import {SafeAreaView} from 'react-native-safe-area-context';
import activities from '../../data/whatToDo.json'
import { useStores } from '../../mobx-models';

const bgImage = require("../../assets/what-do-bg.png") // change

const RelevantActivitiesScreen = ({navigation}) => {
    const {questionnaireStore} = useStores()

    const handleSubmit = () => {
        const selectedActivities = []
        activities.map((activity) => {
            if(activity.checked) selectedActivities.push(activity.name)
        })

        if(selectedActivities.length > 0) {
            questionnaireStore.setActivities(selectedActivities)
            console.log(questionnaireStore)
            navigation.navigate("QuestionnaireWhatsYourBudget")
        }
    }

    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '120%'}}>
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.navigate("QuestionnaireHowLongWillYouBeThere")}/>
                        <Header/>
                    </View>
                    <View>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>What do you want to do while you're there?</Text>
                    </View>
                    <View style={{marginTop:"5%", alignItems: 'center'}}>
                        {activities.map((activity, index) => (
                            <CheckBoxComponent
                                key={index}
                                label={activity.name}
                                initialState={activity.checked}
                                onChange={(result) => activities[index].checked = result}
                            />
                        ))}
                    </View>

                    <View>
                        <Button 
                            style={{ marginTop: "8%", justifyContent: 'center', marginLeft:40}} 
                            label="Next" 
                            onPress={handleSubmit}
                        />
                    </View>

                    <View>
                        <ProgressBar style={{marginTop: "5%", marginLeft: 20, marginRight:20, height:17}}progress={0.6} color="#FFBC59" />
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

export default RelevantActivitiesScreen;