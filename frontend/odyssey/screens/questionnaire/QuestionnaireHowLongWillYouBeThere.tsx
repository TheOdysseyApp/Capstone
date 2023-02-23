import { useState } from 'react'
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import CardButton from "../../components/CardButton";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import Calendar from '../../components/Calendar';
import {ProgressBar, Card} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import CheckBoxComponent from '../../components/CheckBox';
import SelectCalendar from '../../components/SelectCalendar';

const bgImage = require("../../assets/how-long-will-you-be-there-bg.png") //change this later?

const QuestionnaireHowLongWillYouBeThere = ({navigation}) => {
    const info = ["Work & Travel", "Self Exploration", "Friends Trip", "Romantic Trip", "Family Trip", "Adventure"];
    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '140%'}} >
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.navigate("QuestionnaireWhatBringsYouHere")}/>
                        <Header/>
                    </View>
                    <View>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>How long will you be there?</Text>
                    </View>

                    <View style={styles.calendar}>
                        <View style={styles.containerStyle}>
                            <CardButton style={styles.cardButton} label="Choose Exact Dates"  onPress={() => navigation.navigate("")}/>
                            <CardButton style={styles.cardButtonInactive} label="I’m Flexible" onPress={() => navigation.navigate("")}/>
                        </View>
                        <Card>
                            <Card.Content style={styles.cardContent} >
                                <SelectCalendar/>
                            </Card.Content>
                        </Card>
                    </View>

                    <View>
                        <Button style={{ marginTop: "10%", justifyContent: 'center', marginLeft:40}} label="Next" onPress={() => navigation.navigate("QuestionnaireWhatDoYouWantToDo")}/>
                    </View>

                    <View>
                            <ProgressBar style={{marginTop: 70, marginLeft: 20, marginRight:20, height:17}}progress={0.45} color="#FFBC59" />
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
    cardContent:{
        backgroundColor: '#ECF0F3'
    },
    cardButton:{
        backgroundColor: '#ECF0F3',
        width: '50%',
        height: '100%',
        padding: 20,
        borderRadius: 4,
        textAlign: 'center',
    },
    cardButtonInactive:{
        backgroundColor: '#FFFFFF',
        width: '50%',
        height: '100%',
        padding: 20,
        borderRadius: 4,
        textAlign: 'center',
    },
    containerStyle:{
        padding: 0,
        flexDirection: 'row'
    },
    calendar:{
        padding:'14%',
    }
})

export default QuestionnaireHowLongWillYouBeThere;