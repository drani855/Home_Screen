import React from 'react';
import { StyleSheet, Text, View ,Animated,Dimensions} from 'react-native';

const {width,height}=Dimensions.get('window')

const CarouselItem=({item})=>{
    return(
        <View style={styles.cardView}>
            <Image style={styles.image) source={require('..images//>
            <View style={styles.textView>
                <Text style={styles.itemTitle}>title</Text>
                <Text style={styles.itemDescription}>Description</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    cardView:{
        flex:1,
        width:width-20,
        height:height/3,
        backgroundColor:'white',
        margin:10,
        boderRadius:10,
        shadowColor:"#000",
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5,
    },
    textView:{
        color:'white',
        fontSize:22,
        shadowColor:'#000',

    },
    images:{
        width:width-20,
        height:height/3,
        borderRadius:10,
        fontSize:22,
    },
    itemTitle:{
        color:'white',
        fontSize:22,
        shadowColor:'#000',
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5,
        marginBottom:10,
    },
    itemDescription:{
        color:'white',
        fontSize:22,
        shadowColor:'#000',
        shadowOffset:{width:0.8,height:0.9},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5,
        marginBottom:10,

    }
        
    }
})