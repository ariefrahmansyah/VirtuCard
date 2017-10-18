import React,{Component} from 'react';
import {Text,TextInput,ScrollView,TouchableOpacity} from 'react-native';

const AddPage =(props)=>{
        const{textStyle,buttonStyle}=styles;

        return(
            <ScrollView>
                <TextInput 
                        style={{padding: 10, height: 40}}
                        placeholder="Input Name, Email or Phone Number"/>
                <TouchableOpacity style={buttonStyle}>
                        <Text style={textStyle}>Search Virtual Card</Text>
                </TouchableOpacity>
            </ScrollView>
        )
};

const styles ={
        textStyle:{
                alignSelf:'center',
                color:'#007aff',
                fontSize: 16,
                fontWeight:'600',
                paddingTop:10,
                paddingBottom:10
            },
        buttonStyle:{
            flex:1,
            alignSelf:'stretch',
            backgroundColor:'#fff',
            borderRadius:5,
            borderWidth:1,
            borderColor:'#007aff',
            marginLeft:5,
            marginRight:5
        }
    };
    

export default AddPage;
