import './App.css';
import { Card } from './componentes/Card/Card';
import { Usuario } from './componentes/Usuario/Usuario';

function App() {

  return (
    <div>
      <Usuario nombre="Diiego" edad={19} nacionalidad="Colombia" />
      <Usuario nombre="Yaider" edad={23} nacionalidad="Peru" />
      <Card />
    </div>
  );
}

export default App;
