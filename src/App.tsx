import React, { useState } from 'react';
import './global.ts';
import { Container, Form, GlobalStyle } from './global';

function App() {
  const [altura, setAltura] = useState<number>()
  const [peso, setPeso] = useState<number>()
  const [resul, setResul] = useState<number>()
  const [bool, setBool] = useState(false)


  
  function handleImcResult(altura:any, peso:any){
    setResul(peso / (altura*altura))
    setBool(true)
    setAltura(0)
    setPeso(0)     
  }
  
  
  return (
    <Container>
      <h1>Calculadora de IMC</h1>
      <Form>

        <label>Altura</label>
        <input
         type="number"
         value={altura}
         onChange={(e)=>setAltura(e.target.valueAsNumber)}        
          />

        <label>Peso</label>
        <input 
          type="number"
          value={peso}
          onChange={e=>setPeso(e.target.valueAsNumber)}
        />
        <button onClick={e=>handleImcResult(altura, peso)}>Verificar</button>
        {bool && (
          <span>Seu imc é {resul?.toFixed(2)}</span>
        )}
        
      </Form>
    </Container>
    
  );
}

export default App;
