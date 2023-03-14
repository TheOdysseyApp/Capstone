import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
//TODO - clean up imports via an index file??
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ConfirmCodeScreen from "../screens/auth/ConfirmCodeScreen";
import ForgotPassword from "../screens/auth/ForgotPassword";
import ResetPassword from "../screens/auth/ResetPassword";
import HomeScreen from "../screens/home/HomeScreen";
import QuestionnaireHelpPlanning from "../screens/questionnaire/PlanningHelp";
import QuestionnaireStartScreen from "../screens/questionnaire/StartScreen";
import QuestionnaireWhatInterestsYou from "../screens/questionnaire/Interests";
import QuestionnaireWhatBringsYouHere from "../screens/questionnaire/TripReasons";
import QuestionnaireHowLongWillYouBeThere from "../screens/questionnaire/SelectDates";
import QuestionnaireWhereAreYouTravelingTo from "../screens/questionnaire/TravelingTo";
import QuestionnaireWhatDoYouWantToDo from "../screens/questionnaire/RelevantActivities";
import QuestionnaireWhatsYourBudget from "../screens/questionnaire/Budget";
import QuestionnaireIdeasForYou from "../screens/questionnaire/EndScreen";
import {TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle, View} from 'react-native'
import QuestionaireTravelingFrom from "../screens/questionnaire/TravelingFrom";
import TripsScreen from "../screens/trips/Trips";
import SavedScreen from "../screens/saved/Saved";
import ProfileScreen from "../screens/profile/Profile";

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}

                    />
                <Stack.Screen 
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Confirm"
                    component={ConfirmCodeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Home"
                    component={TabNavigator}
                    options={{
                        headerShown: false,
                        gestureEnabled: false
                    }}
                />
        </Stack.Navigator>
    )
}

//TODO split this up into new file
const QuestionnaireNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="QuestionnaireStart"
                component={QuestionnaireStartScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="QuestionnaireWhatInterestsYou"
                component={QuestionnaireWhatInterestsYou}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="QuestionnaireWhatBringsYouHere"
                component={QuestionnaireWhatBringsYouHere}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="QuestionnaireHowLongWillYouBeThere"
                component={QuestionnaireHowLongWillYouBeThere}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="QuestionnaireWhatDoYouWantToDo"
                component={QuestionnaireWhatDoYouWantToDo}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="QuestionnaireWhatsYourBudget"
                component={QuestionnaireWhatsYourBudget}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="QuestionnaireIdeasForYou"
                component={QuestionnaireIdeasForYou}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="QuestionnaireWhereAreYouTravelingTo"
                component={QuestionnaireWhereAreYouTravelingTo}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="QuestionnaireHelpPlanning"
                component={QuestionnaireHelpPlanning}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen 
                name="QuestionaireTravelingFrom"
                component={QuestionaireTravelingFrom}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

//TODO split this up into new file
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator>
            {/* may become a stack navigator if home screen has different screens */}
            <Tab.Screen
                name="LandingPage"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => 
                    <View style={{
                        width: 35,
                        height: 35,
                        borderRadius: 35 / 2,
                        borderColor: '#FFFFFF',
                        borderWidth: 1}}>
                        <Feather name="home" size={20} color="white" style={{position: "absolute", left: 35/2 - 11, top: 35/2 - 12}}/>
                    </View>,
                    
                    tabBarStyle: {
                        backgroundColor: '#194260'
                    },
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {
                        color: 'white'
                    }

                    
                }}
            />
            <Tab.Screen
                name="Trips"
                component={TripsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => 
                    <View style={{
                        width: 35,
                        height: 35,
                        borderRadius: 35 / 2,
                        borderColor: '#FFFFFF',
                        borderWidth: 1}}>
                    <MaterialCommunityIcons name="calendar-clock-outline" size={20} color="white" style={{position: "absolute", left: 35/2 - 11, top: 35/2 - 11}}/>
                    </View>,
                    tabBarStyle: {
                        backgroundColor: '#194260'
                    },
                    tabBarLabel: "Trips",
                    tabBarLabelStyle: {
                        color: 'white'
                    }
                }}
            />
            <Tab.Screen 
                name="Questionnaire"
                component={QuestionnaireNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: () => 
                        <View style={{
                            width: 35,
                            height: 35,
                            borderRadius: 35 / 2,
                            backgroundColor: '#FFFFFF',}}>
                            <AntDesign name="pluscircleo" size={32} color="#194260" style={{position: "absolute", left: 35/2 - 16, top: 35/2 - 16}}/>
                        </View>,
                    tabBarStyle: {
                        backgroundColor: '#194260',
                    },
                    tabBarLabel: "Plan a Trip",
                    tabBarLabelStyle: {
                        color: 'white',
                    }
                }}
            />
            <Tab.Screen
                name="Saved"
                component={SavedScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => 
                    <View style={{
                        width: 35,
                        height: 35,
                        borderRadius: 35 / 2,
                        borderColor: '#FFFFFF',
                        borderWidth: 1}}>
                    <AntDesign name="hearto" size={20} color="white" style={{position: "absolute", left: 35/2 - 11, top: 35/2 - 11}}/>
                    </View>,
                    tabBarStyle: {
                        backgroundColor: '#194260'
                    },
                    tabBarLabel: "Saved",
                    tabBarLabelStyle: {
                        color: 'white'
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => 
                    <View style={{
                        width: 35,
                        height: 35,
                        borderRadius: 35 / 2,
                        borderColor: '#FFFFFF',
                        borderWidth: 1}}>
                    <AntDesign name="user" size={20} color="white" style={{position: "absolute", left: 35/2 - 11, top: 35/2 - 11}}/>
                    </View>,
                    tabBarStyle: {
                        backgroundColor: '#194260'
                    },
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: {
                        color: 'white'
                    }
                }}
            />
        </Tab.Navigator>
    )
}

//TODO - type check these props 
export const AppNavigator = (props) => {
    return (
        <NavigationContainer {...props}>
            <AppStack />
        </NavigationContainer>
    )
}

