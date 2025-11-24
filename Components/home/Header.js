import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { getAuth, signOut } from 'firebase/auth';

const handleSignOut = async () => {
    const auth = getAuth(); // Get the Auth instance
    try {
        await signOut(auth); // Use the signOut function from the modular SDK
        console.log('Signed Out');
    } catch (error) {
        console.error('Sign Out Error:', error); // Better error logging
    }
};



const Header = ({navigation}) => {

  return (
    <View>
        <View style={styles.container}>
        <TouchableOpacity onLongPress={handleSignOut}>
        <Image style={styles.logo} source={require('../../assets/wizi.png')}/>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={()=> navigation.push('NewPostScreen')}>
                <Image style={styles.icon} source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon} source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
                <Image style={styles.icon} source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'}}/>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20
    },
    logo:{
        width:100,
        height:60,
        resizeMode:'contain'
    },
    iconContainer:{
        flexDirection:'row'
    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        resizeMode:'contain'
    },
    
    unreadBadge:{
        backgroundColor:'#FF3250',
        position:'absolute',
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:'50%',
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },

    unreadBadgeText:{
        color:'white',
        fontWeight:'600'
    }
})

export default Header