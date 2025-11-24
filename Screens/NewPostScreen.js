import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../Components/home/NewPost/AddNewPost'
import { useNavigation } from '@react-navigation/native'

const NewPostScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor:'black', flex:1}}>
        <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  )
}

export default NewPostScreen