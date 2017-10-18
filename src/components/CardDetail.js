import React from 'react';
import {Text, View,Image,ScrollView,Linking} from 'react-native';
import Card from './Card';
// import CardSection from './CardSection';
import Button from './Button';

const CardDetail=({card})=>{
    const{title,artist,thumbnail_image,image,url}=card;

    const{thumbnailStyle,
        imageStyle,
        headerContentStyle,
        thumbnailContainerStyle}=styles;

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri:thumbnail_image}}/>
                </View>

                <View style={headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{uri:image}}/>
            </CardSection>

            <CardSection>
                <Button onPress ={()=>Linking.openURL(url)}/>
            </CardSection>
        </Card>
    );
};

const styles ={
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailStyle:{
        width:50,
        height:50,
        marginRight:5
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    }
}

export default CardDetail;
