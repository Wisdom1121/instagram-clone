
import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth, signInWithEmailAndPassword } from '../../../FireBase';

const LoginForm = ({navigation}) => {

    const LoginFormSchema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('An email is required'),
        password: yup.string().required('Password is required').min(6, 'Your password has to be at least 6 characters')
    });


    const onLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Firebase login successful', email);
        } catch (error) {
            Alert.alert('Login Error', error.message, 
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ]
            );
        }
    };


    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => onLogin(values.email, values.password)}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[
                            styles.inputField,
                            { borderColor: values.email.length < 1 || LoginFormSchema.fields.email.isValidSync(values.email) ? '#CCC' : 'red' }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Phone number, username or email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>

                        <View style={[
                            styles.inputField,
                            { borderColor: values.password.length < 1 || LoginFormSchema.fields.password.isValidSync(values.password) ? '#CCC' : 'red' }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                textContentType='password'
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        <View style={styles.forgotPasswordContainer}>
                            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                        </View>

                        <Pressable
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>

                        <View style={styles.signUpContainer}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={()=>navigation.push('SignUpScreen') }>
                                <Text style={styles.signUpText}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    button: (isValid) => ({
        backgroundColor: isValid ? '#0096F6' : '#9acaf7',
        minHeight: 42,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }),
    buttonText: {
        fontWeight: '600',
        fontSize: 16,
        color: '#fff',
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        marginTop: 8,
        marginBottom: 30,
    },
    forgotPasswordText: {
        color: '#6BB0F5',
    },
    signUpContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },
    signUpText: {
        color: '#6BB0F5',
    }
});

export default LoginForm;
