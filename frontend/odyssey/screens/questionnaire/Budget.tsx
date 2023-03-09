import {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import CardButton from '../../components/CardButton';
import { useStores } from '../../mobx-models';
import { DataStore } from 'aws-amplify';
import { Questionnaire } from '../../src/models';

const bgImage = require("../../assets/budget-bg.png")

const BudgetScreen = ({navigation}) => {
    const [dailyRange, setDailyRange] = useState<{min: number, max: number}>({min: 60, max: 5000})
    const [totalRange, setTotalRange] = useState<{min: number, max: number}>({min: 2000, max: 10000})
    const [isDaily, setIsDaily] = useState<boolean>(true)

    const {questionnaireStore, userStore} = useStores()

    const handleSubmit = () => {
        questionnaireStore.setIsBudgetPerDay(isDaily)

        if(isDaily) {
            questionnaireStore.setMinBudget(dailyRange.min)
            questionnaireStore.setMaxBudget(dailyRange.max)
        }
        else {
            questionnaireStore.setMinBudget(totalRange.min)
            questionnaireStore.setMaxBudget(totalRange.max)
        }
        
        console.log(questionnaireStore.startDate.toISOString().substring(0, 10))
        console.log(questionnaireStore.endDate.toISOString().substring(0, 10))

        DataStore.save(
            new Questionnaire({
                whereFrom: questionnaireStore.whereFrom,
                destination: questionnaireStore.destination, 
                planningOptions: questionnaireStore.planningOptions,
                startDate: questionnaireStore.startDate.toISOString().substring(0, 10),
                endDate: questionnaireStore.endDate.toISOString().substring(0, 10),
                activities: questionnaireStore.activities,
                isBudgetPerDay: questionnaireStore.isBudgetPerDay,
                minBudget: questionnaireStore.minBudget,
                maxBudget: questionnaireStore.maxBudget,
                interests: questionnaireStore.interests,
                tripReason: questionnaireStore.tripReason,
                userID: userStore.uid,
                status: ""
            })
        )
        navigation.navigate("QuestionnaireIdeasForYou")
    }

    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '220%'}}>
                <SafeAreaView>
             
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.navigate("QuestionnaireWhatDoYouWantToDo")}/>
                        <Header/>
                    
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>What's Your Budget?</Text>

                    <View style={styles.cardContent}>
                        <CardButton 
                        labelLeft={'Per Day'}
                        labelRight={'Total'} 
                        onPressLeft={() => setIsDaily(true)} 
                        onPressRight={() => setIsDaily(false)}/>
                        {isDaily ? (
                            <RangeSlider 
                            from={60} 
                            to={5000}
                            onChangeRange={(low, high) => setDailyRange(prev => ({...prev, min: low, max: high}))} 
                            onChangeLow={(low) => setDailyRange(prev => ({...prev, min: low}))}
                            onChangeHigh={(high) => setDailyRange(prev => ({...prev, max: high}))}
                            />
                        ) : (
                            <RangeSlider 
                            from={2000} 
                            to={10000}
                            onChangeRange={(low, high) => setTotalRange(prev => ({...prev, min: low, max: high}))} 
                            onChangeLow={(low) => setTotalRange(prev => ({...prev, min: low}))}
                            onChangeHigh={(high) => setTotalRange(prev => ({...prev, max: high}))}
                            />
                        )}
                    </View>
 
                        <Button 
                        style={styles.button} 
                        label="Next" 
                        onPress={handleSubmit}/>
                  
                        <ProgressBar style={styles.progressBar} progress={0.6} color="#FFBC59" />
 
                </SafeAreaView>
            </ImageBackground>
        </Screen>
    )
}

const styles = StyleSheet.create({
    progressBar:{
        marginTop: "15%", 
        marginLeft: 20, 
        marginRight:20, 
        height:'10%'
    },
    button:{
        marginTop: "11.5%", 
        justifyContent: 'center', 
        marginLeft:'18%',
        width:'65%',
        height:'10%'
    },
    header: {
        fontSize: 24,
        fontWeight:  '600',
        textAlign: "center",
        marginTop: "5%"
        
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'contain',
            height: 50,
            width: 50,

    },
    input: {
        height: '60%',
        width: '25%',
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 10,
        placeholderfontsize: 10,
      },
    secondary:{
        textAlign: "center",
        fontStyle: 'italic',
        marginTop: 27,
        fontSize: 20,
        fontWeight: '300'
    },
    // button:{
    //     justifyContent: 'center',
    //     marginTop: "10%",
    //     width: '10%'
    // },
    cardContent:{
        backgroundColor: '#F4F4F4',
        height: '45%',
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop:'10%',
        marginRight:'15%',
        marginLeft:'15%',
        marginBttom:'-15%',
        
    },

})

export default BudgetScreen;
