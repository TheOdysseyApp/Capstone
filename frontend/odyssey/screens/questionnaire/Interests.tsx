import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import {ProgressBar} from 'react-native-paper';
import {AntDesign } from '@expo/vector-icons'; 
import React from 'react';
import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBoxComponent from '../../components/CheckBox';
import interestsData from '../../data/interests.json'
import { useStores } from "../../mobx-models";

const bgImage = require("../../assets/what-interests-you-bg.png")

const InterestsScreen = ({navigation}) => {
    const {questionnaireStore} = useStores()

    const handleSubmit = () => {
        const interests = []
        interestsData.map((interest) => {
            if(interest.checked) interests.push(interest.name)
        })
        
        if(interests.length > 0) {
            questionnaireStore.setInterests(interests)
            console.log(questionnaireStore)
            navigation.navigate("QuestionnaireWhatBringsYouHere")
        }
        else {
            //error checking
        }
    }
    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '130%'}} >
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                    </View>
                        <View>
                            <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                            <Text style={styles.secondary}>What interests you?</Text>
                            <Text style={styles.smallText}>Select all that apply.</Text>
                        </View>
                        <View style={{marginTop:"10%", alignItems: 'center'}}>
                            {interestsData.map((destination, index) => (
                                <CheckBoxComponent
                                    key={index}
                                    label={destination.name}
                                    initialState={destination.checked}
                                    onChange={(result) => 
                                        interestsData[index].checked = result
                                    }
                                />
                            ))}

                        </View>

                        <View>
                        <Button style={{ marginTop: "17%", justifyContent: 'center', marginLeft:40}} label="Next" onPress={handleSubmit}/>
                        </View>

                        <View>
                            <ProgressBar style={{marginTop: "12%", marginLeft: 20, marginRight:20, height:17}}progress={0.1} color="#FFBC59" />
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

export default InterestsScreen;
