export const gerarNumero1 = () => {
  return Math.floor(Math.random() * (20 + 1 - 1) + 1);
}

  export const gerarNumero2 = (max) =>{
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
  }
  
  
    
  
  
 
  
  export const validarResposta = ( numero1, numero2, respostaUsuario ) => {
    const respostaCerta = numero1 - numero2;
  
      if ( respostaUsuario == respostaCerta) {
        return true;
      } else {
        return false;
      }
  }