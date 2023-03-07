import {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import CardButton from '../../components/CardButton';

const bgImage = require("../../assets/budget-bg.png")

const BudgetScreen = ({navigation}) => {
    const [dailyRange, setDailyRange] = useState<{min: number, max: number}>({min: 60, max: 5000})
    const [totalRange, setTotalRange] = useState<{min: number, max: number}>({min: 2000, max: 10000})
    const [isDaily, setIsDaily] = useState<boolean>(true)

    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '220%'}}>
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.navigate("QuestionnaireWhatDoYouWantToDo")}/>
                        <Header/>
                    </View>
                    <View>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>What's Your Budget?</Text>
                    </View>
                    <View style={styles.cardContent}>
                        <CardButton 
                        labelLeft={'Per Day'}
                        labelRight={'Total'} 
                        onPressLeft={() => setIsDaily(true)} 
                        onPressRight={() => setIsDaily(false)}/>
                        {isDaily ? (
                            <RangeSlider 
                            from={dailyRange.min} 
                            to={dailyRange.max} 
                            />
                        ) : (
                            <RangeSlider 
                            from={totalRange.min} 
                            to={totalRange.max}
                            />
                        )}
                    </View>
                    <View>
                        <Button style={{width: '70%', marginTop: "10%", alignSelf:'center'}} label="Next" onPress={() => navigation.navigate("QuestionnaireIdeasForYou")}/>
                    </View>
                    <View>
                        <ProgressBar style={{marginTop:"10%", marginLeft: "10%", marginRight:"10%", height:17}} progress={0.6} color="#FFBC59" />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </Screen>
    )
}

const styles = StyleSheet.create({
    textInput:{
        
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
    button:{
        justifyContent: 'center',
        marginTop: "10%",
        width: '10%'
    },
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
