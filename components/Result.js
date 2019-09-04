import React, { Component } from 'react';

import axios from "axios";
import moment from "moment";
import 'moment/locale/fr';

moment.locale('fr');

import { View, Text, ActivityIndicator, FlatList, StyleSheet, Image } from "react-native";

export default class Result extends Component {

    static navigationOptions = (params) => {
        //console.log('params',params.navigation);
        return {
            title: `Météo de ${params.navigation.state.params.city}`
        }
    }

    constructor(props){
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
        this.fetchWeather();
    }

    fetchWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&APPID=/*CLE_API*/`)
            .then((response) => {
                this.setState({
                    report: response.data
                });
            });
    }

    renderItem = (item, i) => {
        const day = moment.unix(item.dt).format('ddd');
        const date = moment.unix(item.dt).format('DD/MM');
        
        return <View key={"item" + i} style={style.completeDate}>
                    {this.getIcon(item)}
                    <Text style={style.day} key={'day' + i}>{day.toUpperCase()} {date} : </Text>
                    <Text style={style.temp} key={'temperature' + i}>{item.temp.day}°C </Text>
                </View>
    }

    getIcon = (item) => {
        console.log('ITEM',item);
        const type = item.weather[0].main.toLowerCase();
        let image;
        switch(type){
            case "clouds":
                image = require('./icons/cloud.png');
                break;
            case "rain":
                image = require('./icons/rain.png');
                break;
            default: 
                image = require('./icons/sun.png');
                break;
        }
        return <Image source={image} style={style.icon} />
    }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator />
            )
        } else {
            return (
                <View style={style.view}>
                    <Text style={style.title}>Températures à {this.state.city} :</Text>
                    <FlatList style={style.list}
                    data={this.state.report.list}
                    renderItem={({item,i}) => this.renderItem(item,i) } />
                </View>
            )
        }
        
    }
}
const style = StyleSheet.create({
    view: {
        borderBottomWidth: 2,
        borderBottomColor: "white"
    },
    completeDate: {
        height: 50,
        backgroundColor: "#f96723",
        borderBottomColor: "white",
        borderBottomWidth: 2,
        borderTopColor: "white",
        padding: 5
    },
    title: {
        color: "black",
        fontSize: 20,
        margin: 20
    },
    day: {
        color: "white",
        fontSize: 16,
        position: "relative",
        marginLeft: 50
    },
    temp: {
        color: "white",
        fontSize: 24,
        textAlign: "right",
        fontWeight: "bold",
        marginTop: -20
    },
    icon: {
        height: 40,
        width: 40,
        position: "absolute",
        margin: 5
    }
})
