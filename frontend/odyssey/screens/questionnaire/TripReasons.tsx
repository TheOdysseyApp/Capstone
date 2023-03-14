import { Text, View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import CheckBoxComponent from '../../components/CheckBox';
import info from '../../data/whatBringsYouHere.json'
import { useStores } from "../../mobx-models";

const bgImage = require("../../assets/what-brings-you-here-bg.png")

const TripReasonsScreen = ({navigation}) => {
    const {questionnaireStore} = useStores()

    const handleSubmit = () => {
        const reasons = []
        info.map((reason) => {
            if(reason.checked) reasons.push(reason.name)
        })

        if(reasons.length > 0) {
            questionnaireStore.setTripReasons(reasons)
            console.log(questionnaireStore)
            navigation.navigate("QuestionnaireHowLongWillYouBeThere")
        }
    }

    return (
        <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: Dimensions.get('window').height}} >
        <Screen preset="scroll">
                <SafeAreaView>
                  
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                    
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>What brings you here?</Text>
                  
                    <View style={{ width: '80%', alignSelf: 'center', marginVertical: '5%' }}>
                            {info.map((trip, index) => (
                                <CheckBoxComponent
                                    key={index}
                                    label={trip.name}
                                    initialState={trip.checked}
                                    onChange={(result) => info[index].checked = result}
                                />
                            ))}
                    </View>
                        <Button style={styles.button} label="Next" onPress={handleSubmit}/>
                        <ProgressBar style={styles.progressBar}progress={0.3} color="#FFBC59" />
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
    }
})

export default TripReasonsScreen;