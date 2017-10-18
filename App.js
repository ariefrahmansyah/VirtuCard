import React from 'react';
import {StatusBar,Text,View} from 'react-native';

import Header from './src/components/Header';
import CardList from './src/components/CardList';
import AddPage from './src/components/AddPage';

const App =()=> (
    <View style ={{flex:1}}>
        <StatusBar hidden={true} />
        <Header headerText = {'VirtuCard'} />
        <AddPage />
        {<CardList />}
    </View>
);

export default App;
