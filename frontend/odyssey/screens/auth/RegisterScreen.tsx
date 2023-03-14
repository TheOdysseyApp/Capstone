import { useState } from 'react'
import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";
import { Auth } from 'aws-amplify';
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import ImageButton from "../../components/ImageButton";
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { regex } from '../../utils/regex';

const RegisterScreen = ({navigation}) => {
    const registerSchema = Yup.object().shape({
        email: Yup.string()
            .required("This field is required.")
            .matches(regex.email.pattern, regex.email.error),
        firstName: Yup.string().required("This field is required."),
        lastName: Yup.string().required("This field is required"),
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
                {/* Odyssey Logo goes here */}
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
                    <Text style={styles.header}>Sign Up</Text>

                    <View style={styles.imageButtonContainer}>
                        <ImageButton source={require("../../assets/google-logo.png")} onPress={() => console.log("Google pressed")}/>
                        <ImageButton source={require("../../assets/facebook-logo.png")} onPress={() => console.log("Facebook pressed")}/>
                        <ImageButton source={require("../../assets/apple-logo.png")} onPress={() => console.log("Apple pressed")}/>
                    </View>

                    <Formik
                        initialValues={{
                            email: "",
                            firstName: "",
                            lastName: "",
                            password: "",
                            confirmPassword: ""
                        }}
                        validationSchema={registerSchema}
                        onSubmit={async (values, actions) => {
                            if(values.password === values.confirmPassword) {
                                try {
                                    await Auth.signUp({
                                        username: values.email,
                                        password: values.password,
                                        attributes: {
                                            given_name: values.firstName,
                                            family_name: values.lastName,
                                            name: `${values.firstName} ${values.lastName}`
                                        },
                                        autoSignIn: {
                                            enabled: true
                                        }
                                    })
                                }
                                catch (error) {
                                    console.log("Error signing up user: " + error)
                                }
                                navigation.navigate("Confirm", {email: values.email})
                            }
                            else {
                                //password and confirm password are not matching
                                actions.setFieldError("confirmPassword", "Passwords do not match.")
                            }
                        }}
                    >
                        {({handleSubmit, values, errors, touched, setFieldValue}) => (
                            <>
                                <Text style={{marginVertical: "5%", color: '#999999'}}>Or register with email...</Text>
                                <InputField 
                                    title="Email" 
                                    text={values.email} 
                                    placeholder="Email" 
                                    onChangeText={(text) => setFieldValue("email", text, true)} 
                                    autoCap={'none'}
                                    er={errors.email && touched.email ? errors.email : null}
                                />
                                <InputField 
                                    title="First Name" 
                                    text={values.firstName} 
                                    placeholder="First Name" 
                                    onChangeText={(text) => setFieldValue("firstName", text, true)} 
                                    er={errors.firstName && touched.firstName ? errors.firstName : null}
                                />
                                <InputField 
                                    title="Last Name" 
                                    text={values.lastName} 
                                    placeholder="Last Name" 
                                    onChangeText={(text) => setFieldValue("lastName", text, true)} 
                                    er={errors.lastName && touched.lastName ? errors.lastName : null}
                                />
                                <InputField 
                                    title="Password" 
                                    text={values.password} 
                                    placeholder="Password" 
                                    onChangeText={(text) => setFieldValue("password", text, true)} 
                                    er={errors.password && touched.password ? errors.password : null}
                                    secure={true}
                                />
                                <InputField 
                                    title="Confirm Password" 
                                    text={values.confirmPassword} 
                                    placeholder="Verify Password" 
                                    onChangeText={(text) => setFieldValue("confirmPassword", text, true)} 
                                    er={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
                                    secure={true}
                                />
                                <Button style={{marginTop: "5%"}} label="Register" onPress={() => handleSubmit()}/>
                            </>
                        )}
                    </Formik>
                    <Text style={styles.registerText}>Already have an account? {<Text onPress={() => navigation.navigate("Login")} style={{textDecorationLine: 'underline', color: '#194260', fontWeight: 'bold'}}>Go Here</Text>}</Text>                
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
        marginBottom: '10%'
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: '8%',
        marginBottom: '4%'
    },
    registerText: {
        marginTop: '2%',
        fontSize: 16
    },
    imageButtonContainer: {
        flexDirection: 'row',
        width: "80%",
        justifyContent: 'space-evenly',
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

export default RegisterScreen;