import React from 'react';
import {Text,View} from 'react-native';
import Header from './src/components/Header';
import CardList from './src/components/CardList';

const App =()=> (
    <View style ={{flex:1}}>
        <Header headerText = {'Kartu Nama'}/>
        <CardList />
    </View>
);

export default App;
