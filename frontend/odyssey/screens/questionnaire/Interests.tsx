import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import {ProgressBar} from 'react-native-paper';
import {AntDesign } from '@expo/vector-icons'; 
import React from 'react';
import {Text, StyleSheet, View, ImageBackground, Dimensions} from 'react-native';
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
        <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: Dimensions.get('window').height}} >
            <Screen preset="scroll">
                <SafeAreaView>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>What interests you?</Text>
                        <Text style={styles.italics}>Select all that apply.</Text>
                        <View style={{ width: '80%', alignSelf: 'center', marginVertical: '5%' }}>
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
                        <Button style={styles.button} label="Next" onPress={handleSubmit}/>
                        <ProgressBar style={styles.progressBar} progress={0.2} color="#FFBC59" />
                        
                </SafeAreaView>
            </Screen>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    progressBar:{
        width: '90%',
        alignSelf: 'center', 
        height: 17,
        marginTop: '10%'
    },
    header: {
        fontSize: 24,
        fontWeight:  '600',
        textAlign: "center",
        marginTop: "1%"
    },
    secondary:{
        textAlign: "center",
        fontStyle: 'italic',
        marginTop: 27,
        fontSize: 20,
        fontWeight: '300'
    },
    button:{
        alignSelf: 'center',
        marginTop: '5%'
    },
    italics:{
        textAlign: "center",
        fontStyle: 'italic',
        marginTop: 27,
        fontSize: 18,
        fontWeight: '300',
        fontFamily: 'Cochin'
    },
})

export default InterestsScreen;
