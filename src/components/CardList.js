import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import CardDetail from './CardDetail';

import axios from 'axios';

class CardList extends Component{
    state ={cards:[]};

    componentWillMount(){
        var url = "https://us-central1-mmpg-otp-27c9d.cloudfunctions.net/scanQr"
        axios.post(url, {phone: '628117160077'})
            .then(response =>this.setState({cards:response.data.result.friends}));
    }

    renderCards()
    {
        return this.state.cards.map(card =>
            <CardDetail key={card.name} card={card} />
        );
    }

    render(){
        return(
            <ScrollView>
                {this.renderCards()}
            </ScrollView>
        );
    }
}

export default CardList;
