import React, {Component} from 'react';
import {Text,View,Button} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increment, decrement} from './actions/index';

class Counter extends Component{
    addIncrement = () =>{
        this.props.incrementAction();
    };
    minIncrement = () =>{
        this.props.decrementAction();
    };
    render(){
        return(
            <View>
                <Text>Contoh Redux</Text>
                <Text>Counter : {this.props.count}</Text>
                <Button title="Tambah"  onPress={this.addIncrement}/>
                <Button title="Kurang"  onPress={this.minIncrement}/>
            </View>
        );
    }
}
    function MapStateToProps(state){ // cobert dari action menjadi props
        //fungsi bindActionCreators combinasikan semua action ke single object
       //lihat data reducer
        return{
            count: state.count,
        };
    }
    function matchDispatchToProps(dispatch){
        return bindActionCreators(
            {incrementAction: increment, decrementAction: decrement}, dispatch,
        );
    }

export default connect(
    MapStateToProps,
    matchDispatchToProps,
)(Counter);