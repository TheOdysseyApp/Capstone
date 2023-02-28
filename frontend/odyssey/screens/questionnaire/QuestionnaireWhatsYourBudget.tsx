import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import BudgetSlider from '../../components/BudgetSlider'

const bgImage = require("../../assets/whats-your-budget-bg.png")

const QuestionnaireWhatsYourBudget = ({navigation}) => {
    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '290%'}}>
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.navigate("QuestionnaireWhatDoYouWantToDo")}/>
                        <Header/>
                    </View>
                    <View>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>What's Your Budget?</Text>
                    </View>
                    <View>
                        <BudgetSlider/>
                    </View>
                    <View>
                        <Button style={{ marginTop: "17%", justifyContent: 'center', marginLeft:40}} label="Next" onPress={() => navigation.navigate("QuestionnaireIdeasForYou")}/>
                    </View>
                    <View>
                        <ProgressBar style={{marginTop: 70, marginLeft: 20, marginRight:20, height:17}}progress={0.8} color="#FFBC59" />
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
})

export default QuestionnaireWhatsYourBudget;
