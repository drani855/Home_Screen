import React from 'react';
import {View,Text, Image,ImageBackground} from 'react-native';
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import {Entypo,AntDesign} from 'react-native-vector-icons';
//import Animated from 'react-native-reanimated';
//import { Carousel } from 'react-native-ui-lib';
//import { useRef } from 'react';

const Home=({})=>{
    
    return(
    <View style={{
    justifyContent:'center',
   // alignContent:'center',
    flex:1
  }}>





      <View style={{
               backgroundColor:"#009B77",
               height:"10%",
               borderBottomLeftRadius:10,
               borderBottomRightRadius:10,
               paddingHorizontal:10,
               flexDirection:"row",
               marginTop:"30%",
               elevation:3,
               
           }}>
               <View style={{
                   flexDirection:"row",
                   marginTop:10
              }}>
               <Entypo name="menu" size={28} color={"black"}/>
               
               <Text style={{
                   fontSize:22,
                   color:"white",
                   marginLeft:"0.01%",
                   fontWeight:"bold",
               }}>    SpeedBae</Text>
               <Image source={require('../images/logo.png')}/>
               </View>  
                       
       <View style={{
           //alignItems:"flex-end",
           flexDirection:"row",
           justifyContent:"space-evenly",
           width:10,
           margin:"-190%",
           //marginRight:200,
            }}>
               <Entypo name="shopping-cart" size={28} color={"black"}/>
               </View>
         </View>
<LinearGradient
   colors={["rgba(0,164,109,0.4)", "transparent"]}
   style={{
       left:0,
       right:0,
       height:"-10%",
       marginTop:-8,
      elevation:4,
   }}  >
     <View style={{
          backgroundColor:"#FFF",
          paddingVertical:8,
          paddingHorizontal:20,
          marginHorizontal:20,
          borderRadius:15,
          marginTop:25,
          flexDirection:"row",
          alignItems:"center"
      }}>
        <TextInput
               placeholder="Search"
               placeholderTextColor="#b1e5d3"
               style={{
                   fontWeight:"bold",
                   fontSize:18,
                   width:"90%"
               }}
          />
          <AntDesign name="search1" size={28} color={"#b1e5d3"}/>
      </View>
     
   </LinearGradient>
   
   <View style={{
          flexDirection:"row",
          paddingHorizontal:25,
          height:"-20%",
          width:"80%",
          alignItems:"center"
      }}>
        <View style={{height:"30%"}}>
               <Text style={{
                   fontWeight:"bold",
                   fontSize:20,
                   color:"#585a61"
               }}>Services</Text>
               <View style={{
                   height:3,
                   backgroundColor:"#b1e5d3",
                   height:"20%",
                   marginTop:-4,
               }}>

               </View>
      </View>
      <View style={{width:"100%", height:"-40%",alignItems:"flex-end"}}>
               <View style={{
                   backgroundColor:"#00a46c",
                   paddingHorizontal:15,
                   paddingVertical:5,
                   borderRadius:30,
               }}>
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:9,
                       color:"#FFF"
                   }}>More</Text>
               </View>
          </View>
      
      </View>
      <ScrollView 
           horizontal
           showsHorizontalScrollIndicator={false}
           style={{height:40}}
       >
           <LinearGradient
               colors={["rgba(0,164,109,0.09)", "transparent"]}
               style={{
                   position:"absolute",
                   left:0,
                   right:0,
                   height:"10%",
                   marginTop:"100%",
                   top:0
               }}
           />
            <TouchableOpacity>
          <Image
            source={require('../images/restro.png')}
            style={{ width:50, 
                height:100,
               // marginBottom:10,
                 //  elevation:2,
                   //backgroundColor:"#FFF",
                   
                   marginLeft:20,
                   marginTop:20,
                   //borderRadius:15,
                   //marginBottom:10,
                   width:60
            }}/>
                                               
            <View style={{
                   flexDirection:"row",
                   marginTop:10
              }}>
                  </View>
     </TouchableOpacity>  
                  <TouchableOpacity>
          <Image
            source={require('../images/barber.png')}
            style={{ width:50, 
                height:"20%",
                marginBottom:10,
                   elevation:2,
                   backgroundColor:"#FFF",
                   marginLeft:20,
                   marginTop:20,
                   borderRadius:15,
                   marginBottom:10,
                   width:160
            }}/>
                                               
            <View style={{
                   flexDirection:"row",
                   marginTop:10
              }}>
                  </View>
                  </TouchableOpacity>  

               <TouchableOpacity>           
              <Image
                source={require('../images/book.png')}
                style={{ width:50, 
                    height:150,
                    marginBottom:10,
                       elevation:2,
                       backgroundColor:"#FFF",
                       marginLeft:20,
                       marginTop:20,
                       borderRadius:15,
                       marginBottom:10,
                       width:160
                }}/>
                                                   
                <View style={{
                       flexDirection:"row",
                       marginTop:10
                  }}>
                      </View>
                      </TouchableOpacity>  
               
           
        <TouchableOpacity>           
              <Image
                source={require('../images/grocery.png')}
                style={{ width:50, 
                    height:150,
                    marginBottom:10,
                       elevation:2,
                       backgroundColor:"#FFF",
                       marginLeft:20,
                       marginTop:20,
                       borderRadius:15,
                       marginBottom:10,
                       width:160
                }}/>
                                                   
                <View style={{
                       flexDirection:"row",
                       marginTop:10
                  }}>
                      </View>
                      </TouchableOpacity>  
                      <TouchableOpacity>           
              <Image
                source={require('../images/store.png')}
                style={{ width:50, 
                    height:150,
                    marginBottom:10,
                       elevation:2,
                       backgroundColor:"#FFF",
                       marginLeft:20,
                       marginTop:20,
                       borderRadius:15,
                       marginBottom:10,
                       width:160
                }}/>
                                                   
                <View style={{
                       flexDirection:"row",
                       marginTop:10
                  }}>
                      </View>
                      </TouchableOpacity>  

       </ScrollView>  
              
       <View style={{
          flexDirection:"row",
          paddingHorizontal:20,
        //  width:"600%",
         // alignItems:"center",
          marginVertical:"70%",
      }}>
          <View style={{width:"50%"}}>
               <Text style={{
                   fontWeight:"bold",
                   fontSize:20,
                   color:"#585a61"
               }}>Categories</Text>
               <View style={{
                   height:3,
                   backgroundColor:"#b1e5d3",
                   width:100,
                   marginTop:-3
               }}>

               </View>

          </View>
          <View style={{width:"50%", height:"40%",alignItems:"flex-end"}}>
               <View style={{
                   backgroundColor:"#00a46c",
                   paddingHorizontal:15,
                   paddingVertical:5,
                   borderRadius:30,
               }}>
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:9,
                       color:"#FFF"
                   }}>More</Text>
               </View>
          </View>
      </View>

      
              
       <ScrollView
           horizontal
           showsHorizontalScrollIndicator={false}
           style={{marginBottom:15}}
       >
            <Image
               source={require('../images/restro.png')}
               style={{marginTop:20,marginHorizontal:20}}
           />
           <Image
               source={require('../images/heart.png')}
               style={{marginTop:20,borderRadius:10}}
           />
       </ScrollView>
       </View>

       );
    
}
export default Home;
