import React from 'react'
import {View, StyleSheet,Text, Image, TouchableOpacity} from 'react-native'

export default function OnlineShopping() {
    return (
        <View style={{marginTop:100,marginHorizontal:50}}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>ONLINE SHOPPING </Text>
        <Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </Text>
        <View style={{marginTop:20}} >
            <Image style={{width:300,height:250}} source={require("./assets/images/Online_shopping.png")}/>
        </View>
        <View style={{marginHorizontal:80}}>
            <TouchableOpacity style={{backgroundColor:"blue",borderRadius:50,alignItems:"center",justifyContent:"center",padding:10}} activeOpacity={0.5}>
                <Text style={{color:"white",fontSize:20}}>Next</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between" ,marginTop:70,alignItems:"center"}}>
            <View >
                <TouchableOpacity style={{backgroundColor:"lightgray",borderRadius:20,padding:5}} activeOpacity={0.5}>
                    <Text>Previous</Text>
                </TouchableOpacity>
            </View>
           
            <View style={{flexDirection:"row"}}>
            <View style={{borderRadius:50,backgroundColor:"lightgray",height:20,width:20}}></View>
            
            <View style={{borderRadius:50,backgroundColor:"blue",height:20,width:20}}></View>
            <View style={{borderRadius:50,backgroundColor:"lightgray",height:20,width:20}}></View>
            </View>
            
            <View>
            <TouchableOpacity style={{backgroundColor:"lightgray",borderRadius:20,padding:5}} activeOpacity={0.5}>
            <Text>Skip</Text>
            </TouchableOpacity>
            </View>

        </View>
        
    </View>
    )
}
