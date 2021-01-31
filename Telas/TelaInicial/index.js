import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import { color } from 'react-native-reanimated';


import fundo from '../../Assets/fundo.png'
import estilo from './estilo';


export default function TelaInicial({ navigation }){
    return(
     <ImageBackground source = {fundo} style = {estilo.fundo}>
        <View style = {estilo.tela}>
             <Text style = {estilo.titulo}>Escolha seu desafio</Text>
                <View style={estilo.boxBotao}>
                <Button title='Adição' onPress = { () => navigation.navigate('Adicao')  } />
                </View>
                <View style={estilo.boxBotao}> 
                <Button title='Subtração' onPress = { () => navigation.navigate('Subtracao')}/>
                </View>
                <View style={estilo.boxBotao}>
                <Button title='Multiplicação' onPress = { () => navigation.navigate('Multiplicacao')}/>
                </View>
                <View style={estilo.boxBotao}>
                <Button title='Divisão' onPress = { () => navigation.navigate('Divisao')}/>
                </View>
         </View>
    </ImageBackground>
    );
}