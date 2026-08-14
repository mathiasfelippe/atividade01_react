import Pessoa from "./components/Pessoa";

function App() {
  return (
    <div>
      <Pessoa
        nome="Mathias"
        idade={17}
        cidade="São Paulo"
        endereco="Rua Suiça, 67"
      />
    </div>
  );
}

export default App;