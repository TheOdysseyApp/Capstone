import { Text, View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from "../../components/SearchBar";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar } from 'react-native-paper';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import Button from '../../components/Button';
import { useStores } from "../../mobx-models";
import { Formik } from "formik";
import * as Yup from 'yup';


const bgImage = require("../../assets/traveling-from-bg.png")

const TravelingFromScreen = ({route, navigation}) => {
    const { questionnaireStore } = useStores()
    const {knowsDestination} = route.params;

    const departureSchema = Yup.object().shape({
        departure: Yup.string().required("This field is required.")
    })

    
    
    return (
        <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, height: Dimensions.get('window').height}} >
            <Screen preset="scroll">
                    <SafeAreaView> 
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                        <View style={styles.header}>
                            <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                            <Text style={styles.secondary}>Where are you traveling from?</Text>
                        </View>

                        <Formik
                        initialValues={{
                            departure: ""
                        }}
                        validationSchema={departureSchema}
                        onSubmit={(values) => {
                            if(values.departure && values.departure.length > 0) {
                                questionnaireStore.setWhereFrom(values.departure.trim())
                                if(knowsDestination)
                                    navigation.navigate("QuestionnaireWhereAreYouTravelingTo")
                                else
                                    navigation.navigate("QuestionnaireWhatInterestsYou")
                            }
                        }}
                        >
                            {({handleSubmit, values, errors, touched, setFieldValue}) => (
                                <>
                                    <SearchBar 
                                    style={{marginTop: '10%'}}
                                    value={values.departure}
                                    onChangeText={(query: string) => setFieldValue("departure", query, true)} 
                                    label={''} 
                                    onPress={function (): void {
                                        throw new Error('Function not implemented.');
                                    }}
                                    er={errors.departure && touched.departure ? errors.departure : null}
                                    />
                                    <Button style={styles.button} label="Next" onPress={handleSubmit}/>
                                    <ProgressBar style={styles.progressBar} progress={0.1} color="#FFBC59" />
                                </>
                            )}

                        </Formik>
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
        marginTop: '50%'
    },
    error: {
        color: 'red'
    }
})

export default TravelingFromScreen;