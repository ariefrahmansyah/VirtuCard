// import React,{Component} from 'react';
// import {ScrollView} from 'react-native';

// class CardList extends Component{

//     state ={cards:[]};

//     componentWillMount(){
//         axios.get('https://rallycoding.herokuapp.com/api/music_cards')
//         .then(response =>this.setState({cards:response.data}));
//     }

//     renderCards()
//     {
//         return this.state.cards.map(card =>
//             <CardDetail key={card.title} card={card} />
//         );
//     }

//     render(){
//         return(
//             <ScrollView>
//                 {this.renderCards()}
//             </ScrollView>
//         );
//     }
// }

// export default CardList;
