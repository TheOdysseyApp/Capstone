import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native'
import Screen from '../../components/Screen'
import Header from '../../components/Header'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import {Auth} from 'aws-amplify'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { regex } from '../../utils/regex'


const ForgotPassword = ({navigation}) => {
    const emailSchema = Yup.object().shape({
        email: Yup.string()
            .required("This field is required.")
            .matches(regex.email.pattern, regex.email.error)
    })

    return (
        <Screen preset="scroll">
            <SafeAreaView>
                <Header />
            </SafeAreaView>

            {/*  Lets Get to Planning your trip goes here*/}
            <View>
                <Image source={require("../../assets/login-register-backdrop.png")} style={{alignItems: 'center',width: '100%'}}/>
                <View style={styles.tagline}>
                    <Text style={styles.taglineText}>Let's get to planning your next trip!</Text>
                </View>
            </View>

            {/* Text inputs and login info */}
            <View style={styles.inputContainer}>
                <Text style={styles.header}>Forgot Password</Text>
                
                <Formik
                    initialValues={{
                        email: ""
                    }}
                    validationSchema={emailSchema}
                    onSubmit={async (values) => {
                        try {
                            await Auth.forgotPassword(values.email)
                            navigation.navigate("ResetPassword", {email: values.email})
                        }
                        catch(error) {
                            console.log("Error sending code to email: " + error)
                        }
                    }}
                >
                    {({handleSubmit, values, errors, touched, setFieldValue})=> (
                        <>
                            <Text style={styles.directions}>Enter the email address associated with your account and we'll send you a code to reset your password.</Text>
                            <InputField 
                                title="Email" 
                                text={values.email} 
                                placeholder="Email" 
                                onChangeText={(text) => setFieldValue("email", text, true)} 
                                autoCap={'none'} 
                                er={errors.email && touched.email ? errors.email : null}
                            />
                            <Button style={{marginTop: "5%"}} label="Send Code" onPress={() => handleSubmit()}/>
                        </>
                    )}
                </Formik>
 
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        alignItems: 'center'
    },
    inputContainer: {
        flex: 6,
        alignItems: "center",
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginVertical: '8%'
    },
    directions: {
        width: '80%',
        fontSize: 16,
        marginBottom: '8%',
    },
    imageButtonContainer: {
        flexDirection: 'row',
        width: "80%",
        justifyContent: 'space-evenly',
        marginBottom: '4%'
    },
    tagline: {
        position: 'absolute',
        left: 0, 
        right: 0,
        bottom: 10,
        alignItems: 'center'
    },
    taglineText: {
        color: 'white',
        fontSize: 20
    }
})

export default ForgotPassword