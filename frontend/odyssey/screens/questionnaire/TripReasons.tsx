import { Text, View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import CheckBoxComponent from '../../components/CheckBox';
import info from '../../data/whatBringsYouHere.json'

const bgImage = require("../../assets/what-brings-you-here-bg.png")

const TripReasonsScreen = ({navigation}) => {

    const handleSubmit = () => {
        console.log(info)
        navigation.navigate("QuestionnaireHowLongWillYouBeThere")
    }

    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '120%'}} >
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                    </View>
                    <View>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>What brings you here?</Text>
                    </View>
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
                    <View>
                        <Button style={{ marginTop: "10%", justifyContent: 'center', marginLeft:40}} label="Next" onPress={handleSubmit}/>
                    </View>
                    <View>
                        <ProgressBar style={{marginTop: 70, marginLeft: 20, marginRight:20, height:17}}progress={0.2} color="#FFBC59" />
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
    }
})

export default TripReasonsScreen;