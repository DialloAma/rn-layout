import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function DetailItem() {
    return (
        <View style={{marginTop:50,marginHorizontal:25}}>
           <Icones/>
           <Items/>
        </View>
    )
}

const Icones=()=>(
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity style={{backgroundColor:"white",borderRadius:50,padding:5}} activeOpacity={0.5}>
        <AntDesign name="back" size={24} color="black" /> 
        </TouchableOpacity >
        
       <TouchableOpacity  style={{backgroundColor:"white",borderRadius:50,padding:5}} activeOpacity={0.5}>
       <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity >
   </View>
)
const Items=()=> {
    return(
        
        
            <View style={{marginTop:30}}>
             
                <View style={{backgroundColor:"white",padding:10 ,alignItems:"center"}}>
                <Image source={require("./assets/images/jack.png")} style={{height:200,width:200}}/>
                </View>
                <View style={{marginTop:30}}>
                <Text style={{marginLeft:20,fontSize:20,fontWeight:"bold"}}>Red Woman Jacket</Text>
                 <View style={{justifyContent:"center" ,marginTop:15}}>
                 <Text style={{marginLeft:20}}>Review :
                 <Ionicons name="md-star" size={15} color="gold" />
                 <Ionicons name="md-star" size={15} color="gold" />
                 <Ionicons name="md-star" size={15} color="gold" />
                 <Ionicons name="md-star" size={15} color="gold" />
                 <Ionicons name="md-star" size={15} color="gray" />
                 </Text>
                 <View style={{backgroundColor:"blue",width:50,height:5,marginLeft:20,borderRadius:10,marginTop:20}}>
                 </View>
                 <Text style={{marginLeft:20,marginTop:20}}>it is a long etablished fact that a reader will be distracted by the readable content of the page</Text>
                 </View>
                 
                
                </View>
                <View style={{backgroundColor:"white",padding:15,marginTop:20}}>
                    <Text style={{color:"blue"}}>Material: 91% polyester,9% elastane</Text>
                </View>
                <View style={{marginTop:25,flexDirection:"row",justifyContent:"space-evenly"}}>
                    <TouchableOpacity style={{backgroundColor:"white",padding:10}} activeOpacity={0.5}> 
                        <Text>XS</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"white",padding:10}} activeOpacity={0.5}> 
                        <Text>S</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"blue",padding:10}} activeOpacity={0.5}> 
                        <Text style={{color:"white"}}>M</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"white",padding:10}} activeOpacity={0.5}> 
                        <Text>L</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"white",padding:10}} activeOpacity={0.5}> 
                        <Text>XL</Text> 
                    </TouchableOpacity>
                    
                </View>
                <View style={{backgroundColor:"lightblue",marginTop:50,padding:15,borderRadius:20,flexDirection:'row',justifyContent:"space-between"}}>
                    <View>
                        <Text style={{color:"white"}}>Total Amount</Text>
                        <Text style={{color:"white",fontWeight:"bold"}}>$110</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{backgroundColor:"blue",padding:10,borderRadius:10}} activeOpacity={0.5}>
                            <Text style={{color:"white"}}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                
            </View>
            
          
    )
}