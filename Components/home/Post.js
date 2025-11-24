import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed';
import POSTS from '../../data/postData';

const postFooterIcons =[
  {
      name:'Like',
      imageUri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
      LikedImageUri:'https://img.icons8.com/windows/32/FA5252/filled-heart.png'

  },

  {
      name:'Comment',
      imageUri:'https://img.icons8.com/ios/50/FFFFFF/speech-bubble--v1.png'
  },

  {
      name:'Share',
      imageUri:'https://img.icons8.com/ios/50/FFFFFF/sent--v1.png'
  },

  {
      name:'Save',
      imageUri:'https://img.icons8.com/material-outlined/96/FFFFFF/bookmark-ribbon--v1.png'
  }
]

const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}}>
        <Divider width={1} orientation='vertical' />
        <PostHeader post={post}/>
        <PostImage post={post}/>
        <View style={{marginHorizontal:15, margin:10,}}>
        <PostFooter/>
        <Likes post={post}/>
        <Caption post={post}/>
        <CommentSection post={post}/>
        <Comments post={post}/>
        </View>
    </View>
  )
}

const PostHeader = ({post})=>(
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5,alignItems:'center'}} >
      <View style={{flexDirection:'row',alignItems:'center',}}>
        <Image source={{uri:post.profilePicture}} style={styles.story}/>
        <Text style={{color:'white',marginLeft:5, fontWeight:700}}>{post.name}</Text>
        </View>
        <View>
          <Text style={{color:'white',fontWeight:900}}>...</Text>
        </View>
    </View>
)

const PostImage = ({post})=>( //called an implicit return it requires writing no return statement...
  //we did it for stylesheet too
  <View style={{width:'100%',height:450}}>
  <Image source={{uri:post.imageUri}} style={{height:'100%',resizeMode:'cover'}}/>
  </View>
)

const PostFooter = ()=>(
  <View style={{flexDirection:'row', justifyContent:'space-between',}}>
    <View style={{flexDirection:'row', gap:10}}>
    <Icons imgStyle={styles.footerIcon} imgUri={postFooterIcons[0].imageUri}/>
    <Icons imgStyle={styles.footerIcon} imgUri={postFooterIcons[1].imageUri}/>
    <Icons imgStyle={[styles.footerIcon,styles.shareIcon]} imgUri={postFooterIcons[2].imageUri} />
    </View>
    <View>
      <Icons imgStyle={styles.footerIcon} imgUri={postFooterIcons[3].imageUri}/>
    </View>   
  </View>
)

const Icons = ({imgStyle,imgUri})=>(
  <TouchableOpacity>
      <Image style={imgStyle} source={{uri:imgUri}}/>
  </TouchableOpacity>
)

const Likes =({post})=>(
  <View style={{flexDirection:'row',marginTop:4}}>
    <Text style={{color:'white', fontWeight:600}}>{post.likes.toLocaleString('en')} likes</Text>
  </View>
)

const Caption =({post})=>(
  <View style={{marginTop:5}}>
    <Text style={{color:'white'}}>
      <Text style={{fontWeight:'600'}}>{post.name}</Text>
      <Text> {post.caption}</Text>
    </Text>
    </View>
)

const CommentSection =({post})=>(
  <View style={{marginTop:5}}>
    {!!post.comments.length && (  // double negation converts to boolean !!
      <Text style={{color:'gray'}}>
      View {post.comments.length > 1 ? 'all' : ''} {post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
    </Text>
    )}
  </View>
)

const Comments =({post})=>(
  <>

  {post.comments.map((comment, index)=>(
    <View key={index} style={{marginTop:5,flexDirection:'row'}}>
      <Text>

      <Text style={{color:'white', fontWeight:'600'}}>
        {comment.user}
      </Text>
      <Text style={{color:'white'}}> {comment.text}</Text>
      </Text>
    </View>
  )
)}
  </>
)



const styles = StyleSheet.create({
  story:{
      width:35,
      height:35,
      borderRadius:'50%',
      marginLeft:6,
      borderWidth:1.6,
      borderColor:'#FF8501'
  },
  footerIcon:{
    width: 33,
    height:33,
  },
  // shareIcon:{
    
  // }
  
})

export default Post