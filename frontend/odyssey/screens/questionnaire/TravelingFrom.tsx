import { Text, View, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import SearchBar from "../../components/SearchBar";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { ProgressBar, Searchbar} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import {useState} from 'react';
import Button from '../../components/Button';
import QuestionnaireWhatInterestsYou from "./Interests";
import { useStores } from "../../mobx-models";


const bgImage = require("../../assets/where-are-you-traveling-to-bg.png")

const TravelingFromScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { questionnaireStore } = useStores()

    const handleSubmit = () => {
        if(searchQuery && searchQuery.length > 1) {
            questionnaireStore.setWhereFrom(searchQuery.trim())
            navigation.navigate("QuestionnaireWhatInterestsYou")
        }
        else {
            //TODO error handling
        }
    }
    
    return (
        <Screen preset="scroll">
            <ImageBackground source={bgImage} resizeMode={'cover'} style={{ flex: 1, height: '130%'}} >
                <SafeAreaView>
                    <View>
                        <AntDesign style={{marginLeft: "5%"}} name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                        <Header/>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.header}>Let’s Plan Your Trip!</Text>
                        <Text style={styles.secondary}>Where are you traveling from?</Text>
                    </View>

                    <View>
                        {/* TODO this should probably query the google maps api or something */}
                        <SearchBar 
                        style={{marginTop:"20%"}}
                        value={searchQuery}
                        onChangeText={(query: string) => setSearchQuery(query)} 
                        label={''} 
                        onPress={function (): void {
                            throw new Error('Function not implemented.');
                        }}/>
                    </View>

                    <Button style={{ marginTop: "60%", justifyContent: 'center', marginLeft:40}} label="Next" onPress={handleSubmit}/>

                    <View>
                            <ProgressBar style={{marginTop: "9%", marginLeft: 20, marginRight:20, height:17}}progress={0.2} color="#FFBC59" />
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
        flex: 2,
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