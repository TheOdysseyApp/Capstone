import { useState } from "react"
import {SafeAreaView, View, Image, Text, StyleSheet} from 'react-native'
import Screen from "../../components/Screen"
import InputField from "../../components/InputField"
import Button from "../../components/Button"
import Header from "../../components/Header"
import {Auth} from 'aws-amplify'
import { Formik } from "formik"
import * as Yup from 'yup'
import { regex } from "../../utils/regex"


const ResetPassword = ({route, navigation}) => {
    const {email} = route.params

    const resetPasswordSchema = Yup.object().shape({
        code: Yup.string()
            .required("This field is required.")
            .min(6, "Code should be 6 digits long.")
            .max(6, "Code should be 6 digits long.")
            .matches(regex.code.pattern, regex.code.error),
        password: Yup.string()
            .required("This field is required.")
            .min(8, "Your password must be at least 8 characters long.")
            .matches(regex.password.pattern, regex.password.error),
        confirmPassword: Yup.string()
            .required("This field is required.")
            .min(8, "Your password must be at least 8 characters long.")
            .matches(regex.password.pattern, regex.password.error)
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
                <Text style={styles.header}>Reset Password</Text>

                <Formik
                    initialValues={{
                        code: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validationSchema={resetPasswordSchema}
                    onSubmit={async (values, actions) => {
                        if(values.password === values.confirmPassword) {
                            try {
                                await Auth.forgotPasswordSubmit(email, values.code, values.password)
                                navigation.navigate("Login")
                            }
                            catch(error) {
                                console.log("Error setting new password: " + error)
                            }
                        }
                        else {
                            actions.setFieldError("confirmPassword", "Passwords do not match.")
                        }
                    }}
                >
                    {({handleSubmit, values, errors, touched, setFieldValue}) => (
                        <>
                            <InputField 
                                title="Code" 
                                text={values.code} 
                                placeholder="000111" 
                                onChangeText={(text) => setFieldValue("code",text, true)} 
                                er={errors.code && touched.code ? errors.code : null}
                            />
                            <InputField 
                                title="New Password" 
                                text={values.password} 
                                placeholder="Password" 
                                onChangeText={(text) => setFieldValue("password", text, true)} 
                                secure
                                er={errors.password && touched.password ? errors.password : null}
                            />
                            <InputField 
                                title="Confirm New Password" 
                                text={values.confirmPassword} 
                                placeholder="Confirm Password" 
                                onChangeText={(text) => setFieldValue("confirmPassword", text, true)} 
                                secure
                                er={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
                            />
                            <Button style={{marginTop: "5%"}} label="Reset Password" onPress={() => handleSubmit()}/>
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

export default ResetPassword