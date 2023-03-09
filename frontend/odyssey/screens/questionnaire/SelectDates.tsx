import { Text, View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import Button from "../../components/Button";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar } from 'react-native-paper';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import SelectCalendar from '../../components/SelectCalendar';
import { useState } from "react";
import { useStores } from "../../mobx-models";
import CardButton from "../../components/CardButton";
const bgImage = require("../../assets/how-long-will-you-be-there-bg.png") //change this later?


const dateFormatter = new Intl.DateTimeFormat(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

const SelectDatesScreen = ({navigation}) => {
    const [dateRange, setDateRange] = useState<{startDate: any, endDate: any}>({startDate: undefined, endDate: undefined})
    const [error, setError] = useState<string>("")
    const [isExact, setIsExact] = useState<boolean>(true)
    const {questionnaireStore} = useStores()

    const handleSubmit = () => {
        if(dateRange.startDate && dateRange.endDate) {
            questionnaireStore.setStartDate(dateRange.startDate)
            questionnaireStore.setEndDate(dateRange.endDate)
            console.log(questionnaireStore)
            navigation.navigate("QuestionnaireWhatDoYouWantToDo")
        }
        else {
            setError("")
        }
    }

    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, width: '100%', height: '170%'}} >
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                    </View>
                    <View>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>How long will you be there?</Text>
                    </View>
                    <View style={styles.calendar}>
                        <View style={styles.cardContent}>
                            <CardButton 
                            labelLeft="Choose Exact Dates"
                            labelRight="I'm Flexible"
                            onPressLeft={() => setIsExact(true)}
                            onPressRight={() => setIsExact(false)}
                            />
                            {isExact ? (
                                <View style={styles.calendarContainer}>
                                    {dateRange.startDate && dateRange.endDate ? (
                                        <>
                                        <Text style={{textAlign: 'center'}}>{dateFormatter.format(dateRange.startDate)}</Text>
                                        <Text style={{textAlign: 'center'}}>To</Text>
                                        <Text style={{textAlign: 'center'}}>{dateFormatter.format(dateRange.endDate)}</Text>
                                        </>
                                    ): (
                                        null
                                    )}
                                    <SelectCalendar 
                                    startDate={dateRange.startDate} 
                                    endDate={dateRange.endDate} 
                                    onSubmit={({startDate, endDate}) => {
                                        setDateRange(prev => ({...prev, startDate: startDate, endDate: endDate}))
                                    }}
                                    />
                                </View>
                            ) : (
                                null
                            )}
                        </View>   
                     </View>

                    <Button 
                        style={{ marginTop: "-24%", justifyContent: 'center', marginLeft:"14%", width:'73%'}} 
                        label="Next" 
                        onPress={handleSubmit}
                    />
                    <ProgressBar style={{marginTop: '4%', marginLeft: 45, marginRight:0, height:17, width:'80%'}}progress={0.30} color="#FFBC59" />
                    
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
        backgroundColor: '#F4F4F4',
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
    },
    calendarContainer: {
        marginTop: '5%',
    }
})

export default SelectDatesScreen;