import './App.css';

function App() {
  const name = "Diiego";
  return (
    <div className="App">
      <MostraeNombreComponente />
    </div>
  );
}

const mostraeNombre =  () => {
  return "Diiego"
}

const MostraeNombreComponente =  () => {
  return <h1>Diiego</h1>
}

export default App;
