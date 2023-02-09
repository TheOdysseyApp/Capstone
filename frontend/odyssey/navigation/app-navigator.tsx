import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//TODO - clean up imports via an index file??
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import Header from "../components/Header";
import QuestionnaireStartScreen from "../screens/questionnaire/QuestionnaireStartScreen";
import QuestionnaireWhatInterestsYou from "../screens/questionnaire/QuestionnaireWhatInterestsYou";
import QuestionnaireWhatBringsYouHere from "../screens/questionnaire/QuestionnaireWhatBringsYouHere";
import QuestionnaireHowLongWillYouBeThere from "../screens/questionnaire/QuestionnaireHowLongWillYouBeThere";
import QuestionaireWhereAreYouTravelingTo from "../screens/questionnaire/QuestionaireWhereAreYouTravelingTo";
const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
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
                    name="QuestionaireWhereAreYouTravelingTo"
                    component={QuestionaireWhereAreYouTravelingTo}
                    options={{
                        headerShown: false
                    }}
                    />
            </Stack.Group>
        </Stack.Navigator>
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

