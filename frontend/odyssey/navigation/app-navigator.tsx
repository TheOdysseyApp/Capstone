import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
//TODO - clean up imports via an index file??
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ConfirmCodeScreen from "../screens/auth/ConfirmCodeScreen";
import ForgotPassword from "../screens/auth/ForgotPassword";
import ResetPassword from "../screens/auth/ResetPassword";
import QuestionnaireHelpPlanning from "../screens/questionnaire/QuestionaireHelpPlanning";
import QuestionnaireStartScreen from "../screens/questionnaire/QuestionnaireStartScreen";
import QuestionnaireWhatInterestsYou from "../screens/questionnaire/QuestionnaireWhatInterestsYou";
import QuestionnaireWhatBringsYouHere from "../screens/questionnaire/QuestionnaireWhatBringsYouHere";
import QuestionnaireHowLongWillYouBeThere from "../screens/questionnaire/QuestionnaireHowLongWillYouBeThere";
import QuestionaireWhereAreYouTravelingTo from "../screens/questionnaire/QuestionaireWhereAreYouTravelingTo";
import QuestionnaireWhatDoYouWantToDo from "../screens/questionnaire/QuestionnaireWhatDoYouWantToDo";
import QuestionnaireWhatsYourBudget from "../screens/questionnaire/QuestionnaireWhatsYourBudget";
import QuestionnaireIdeasForYou from "../screens/questionnaire/QuestionnaireIdeasForYou";
import Payment from "../components/Payment";

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
                    name="Payment"
                    component={TabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
        </Stack.Navigator>
    )
}
const payment = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Payment"
                component={Payment}
                options={{
                    headerShown: false
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
                name="QuestionaireWhereAreYouTravelingTo"
                component={QuestionaireWhereAreYouTravelingTo}
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
        </Stack.Navigator>
    )
}

//TODO split this up into new file
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Payment"
                component={payment}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <AntDesign name="key" size={24} color="white" />,
                    tabBarStyle: {
                        backgroundColor: '#194260'
                    },
                    tabBarLabel: "payment",
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
                    tabBarIcon: () => <AntDesign name="pluscircleo" size={24} color="white" />,
                    tabBarStyle: {
                        backgroundColor: '#194260'
                    },
                    tabBarLabel: "Plan a Trip!",
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

