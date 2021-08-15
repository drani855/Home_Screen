import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Swiper} from 'react-native-swiper';

const SwiperComponents = () => {
    return(
        <Swiper
            style={StyleSheet.wrapper}
            dotStyle={{
                marginTop:-200,
                width:15,
                height:5,
                borderRadius:10,
                backgroundColor:"#FFF",

            }}
            activeDotColor="#FFF"
            activeDotStyle={{
                marginTop:-200,
                width:30,
                height:6,
                borderRadius:10,
                backgroundColor:"#FFF",
                activeDotColor:"#FFF"

            }}
        >
            <View style={styles.slide}>
            <Image
                        source={require('../images/driver.png')}
                        style={{
                            marginLeft:120,
                            marginBottom:130,
                            height:720,
                            width:420,
                            marginTop:60,
                            resizeMode:"stretch"
                        }}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../images/coffee.png')}
                        style={{
                            marginLeft:120,
                            marginBottom:130,
                            height:720,
                            width:420,
                            marginTop:60,
                            resizeMode:"stretch"
                        }}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={require('../images/fruits.png')}
                        style={{
                            marginLeft:120,
                            marginBottom:130,
                            height:720,
                            width:420,
                            marginTop:60,
                            resizeMode:"stretch"
                        }}
                    />
                </View>

            </Swiper>
    )
        }
        const styles = StyleSheet.create({
            wrapper:{},
            slide:{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#FFF"
            }
        })
        export default SwiperComponents;