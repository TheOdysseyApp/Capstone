import { useEffect, } from 'react'
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useStores } from '../../mobx-models';


const bgImage = require("../../assets/ideas-for-you-bg.png")

const EndScreen = ({navigation}) => {
    const {questionnaireStore} = useStores()

const dateFormatter = new Intl.DateTimeFormat(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    })

    useEffect(() => {
        console.log(questionnaireStore)

    // will use later: body of email 

    //TODO: add name of user from userstore
    // 'kassabm@uci.edu',
    //     'User\'s Questionnaire Responses',
    // `User's DynamoDB ID: ${questionnaireStore.uid}\n
    // Depature location: ${questionnaireStore.whereFrom}\n 
    // Destination location: ${questionnaireStore.destination}\n
    // Need help planning: ${questionnaireStore.planningOptions}\n
    // Duration of trip: ${questionnaireStore.duration}\n
    // Month of trip: ${questionnaireStore.month}\n
    // Trip Start Date: ${dateFormatter.format(questionnaireStore.startDate)}\n
    // Trip End Date: ${dateFormatter.format(questionnaireStore.endDate)}\n
    // Activities Interested In: ${questionnaireStore.activities}\n
    // Is Budget Per Day? (or Total): ${questionnaireStore.isBudgetPerDay}
    // Minimum Budget: ${questionnaireStore.minBudget}\n
    // Depature location: ${questionnaireStore.maxBudget}\n
    // Activities interested in: ${questionnaireStore.interests}\n
    // Reason for Trip: ${questionnaireStore.maxBudget}`
    
    }, [])
    return (
        <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: Dimensions.get('window').height}}>
            <Screen preset="scroll">
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
            </Screen>
        </ImageBackground>
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
