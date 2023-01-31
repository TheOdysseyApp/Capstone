import { Text, Button } from "react-native"


const LoginScreen = ({navigation}) => {
    return (
        <>
            <Text>Login Screen</Text>
            <Button title="Register" onPress={() => navigation.navigate("Register")} />
        </>
    )
}

export default LoginScreen;