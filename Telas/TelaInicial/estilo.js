import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({

    tela: { 
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
      },
      titulo: {
        marginBottom: 20,
        paddingHorizontal: 10, 
        fontSize: 26,
        textTransform: "uppercase",
        fontWeight: "700",
        textAlign: "center",
        color:"#1f4f66"
      },
      fundo: {
        width: '100%', 
        height: '100%'
      },

      boxBotao: {
        minWidth: 80,
        marginBottom: 10,
      },
  

})

export default estilo;