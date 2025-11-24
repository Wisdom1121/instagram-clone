import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { auth, createUserWithEmailAndPassword, db } from '../../../FireBase'
import { collection, addDoc } from 'firebase/firestore';

const SignUpForm = ({navigation}) => {

    const SignUpSchema = yup.object().shape({
        username: yup.string().required('Username is required'),
        email: yup.string().email('Invalid email address').required('An email is required'),
        password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });

    // const onSignUp = async (email, password, username) => {
    //     try {
    //          const authUser= await createUserWithEmailAndPassword(auth, email, password);
    //         Alert.alert('Success', 'Account created successfully!', [
    //             { text: 'OK', onPress: () => navigation.goBack() }
    //         ]);

    //         db.collection('users').add({
    //             owner_uid:authUser.user.uid,
    //             username:username,
    //             email:authUser.user.email,
    //             profile_picture:await getRandomProfilePicture(),
    //         })
    //     } catch (error) {
    //         Alert.alert('Sign Up Error', error.message, [
    //             { text: 'OK', onPress: () => console.log('OK Pressed') }
    //         ]);
    //     }
    // };


    const onSignUp = async (email, password, username) => {
        try {
            const authUser = await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert('Success', 'Account created successfully!', [
                { text: 'OK', onPress: () => navigation.goBack() }
            ]);
    
            const profilePic = await getRandomProfilePicture(); // Fetch the profile picture
    
            // Create a reference to the 'users' collection
            const usersCollection = collection(db, 'users');
    
            // Add the user data to the 'users' collection
            await addDoc(usersCollection, {
                owner_uid: authUser.user.uid,
                username: username,
                email: authUser.user.email,
                profile_picture: profilePic,
            });
    
        } catch (error) {
            Alert.alert('Sign Up Error', error.message, [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
        }
    };


    const getRandomProfilePicture = async () => {
        const response = await fetch( 'https://randomuser.me/api')
        const data = await response. json()
        return data.results[0].picture.large
        }





    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                onSubmit={values => onSignUp(values.email, values.password, values.username)}
                validationSchema={SignUpSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, touched }) => (
                    <>
                        <View style={[
                            styles.inputField,
                            { borderColor: touched.username && errors.username ? 'red' : '#CCC' }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>

                        <View style={[
                            styles.inputField,
                            { borderColor: touched.email && errors.email ? 'red' : '#CCC' }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Email'
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
                            { borderColor: touched.password && errors.password ? 'red' : '#CCC' }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        <View style={[
                            styles.inputField,
                            { borderColor: touched.confirmPassword && errors.confirmPassword ? 'red' : '#CCC' }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Confirm Password'
                                autoCapitalize='none'
                                secureTextEntry={true}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                            />
                        </View>

                        <Pressable
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>

                        <View style={styles.signInContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity>
                                <Text style={styles.signInText} onPress={()=>navigation.goBack()}> Sign In</Text>
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
        padding: 20,
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
    signInContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 20,
    },
    signInText: {
        color: '#0096F6',
    }
});

export default SignUpForm;
