import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from '@rneui/base'

export const bottomTabicons = [
  {
      name:'Home',
      active:'https://img.icons8.com/fluency-systems-filled/500/FFFFFF/home.png',
      inActive:'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png'
  },
  {
      name:'Search',
      active:'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
      inActive:'https://img.icons8.com/ios/500/ffffff/search--v1.png'
  },
  {
      name:'Reel',
      active:'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
      inActive:'https://img.icons8.com/ios/500/ffffff/instagram-reel.png'
  },
  {
      name:'Shop',
      active:'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
      inActive:'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png'
  },
  {
    name:'Profile',
    active:'https://randomuser.me/api/portraits/women/1.jpg',
    inActive :'https://randomuser.me/api/portraits/women/1.jpg',

  }

]

const BottomTabs = ({icons}) => {


  const [activeTab, setActiveTabs] = useState('Home')

  const Icon = ({icon})=>(
    <TouchableOpacity onPress={()=> setActiveTabs(icon.name)}>
      <Image source={{uri: activeTab === icon.name ? icon.active : icon.inActive}} style ={[styles.icon, icon.name === 'Profile' ? styles.profilePic() : '',
        activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : ''
      ]}/>
    </TouchableOpacity>

  ) 

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical'/>
    <View style={styles.container}>
      {icons.map((icon,index)=>(
        <Icon key={index} icon={icon}/>
        ))}
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    width:'100%',
    position:'absolute',
    bottom:'3%',
    zIndex:999,
    backgroundColor:'#0000'
  },
container:{
  flexDirection:'row',
  justifyContent:'space-around',
  padding:10,
  height:50,
  position:'relative'
  
},
icon:{
  width:30,
  height:30,
},

profilePic :(activeTab = '') => ({
  borderRadius:50,
  borderWidth: activeTab === 'Profile' ? 2 : 0,
  borderColor:'#fff',
}),


})

export default BottomTabs