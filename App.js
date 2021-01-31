import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const navegacao = createStackNavigator();

import TelaInicial from './Telas/TelaInicial';
import TelaAdicao from './Telas/TelaAdicao';
import TelaSubtracao from './Telas/TelaSubtracao';
import TelaMultiplicacao from './Telas/TelaMultiplicacao';
import TelaDivisao from './Telas/TelaDivisao';
import TabuadaAdicao from './Telas/TelaAdicao/TabuadaAdicao';
import TabuadaSubtracao from './Telas/TelaSubtracao/TabuadaSubtracao';
import TabuadaMultiplicacao from './Telas/TelaMultiplicacao/TabuadaMultiplicacao';
import TabuadaDivisao from './Telas/TelaDivisao/TabuadaDivisao'
import TelaRespostaCorreta from './Telas/TelaRespostaCorreta';
import TelaRespostaErradaA from './Telas/TelaAdicao/TelaRespostaErrada';
import TelaRespostaErradaS from './Telas/TelaSubtracao/TelaRespostaErrada';
import TelaRespostaErradaM from './Telas/TelaMultiplicacao/TelaRespostaErrada';
import TelaRespostaErradaD from './Telas/TelaDivisao/TelaRespostaErrada';


const App = () =>{
      return(
        <NavigationContainer>
          <navegacao.Navigator initialRouteName ='Inicial' headerMode='none'>
            <navegacao.Screen name = 'Inicial' component={TelaInicial}/>
            <navegacao.Screen name = 'Adicao' component={TelaAdicao}/>
            <navegacao.Screen name = 'TabuadaAdicao' component={TabuadaAdicao}/>
            <navegacao.Screen name = 'TelaRespostaErradaA' component ={TelaRespostaErradaA}/>
            <navegacao.Screen name = 'Subtracao' component={TelaSubtracao}/>
            <navegacao.Screen name = 'TabuadaSubtracao' component={TabuadaSubtracao}/>
            <navegacao.Screen name = 'TelaRespostaErradaS' component ={TelaRespostaErradaS}/>
            <navegacao.Screen name = 'Multiplicacao' component={TelaMultiplicacao}/>
            <navegacao.Screen name = 'TabuadaMultiplicacao' component={TabuadaMultiplicacao}/>
            <navegacao.Screen name = 'TelaRespostaErradaM' component ={TelaRespostaErradaM}/>
            <navegacao.Screen name = 'Divisao' component={TelaDivisao}/>
            <navegacao.Screen name = 'TabuadaDivisao' component={TabuadaDivisao}/>
            <navegacao.Screen name = 'TelaRespostaErradaD' component ={TelaRespostaErradaD}/>
            <navegacao.Screen name = 'TelaRespostaCorreta' component ={TelaRespostaCorreta}/>
            
          </navegacao.Navigator>

        </NavigationContainer>
      
        );
}
export default App ;