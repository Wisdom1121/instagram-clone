import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import SignUpForm from '../Components/home/SignUpScreen/SignUpForm'; // Ensure this path matches where you saved the SignUpForm component

const IG_Logo = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{uri: IG_Logo}} style={styles.logo} />
        </View>
        <SignUpForm navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    logo: {
        height: 100,
        width: 100,
    },
});

export default SignUpScreen;
