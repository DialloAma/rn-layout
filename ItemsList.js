import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function ItemsList() {
    const items=[
        {info:"bike jacket softshell warm",pict:require("./assets/images/jack.png"),price:80},
        {info:"pink hoody merino",pict:require("./assets/images/jack3.png"),price:100},
        {info:"hooded jacket classic",pict:require("./assets/images/jack2.png"),price:80},
        {info:"red woman jacket",pict:require("./assets/images/jack1.png"),price:80},
        {info:"bike jacket",pict:require("./assets/images/jack.png"),price:80}
    ]
    return (
        <View style={{marginTop:50,marginHorizontal:25}}>
           <Icones/>
           <Text style={{marginTop:20,fontSize:15,fontWeight:"bold",marginBottom:20}}>Woman Jacket</Text>
        <SeachBar/>
        
                   
        <FlatList data={items} renderItem={({item})=>{
            return( 
               <Items info={item.info} imag={item.pict} price={item.price} />
           )
        }} keyExtractor={(item)=>item.info} showsVerticalScrollIndicator={false} />
        
         </View>
    )
}
const Icones=()=>(
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <View style={{backgroundColor:"white",borderRadius:50,padding:5}}>
        <AntDesign name="back" size={24} color="black" /> 
        </View>
        
       <View style={{backgroundColor:"white",borderRadius:50,padding:5}}>
       <AntDesign name="shoppingcart" size={24} color="black" />
        </View>
   </View>
)
const SeachBar=()=>(
<View style={{backgroundColor:"white",marginHorizontal:30,marginVertical:15,borderRadius:50,padding:15,flexDirection:"row",justifyContent:"space-between"}}>

  <Text style={{fontWeight:"100"}}>Search</Text>
  <TouchableOpacity>
  <Text style={{color:"blue"}}>Filter</Text> 
  </TouchableOpacity>
</View>
)
const Items=({info,imag,price})=> {
    return(
        
        
            <View style={{flexDirection:"row",justifyContent:"flex-start",marginVertical:10,marginTop:20}}>
             
                <View style={{backgroundColor:"white",padding:10}}>
                <Image source={imag} style={{height:100,width:100}}/>
                </View>
                <View style={{marginTop:30}}>
                <Text style={{marginLeft:20}}>{info}</Text>
                <EvilIcons name="star" size={24} color="gold" style={{marginLeft:20}} />
                <Text style={{marginLeft:20,color:"blue"}}>${price}</Text>
                </View>
                
                
            </View>
            
          
    )
}
   
    


