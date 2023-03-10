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
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '112%'}} >
                <SafeAreaView>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>What interests you?</Text>
                        <Text style={styles.smallText}>Select all that apply.</Text>
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
                        <Button style={styles.button} label="Next" onPress={handleSubmit}/>
                        <ProgressBar style={styles.progressBar}progress={0.2} color="#FFBC59" />
                        
                </SafeAreaView>
            </ImageBackground>
        </Screen>
    )
}

const styles = StyleSheet.create({
    progressBar:{
        marginTop: "20%", 
        marginLeft: '10%', 
        marginRight:'10%', 
        height:'11%'
    },
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
        marginTop: "16.5%",
        justifyContent: 'center', 
        // marginLeft:40,
        // marginTop: "40%", 
        // justifyContent: 'center', 
        marginLeft:'18%',
        height: '10%',
        width: '65%',
    },
    smallText:{
        textAlign: "center",
        fontStyle: 'italic',
        marginTop: 10,
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
