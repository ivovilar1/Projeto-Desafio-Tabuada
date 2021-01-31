import React from 'react';
import { ImageBackground, View, Button } from 'react-native';

import estilo from './estilo';
import tabuada from '../../../Assets/TabuadaAdicao.png';

const TabuadaAdicao = (props) => {
  const voltar = () => {
    props.navigation.goBack("TelaAdicao");
  }

  return (
    <ImageBackground source={tabuada} style={estilo.fundo} resizeMode="contain">
      <View style={estilo.boxBotaoTabuada}>
        <Button title="Responder" onPress={voltar} color="#a0df52"/>
      </View>
    </ImageBackground>
  )
}

export default TabuadaAdicao;