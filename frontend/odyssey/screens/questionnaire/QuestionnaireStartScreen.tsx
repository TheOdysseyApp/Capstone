import { useState } from 'react'
import { ScrollView, Text, View, Image, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import ImageButton from "../../components/ImageButton";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar} from 'react-native-paper';

const bgImage = require("../../assets/questionnaire-start-screen-bg.png")

const QuestionnaireStartScreen = ({navigation}) => {
    return (
<Screen preset="scroll">
            <SafeAreaView>
                <Header />
                <ImageBackground source={bgImage}resizeMode={'cover'} style={{ flex: 1, width: '100%' }}>
                </ImageBackground>
                <View>
                    <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                    <Text style={styles.secondary}>Where are you traveling to?</Text>
                    <Button style={{ marginTop: "17%", justifyContent: 'center', marginLeft:40}} label="I’m flexible, let’s explore!" onPress={() => navigation.navigate("")}/>
                    <Button style={{ marginTop: "7%", justifyContent: 'center', marginLeft:40}} label="I know where I’m traveling" onPress={() => navigation.navigate("")}/>
                </View>
                <View>
                    <ProgressBar style={{marginTop: 200, marginLeft: 20, marginRight:20}}progress={0.1} color="#FFBC59" />
                </View>
            </SafeAreaView>
</Screen>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight:  '600',
        textAlign: "center",
        marginTop: "7%"
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    secondary:{
        textAlign: "center",
        fontStyle: 'italic',
        top: 27,
        fontSize: 20
    },
    button:{
        justifyContent: 'center',
        marginTop: "20%"
    }
})

export default QuestionnaireStartScreen;