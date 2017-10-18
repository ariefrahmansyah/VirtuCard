import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) =>{
    const {textStyle,viewStyle} = styles;

    return (
    <View style = {viewStyle}>
        <Text style = {textStyle}>{props.headerText}</Text>
    </View>
    );
}

const styles = {
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F8F8F8',
        shadowColor: '#000',
        height:60,
        shadowOffset: {width:0,height:2},
        shadowOpacity: 0.2,
        padding:15,
        elevation:2,
        position:'relative'
    },
    textStyle:{
        fontSize:20,
        alignItems:'center'
    }
};

export default Header;
