export const gerarNumero1 = () => {
    return Math.floor(Math.random() * 10+1);
  }
  export const divisivelRandom = (min, max, multiple) => {
    const randomico = Math.round(Math.random() * (max - min) / multiple) * multiple + min;
    
    return randomico
    
    }

  export const validarResposta = ( numero1, numero2, respostaUsuario ) => {
    const respostaCerta = numero2 / numero1;
  
      if ( respostaUsuario == respostaCerta) {
        return true;
      } else {
        return false;
      }
  }