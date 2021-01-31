import React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';

import errou from '../../../Assets/errou.jpg';
import estilo from './estilo';

const TelaRespostaErradaS = (props) => {
  const abrirTelaTabuada = () => {
    props.navigation.navigate('TabuadaSubtracao');
  }

  const voltar = () => {
    props.navigation.goBack();
  }

  return (
    <ImageBackground source={errou} style={estilo.fundo} resizeMode="cover">
      <View style={estilo.boxConteudo}>
        <Text style={estilo.texto}>
          Ops! Resposta errada que tal ver a tabuada?
        </Text>

        <View style={estilo.boxBotoes}>
          <View style={estilo.boxBotao}>
            <Button title="Ver tabuada" onPress={abrirTelaTabuada} color="#1f4f66"/>
          </View>

          <View style={estilo.boxBotao}>
            <Button title="Tentar outro" onPress={voltar} color="#a0df52"/>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default TelaRespostaErradaS;