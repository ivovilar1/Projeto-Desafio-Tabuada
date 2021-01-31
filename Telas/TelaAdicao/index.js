import React, {useState} from 'react';
import {View, Text,Button, TextInput, ImageBackground} from 'react-native';

import {validarResposta, gerarNumero} from './funcoes';

import fundo from '../../Assets/fundo.png';
import estilo from './estilo';

const TelaAdicao = (props) => {
    const [ primeiroNumero, setPrimeiroNumero ] = useState(1);
    const [ segundoNumero, setSegundoNumero ] = useState(1);
    const [ respostaUsuario, setRespostaUsuario ] = useState("");

    const criarQuestao = () => {
        setPrimeiroNumero(gerarNumero());
        setSegundoNumero(gerarNumero());
        setRespostaUsuario("");
      }

    const responder = () => {
        if ( validarResposta(primeiroNumero, segundoNumero, respostaUsuario) ) {
          props.navigation.navigate('TelaRespostaCorreta');
        } else {
          props.navigation.navigate('TelaRespostaErradaA');
        }
    
        criarQuestao();
      }

      const abrirTelaTabuada = () => {
        props.navigation.navigate('TabuadaAdicao');
      }

      const voltar = () =>{
        props.navigation.goBack();
      }

      return (
        <ImageBackground source={fundo} style={estilo.imagemFundo}>
          <View style={estilo.tela}>
            <View style={estilo.boxPergunta}>
              <Text style={estilo.titulo}>
                Duvido você acertar!
              </Text>
    
              <View style={estilo.boxQuestao}>
                <Text style={estilo.texto}>            
                  { primeiroNumero }
                </Text>
    
                <Text style={estilo.texto}>
                  +
                </Text>
    
                <Text style={estilo.texto}>            
                  { segundoNumero }
                </Text>
    
                <Text style={estilo.texto}>
                  =
                </Text>
    
                <TextInput 
                  textAlign="center"
                  onChangeText={ setRespostaUsuario } 
                  keyboardType="numeric" 
                  value={respostaUsuario.toString()} 
                  autoFocus={true}
                  maxLength={3} 
                  style = { estilo.input }/>
              </View>
    
              <View style={estilo.opcoes}>
                <View style={estilo.boxBotao}>
                  <Button title="Pular" onPress={criarQuestao} color="#e53b62"/>
                </View>
    
    
                <View style={estilo.boxBotao}>
                  <Button title="Responder" onPress={responder} color="#a0df52"/>
                </View>
              </View>
    
            </View>
    
            <View style={estilo.boxBotaoTabuada}>
              <Button title="Ver tabuada" onPress={abrirTelaTabuada} color="#1f4f66"/>
            </View>
            <View style={estilo.boxBotaoTabuada}>
              <Button title="Voltar" onPress={voltar} color="#1f4f66"/>
            </View>
            

            
          </View>
        </ImageBackground>
      );
    }
    
    export default TelaAdicao;