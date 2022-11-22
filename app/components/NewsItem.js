import React from 'react';

import { StyleSheet,Image,Text, View, Dimensions } from 'react-native';


const App = ({data,click}) => {


    return (
        <View
        style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <Image style={styles.img} source={{uri:data.urlToImage}}/>
            <View style={{flexDirection:'row', justifyContent:'space-between',width:'90%'}}>
                {styles.author?<Text style={styles.author}>By: {data.author}</Text>:null}
                <Text style={styles.author}>{data.publishedAt}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        paddingVertical:6,
        marginVertical:10,
        alignItems:'center',
        borderRadius:8,
        paddingBottom:20,
        backgroundColor: '#FEF5EA',
    },
    img:{
        height:Dimensions.get('window').width * 0.45,
        width:'100%',
        marginTop:10,
        marginBottom:10,
        backgroundColor: 'pink',
    },
    title:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:8,
        marginHorizontal:12,
    },
    author:{
        fontSize:12,
        color:'black',
        textAlign:'center',
        marginTop:8,
    },
});


export default App;
