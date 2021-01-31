# Projeto-Desafio-Tabuada
Uma aplicação em react-native que consiste em um desafio da tabuada com as 4 operações matemáticas

Meu primeiro projeto em desenvolvimento mobile, as imagens das telas foram retiradas do projeto da Devmedia no qual eu fiz e esse projeto consistia em apenas uma tela e apenas desafio de multiplicação, os direitos de imagens são totalmentes da Devmedia. As imagens da tabuada foram retiradas da internet, busca rápida no Google.






**Conceitos utilizados para desenvolver o app:** 

1. Navegação entre telas

2. O uso de estados

3. Componentes básicos do react-native

4. Uso de props

5. Funções matemáticas


**Para rodar no seu ambiente local:**
Primeiro você tem que instalar e configurar o ambiente para o uso do react-native, recomendo a documentação oficial do react: https://reactnative.dev/docs/environment-setup

Depois de instalado e configurado corretamente, precisa instalar duas bibliotecas para funcionar a navegação entre telas.
A primeira é: Abra o terminal na raiz do projeto e execute o seguinte código: npm install @react-navigation/native @react-navigation/stack
O segundo é: npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

Qualquer problema, consulte a documentação oficial do react-native







**Funcionamento do App:**

o App possui uma tela inicial que contém 4 botões que mostram as operações matemáticas para o desafio 
![telainicial](https://user-images.githubusercontent.com/60072896/106383144-f3bc7c80-63a2-11eb-80a3-bdf75b18d1f4.png)

Clicando em qualquer desafio, o usuário é levado para tela do desafio escolhido, por exemplo clicando no desafio Adição irá aparecer essa tela:

![teladicao](https://user-images.githubusercontent.com/60072896/106383222-79d8c300-63a3-11eb-8e8a-38f8f6bad1c1.png)

Em todos os desafios essa tela é a mesma, mudando apenas a operação matemática e a imagem da tabuada. Nessa tela temos os botões de: pular(gera uma nova pergunta), responder(faz a verificação se a resposta do usuário é a correta da operação), ver tabuada(abre uma imagem da tabuada da operação selecionada) e voltar(volta para tela inicial).

Clicando no botão de responder e a resposta for certa, irá aparecer a seguinte tela:

![telaacerto](https://user-images.githubusercontent.com/60072896/106383379-4ea2a380-63a4-11eb-9c3d-53edb6efbe2e.png)






Caso ao contrário:



![telaerro](https://user-images.githubusercontent.com/60072896/106383395-798cf780-63a4-11eb-88ed-6f1cfe4bab10.png)


Clicando no botão de ver tabuada, irá aparecer a tela da tabuada do desafio selecionado, nesse caso o que está selecionado é o desafio adição:

![telatabuada](https://user-images.githubusercontent.com/60072896/106383454-d25c9000-63a4-11eb-9af7-2a35d34f221a.png)


Para selecionar um novo desafio, basta clicar no botão voltar até chegar na tela inicial.
