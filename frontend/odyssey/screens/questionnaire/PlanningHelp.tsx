import { Text, View, StyleSheet, SafeAreaView, ImageBackground, Dimensions } from "react-native";
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
        <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: Dimensions.get('window').height}}>
            <Screen preset="scroll">
                <SafeAreaView>
                    <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                    <Header/>
                    <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                    <Text style={styles.secondary}>What would you like help planning?</Text>
                    <Text style={styles.italics}>Select all that apply.</Text>
                        
                    <View style={{ width: '80%', alignSelf: 'center', marginVertical: '5%'}}>
                            {planningHelp.map((activity, index) => (
                                <CheckBoxComponent
                                    key={index}
                                    label={activity.name}
                                    initialState={activity.checked}
                                    onChange={(result) => planningHelp[index].checked = result}
                                />
                            ))}
                    </View>
                        <Button 
                            style={styles.button} 
                            label="Next" 
                            onPress={handleSubmit}
                        />
                        <ProgressBar style={styles.progressBar} progress={0.3} color="#FFBC59" />
                    
                </SafeAreaView>
            </Screen>
        </ImageBackground> 
    )
}


const styles = StyleSheet.create({
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
        marginTop: '15%'
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
    },
    progressBar:{
        width: '90%',
        alignSelf: 'center', 
        height: 17,
        marginTop: '10%'
    },
})
 
export default PlanningHelpScreen;