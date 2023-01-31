import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//TODO - clean up imports via an index file??
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen 
                    name="Login"
                    component={LoginScreen}
                    options={{title: "Welcome"}}/>
                <Stack.Screen 
                    name="Register"
                    component={RegisterScreen}
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

