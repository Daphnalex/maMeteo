import React, { Component } from 'react';
import style from "../Style";

import {Text, View, StyleSheet, Image, Button} from "react-native";

export default class About extends Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/user.png')} />
        }
    }

    search = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}>A propos de moi</Text>
                <Text>
                    Coactique aliquotiens nostri pedites ad eos persequendos scandere clivos sublimes etiam si lapsantibus plantis fruticeta prensando vel dumos ad vertices venerint summos, inter arta tamen et invia nullas acies explicare permissi nec firmare nisu valido gressus: hoste discursatore rupium abscisa volvente, ruinis ponderum inmanium consternuntur, aut ex necessitate ultima fortiter dimicante, superati periculose per prona discedunt.
                </Text>
                <Button title='Rechercher' color="#841584" onPress={() => this.search()} />
            </View>
        )
    }
};