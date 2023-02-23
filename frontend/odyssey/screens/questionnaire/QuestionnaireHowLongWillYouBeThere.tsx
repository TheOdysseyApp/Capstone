import { Text, View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import CardButton from "../../components/CardButton";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import {ProgressBar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import SelectCalendar from '../../components/SelectCalendar';

const bgImage = require("../../assets/how-long-will-you-be-there-bg.png") //change this later?
const QuestionnaireHowLongWillYouBeThere = ({navigation}) => {
    
    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '170%'}} >
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
                        <View style={styles.cardContent}>
                            <View style={styles.containerStyle}>
                                <CardButton style={styles.cardButton} label="Choose Exact Dates"  onPress={() => null}/>
                                <CardButton style={styles.cardButtonInactive} label="I’m Flexible" onPress={() => null}/>
                            </View>
                            <View style={{paddingTop:'20%'}}>
                                <SelectCalendar/>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Button style={{ marginTop: "-24%", justifyContent: 'center', marginLeft:"14%", width:'73%'}} label="Next" onPress={() => navigation.navigate("QuestionnaireWhatDoYouWantToDo")}/>
                    </View>

                    <View>
                            <ProgressBar style={{marginTop: '-5%', marginLeft: 45, marginRight:0, height:17, width:'80%'}}progress={0.30} color="#FFBC59" />
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
        backgroundColor: '#ECF0F3',
        height: '75%',
        borderRadius: 10,
        borderWidth: 0.5,
    },
    cardButton:{
        backgroundColor: '#ECF0F3',
        width: '50%',
        height: '78%',
        padding: 20,
        borderRadius: 4,
        textAlign: 'center',
    },
    cardButtonInactive:{
        backgroundColor: '#FFFFFF',
        width: '49%',
        height: '78%',
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