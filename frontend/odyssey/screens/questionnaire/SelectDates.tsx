import { Text, View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar } from 'react-native-paper';
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import SelectCalendar from '../../components/SelectCalendar';
import { useState } from "react";
import { useStores } from "../../mobx-models";
import CardButton from "../../components/CardButton";
import MenuButton from "../../components/MenuButton";
import SelectDropdown from 'react-native-select-dropdown'
import { SafeAreaView } from "react-native-safe-area-context";

const bgImage = require("../../assets/how-long-will-you-be-there-bg.png") //change this later?
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const dateFormatter = new Intl.DateTimeFormat(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

const SelectDatesScreen = ({navigation}) => {
    const [dateRange, setDateRange] = useState<{startDate: any, endDate: any}>({startDate: undefined, endDate: undefined})
    const [duration, setDuration] = useState<string>("")
    const [month, setMonth] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [isExact, setIsExact] = useState<boolean>(true)
    const {questionnaireStore} = useStores()

    const menuOptions = ["3 days", "A week", "A month"]

    const handleSubmit = () => {
        if(dateRange.startDate && dateRange.endDate) {
            questionnaireStore.setStartDate(dateRange.startDate)
            questionnaireStore.setEndDate(dateRange.endDate)
            navigation.navigate("QuestionnaireWhatDoYouWantToDo")
        }
        else if (duration && month) {
            questionnaireStore.setDuration(duration)
            questionnaireStore.setMonth(month)
            navigation.navigate("QuestionnaireWhatDoYouWantToDo")
        }   
        else {
            setError("")
        }
    }

    return (
        <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: Dimensions.get('window').height}} >
            <Screen preset="scroll">
                <SafeAreaView>
                    <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                    <Header/>
                    <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                    <Text style={styles.secondary}>How long will you be there?</Text>
                    
                    <View style={styles.card}>
                            <CardButton 
                            labelLeft="Choose Exact Dates"
                            labelRight="I'm Flexible"
                            onPressLeft={() => setIsExact(true)}
                            onPressRight={() => setIsExact(false)}
                            />
                            <View style={styles.cardContent}>
                            {isExact ? (
                                <View style={styles.calendarContainer}>
                                    <Text style={styles.date}>{dateRange.startDate ? dateFormatter.format(dateRange.startDate) : "Start Date"}</Text>
                                    <Text style={styles.tertiary}>To</Text>
                                    <Text style={styles.date}>{dateRange.endDate ?  dateFormatter.format(dateRange.endDate) : "End Date"}</Text>
                                    <SelectCalendar 
                                    startDate={dateRange.startDate} 
                                    endDate={dateRange.endDate} 
                                    onSubmit={({startDate, endDate}) => {
                                        setDateRange(prev => ({...prev, startDate: startDate, endDate: endDate}))
                                        if(duration || month) {
                                            setDuration("")
                                            setMonth("")
                                        }
                                    }}
                                    />
                                </View>
                            ) : (
                                <View style={{alignItems:'center', paddingVertical:'4%'}}>
                                    <View style={styles.containerStyle}>
                                        {menuOptions.map((option, index) => (
                                            <MenuButton 
                                            key={index} 
                                            label={option} 
                                            active={option === duration}
                                            onPress={() => {
                                                setDuration(option)
                                                if(dateRange.startDate || dateRange.endDate) {
                                                    setDateRange(prev => ({...prev, startDate: undefined, endDate: undefined}))
                                                }
                                            }}/>
                                        ))}
                                    </View>
                                    <SelectDropdown
                                        data={months}
                                        onSelect={(selectedItem, index) => {
                                            setMonth(selectedItem)
                                            if(dateRange.startDate || dateRange.endDate) {
                                                setDateRange(prev => ({...prev, startDate: undefined, endDate: undefined}))
                                            }
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item
                                        }}
                                        defaultButtonText={'Choose a Month (optional)'}
                                        buttonStyle={{
                                            backgroundColor: '#FFFFFF',
                                            width: '63%',
                                            height: '22%',
                                            borderRadius: 8,
                                            shadowColor: '#171717',
                                            shadowOpacity: 0.1,
                                            shadowRadius: 2,
                                            marginBottom:'5%',
                                          }}
                                        buttonTextStyle={{
                                            textAlign: 'center',
                                            color: '#666666',
                                            fontSize: 11,
                                            fontWeight: '300'
                                        }}
                                        rowTextStyle={{
                                            textAlign: 'center',
                                            color: '#000000',
                                            fontSize: 11,
                                            fontWeight: '300'
                                        }}
                                        renderDropdownIcon={isOpened => (
                                            <Entypo name="chevron-small-down" size={24} color="black" />
                                          )}
                                    />
                                </View>
                            )}  
                            </View> 
                     </View>

                    <Button 
                        style={styles.button} 
                        label="Next" 
                        onPress={handleSubmit}
                    />
                    <ProgressBar style={styles.progressBar} progress={0.30} color="#FFBC59" />
                </SafeAreaView>
            </Screen>
        </ImageBackground>
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
        fontSize: 12,
        fontWeight: '300',
        marginBottom: '3%'
    },
    button:{
        alignSelf: 'center',
    },
    card: {
        width: '80%',
        alignSelf: 'center',
        height: '40%',
        borderRadius: 10,
        borderWidth: 0.5,
        backgroundColor: '#F4F4F4',
        overflow: 'hidden',
        marginVertical: '15%'
    },
    cardContent:{
        backgroundColor: '#F4F4F4',
    },
    containerStyle:{
        marginTop: '10%',
        marginBottom:'7%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    date: {
        textAlign: 'center',
        marginBottom: '3%',
        fontWeight: '600',
        width: '60%',
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'center',
        paddingVertical: '2%'
    },
    calendarContainer: {
        paddingVertical: '7.5%'
    },
    progressBar:{
        width: '90%',
        alignSelf: 'center', 
        height: 17,
        marginTop: '10%'
    },
})

export default SelectDatesScreen;