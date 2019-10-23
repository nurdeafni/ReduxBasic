import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
import {addCity} from './actions';

class ReduxSaveCity extends Component{
    state={
        cityName:'',
    };
    citySubmitHandler=() =>{
        if(this.state.cityName.trim() === ''){
            return;
        }
        this.props.add(this.state.cityName);
    };
    cityNameChangeHandler= value => {
        this.setState({
            cityName: value,
        });
    };
    placeOutput=()=>{
        return(
            <FlatList
            style={styles.listContainer}
            data={this.props.dataCity}
            keyExtractor={(item,index) => index.toString()}
            renderItem={info => <ListItem cityName={info.item.value}/>}
          />  
        );
    };
    render(){
        console.log('Data Props Reducer');
        console.log(this.props.dataCity);
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                    placeholder="Seach Places"
                    style={styles.cityInput}
                    value={this.state.cityName}
                    onChangeText = {this.cityNameChangeHandler}
                    />
                    <Button 
                    title="Add"
                    style={styles.cityButton}
                    onPress={this.citySubmitHandler}
                    />
                </View>
             <View style={styles.listContainer}>
            {this.placeOutput()}</View>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    cityInput:{
        width: '70%',
    },
    cityButton:{
        width: '30%',
    },
    listContainer:{
        width: '100%',
    },
});
const mapStateToProps= state => {
    console.log('mapStatePRops');
    console.log(state);
    return{
        dataCity: state.listCity.city
    };
};
const mapDispatchToProps = dispatch => {
    return{
        add: name => {
            dispatch(addCity(name)); //dispatch menghubungkan action menuju reducers
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (ReduxSaveCity);
