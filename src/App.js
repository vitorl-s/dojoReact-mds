import { useEffect, useState } from 'react';
import Button from './Components/button';

function App() {
  const [button2Color, setButton2Color] = useState('blue');
  const [tempoCronometro, setTempoCronometro] = useState(0);
  const [clickouNovamente, setClickouNovamente] = useState(false);

  function disparaCronometro() {
    if (tempoCronometro === 0) {
      incrementarContagem()
    } else {
      setClickouNovamente(!clickouNovamente);
    }
  }

  function incrementarContagem() {
    setTempoCronometro(tempoCronometro + 1);
  }

  function paraCronometro() {
    setClickouNovamente(true);
  }


  useEffect(() => {
    setTimeout(() => {
      if (!clickouNovamente) incrementarContagem();
      else paraCronometro();
    }, 1000)
  }, [tempoCronometro]);

  return (
    <div style={{ backgroundColor: 'gray', width: '100vw', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column' }}>
        <h1>{tempoCronometro}</h1>
        <div>
          <Button
            title="botao1"
            background={button2Color}
            mudaBotao={disparaCronometro}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
