import React from 'react';
import {Text, View,Image,ScrollView,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const CardDetail=({card})=>{
    const{name,jobs,phone,pp}=card;

    const{thumbnailStyle,
        imageStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        nameStyle}=styles;

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri:pp}}/>
                </View>

                <View style={headerContentStyle}>
                    <Text style={nameStyle}>{name}</Text>
                    <Text>{jobs}</Text>
                    <Text>&#9743; {phone}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Button onPress ={()=>Linking.openURL(pp)}/>
            </CardSection>
        </Card>
    );
};

const styles ={
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    nameStyle:{
        fontWeight: 'bold'
    },
    thumbnailStyle:{
        width:50,
        height:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    }
}

export default CardDetail;
