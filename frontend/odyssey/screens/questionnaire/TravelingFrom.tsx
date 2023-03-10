import { Text, View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import SearchBar from "../../components/SearchBar";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar } from 'react-native-paper';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import {useState} from 'react';
import Button from '../../components/Button';
import { useStores } from "../../mobx-models";


const bgImage = require("../../assets/traveling-from-bg.png")

const TravelingFromScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState<string>("")
    const { questionnaireStore } = useStores()

    const handleSubmit = () => {
        if(searchQuery && searchQuery.length > 0) {
            questionnaireStore.setWhereFrom(searchQuery.trim())
            navigation.navigate("QuestionnaireWhatInterestsYou")
        }
        else {
            setError("Please enter a departing location.")
        }
    }
    
    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, height: '150%'}} >
                <SafeAreaView> 
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                    <View style={styles.header}>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>Where are you traveling from?</Text>
                    </View>
                        {/* TODO this should probably query the google maps api or something */}
                        <SearchBar 
                        style={{marginTop:"20%"}}
                        value={searchQuery}
                        onChangeText={(query: string) => setSearchQuery(query)} 
                        label={''} 
                        onPress={function (): void {
                            throw new Error('Function not implemented.');
                        }}/>
                        {error && (
                            <View>
                                <Ionicons name="warning-outline" size={24} color="red" />
                                <Text>{error}</Text>
                            </View>
                        )}
                    <Button style={styles.button} label="Next" onPress={handleSubmit}/>

                    <ProgressBar style={styles.progressBar}progress={0.1} color="#FFBC59" />
                </SafeAreaView>
            </ImageBackground>
        </Screen>
    )
}

const styles = StyleSheet.create({
    progressBar:{
        marginTop: "20%", 
        marginLeft: '10%', 
        marginRight:'10%', 
        height:'11%'
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
        marginTop: "40%", 
        justifyContent: 'center', 
        marginLeft:'18%',
        height: '10%',
        width: '65%',
        // marginLeft:'20%',
        // width:'65%',
        // height:'9%'
    },
    searchBar:{
        flex: 1,
        marginTop: 50,
        color: '#929292',
        borderRadius: 10
        
    },
    rowContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default TravelingFromScreen;