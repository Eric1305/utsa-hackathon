import { View, Text, ScrollView, StatusBar } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import {Colors} from './../../constants/Colors';
import React from 'react'

export default function home() {
  return (
    <View style={{
      display:'flex',
      flex:1,
      backgroundColor:'#98B1B4'
    }}>
      <View style={{
        display:'flex',
        marginTop:30,
        marginLeft:20
      
      }}>
        <Text style={{
          fontSize:40,
          fontFamily:'mont-medium',
          color:'#133C55'

          }}>Welcome James</Text>
      </View>
      <View style={{
        display:'flex',
        marginTop:100,
        marginLeft:20
      }}>
        <Text style={{
          fontSize:30,
          fontFamily:'mont-medium',
          color:'#133C55'

        }}>Recent Activity</Text>
      </View>
      <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
        height:'50%',
        width:'100%',
        marginTop:20,
      }}>
        <SafeAreaProvider style={{
          height:'50%',
          width:'92%',
        }}>
          <SafeAreaView style={{
          flex:1,
        }}>
            <ScrollView style={{
              backgroundColor:'#26532B',
              borderRadius:20,
              borderColor:'darkgreen', 
              borderWidth:10
              
            }}>
              <View title='RecentActivityForm'style={{
                display:'flex',
                
                height:170,
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
              }}>
                <View style={{
                  display:'flex',
                  backgroundColor:'#50B093',
                  height:70,
                  width:'90%',
                  borderTopRightRadius:25,
                  borderTopLeftRadius:25,
                }}>
                  <Text style={{
                    padding:15,
                    fontFamily:'mont-medium',
                    fontSize:40,
                    color:'white'
                  }}>
                    +$1000
                  </Text>
                </View>
                <View style={{
                  display:'flex',
                  backgroundColor:'#50B093',
                  height:60,
                  width:'90%',
                  borderBottomRightRadius:25,
                  borderBottomLeftRadius:25,
                  justifyContent:'space-around',
                  flexDirection:'row',
                  paddingTop:10
                }}>
                  <View style={{
                    
                    fontFamily:'mont',
                    fontSize:30,
                    color:'green',
                   
                  }}>
                    Kitchen
                  </View>
                  <View style={{
                    
                    fontFamily:'mont',
                    fontSize:30,
                    color:'green',
                    
                  }}>
                    Cash
                  </View>
                  <View style={{
                    
                    fontFamily:'mont',
                    fontSize:30,
                    color:'green',
                    
                  }}>
                    10/27
                  </View>
                </View>
              </View>
              <View title='RecentActivityForm'style={{
                display:'flex',
                
                height:170,
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
              }}>
                <View style={{
                  display:'flex',
                  backgroundColor:'#50B093',
                  height:70,
                  width:'90%',
                  borderTopRightRadius:25,
                  borderTopLeftRadius:25,
                }}>
                  <Text style={{
                    padding:15,
                    fontFamily:'mont-medium',
                    fontSize:40,
                    color:'red'
                  }}>
                    -$900
                  </Text>
                </View>
                <View style={{
                  display:'flex',
                  backgroundColor:'#50B093',
                  height:60,
                  width:'90%',
                  borderBottomRightRadius:25,
                  borderBottomLeftRadius:25,
                  justifyContent:'space-around',
                  flexDirection:'row',
                  paddingTop:10
                }}>
                  <View style={{
                    
                    fontFamily:'mont',
                    fontSize:30,
                    color:'green',
                   
                  }}>
                    Garage
                  </View>
                  <View style={{
                    
                    fontFamily:'mont',
                    fontSize:30,
                    color:'green',
                    
                  }}>
                    Prepaid
                  </View>
                  <View style={{
                    
                    fontFamily:'mont',
                    fontSize:30,
                    color:'green',
                    
                  }}>
                    10/23
                  </View>
                </View>
              </View>
              <View title='RecentActivityForm'style={{
                display:'flex',
                
                height:170,
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
              }}>
                <View style={{
                  display:'flex',
                  backgroundColor:'#50B093',
                  height:70,
                  width:'90%',
                  borderTopRightRadius:25,
                  borderTopLeftRadius:25,
                }}>
                  <Text style={{
                    padding:15,
                    fontFamily:'mont-medium',
                    fontSize:40,
                    color:'white'
                  }}>
                    +$2000
                  </Text>
                </View>
                <View style={{
                  display:'flex',
                  backgroundColor:'#50B093',
                  height:60,
                  width:'90%',
                  borderBottomRightRadius:25,
                  borderBottomLeftRadius:25,
                  justifyContent:'space-around',
                  flexDirection:'row',
                  paddingTop:10
                }}>
                  <View style={{
                    
                    fontFamily:'mont',
                    fontSize:30,
                    color:'green',
                   
                  }}>
                    Vault
                  </View>
                  <View style={{
                    
                    fontFamily:'mont',
                    fontSize:30,
                    color:'green',
                    
                  }}>
                    Cash
                  </View>
                  <View style={{
                    
                    fontFamily:'mont',
                    fontSize:30,
                    color:'green',
                    
                  }}>
                    10/20
                  </View>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </View>
  )
}