/* eslint-disable prettier/prettier */
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {
  SafeAreaView, ScrollView, StyleSheet, FlatList,
  Image, Text, TextInput, View, TouchableOpacity }
from 'react-native';
import { getAllNews } from './api/news';
import NewsItem from './components/NewsItem';


import { useSelector, useDispatch } from 'react-redux';
import { addItems } from './redux/slice';

const App = () => {

    let reduxList = useSelector((item) => item.newsList.listofNews);
    const [search, setSearch] = useState('');
    const [loadedList, setLoadedList] = useState([]);
    const [dispList, setDispList] = useState([]);
    const [load, setload] = useState(true);


    const dispatch = useDispatch();
    useEffect(()=>{
        const getData = async () => {
            const res = await getAllNews();
            if (res && res.status === 'ok'){
                dispatch(addItems(res.articles));
                let temp = [];
                for (var i = 0; i < 10; i++) {temp.push(res.articles[i]);}
                setLoadedList([...temp]);
                setDispList([...temp]);
            }
            else {
                console.log(res);
            }
        };
        getData();
    },[dispatch]);

    const onHandleChange = (text) => {
        const lower =  text.toLowerCase().trim();
        if (!lower){
            setDispList(loadedList);
            setload(true);
        }
        else {
          setload(false);
          const filteredarray = loadedList.filter(item => {
            return (
            item.title != null  && item.title.toString().toLowerCase().includes(lower) ||
            item.author != null  && item.author.toString().toLowerCase().includes(lower)
            );
          });
          setDispList(filteredarray);
        }
    };

    const Loadmore = () => {
        let index = loadedList.length;
        let temp = [];
        for (var i = 0; i < reduxList.length && i< index + 10; i++){
            temp.push(reduxList[i]);
        }
        setLoadedList([...temp]);
        setDispList([...temp]);
    };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white',paddingHorizontal: 24}}>
        <View>
            <TextInput
                style={{
                    color:'black',
                    padding:10,
                    marginTop:10,
                    marginBottom:10,
                    borderWidth:1,
                    borderRadius:4,
                }}
                value={search}
                onChangeText={(e)=>{
                    setSearch(e);
                    onHandleChange(e);
                }}
                placeholder="Search for news"
            />
        </View>
        {
            dispList && dispList.length > 0
            ?
            <FlatList
                data={dispList}
                renderItem={({item,index})=>{
                    if (index === dispList.length - 1 && load){
                        return (
                            <TouchableOpacity onPress={Loadmore}>
                                <Text style={styles.loadmore}>Load More</Text>
                            </TouchableOpacity>
                        );
                    }
                    return (
                        <NewsItem data={item}/>
                    );
                }}
            />
            : <Text style={styles.loading}>Loading</Text>
        }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    loading:{
        marginTop:100,
        alignSelf:'center',
    },
    loadmore:{
        marginTop:20,
        alignSelf:'center',
        backgroundColor:'purple',
        color:'white',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:8,
        fontWeight:'bold',
        marginBottom:20,
    }
});

export default App;
