import { Text, View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
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
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '121%'}} >
                <SafeAreaView>
                  
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                    
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>What brings you here?</Text>
                  
                    <View style={{marginTop:"10%", alignItems: 'center'}}>
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
            </ImageBackground>
        </Screen>
    )
}

const styles = StyleSheet.create({
    progressBar:{
        marginTop: "20%", 
        marginLeft: 20, 
        marginRight:20, 
        height:'10%'
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
        justifyContent: 'center',
        marginTop: "13.5%",
        marginLeft:'18%',
        height: '9%',
        width: '65%',
    }
})

export default TripReasonsScreen;