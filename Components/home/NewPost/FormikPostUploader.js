import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik, isValid } from 'formik'
import { Divider } from '@rneui/themed';
import validUrl from 'valid-url'


const uploadPostSchema = yup.object().shape({
    imageUrl: yup.string().url().required('A Url is required'),
    caption : yup.string().max( 2200, 'Caption Limit Exceeded')
})

const PLACEHOLDER_IMG = 'https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?w=1200&ssl=1'

const FormikPostUploader = ({navigation}) => {

    const [thumbnailUrl, setThumbnailUrl]= useState(PLACEHOLDER_IMG)




  return (
    <Formik initialValues={{caption : '', imageUrl: ''}}
    onSubmit={(value) => {console.log(value)

    navigation.goBack()}
    }
    validationSchema={uploadPostSchema}
    validateOnMount={true}
    >
      {({handleBlur, handleChange, handleSubmit, values, errors}) =>(
        
      <>
        <View style={{margin:20, justifyContent:'space-between', flexDirection:'row'}}>
            <Image source={{uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG}} style={{width:100, height:100}}/>
       <View style={{flex:1, marginLeft:12}}>
        <TextInput placeholder='Write a Caption...' placeholderTextColor={'gray'} multiline={true}
        style={{color:'white', fontSize:20}}
        onChangeText={handleChange('caption')}
        onBlur={handleBlur('caption')}
        value={values.caption}
        />
        </View>
        </View>
        <Divider width={0.2} orientation='vertical'/>
        <TextInput placeholder='Enter Image Url' placeholderTextColor={'gray'}
         style={{color:'white', fontSize:18}}
         onChange={(e)=> setThumbnailUrl(e.nativeEvent.text)}
         onChangeText={handleChange('imageUrl')}
        onBlur={handleBlur('imageUrl')}
        value={values.imageUrl}
        />

        {errors.imageUrl && (<Text style={{color:'blue', fontSize:15}}>{errors.imageUrl}</Text>)}

        <Button title='Share' onPress={handleSubmit} disabled={isValid}/>
        </>
      )
        }
    </Formik>
  )
}

export default FormikPostUploader

// import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native'
// import React, { useState } from 'react'
// import * as yup from 'yup'
// import { Formik } from 'formik'
// import { Divider } from '@rneui/themed'

// const uploadPostSchema = yup.object().shape({
//     imageUrl: yup.string().url().required('A URL is required'),
//     caption: yup.string().max(2200, 'Caption limit exceeded'),
// })

// const PLACEHOLDER_IMG = 'https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?w=1200&ssl=1'

// const FormikPostUploader = () => {
//     const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

//     return (
//         <Formik
//             initialValues={{ caption: '', imageUrl: '' }}
//             onSubmit={(values) => console.log(values)}
//             validationSchema={uploadPostSchema}
//             validateOnMount={true}
//         >
//             {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
//                 <>
//                     <View style={styles.container}>
//                         <Image
//                             source={{ uri: values.imageUrl || thumbnailUrl || PLACEHOLDER_IMG }}
//                             style={styles.image}
//                         />
//                         <View style={styles.textInputContainer}>
//                             <TextInput
//                                 placeholder='Write a Caption...'
//                                 placeholderTextColor='gray'
//                                 multiline
//                                 style={styles.captionInput}
//                                 onChangeText={handleChange('caption')}
//                                 onBlur={handleBlur('caption')}
//                                 value={values.caption}
//                             />
//                         </View>
//                     </View>
//                     <Divider width={0.2} orientation='vertical' />
//                     <TextInput
//                         placeholder='Enter Image URL'
//                         placeholderTextColor='gray'
//                         style={styles.urlInput}
//                         onChangeText={(text) => {
//                             handleChange('imageUrl')(text)
//                             setThumbnailUrl(text)
//                         }}
//                         onBlur={handleBlur('imageUrl')}
//                         value={values.imageUrl}
//                     />
//                     {errors.imageUrl && <Text style={styles.errorText}>{errors.imageUrl}</Text>}
//                     <Button
//                         title='Share'
//                         onPress={handleSubmit}
//                         disabled={!isValid}
//                     />
//                 </>
//             )}
//         </Formik>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         margin: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     image: {
//         width: 100,
//         height: 100,
//     },
//     textInputContainer: {
//         flex: 1,
//         marginLeft: 12,
//     },
//     captionInput: {
//         color: 'white',
//         fontSize: 20,
//     },
//     urlInput: {
//         color: 'white',
//         fontSize: 18,
//         marginHorizontal: 20,
//         marginVertical: 10,
//     },
//     errorText: {
//         color: 'blue',
//         fontSize: 15,
//     },
// })

// export default FormikPostUploader
