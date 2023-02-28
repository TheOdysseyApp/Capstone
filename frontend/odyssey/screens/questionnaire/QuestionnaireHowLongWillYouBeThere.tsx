import { Text, View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import CardButton from "../../components/CardButton";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import {ProgressBar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import SelectCalendar from '../../components/SelectCalendar';
import React from "react";
import { StatusBar } from "expo-status-bar";
import MenuButton from "../../components/MenuButton"
import SelectDropdown from "react-native-select-dropdown";

const bgImage = require("../../assets/how-long-will-you-be-there-bg.png") //change this later?
const countries = ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023", "Jun 2023", "Jul 2023", "Aug 2023", "Sec 2023", "Nov 2023", "Dec 2023"]
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
                            <Text style={styles.tertiary} >I'm Flexible</Text>
                                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                                    <MenuButton label={"3 Days"} onPress={function (): void {
                                        throw new Error("Function not implemented.");
                                    } }></MenuButton>
                                    <MenuButton label={"One Week"} onPress={function (): void {
                                        throw new Error("Function not implemented.");
                                    } }></MenuButton>
                                    <MenuButton label={"One Month"} onPress={function (): void {
                                        throw new Error("Function not implemented.");
                                    } }></MenuButton>
                                </View>
                                <SelectDropdown 
                                        buttonStyle={styles.dropdown}
                                        // dropdownStyle={styles.dropdown}
                                        buttonTextStyle={styles.dropdownTextButton}
                                        rowTextStyle={styles.dropdownText}
                                        defaultButtonText={'Choose a Month (optional)'}
                                        data={countries}

                                        onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index)
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item
                                        }}
                                        renderDropdownIcon={isOpened => (
                                            <AntDesign style={{marginLeft: "6%"}} name="down" size={11} color="#666666"/>
                                        )}
                                    />
                                <View>
                                    
                                    <Text style={styles.tertiary}>Or</Text>
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
    dropdown:{
        backgroundColor: '#FFFFFF',
        width: '73%',
        height: '12%',
        borderRadius: 8,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        // margin: -10,
        // height:'100%',
        alignself: 'center', 
        marginRight:'14%', 
        marginTop:'10%',
        marginBottom: '2%'
    },
    dropdownTextButton:{
        textAlign: 'left',
        color: '#666666',
        fontSize: 11,
        fontWeight: '300'
        
    },
    dropdownText:{
        textAlign: 'center',
        color: '#000000',
        fontSize: 11,
        fontWeight: '300'
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
    tertiary:{
        textAlign: "center",
        // fontStyle: 'italic',
        marginTop: 10,
        fontSize: 12,
        fontWeight: '300',
        marginBottom: 18
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
        paddingTop:'2%'
        
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