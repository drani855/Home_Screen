import React from 'react'
import {View, Text, Image, ImageBackground, SafeAreaView,StyleSheet} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import {Entypo} from 'react-native-vector-icons'
import {Card} from 'react-native-paper'

const Home = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
           <View style={styles.header}>
                <Entypo name="menu" size={32} />
                <View style={styles.header1}>   

        <View style={{width:"25%",alignItems:"flex-end"}}>
                   <Image
                            source={require('../images/logo.png')}
                            style={{height:60,width:65}}
                    />
        </View>
        <View>
        <Text style={styles.speedbaeHeader}
              >SpeedBae</Text>

             <View style={styles.shoppingCart}>
                        <Entypo name="shopping-cart" size={32}/>
            </View>
            </View>
                   
    </View>
</View>
<LinearGradient
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={styles.linearGradient}>
               <View style={styles.search}>
                   
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#b1e5d3"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:"97%"
                        }}/>
                   <Image
                    source={require('../images/search.png')}
                    style={{height:20,width:20}}
                   />
               </View>
    </LinearGradient>

               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61",
                            marginTop:"20%"   
                        }}>Services</Text>
                    
                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15,
                            marginTop:"20%"    
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>

            
            <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:"-70%"}}
                >
                    <Image
                        source={require("../images/meat.png")}
                        style={{marginTop:20,
                            borderRadius:5,
                            height:100,
                            width:100,
                            marginHorizontal:10}}
                    />
                      <Image
                        source={require("../images/cafe.png")}
                        style={{marginTop:20,
                            borderRadius:5,
                            height:100,
                            width:100,
                            marginHorizontal:10}}
                    />
                     <Image
                        source={require("../images/book.png")}
                        style={{marginTop:20,
                            borderRadius:5,
                            height:100,
                            width:100,
                            marginHorizontal:10}}
                    />
                     <Image
                        source={require("../images/fruits.png")}
                        style={{marginTop:20,
                            borderRadius:5,
                            height:100,
                            width:100,
                            marginHorizontal:10}}
                    />
                   
                </ScrollView>
                

                <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:"-10%"               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61",
                            marginTop:"-30%"
                        }}>Categories</Text>
                        

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end",
                     marginTop:"-23%"
                }}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15,
                            
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF",
                                
                            }}>More</Text>
                        </View>
                   </View>
                   
               </View>
               
               
        </View>
        <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:"-70%"}}
                >
                    <Image
                        source={require("../images/driver.png")}
                        style={{marginTop:20,
                            borderRadius:5,
                            height:50,
                            width:60,
                            marginHorizontal:10}}
                    />
                    
                      <Image
                        source={require("../images/electrician.png")}
                        style={{marginTop:20,
                            borderRadius:5,
                            height:50,
                            width:60,
                            marginHorizontal:10}}
                    />
                     <Image
                        source={require("../images/cover.png")}
                        style={{marginTop:20,
                            borderRadius:5,
                            height:50,
                            width:60,
                            marginHorizontal:10}}
                    />
                    
                     <Image
                        source={require("../images/grocery.png")}
                        style={{marginTop:20,
                            borderRadius:5,
                            height:50,
                            width:60,
                            marginHorizontal:10}}
                    />
                    <Image
                        source={require("../images/feel.png")}
                        style={{marginTop:20,
                            borderRadius:5,
                            height:50,
                            width:60,
                            marginHorizontal:10}}
                    />
                </ScrollView>
                
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    header:{
        backgroundColor:"#00a46c",
        height:"15%",
        //borderBottomLeftRadius:10,
        //borderBottomRightRadius:10,
        paddingHorizontal:15,
    },
    header1:{
        flexDirection:"row",
                   alignItems:"center",
                   marginTop:"-8%",
                   width:"100%",
                   
    },
    speedbaeHeader:{
        fontSize:28,
        color:"#FFF",
        fontWeight:"bold",
        marginTop:"-10%",
    },
    shoppingCart:{
        width:"220%",
         alignItems:"flex-end",
        marginTop:"-40%",
    },
    linearGradient:{
        left:0,
        right:0,
        height:"15%",
        marginTop:"-1%"   
    },
    search:{
        backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:30,
                   borderRadius:15,
                   marginTop:"5%",
                   flexDirection:"row",
                   alignItems:"center"
    },
    services:{
        flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:"10%",
    },
    services1:{
        fontWeight:"bold",
        fontSize:17,
        color:"#585a61",
        marginTop:"-10%"
    },
    morepadding:{
        backgroundColor:"#00a46c",
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:15,
        marginTop:"-10%"
    },
    moreStyle:{
        fontWeight:"bold",
        fontSize:13,
        color:"#FFF",
    },
    linearGradient2:{
        position:"absolute",
        left:0,
        right:0,
        height:"25",
        marginTop:120,
        top:0
    },

  });
export default Home;	  



