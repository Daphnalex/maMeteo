import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet, Image, Button} from 'react-native';
import style from "../Style";

export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            city: ""
        }
    }

    onChangeCity = (text) => {
        console.log('text',text);
        this.setState({
            city: text
        });
    };

    submit = () => {
        this.props.navigation.navigate('Result', {city: this.state.city});
        this.setState({
            city: ''
        })
    }

    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}>
                    Mon application météo
                </Text>
                <TextInput
                    style={style.input}
                    placeholder="Indiquez une ville"
                    onChangeText={text => this.onChangeCity(text)}
                    value={this.state.city}
                    />   
                <Button onPress={() => this.submit()} title="Rechercher une ville" color="#841584"/>
            </View>
        )
    }
}
