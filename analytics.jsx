import { View, Text, Image } from 'react-native'
import React from 'react'
import myImage from '/Users/ericlee/Desktop/PocketCash/PocketCash/assets/images/Assets.png';

export default function profile() {
  return (
    <View style={{
      flex:1
    }}>
       <View style={{
        display:'flex',
        marginTop:30,
        marginLeft:20
      
      }}>
        <Text style={{
          fontSize:40,
          fontFamily:'mont-medium',

          }}>Analytics</Text>
      </View>
      <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'60%',
        width:'100%',
        marginTop:100
      }}>
        <View style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          height:'100%',
          width:'100%',
        
        }}>
          <Image source={myImage} style={{
            height:'90%',
            width:'100%',
            
          }}></Image>
        </View>
      </View>
    </View>
  )
}