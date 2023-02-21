import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//TODO - clean up imports via an index file??
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ConfirmCodeScreen from "../screens/ConfirmCodeScreen";
import HomeScreen from "../screens/HomeScreen";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPassword from "../screens/ResetPassword";

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
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
                    name="Confirm"
                    component={ConfirmCodeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
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

