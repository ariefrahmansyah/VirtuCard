import React from 'react';
import {Text,View} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

const Header = (props) =>{
    const {textStyle,textAlignRight,viewStyle} = styles;

    return (
        <View style = {viewStyle}>
            <Grid>
                <Col>
                    <Text style = {textStyle}>Add</Text>
                </Col>
                <Col>
                    <Text style = {textStyle}>{props.headerText}</Text>
                </Col>
                <Col>
                    <Text style = {textAlignRight}>My QR</Text>
                </Col>
            </Grid>
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
    },
    textAlignRight:{
        fontSize:20,
        textAlign: 'right',
        alignSelf: 'stretch'
    }
};

export default Header;
