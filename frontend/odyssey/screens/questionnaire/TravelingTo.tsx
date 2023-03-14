import { useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from "../../components/SearchBar";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar } from 'react-native-paper';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import Button from '../../components/Button';
import { useStores } from '../../mobx-models';
import { Formik } from 'formik';
import * as Yup from 'yup';

const bgImage = require("../../assets/where-are-you-traveling-to-bg.png")

const TravelingToScreen = ({navigation}) => {
    const {questionnaireStore} = useStores()
    
    const destinationSchema = Yup.object().shape({
        destination: Yup.string().required("Please provide a destination.")
    })
    return (
        <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, height: Dimensions.get('window').height}} >
            <Screen preset="scroll">
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>Where are you traveling to?</Text>
                    </View>
                    <Formik
                    initialValues={{
                        destination: ''
                    }}
                    validationSchema={destinationSchema}
                    onSubmit={(values) => {
                        if(values.destination && values.destination.length > 0) {
                            questionnaireStore.setWhereFrom(values.destination.trim())
                            navigation.navigate("QuestionnaireHelpPlanning")
                        }
                    }}
                    >
                        {({handleSubmit, values, errors, touched, setFieldValue}) => (
                            <>
                                <SearchBar 
                                style={{marginTop:"10%"}} 
                                label={''} 
                                onPress={function (): void {
                                    throw new Error('Function not implemented.');
                                }}
                                value={values.destination}
                                onChangeText={(query: string) => setFieldValue('destination', query, true)}
                                er={errors.destination && touched.destination ? errors.destination : null}
                                />
                                <Button 
                                    style={styles.button} 
                                    label="Next" 
                                    onPress={handleSubmit}
                                />
                                <ProgressBar style={styles.progressBar} progress={0.2} color="#FFBC59" />
                            </>
                        )}
                    </Formik>
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
        marginTop: '50%'
    },
    progressBar: {
        width: '90%',
        alignSelf: 'center', 
        height: 17,
        marginTop: '10%'
    },
    searchBar:{
        flex: 1,
        marginTop: 50,
        color: '#929292',
        borderRadius: 10
    },
    error: {
        color: 'red'
    }
})

export default TravelingToScreen;