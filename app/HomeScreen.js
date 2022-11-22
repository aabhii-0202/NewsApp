/* eslint-disable prettier/prettier */
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {
  SafeAreaView, ScrollView, StyleSheet,
  Image, Text, TextInput, View }
from 'react-native';
import { getAllNews } from './api/news';
import NewsItem from './components/NewsItem';

import { store } from './redux/store';
import { Provider } from 'react-redux';


import { useSelector, useDispatch } from 'react-redux';
import { addItems } from './redux/slice';

const App = ({navigation}) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        const getData = async () => {
            const res = await getAllNews();
            if (res && res.status === 'ok'){
                dispatch(addItems(res.articles));
            }
        };
        getData();
    },[dispatch]);

    let list = useSelector((item) => item.newsList.listofNews);
    const [search, setSearch] = useState('');

  return (
    <Provider store = {store}>
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{paddingHorizontal: 24}}>
        <View>
            <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search for news"
            />
        </View>
        {
            list && list.length > 0
            ?
                list.map(item => {
                    return (
                        <NewsItem/>
                    );
                })
            : null
        }
      </ScrollView>
    </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
