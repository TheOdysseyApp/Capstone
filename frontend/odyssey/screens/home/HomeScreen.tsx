import { useEffect } from "react"
import Screen from "../../components/Screen"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import {Auth} from 'aws-amplify'

const HomeScreen = (props) => {

    useEffect(() => {
        (async function() {
            const {attributes} = await Auth.currentAuthenticatedUser()
            console.log(attributes)
        })()
    }, [])

    return (
        <Screen preset="scroll">
            <SafeAreaView>
                <Text>Hello</Text>
            </SafeAreaView>
        </Screen>
    )
}

export default HomeScreen